/* ============================================================================
   CORESTEP ACADEMY — SINGLE-FILE CONTENT MANAGER (data.js)
   Led by Abhinandan Sir | corestepacademy.github.io
   ============================================================================

   ⚡ HOW TO ADD A NEW CHAPTER OR RESOURCE IN 15 SECONDS:
   1. Copy the template block below (between the dashed lines).
   2. Paste it at the TOP of the `STUDY_RESOURCES` array.
   3. Update the fields (delete any material inside `materials` you don't need).
   4. Commit & Push to GitHub — your site updates automatically!

   -------------------- COPY-PASTE TEMPLATE --------------------
   {
     id: "c10-maths-ch9",               // Unique ID (no spaces, e.g., c10-sci-ch2)
     classNum: 10,                      // Number: 6, 7, 8, 9, 10, 11, or 12
     medium: "English",                 // "English" OR "Hindi"
     subject: "Mathematics",            // Mathematics, Science, Social Science, Hindi, English, Sanskrit, Physics, Chemistry, Biology
     chapter: "Ch 9: Some Applications of Trigonometry",
     description: "Heights & distances step-by-step NCERT solutions + PYQs.",
     keywords: ["heights", "distances", "board exam", "ncert"],
     youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID", // Optional (leave "" if none)
     materials: [
       // Supported types: "Notes", "Mind Map", "Quiz", "Assignment", "Test Paper", "Sample Paper"
       { type: "Notes", label: "Chapter Notes (PDF)", url: "assets/pdfs/class-10/maths-ch9-notes.pdf" },
       { type: "Mind Map", label: "Formula Sheet", url: "assets/mindmaps/class-10-maths-ch9.png", format: "image" },
       { type: "Quiz", label: "Interactive Quiz", url: "assets/quizzes/class-10-maths-ch9-quiz.html", format: "html" },
       { type: "Test Paper", label: "Chapter Test (PDF)", url: "assets/pdfs/class-10/maths-ch9-test.pdf" }
     ]
   },
   -------------------------------------------------------------
*/

// 1. TOP NOTICE BOARD ANNOUNCEMENTS
const NOTICES = [
  {
    badge: "NEW",
    text: "Class 10 Hindi Medium Maths Board Sample Paper 2026 uploaded!",
    linkText: "Open Hub",
    linkUrl: "#resources",
  },
  {
    badge: "LIVE",
    text: "Class 10 Trigonometry Interactive MCQ Quiz & Formula Sheet are now live.",
    linkText: "Practice Now",
    linkUrl: "#resources",
  },
  {
    badge: "ALERT",
    text: "Join our Telegram channel for daily NCERT revision PDFs & exam tips.",
    linkText: "Join Telegram",
    linkUrl: "https://t.me/CoreStepAcademy",
  },
];

// Inline Sample SVG Mind Map (so the Zoomable Lightbox works immediately out of the box!)
// Replace with your real PNG/JPG paths like "assets/mindmaps/class-10-science-ch1.png"
const SAMPLE_MINDMAP_SVG =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="580" viewBox="0 0 960 580">
  <rect width="960" height="580" fill="#f8fafc" rx="16"/>
  <text x="480" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="800" fill="#312e81">CoreStep Academy — Sample NCERT Mind Map</text>
  <text x="480" y="74" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#64748b">Class 10 Science • Ch 1: Chemical Reactions &amp; Equations (by Abhinandan Sir)</text>
  <line x1="480" y1="290" x2="200" y2="165" stroke="#4338ca" stroke-width="3"/>
  <line x1="480" y1="290" x2="760" y2="165" stroke="#0d9488" stroke-width="3"/>
  <line x1="480" y1="290" x2="200" y2="430" stroke="#d97706" stroke-width="3"/>
  <line x1="480" y1="290" x2="760" y2="430" stroke="#dc2626" stroke-width="3"/>
  <rect x="345" y="245" width="270" height="90" rx="16" fill="#4338ca"/>
  <text x="480" y="284" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#ffffff">Chemical Reactions</text>
  <text x="480" y="308" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#e0e7ff">Reactants → Products</text>
  <rect x="65" y="110" width="260" height="105" rx="14" fill="#eef2ff" stroke="#4338ca" stroke-width="2"/>
  <text x="195" y="142" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#312e81">1. Combination</text>
  <text x="195" y="168" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155">A + B → AB</text>
  <text x="195" y="192" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">CaO + H₂O → Ca(OH)₂ + Heat</text>
  <rect x="635" y="110" width="260" height="105" rx="14" fill="#f0fdfa" stroke="#0d9488" stroke-width="2"/>
  <text x="765" y="142" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#115e59">2. Decomposition</text>
  <text x="765" y="168" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155">AB → A + B</text>
  <text x="765" y="192" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">Thermal • Electrolytic • Photolytic</text>
  <rect x="65" y="380" width="260" height="105" rx="14" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
  <text x="195" y="412" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#92400e">3. Displacement</text>
  <text x="195" y="438" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155">A + BC → AC + B</text>
  <text x="195" y="462" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">Fe + CuSO₄ → FeSO₄ + Cu</text>
  <rect x="635" y="380" width="260" height="105" rx="14" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <text x="765" y="412" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#991b1b">4. Redox Reactions</text>
  <text x="765" y="438" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155">Oxidation (+O / −H)</text>
  <text x="765" y="462" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">Reduction (−O / +H)</text>
</svg>`);

// 2. BUILT-IN SAMPLE INTERACTIVE QUIZZES (Works out of the box with zero extra files!)
const BUILTIN_QUIZZES = {
  "c10-maths-ch8-quiz": {
    title: "Class 10 Maths • Ch 8 Trigonometry Quick Quiz",
    questions: [
      {
        q: "If sin A = 3/5, what is the value of cos A (for acute angle A)?",
        options: ["4/5", "3/4", "5/4", "5/3"],
        answer: 0,
        explanation:
          "Using sin²A + cos²A = 1, cos A = √(1 − 9/25) = √(16/25) = 4/5.",
      },
      {
        q: "What is the exact value of tan 45° + cos 60° − sin 30°?",
        options: ["0", "1", "2", "1/2"],
        answer: 1,
        explanation:
          "tan 45° = 1, cos 60° = 1/2, sin 30° = 1/2. So 1 + 1/2 − 1/2 = 1.",
      },
      {
        q: "Which of the following is equal to sec²θ − tan²θ?",
        options: ["0", "−1", "1", "sin²θ"],
        answer: 2,
        explanation:
          "By the standard trigonometric identity, 1 + tan²θ = sec²θ, hence sec²θ − tan²θ = 1.",
      },
      {
        q: "If 2 cos 3θ = 1, then the value of θ is:",
        options: ["10°", "20°", "30°", "60°"],
        answer: 1,
        explanation: "cos 3θ = 1/2 = cos 60° ⇒ 3θ = 60° ⇒ θ = 20°.",
      },
    ],
  },
};

// 3. ALL STUDY RESOURCES (CLASSES 6–12, ENGLISH & HINDI MEDIUM)
const STUDY_RESOURCES = [
  /*
  {
    id: "c10-maths-ch8",
    classNum: 10,
    medium: "English",
    subject: "Mathematics",
    chapter: "Ch 8: Introduction to Trigonometry",
    description:
      "Complete NCERT concept bundle with trigonometric ratios, identities, solved PYQs, and quick practice quiz.",
    keywords: [
      "trigonometry",
      "sin",
      "cos",
      "identities",
      "board exam",
      "ncert",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    materials: [
      {
        type: "Notes",
        label: "Chapter Notes (PDF)",
        url: "assets/pdfs/class-10/maths-ch8-trigonometry-notes.pdf",
      },
      {
        type: "Quiz",
        label: "Interactive Quiz",
        url: "builtin:c10-maths-ch8-quiz",
        format: "builtin-quiz",
      },
      {
        type: "Assignment",
        label: "PYQ Worksheet",
        url: "assets/pdfs/class-10/maths-ch8-assignment.pdf",
      },
    ],
  },
  {
    id: "c10-sci-ch1",
    classNum: 10,
    medium: "English",
    subject: "Science",
    chapter: "Ch 1: Chemical Reactions and Equations",
    description:
      "High-retention 1-page visual mind map covering all reaction types, balancing steps, and redox examples.",
    keywords: ["chemistry", "redox", "balancing", "equations", "mindmap"],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    materials: [
      {
        type: "Mind Map",
        label: "Visual Mind Map",
        url: SAMPLE_MINDMAP_SVG,
        format: "image",
      },
      {
        type: "Notes",
        label: "NCERT Notes (PDF)",
        url: "assets/pdfs/class-10/science-ch1-notes.pdf",
      },
      {
        type: "Test Paper",
        label: "Unit Test (20 Marks)",
        url: "assets/pdfs/class-10/science-ch1-test.pdf",
      },
    ],
  },
  {
    id: "c10-sci-ch6-hi",
    classNum: 10,
    medium: "Hindi",
    subject: "Science",
    chapter: "अध्याय 6: जैव प्रक्रम (Life Processes)",
    description:
      "पोषण, श्वसन, वहन और उत्सर्जन के आसान हिंदी नोट्स, आरेख (Diagrams) और बोर्ड परीक्षा के महत्वपूर्ण प्रश्न।",
    keywords: [
      "जैव प्रक्रम",
      "विज्ञान",
      "biology",
      "life processes",
      "hindi medium",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    materials: [
      {
        type: "Notes",
        label: "हिंदी नोट्स (PDF)",
        url: "assets/pdfs/class-10/vigyan-ch6-jaiv-prakram.pdf",
      },
      {
        type: "Mind Map",
        label: "डायग्राम शीट",
        url: SAMPLE_MINDMAP_SVG,
        format: "image",
      },
    ],
  },
  {
    id: "c10-maths-sample-hi",
    classNum: 10,
    medium: "Hindi",
    subject: "Mathematics",
    chapter: "कक्षा 10 गणित — बोर्ड मॉडल सैंपल पेपर 2026",
    description:
      "नए NCERT पैटर्न पर आधारित पूर्ण हल सहित 80 अंकों का मॉडल प्रश्न पत्र (Standard & Basic)।",
    keywords: ["गणित", "सैंपल पेपर", "model paper", "board exam", "hindi"],
    youtubeUrl: "",
    materials: [
      {
        type: "Sample Paper",
        label: "सैंपल पेपर + हल (PDF)",
        url: "assets/pdfs/class-10/maths-hindi-sample-paper-2026.pdf",
      },
    ],
  },
  {
    id: "c12-phy-ch1",
    classNum: 12,
    medium: "English",
    subject: "Physics",
    chapter: "Ch 1: Electric Charges and Fields",
    description:
      "Coulomb's Law, Gauss's Theorem derivations, dipole torque formulas, and CBSE Board numerical sheet.",
    keywords: [
      "electrostatics",
      "gauss law",
      "dipole",
      "derivations",
      "class 12",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    materials: [
      {
        type: "Notes",
        label: "Derivations PDF",
        url: "assets/pdfs/class-12/physics-ch1-electric-charges-notes.pdf",
      },
      {
        type: "Mind Map",
        label: "Formula Sheet",
        url: SAMPLE_MINDMAP_SVG,
        format: "image",
      },
      {
        type: "Assignment",
        label: "Numerical Sheet",
        url: "assets/pdfs/class-12/physics-ch1-numericals.pdf",
      },
    ],
  },
  {
    id: "c11-chem-ch2",
    classNum: 11,
    medium: "English",
    subject: "Chemistry",
    chapter: "Ch 2: Structure of Atom",
    description:
      "Bohr's model, quantum numbers, Aufbau principle, and electronic configuration practice problems.",
    keywords: ["quantum numbers", "bohr", "atom", "orbitals", "class 11"],
    youtubeUrl: "",
    materials: [
      {
        type: "Notes",
        label: "Detailed Notes (PDF)",
        url: "assets/pdfs/class-11/chem-ch2-atom-notes.pdf",
      },
      {
        type: "Test Paper",
        label: "Chapter Test (PDF)",
        url: "assets/pdfs/class-11/chem-ch2-test.pdf",
      },
    ],
  },
  {
    id: "c9-sst-ch1",
    classNum: 9,
    medium: "English",
    subject: "Social Science",
    chapter: "History Ch 1: The French Revolution",
    description:
      "Chronological timeline of events (1789–1815), key terms, and 3-mark / 5-mark exam answer templates.",
    keywords: ["history", "french revolution", "timeline", "sst", "class 9"],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    materials: [
      {
        type: "Notes",
        label: "Timeline & Notes",
        url: "assets/pdfs/class-9/sst-french-revolution.pdf",
      },
      {
        type: "Quiz",
        label: "Practice Quiz",
        url: "assets/quizzes/class-9-sst-ch1-quiz.html",
        format: "html",
      },
    ],
  },
  {
    id: "c8-sci-ch1",
    classNum: 8,
    medium: "English",
    subject: "Science",
    chapter: "Ch 1: Crop Production and Management",
    description:
      "Kharif vs Rabi crops, modern irrigation methods, and complete NCERT back-exercise solutions.",
    keywords: ["agriculture", "kharif", "rabi", "irrigation", "class 8"],
    youtubeUrl: "",
    materials: [
      {
        type: "Notes",
        label: "NCERT Notes (PDF)",
        url: "assets/pdfs/class-8/science-ch1-crop-production-notes.pdf",
      },
      {
        type: "Assignment",
        label: "Practice Sheet",
        url: "assets/pdfs/class-8/science-ch1-worksheet.pdf",
      },
    ],
  },
  {
    id: "c7-maths-ch2",
    classNum: 7,
    medium: "English",
    subject: "Mathematics",
    chapter: "Ch 2: Fractions and Decimals",
    description:
      "Step-by-step multiplication & division of fractions and decimals with mental maths shortcuts.",
    keywords: ["fractions", "decimals", "ncert", "class 7"],
    youtubeUrl: "",
    materials: [
      {
        type: "Notes",
        label: "Concept Notes (PDF)",
        url: "assets/pdfs/class-7/maths-ch2-fractions.pdf",
      },
      {
        type: "Test Paper",
        label: "Weekend Test",
        url: "assets/pdfs/class-7/maths-ch2-test.pdf",
      },
    ],
  },
  {
    id: "c6-sanskrit-ch1-hi",
    classNum: 6,
    medium: "Hindi",
    subject: "Sanskrit",
    chapter: "पाठ 1: शब्दपरिचयः - I (अकारान्त पुल्लिंग)",
    description:
      "सरल हिंदी अनुवाद, शब्दार्थ और NCERT अभ्यास प्रश्नों का संपूर्ण समाधान।",
    keywords: ["संस्कृत", "शब्दपरिचय", "sanskrit", "class 6", "hindi medium"],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    materials: [
      {
        type: "Notes",
        label: "अनुवाद व प्रश्नोत्तर (PDF)",
        url: "assets/pdfs/class-6/sanskrit-ch1-notes.pdf",
      },
    ],
  },
  */
  {
    id: "c10-sst-geo-ch4",
    classNum: 10,
    medium: "English",
    subject: "Social Science",
    chapter: "Geography Ch 4: Agriculture",
    description:
      "Types of farming, cropping patterns (Rabi, Kharif, Zaid), major crops with climatic conditions, and technological/institutional reforms.",
    keywords: [
      "geography",
      "agriculture",
      "farming",
      "rabi",
      "kharif",
      "zaid",
      "crops",
      "sst",
      "class 10",
    ],
    youtubeUrl: "", // Paste your YouTube video URL here
    materials: [
      {
        type: "Notes",
        label: "Mind Map & Notes",
        url: "./assets/class_10/social_science/mindmaps/geo-ch4-agriculture-mindmap/index.html",
      },
      {
        type: "Quiz",
        label: "Practice Quiz",
        url: "assets/class_10/social_science/quizzes/geo-ch4-quiz.html",
        format: "html",
      },
    ],
  },
  {
    id: "c10-sst-geo-ch4-hindi",
    classNum: 10,
    medium: "Hindi",
    subject: "Social Science",
    chapter: "भूगोल पाठ 4: कृषि (Agriculture)",
    description:
      "कृषि के प्रकार, शस्य प्रारूप (रबी, खरीफ, जायद), प्रमुख फसलें और उनकी भौगोलिक दशाएं, तथा प्रौद्योगिकीय और संस्थागत सुधार।",
    keywords: [
      "भूगोल",
      "कृषि",
      "agriculture",
      "रबी",
      "खरीफ",
      "जायद",
      "फसलें",
      "sst",
      "class 10",
      "hindi medium",
    ],
    youtubeUrl: "", // Paste your Hindi medium YouTube video URL here
    materials: [
      {
        type: "Notes",
        label: "माइंड मैप और नोट्स",
        url: "./assets/class_10/social_science/mindmaps/geo-ch4-agriculture-mindmap-hindi/index.html",
      },
      {
        type: "Quiz",
        label: "प्रैक्टिस क्विज़",
        url: "assets/class_10/social_science/quizzes/geo-ch4-agriculture-quiz-hindi.html",
        format: "html",
      },
    ],
  },
  {
    id: "c10-sst-eco-ch3-en",
    classNum: 10,
    medium: "English",
    subject: "Social Science",
    chapter: "Economics Ch 3: Money and Credit",
    description:
      "Barter system, modern forms of money (currency & demand deposits), bank loan activities, credit situations (Salim & Swapna), terms of credit, formal vs informal sectors (RBI), Self-Help Groups (SHGs), and Grameen Bank.",
    keywords: [
      "economics",
      "money and credit",
      "barter system",
      "double coincidence of wants",
      "rbi",
      "demand deposits",
      "cheque",
      "collateral",
      "debt trap",
      "terms of credit",
      "formal informal credit",
      "shg",
      "self help groups",
      "grameen bank",
      "sst",
      "class 10",
    ],
    youtubeUrl: "", // Paste your YouTube video URL here
    materials: [
      {
        type: "Notes",
        label: "Mind Map & Notes",
        url: "./assets/class_10/social_science/notes/class_10_economics_ch3_money_and_credit.pdf",
      },
      {
        type: "Quiz",
        label: "Practice Quiz",
        url: "./assets/class_10/social_science/quizzes/eco-ch3/index.html",
        format: "html",
      },
    ],
  },
  {
    id: "c10-sst-eco-ch3-hi",
    classNum: 10,
    medium: "Hindi",
    subject: "Social Science",
    chapter: "अर्थशास्त्र अध्याय 3: मुद्रा और साख",
    description:
      "वस्तु-विनिमय प्रणाली, मुद्रा के आधुनिक रूप (करेंसी व माँग जमा), बैंकों की ऋण गतिविधियाँ, साख की स्थितियाँ (सलीम व स्वप्ना), ऋण की शर्तें, औपचारिक व अनौपचारिक क्षेत्रक (RBI), स्वयं सहायता समूह (SHGs) और ग्रामीण बैंक।",
    keywords: [
      "अर्थशास्त्र",
      "मुद्रा और साख",
      "वस्तु विनिमय",
      "माँग जमा",
      "चैक",
      "समर्थक ऋणाधार",
      "कर्ज जाल",
      "ऋण की शर्तें",
      "औपचारिक अनौपचारिक साख",
      "स्वयं सहायता समूह",
      "ग्रामीण बैंक",
      "rbi",
      "shg",
      "mudra aur saakh",
      "economics",
      "sst",
      "class 10",
    ],
    youtubeUrl: "", // Paste your YouTube video URL here
    materials: [
      {
        type: "Notes",
        label: "माइंड मैप और नोट्स (PDF)",
        url: "./assets/class_10/social_science/notes/class_10_economics_ch3_money_and_credit_hindi.pdf",
      },
      {
        type: "Quiz",
        label: "प्रैक्टिस क्विज़",
        url: "./assets/class_10/social_science/quizzes/eco-ch3/index.html",
        format: "html",
      },
    ],
  },
];
