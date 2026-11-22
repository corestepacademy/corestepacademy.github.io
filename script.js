/* ============================================================================
   CORESTEP ACADEMY — INTERACTIVE LOGIC (script.js)
   Pure Vanilla JS • Zero Dependencies • LocalStorage Persistence
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ---------------- STATE & STORAGE ----------------
  const STORAGE_KEYS = {
    theme: "corestep_theme",
    completed: "corestep_completed_ids",
    saved: "corestep_saved_ids",
  };

  const state = {
    search: "",
    classFilter: "all",
    mediumFilter: "all",
    subjectFilter: "all",
    typeFilter: "all",
    savedOnly: false,
    completedIds: new Set(
      JSON.parse(localStorage.getItem(STORAGE_KEYS.completed) || "[]"),
    ),
    savedIds: new Set(
      JSON.parse(localStorage.getItem(STORAGE_KEYS.saved) || "[]"),
    ),
    noticeIndex: 0,
  };

  // ---------------- DOM REFERENCES ----------------
  const els = {
    noticeBar: document.getElementById("noticeBar"),
    noticeBadge: document.getElementById("noticeBadge"),
    noticeText: document.getElementById("noticeText"),
    prevNoticeBtn: document.getElementById("prevNoticeBtn"),
    nextNoticeBtn: document.getElementById("nextNoticeBtn"),
    closeNoticeBtn: document.getElementById("closeNoticeBtn"),

    themeToggle: document.getElementById("themeToggle"),
    statTotalResources: document.getElementById("statTotalResources"),

    progressText: document.getElementById("progressText"),
    progressFill: document.getElementById("progressFill"),
    savedOnlyToggle: document.getElementById("savedOnlyToggle"),
    savedCountBadge: document.getElementById("savedCountBadge"),

    searchInput: document.getElementById("searchInput"),
    mediumButtons: document.querySelectorAll(".seg-btn"),
    classPills: document.querySelectorAll("#classFilterPills .pill"),
    subjectPillsWrap: document.getElementById("subjectFilterPills"),
    typeSelect: document.getElementById("typeFilterSelect"),

    resultsCountText: document.getElementById("resultsCountText"),
    resetFiltersBtn: document.getElementById("resetFiltersBtn"),
    emptyResetBtn: document.getElementById("emptyResetBtn"),
    resourceGrid: document.getElementById("resourceGrid"),
    emptyState: document.getElementById("emptyState"),

    // Modals
    imageModal: document.getElementById("imageModal"),
    imageModalTitle: document.getElementById("imageModalTitle"),
    lightboxImg: document.getElementById("lightboxImg"),
    zoomInBtn: document.getElementById("zoomInBtn"),
    zoomOutBtn: document.getElementById("zoomOutBtn"),
    zoomResetBtn: document.getElementById("zoomResetBtn"),
    zoomLevelText: document.getElementById("zoomLevelText"),
    downloadImageBtn: document.getElementById("downloadImageBtn"),

    videoModal: document.getElementById("videoModal"),
    videoModalTitle: document.getElementById("videoModalTitle"),
    youtubeIframe: document.getElementById("youtubeIframe"),

    quizModal: document.getElementById("quizModal"),
    quizModalTitle: document.getElementById("quizModalTitle"),
    quizBody: document.getElementById("quizBody"),

    // Doubt Form
    doubtForm: document.getElementById("doubtForm"),
    submitDoubtBtn: document.getElementById("submitDoubtBtn"),
    telegramFallbackBtn: document.getElementById("telegramFallbackBtn"),
    formStatus: document.getElementById("formStatus"),

    // Pomodoro
    pomoToggleBtn: document.getElementById("pomoToggleBtn"),
    pomoFabLabel: document.getElementById("pomoFabLabel"),
    pomoPanel: document.getElementById("pomoPanel"),
    pomoCloseBtn: document.getElementById("pomoCloseBtn"),
    pomoModes: document.querySelectorAll(".pomo-mode"),
    pomoDisplay: document.getElementById("pomoDisplay"),
    pomoStartPause: document.getElementById("pomoStartPause"),
    pomoReset: document.getElementById("pomoReset"),

    toast: document.getElementById("toast"),
    yearNow: document.getElementById("yearNow"),
  };

  if (els.yearNow) els.yearNow.textContent = new Date().getFullYear();
  if (els.statTotalResources)
    els.statTotalResources.textContent = `${STUDY_RESOURCES.length}+`;

  // ---------------- TOAST HELPER ----------------
  let toastTimer;
  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2600);
  }

  // ---------------- THEME TOGGLE ----------------
  els.themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEYS.theme, next);
  });

  // ---------------- TOP NOTICE BOARD ----------------
  function renderNotice() {
    if (!NOTICES || NOTICES.length === 0) {
      els.noticeBar.classList.add("hidden");
      return;
    }
    const item = NOTICES[state.noticeIndex];
    els.noticeBadge.textContent = item.badge || "UPDATE";
    const linkHtml = item.linkUrl
      ? ` <a href="${item.linkUrl}" ${item.linkUrl.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${item.linkText || "View"}</a>`
      : "";
    els.noticeText.innerHTML = `${item.text}${linkHtml}`;
  }

  let noticeInterval = setInterval(() => {
    if (NOTICES.length > 1) {
      state.noticeIndex = (state.noticeIndex + 1) % NOTICES.length;
      renderNotice();
    }
  }, 6000);

  els.prevNoticeBtn.addEventListener("click", () => {
    state.noticeIndex =
      (state.noticeIndex - 1 + NOTICES.length) % NOTICES.length;
    renderNotice();
  });
  els.nextNoticeBtn.addEventListener("click", () => {
    state.noticeIndex = (state.noticeIndex + 1) % NOTICES.length;
    renderNotice();
  });
  els.closeNoticeBtn.addEventListener("click", () => {
    clearInterval(noticeInterval);
    els.noticeBar.classList.add("hidden");
  });
  renderNotice();

  // ---------------- DYNAMIC SUBJECT PILLS ----------------
  const ALL_SUBJECTS = [
    "All Subjects",
    "Mathematics",
    "Science",
    "Social Science",
    "Hindi",
    "English",
    "Sanskrit",
    "Physics",
    "Chemistry",
    "Biology",
  ];

  function buildSubjectPills() {
    els.subjectPillsWrap.innerHTML = ALL_SUBJECTS.map((subj, idx) => {
      const val = idx === 0 ? "all" : subj;
      return `<button class="pill ${idx === 0 ? "active" : ""}" data-subject="${val}">${subj}</button>`;
    }).join("");

    els.subjectPillsWrap.querySelectorAll(".pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        els.subjectPillsWrap
          .querySelectorAll(".pill")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.subjectFilter = btn.dataset.subject;
        renderResources();
      });
    });
  }
  buildSubjectPills();

  // ---------------- FILTER LISTENERS ----------------
  els.searchInput.addEventListener("input", (e) => {
    state.search = e.target.value.trim().toLowerCase();
    renderResources();
  });

  els.mediumButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.mediumButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.mediumFilter = btn.dataset.medium;
      renderResources();
    });
  });

  els.classPills.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.classPills.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.classFilter = btn.dataset.class;
      renderResources();
    });
  });

  els.typeSelect.addEventListener("change", (e) => {
    state.typeFilter = e.target.value;
    renderResources();
  });

  els.savedOnlyToggle.addEventListener("click", () => {
    state.savedOnly = !state.savedOnly;
    els.savedOnlyToggle.setAttribute("aria-pressed", String(state.savedOnly));
    renderResources();
  });

  function resetAllFilters() {
    state.search = "";
    state.classFilter = "all";
    state.mediumFilter = "all";
    state.subjectFilter = "all";
    state.typeFilter = "all";
    state.savedOnly = false;

    els.searchInput.value = "";
    els.typeSelect.value = "all";
    els.savedOnlyToggle.setAttribute("aria-pressed", "false");

    els.mediumButtons.forEach((b) =>
      b.classList.toggle("active", b.dataset.medium === "all"),
    );
    els.classPills.forEach((b) =>
      b.classList.toggle("active", b.dataset.class === "all"),
    );
    els.subjectPillsWrap
      .querySelectorAll(".pill")
      .forEach((b) =>
        b.classList.toggle("active", b.dataset.subject === "all"),
      );
    renderResources();
  }

  els.resetFiltersBtn.addEventListener("click", resetAllFilters);
  els.emptyResetBtn.addEventListener("click", resetAllFilters);

  // ---------------- FILTERING & RENDERING CARDS ----------------
  function getFilteredResources() {
    return STUDY_RESOURCES.filter((item) => {
      if (state.savedOnly && !state.savedIds.has(item.id)) return false;
      if (
        state.classFilter !== "all" &&
        String(item.classNum) !== state.classFilter
      )
        return false;
      if (state.mediumFilter !== "all" && item.medium !== state.mediumFilter)
        return false;
      if (state.subjectFilter !== "all" && item.subject !== state.subjectFilter)
        return false;

      if (state.typeFilter !== "all") {
        if (state.typeFilter === "Video Lecture") {
          if (!item.youtubeUrl) return false;
        } else {
          const hasMat = item.materials.some(
            (m) => m.type === state.typeFilter,
          );
          if (!hasMat) return false;
        }
      }

      if (state.search) {
        const haystack = [
          `class ${item.classNum}`,
          item.subject,
          item.medium,
          item.chapter,
          item.description,
          ...(item.keywords || []),
          ...item.materials.map((m) => `${m.type} ${m.label}`),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(state.search)) return false;
      }

      return true;
    });
  }

  function updateProgress(filteredList) {
    const total = filteredList.length;
    const done = filteredList.filter((item) =>
      state.completedIds.has(item.id),
    ).length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);

    els.progressText.textContent = `${done} of ${total} Chapters Completed — ${pct}%`;
    els.progressFill.style.width = `${pct}%`;
    els.savedCountBadge.textContent = state.savedIds.size;
  }

  function buildMaterialButtons(item) {
    let html = "";

    if (item.youtubeUrl) {
      html += `
        <button class="mat-btn mat-btn-video" data-action="video" data-url="${item.youtubeUrl}" data-title="${escapeAttr(item.chapter)}">
          ▶ Watch Lecture
        </button>`;
    }

    item.materials.forEach((mat) => {
      if (mat.format === "image" || mat.type === "Mind Map") {
        html += `
          <button class="mat-btn mat-btn-mindmap" data-action="image" data-url="${escapeAttr(mat.url)}" data-title="${escapeAttr(item.chapter + " — " + mat.label)}">
            🗺 ${mat.label}
          </button>`;
      } else if (
        mat.format === "builtin-quiz" ||
        mat.url.startsWith("builtin:")
      ) {
        const quizKey = mat.url.replace("builtin:", "");
        html += `
          <button class="mat-btn mat-btn-quiz" data-action="quiz" data-quiz-id="${quizKey}">
            ⚡ ${mat.label}
          </button>`;
      } else if (mat.format === "html" || mat.url.endsWith(".html")) {
        html += `
          <a class="mat-btn mat-btn-quiz" href="${mat.url}" target="_blank" rel="noopener">
            ⚡ ${mat.label} ↗
          </a>`;
      } else {
        html += `
          <a class="mat-btn" href="${mat.url}" target="_blank" rel="noopener">
            📄 ${mat.label}
          </a>`;
      }
    });

    return html;
  }

  function escapeAttr(str) {
    return String(str).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function renderResources() {
    const list = getFilteredResources();
    updateProgress(list);

    const isFiltered =
      state.search ||
      state.classFilter !== "all" ||
      state.mediumFilter !== "all" ||
      state.subjectFilter !== "all" ||
      state.typeFilter !== "all" ||
      state.savedOnly;

    els.resetFiltersBtn.classList.toggle("hidden", !isFiltered);
    els.resultsCountText.textContent = `Showing ${list.length} of ${STUDY_RESOURCES.length} study bundles`;

    if (list.length === 0) {
      els.resourceGrid.innerHTML = "";
      els.emptyState.classList.remove("hidden");
      return;
    }

    els.emptyState.classList.add("hidden");

    els.resourceGrid.innerHTML = list
      .map((item) => {
        const isDone = state.completedIds.has(item.id);
        const isSaved = state.savedIds.has(item.id);
        const mediumBadgeClass =
          item.medium === "Hindi" ? "badge-medium-hi" : "badge-medium-en";
        const mediumLabel =
          item.medium === "Hindi" ? "हिंदी माध्यम" : "English";

        return `
          <article class="card ${isDone ? "is-completed" : ""}" id="card-${item.id}">
            <div class="card-top">
              <div class="badges-row">
                <span class="badge badge-class">Class ${item.classNum}</span>
                <span class="badge badge-subject">${item.subject}</span>
                <span class="badge ${mediumBadgeClass}">${mediumLabel}</span>
              </div>
              <button
                class="bookmark-btn ${isSaved ? "saved" : ""}"
                data-action="bookmark"
                data-id="${item.id}"
                aria-label="Save to revision list"
                title="${isSaved ? "Remove from Saved" : "Save for Revision"}"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              </button>
            </div>

            <h3 class="card-title">${item.chapter}</h3>
            <p class="card-desc">${item.description}</p>

            <div class="card-materials">
              ${buildMaterialButtons(item)}
            </div>

            <div class="card-footer">
              <label class="complete-label">
                <input type="checkbox" data-action="complete" data-id="${item.id}" ${isDone ? "checked" : ""} />
                <span>${isDone ? "Completed" : "Mark Completed"}</span>
              </label>

              <div class="share-actions">
                <button class="share-btn share-btn-wa" data-action="whatsapp" data-id="${item.id}" title="Share on WhatsApp">
                  WhatsApp
                </button>
                <button class="share-btn" data-action="copy" data-id="${item.id}" title="Copy direct link">
                  Copy Link
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  // ---------------- EVENT DELEGATION ON RESOURCE GRID ----------------
  els.resourceGrid.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === "bookmark") {
      if (state.savedIds.has(id)) {
        state.savedIds.delete(id);
        showToast("Removed from My Saved Items");
      } else {
        state.savedIds.add(id);
        showToast("Saved to your Revision List ★");
      }
      localStorage.setItem(
        STORAGE_KEYS.saved,
        JSON.stringify([...state.savedIds]),
      );
      renderResources();
    } else if (action === "whatsapp") {
      const item = STUDY_RESOURCES.find((r) => r.id === id);
      if (!item) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}#res=${item.id}`;
      const msg = `📚 *Class ${item.classNum} ${item.subject}* — ${item.chapter}\nFree NCERT Notes & Study Material by Abhinandan Sir (CoreStep Academy):\n${shareUrl}`;
      window.open(
        `https://wa.me/?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener",
      );
    } else if (action === "copy") {
      const shareUrl = `${window.location.origin}${window.location.pathname}#res=${id}`;
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => showToast("Direct link copied! Share with friends."))
        .catch(() => showToast("Could not copy link."));
    } else if (action === "image") {
      openImageModal(target.dataset.url, target.dataset.title);
    } else if (action === "video") {
      openVideoModal(target.dataset.url, target.dataset.title);
    } else if (action === "quiz") {
      openQuizModal(target.dataset.quizId);
    }
  });

  els.resourceGrid.addEventListener("change", (e) => {
    const input = e.target;
    if (input.dataset.action === "complete") {
      const id = input.dataset.id;
      if (input.checked) {
        state.completedIds.add(id);
        showToast("Great job! Chapter marked completed ✓");
      } else {
        state.completedIds.delete(id);
      }
      localStorage.setItem(
        STORAGE_KEYS.completed,
        JSON.stringify([...state.completedIds]),
      );
      renderResources();
    }
  });

  // ---------------- MODAL HELPERS ----------------
  function closeModal(modalEl) {
    modalEl.classList.add("hidden");
    if (modalEl === els.videoModal) {
      els.youtubeIframe.src = ""; // Stop video playback immediately
    }
  }

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById(btn.dataset.closeModal);
      if (modal) closeModal(modal);
    });
  });

  [els.imageModal, els.videoModal, els.quizModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      [els.imageModal, els.videoModal, els.quizModal].forEach((m) => {
        if (!m.classList.contains("hidden")) closeModal(m);
      });
    }
  });

  // ---------------- 1. ZOOMABLE IMAGE LIGHTBOX ----------------
  let currentZoom = 1;
  function updateZoom() {
    els.lightboxImg.style.transform = `scale(${currentZoom})`;
    els.zoomLevelText.textContent = `${Math.round(currentZoom * 100)}%`;
  }

  function openImageModal(url, title) {
    currentZoom = 1;
    els.imageModalTitle.textContent = title || "Mind Map Viewer";
    els.lightboxImg.src = url;
    els.downloadImageBtn.href = url;
    els.downloadImageBtn.download =
      (title || "corestep-mindmap").toLowerCase().replace(/\s+/g, "-") + ".png";
    updateZoom();
    els.imageModal.classList.remove("hidden");
  }

  els.zoomInBtn.addEventListener("click", () => {
    currentZoom = Math.min(3, +(currentZoom + 0.25).toFixed(2));
    updateZoom();
  });
  els.zoomOutBtn.addEventListener("click", () => {
    currentZoom = Math.max(0.5, +(currentZoom - 0.25).toFixed(2));
    updateZoom();
  });
  els.zoomResetBtn.addEventListener("click", () => {
    currentZoom = 1;
    updateZoom();
  });

  // ---------------- 2. YOUTUBE EMBED MODAL ----------------
  function extractYouTubeId(url) {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/,
    );
    return match ? match[1] : null;
  }

  function openVideoModal(url, title) {
    const videoId = extractYouTubeId(url);
    if (!videoId) {
      window.open(url, "_blank", "noopener");
      return;
    }
    els.videoModalTitle.textContent = title || "Video Lecture";
    els.youtubeIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    els.videoModal.classList.remove("hidden");
  }

  // ---------------- 3. BUILT-IN INTERACTIVE QUIZ MODAL ----------------
  let activeQuiz = null;
  let qIndex = 0;
  let score = 0;
  let answered = false;

  function openQuizModal(quizId) {
    activeQuiz = BUILTIN_QUIZZES[quizId];
    if (!activeQuiz) {
      showToast("Quiz data not found.");
      return;
    }
    qIndex = 0;
    score = 0;
    answered = false;
    els.quizModalTitle.textContent = activeQuiz.title;
    renderQuizQuestion();
    els.quizModal.classList.remove("hidden");
  }

  function renderQuizQuestion() {
    const qObj = activeQuiz.questions[qIndex];
    answered = false;

    els.quizBody.innerHTML = `
      <div class="quiz-meta">
        <span>Question ${qIndex + 1} of ${activeQuiz.questions.length}</span>
        <span>Score: ${score}</span>
      </div>
      <p class="quiz-q">${qObj.q}</p>
      <div class="quiz-options">
        ${qObj.options
          .map(
            (opt, idx) =>
              `<button class="quiz-opt" data-opt="${idx}">${String.fromCharCode(65 + idx)}. ${opt}</button>`,
          )
          .join("")}
      </div>
      <div class="quiz-explain hidden" id="quizExplain"></div>
      <div class="quiz-footer">
        <button class="btn btn-primary hidden" id="quizNextBtn">
          ${qIndex + 1 === activeQuiz.questions.length ? "Finish Quiz" : "Next Question →"}
        </button>
      </div>
    `;

    const optBtns = els.quizBody.querySelectorAll(".quiz-opt");
    const explainEl = document.getElementById("quizExplain");
    const nextBtn = document.getElementById("quizNextBtn");

    optBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = Number(btn.dataset.opt);
        optBtns.forEach((b) => (b.disabled = true));

        if (chosen === qObj.answer) {
          score++;
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
          optBtns[qObj.answer].classList.add("correct");
        }

        explainEl.innerHTML = `<strong>Explanation:</strong> ${qObj.explanation}`;
        explainEl.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
      });
    });

    nextBtn.addEventListener("click", () => {
      qIndex++;
      if (qIndex < activeQuiz.questions.length) {
        renderQuizQuestion();
      } else {
        renderQuizResult();
      }
    });
  }

  function renderQuizResult() {
    const total = activeQuiz.questions.length;
    const pct = Math.round((score / total) * 100);
    els.quizBody.innerHTML = `
      <div class="quiz-score-box">
        <div class="quiz-score-num">${score} / ${total}</div>
        <h3>${pct >= 75 ? "Excellent Work! 🎉" : "Good Attempt! Keep Revising 💪"}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 18px;">You scored ${pct}% in this NCERT practice quiz.</p>
        <div style="display:flex; justify-content:center; gap:10px;">
          <button class="btn btn-outline" id="retakeQuizBtn">Retake Quiz</button>
          <button class="btn btn-primary" id="doneQuizBtn">Done</button>
        </div>
      </div>
    `;
    document.getElementById("retakeQuizBtn").addEventListener("click", () => {
      qIndex = 0;
      score = 0;
      renderQuizQuestion();
    });
    document
      .getElementById("doneQuizBtn")
      .addEventListener("click", () => closeModal(els.quizModal));
  }

  // ---------------- DOUBT & REQUEST FORM (WEB3FORMS + TELEGRAM FALLBACK) ----------------
  els.doubtForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const key = document.getElementById("web3formsKey").value.trim();

    if (!key || key === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      els.formStatus.className = "form-status error";
      els.formStatus.textContent =
        "Form key not configured yet — click 'Send via Telegram' to submit instantly!";
      return;
    }

    els.submitDoubtBtn.disabled = true;
    els.submitDoubtBtn.textContent = "Sending...";
    els.formStatus.textContent = "";

    try {
      const formData = new FormData(els.doubtForm);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        els.formStatus.className = "form-status success";
        els.formStatus.textContent =
          "✓ Request sent to Abhinandan Sir! Check Telegram for updates.";
        els.doubtForm.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      els.formStatus.className = "form-status error";
      els.formStatus.textContent =
        "Could not send right now. Please use 'Send via Telegram'.";
    } finally {
      els.submitDoubtBtn.disabled = false;
      els.submitDoubtBtn.textContent = "Send Request";
    }
  });

  els.telegramFallbackBtn.addEventListener("click", () => {
    const name =
      document.getElementById("studentName").value.trim() || "Student";
    const cls = document.getElementById("studentClass").value || "Class N/A";
    const med = document.getElementById("studentMedium").value;
    const subj = document.getElementById("studentSubject").value;
    const msg =
      document.getElementById("studentMessage").value.trim() ||
      "I have a chapter request / doubt.";

    const fullText = `CoreStep Doubt/Request\nName: ${name}\nClass: ${cls} (${med})\nSubject: ${subj}\nMessage: ${msg}`;
    navigator.clipboard.writeText(fullText).catch(() => {});
    showToast("Message copied! Opening CoreStep Telegram...");
    window.open("https://t.me/CoreStepAcademy", "_blank", "noopener");
  });

  // ---------------- FLOATING POMODORO FOCUS TIMER ----------------
  let pomoSeconds = 25 * 60;
  let pomoDuration = 25 * 60;
  let pomoRunning = false;
  let pomoTimerId = null;

  function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  function playGentleChime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (_) {}
  }

  function updatePomoUI() {
    const formatted = formatTime(pomoSeconds);
    els.pomoDisplay.textContent = formatted;
    els.pomoFabLabel.textContent = pomoRunning ? formatted : "Focus";
    els.pomoStartPause.textContent = pomoRunning ? "Pause" : "Start";
  }

  els.pomoToggleBtn.addEventListener("click", () =>
    els.pomoPanel.classList.toggle("hidden"),
  );
  els.pomoCloseBtn.addEventListener("click", () =>
    els.pomoPanel.classList.add("hidden"),
  );

  els.pomoModes.forEach((btn) => {
    btn.addEventListener("click", () => {
      clearInterval(pomoTimerId);
      pomoRunning = false;
      els.pomoModes.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      pomoDuration = Number(btn.dataset.minutes) * 60;
      pomoSeconds = pomoDuration;
      updatePomoUI();
    });
  });

  els.pomoStartPause.addEventListener("click", () => {
    if (pomoRunning) {
      clearInterval(pomoTimerId);
      pomoRunning = false;
    } else {
      pomoRunning = true;
      pomoTimerId = setInterval(() => {
        pomoSeconds--;
        if (pomoSeconds <= 0) {
          clearInterval(pomoTimerId);
          pomoRunning = false;
          pomoSeconds = 0;
          playGentleChime();
          showToast("Focus session complete! Take a short break.");
        }
        updatePomoUI();
      }, 1000);
    }
    updatePomoUI();
  });

  els.pomoReset.addEventListener("click", () => {
    clearInterval(pomoTimerId);
    pomoRunning = false;
    pomoSeconds = pomoDuration;
    updatePomoUI();
  });

  // ---------------- DEEP-LINK HIGHLIGHT (#res=id) ----------------
  function checkDeepLink() {
    if (window.location.hash.startsWith("#res=")) {
      const id = window.location.hash.replace("#res=", "");
      const card = document.getElementById(`card-${id}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("highlight-flash");
        setTimeout(() => card.classList.remove("highlight-flash"), 2500);
      }
    }
  }

  // Initial Render
  renderResources();
  updatePomoUI();
  setTimeout(checkDeepLink, 200);
});
