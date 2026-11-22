const svg = d3.select("#mindmap");
const gRoot = svg.append("g");
const gLinks = gRoot.append("g").attr("class", "links");
const gNodes = gRoot.append("g").attr("class", "nodes");

const duration = 350;
let nodeIdCounter = 0;
let root = null;

// Detect initial language from URL (?lang=hi or ?lang=en), default to Hindi
const urlParams = new URLSearchParams(window.location.search);
let currentLang = urlParams.get("lang") === "en" ? "en" : "hi";

const zoom = d3
  .zoom()
  .scaleExtent([0.2, 2.5])
  .on("zoom", (event) => gRoot.attr("transform", event.transform));

svg.call(zoom);

const treeLayout = d3.tree().nodeSize([46, 350]);
const linkGenerator = d3
  .linkHorizontal()
  .x((d) => d.y)
  .y((d) => d.x);

function collapseDeep(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapseDeep);
    d.children = null;
  }
}

function expandDeep(d) {
  if (d._children) {
    d.children = d._children;
    d._children = null;
  }
  if (d.children) {
    d.children.forEach(expandDeep);
  }
}

function updateUI() {
  const t = uiText[currentLang];
  document.documentElement.lang = currentLang;
  document.getElementById("pageTitle").textContent = t.title;
  document.getElementById("pageSubtitle").textContent = t.subtitle;
  document.getElementById("searchInput").placeholder = t.searchPlaceholder;
  document.getElementById("btnExpandAll").textContent = t.expandAll;
  document.getElementById("btnCollapseAll").textContent = t.collapseAll;
  document.getElementById("btnReset").textContent = t.reset;
  document.getElementById("btnLang").textContent = t.switchLang;
  document.getElementById("btnTheme").textContent =
    document.body.classList.contains("light") ? t.darkMode : t.lightMode;
}

function loadLanguage(lang) {
  currentLang = lang;
  updateUI();

  // Clear existing SVG content and search input
  gNodes.selectAll("*").remove();
  gLinks.selectAll("*").remove();
  nodeIdCounter = 0;
  document.getElementById("searchInput").value = "";
  document.getElementById("searchCount").textContent = "";

  // Deep clone data so collapse/search state stays clean across switches
  const clonedData = JSON.parse(JSON.stringify(mindMapDataByLang[lang]));
  root = d3.hierarchy(clonedData);
  root.x0 = 0;
  root.y0 = 0;

  if (root.children) {
    root.children.forEach(collapseDeep);
  }

  update(root);
  setTimeout(fitToScreen, 120);
}

function update(source) {
  const treeData = treeLayout(root);
  const nodes = treeData.descendants();
  const links = treeData.links();

  // ---------------- NODES ----------------
  const node = gNodes
    .selectAll("g.node")
    .data(nodes, (d) => d.id || (d.id = ++nodeIdCounter));

  const nodeEnter = node
    .enter()
    .append("g")
    .attr("class", (d) => `node depth-${d.depth}`)
    .attr("transform", () => `translate(${source.y0},${source.x0})`)
    .style("opacity", 0)
    .on("click", (event, d) => {
      event.stopPropagation();
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else if (d._children) {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    });

  nodeEnter
    .append("rect")
    .attr("class", "node-box")
    .attr("height", 32)
    .attr("y", -16);

  nodeEnter
    .append("text")
    .attr("class", "node-label")
    .attr("x", 12)
    .text((d) => d.data.name);

  nodeEnter.append("text").attr("class", "toggle-badge");

  const nodeUpdate = nodeEnter.merge(node);

  nodeUpdate.each(function (d) {
    const group = d3.select(this);
    const hasHidden = Boolean(d._children);
    const hasVisible = Boolean(d.children);
    const hasKids = hasHidden || hasVisible;

    const textWidth = group
      .select(".node-label")
      .node()
      .getComputedTextLength();
    const boxWidth = textWidth + (hasKids ? 40 : 24);

    group.select(".node-box").attr("width", boxWidth).attr("x", 0);

    group
      .select(".toggle-badge")
      .attr("x", boxWidth - 14)
      .text(hasHidden ? `+${d._children.length}` : hasVisible ? "−" : "");

    group.classed("match", Boolean(d.data._match));
  });

  nodeUpdate
    .transition()
    .duration(duration)
    .attr("transform", (d) => `translate(${d.y},${d.x})`)
    .style("opacity", 1);

  node
    .exit()
    .transition()
    .duration(duration)
    .attr("transform", () => `translate(${source.y},${source.x})`)
    .style("opacity", 0)
    .remove();

  // ---------------- LINKS ----------------
  const link = gLinks.selectAll("path.link").data(links, (d) => d.target.id);

  const linkEnter = link
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", () => {
      const o = { x: source.x0, y: source.y0 };
      return linkGenerator({ source: o, target: o });
    });

  linkEnter
    .merge(link)
    .transition()
    .duration(duration)
    .attr("d", linkGenerator);

  link
    .exit()
    .transition()
    .duration(duration)
    .attr("d", () => {
      const o = { x: source.x, y: source.y };
      return linkGenerator({ source: o, target: o });
    })
    .remove();

  nodes.forEach((d) => {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

function fitToScreen() {
  const container = document.getElementById("mindmap-container");
  const width = container.clientWidth;
  const height = container.clientHeight;
  const bounds = gRoot.node().getBBox();

  if (!bounds.width || !bounds.height) return;

  const padding = 48;
  const scale = Math.min(
    1.15,
    Math.max(
      0.25,
      Math.min(
        (width - padding * 2) / bounds.width,
        (height - padding * 2) / bounds.height,
      ),
    ),
  );

  const tx = (width - bounds.width * scale) / 2 - bounds.x * scale;
  const ty = (height - bounds.height * scale) / 2 - bounds.y * scale;

  svg
    .transition()
    .duration(450)
    .call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
}

// ---------------- CONTROLS ----------------
document.getElementById("btnLang").addEventListener("click", () => {
  const nextLang = currentLang === "hi" ? "en" : "hi";
  const newUrl = `${window.location.pathname}?lang=${nextLang}`;
  window.history.replaceState({}, "", newUrl);
  loadLanguage(nextLang);
});

document.getElementById("btnExpandAll").addEventListener("click", () => {
  expandDeep(root);
  update(root);
  setTimeout(fitToScreen, duration + 30);
});

document.getElementById("btnCollapseAll").addEventListener("click", () => {
  if (root.children) root.children.forEach(collapseDeep);
  update(root);
  setTimeout(fitToScreen, duration + 30);
});

document.getElementById("btnReset").addEventListener("click", fitToScreen);

document.getElementById("btnTheme").addEventListener("click", () => {
  document.body.classList.toggle("light");
  updateUI();
});

// Live search in both Hindi and English
const searchInput = document.getElementById("searchInput");
const searchCount = document.getElementById("searchCount");

function searchTree(node, query) {
  const isMatch =
    query.length > 0 && node.data.name.toLowerCase().includes(query);
  node.data._match = isMatch;

  const allChildren = node.children || node._children || [];
  let childMatched = false;

  allChildren.forEach((child) => {
    if (searchTree(child, query)) childMatched = true;
  });

  if (childMatched && node._children) {
    node.children = node._children;
    node._children = null;
  }

  return isMatch || childMatched;
}

function countMatches(node) {
  let count = node.data._match ? 1 : 0;
  const allChildren = node.children || node._children || [];
  allChildren.forEach((c) => {
    count += countMatches(c);
  });
  return count;
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim().toLowerCase();
  searchTree(root, query);
  update(root);

  if (!query) {
    searchCount.textContent = "";
    return;
  }
  const total = countMatches(root);
  searchCount.textContent = `${total} ${uiText[currentLang].foundSuffix}`;
  if (total > 0) setTimeout(fitToScreen, duration + 30);
});

// Wait for Noto Sans Devanagari font to load before calculating box widths
(document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
  loadLanguage(currentLang);
});

window.addEventListener("resize", fitToScreen);
