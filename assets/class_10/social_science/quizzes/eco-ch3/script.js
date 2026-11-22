const STORAGE_KEY = "csa_c10_eco_ch3_scores";

const UI_TEXT = {
  en: {
    subtitle: "Class 10 Economics • Chapter 3",
    title: "Money and Credit — Complete Chapter Quiz",
    desc: "Master every NCERT concept, case study, and board-level Assertion-Reason question across 4 focused quizzes.",
    completedLabel: "Completed",
    totalLabel: "Best Total",
    backBtn: "← All 4 Quizzes",
    startBtn: "Start Quiz →",
    retakeSmall: "Retake →",
    questionsWord: "Questions",
    notAttempted: "Not attempted",
    bestScore: "Best:",
    explanation: "NCERT Explanation",
    nextBtn: "Next Question →",
    finishBtn: "View Result →",
    scorePrefix: "Score:",
    retryBtn: "Retake Quiz",
    nextQuizBtn: "Next Quiz →",
    waBtn: "Share Score on WhatsApp",
    homeBtn: "Back to All 4 Quizzes",
    completedTag: "Completed",
    remarks: {
      high: "Board-Ready Mastery!",
      mid: "Good Progress — Almost There!",
      low: "Revise the Notes & Retry!",
    },
    subtext:
      "Review any missed concepts and complete all 4 quizzes for 100% chapter coverage.",
  },
  hi: {
    subtitle: "कक्षा 10 अर्थशास्त्र • अध्याय 3",
    title: "मुद्रा और साख — संपूर्ण अध्याय क्विज़",
    desc: "4 भागों में बँटे इस क्विज़ से NCERT के हर मुख्य बिंदु, उदाहरण और बोर्ड परीक्षा के कथन-कारण प्रश्नों का अभ्यास करें।",
    completedLabel: "पूर्ण क्विज़",
    totalLabel: "सर्वश्रेष्ठ स्कोर",
    backBtn: "← सभी 4 क्विज़",
    startBtn: "क्विज़ शुरू करें →",
    retakeSmall: "फिर से दें →",
    questionsWord: "प्रश्न",
    notAttempted: "अभी नहीं दिया",
    bestScore: "सर्वश्रेष्ठ:",
    explanation: "NCERT व्याख्या",
    nextBtn: "अगला प्रश्न →",
    finishBtn: "परिणाम देखें →",
    scorePrefix: "स्कोर:",
    retryBtn: "फिर से प्रयास करें",
    nextQuizBtn: "अगला क्विज़ →",
    waBtn: "WhatsApp पर स्कोर शेयर करें",
    homeBtn: "सभी 4 क्विज़ पर लौटें",
    completedTag: "पूर्ण हुआ",
    remarks: {
      high: "शानदार! बोर्ड परीक्षा के लिए तैयार!",
      mid: "अच्छा प्रयास — थोड़ी और प्रैक्टिस करें!",
      low: "नोट्स दोहराएँ और फिर से प्रयास करें!",
    },
    subtext: "अध्याय की 100% तैयारी के लिए सभी 4 क्विज़ पूरे करें।",
  },
};

const QUIZZES = [
  {
    id: 0,
    badge: { en: "Quiz 1 • Sections 1 & 2", hi: "क्विज़ 1 • भाग 1 और 2" },
    title: {
      en: "Barter System & Modern Forms of Money",
      hi: "वस्तु-विनिमय और मुद्रा के आधुनिक रूप",
    },
    desc: {
      en: "Double coincidence of wants, RBI currency authority, legal tender, demand deposits, and cheques.",
      hi: "आवश्यकताओं का दोहरा संयोग, RBI द्वारा नोट जारी करना, माँग जमा और चैक।",
    },
    questions: [
      {
        q: {
          en: "What is the essential feature of the Barter System where both parties must agree to buy and sell each other's commodities?",
          hi: "वस्तु-विनिमय प्रणाली की वह अनिवार्य विशेषता क्या है जिसमें दोनों पक्ष एक-दूसरे की वस्तुएँ खरीदने और बेचने पर सहमत होते हैं?",
        },
        options: {
          en: [
            "Medium of Exchange",
            "Double Coincidence of Wants",
            "Demand Deposit",
            "Collateral Security",
          ],
          hi: [
            "विनिमय का माध्यम",
            "आवश्यकताओं का दोहरा संयोग",
            "माँग जमा",
            "समर्थक ऋणाधार",
          ],
        },
        answer: 1,
        exp: {
          en: "In a barter system, what a person desires to sell must be exactly what the other wishes to buy. This is called Double Coincidence of Wants.",
          hi: "वस्तु-विनिमय प्रणाली में एक व्यक्ति जो बेचना चाहता है, वही दूसरा खरीदने का इच्छुक होना चाहिए। इसे आवश्यकताओं का दोहरा संयोग कहते हैं।",
        },
      },
      {
        q: {
          en: "Why is money called a 'Medium of Exchange'?",
          hi: "मुद्रा को 'विनिमय का माध्यम' क्यों कहा जाता है?",
        },
        options: {
          en: [
            "Because it is made of gold and silver",
            "Because it acts as an intermediate in the exchange process",
            "Because banks pay interest on it",
            "Because it can only be used in cities",
          ],
          hi: [
            "क्योंकि यह सोने और चाँदी से बनी होती है",
            "क्योंकि यह विनिमय प्रक्रिया में मध्यवर्ती (मध्यस्थ) का काम करती है",
            "क्योंकि बैंक इस पर ब्याज देते हैं",
            "क्योंकि इसका उपयोग केवल शहरों में होता है",
          ],
        },
        answer: 1,
        exp: {
          en: "Money acts as an intermediate step in transactions, eliminating the need for double coincidence of wants.",
          hi: "मुद्रा लेन-देन में मध्यस्थता का कार्य करती है और आवश्यकताओं के दोहरे संयोग की ज़रूरत खत्म करती है।",
        },
      },
      {
        q: {
          en: "In India, who issues currency notes on behalf of the Central Government?",
          hi: "भारत में केंद्रीय सरकार की तरफ से करेंसी नोट कौन जारी करता है?",
        },
        options: {
          en: [
            "State Bank of India (SBI)",
            "Ministry of Finance",
            "Reserve Bank of India (RBI)",
            "NITI Aayog",
          ],
          hi: [
            "भारतीय स्टेट बैंक (SBI)",
            "वित्त मंत्रालय",
            "भारतीय रिज़र्व बैंक (RBI)",
            "नीति आयोग",
          ],
        },
        answer: 2,
        exp: {
          en: "Under Indian law, only the Reserve Bank of India (RBI) is authorized to issue currency notes on behalf of the Central Government.",
          hi: "भारतीय कानून के अनुसार केवल भारतीय रिज़र्व बैंक (RBI) को केंद्र सरकार की ओर से करेंसी नोट जारी करने का अधिकार है।",
        },
      },
      {
        q: {
          en: "Why is modern currency accepted as a medium of exchange even though it has no intrinsic value of its own?",
          hi: "आधुनिक करेंसी का अपना कोई उपयोग न होने पर भी इसे विनिमय के माध्यम के रूप में क्यों स्वीकार किया जाता है?",
        },
        options: {
          en: [
            "It is authorized by the government of the country",
            "It is backed by wheat and cattle",
            "People print it whenever needed",
            "It is made of expensive metals",
          ],
          hi: [
            "इसे देश की सरकार द्वारा प्राधिकृत (अधिकृत) किया जाता है",
            "इसके पीछे गेहूँ और पशु रखे जाते हैं",
            "लोग ज़रूरत पड़ने पर इसे स्वयं छाप सकते हैं",
            "यह महँगी धातुओं से बनी होती है",
          ],
        },
        answer: 0,
        exp: {
          en: "Modern currency is accepted because it is authorized by the government, and Indian law legalizes the rupee as a medium of payment that cannot be refused.",
          hi: "इसे सरकार द्वारा प्राधिकृत किया जाता है और कानून रुपये को ऐसी वैधता देता है जिसे भारत में भुगतान के लिए मना नहीं किया जा सकता।",
        },
      },
      {
        q: {
          en: "Why are deposits in bank accounts called 'Demand Deposits'?",
          hi: "बैंक खातों में जमा धन को 'माँग जमा' (Demand Deposits) क्यों कहा जाता है?",
        },
        options: {
          en: [
            "Banks demand people to deposit cash",
            "They can be withdrawn on demand at any time",
            "They are only for buying gold",
            "They cannot be withdrawn for 5 years",
          ],
          hi: [
            "बैंक लोगों से पैसे जमा करने की माँग करते हैं",
            "इन्हें ज़रूरत पड़ने पर माँग के ज़रिए कभी भी निकाला जा सकता है",
            "ये केवल सोना खरीदने के लिए होते हैं",
            "इन्हें 5 साल तक नहीं निकाला जा सकता",
          ],
        },
        answer: 1,
        exp: {
          en: "Since deposits in bank accounts can be withdrawn on demand whenever the depositor needs cash, they are called demand deposits.",
          hi: "बैंक खाते में जमा राशि को जमाकर्ता अपनी ज़रूरत के अनुसार माँग कर कभी भी निकाल सकता है, इसलिए इसे माँग जमा कहते हैं।",
        },
      },
      {
        q: {
          en: "A paper instructing the bank to pay a specific amount from a person's account to another person is called a:",
          hi: "वह कागज़ जो बैंक को किसी व्यक्ति के खाते से दूसरे व्यक्ति को एक निश्चित राशि भुगतान करने का आदेश देता है, क्या कहलाता है?",
        },
        options: {
          en: ["Collateral", "Promissory Note", "Cheque", "Demand Draft"],
          hi: ["समर्थक ऋणाधार", "वचन पत्र", "चैक", "डिमांड ड्राफ्ट"],
        },
        answer: 2,
        exp: {
          en: "A cheque allows payments to be settled directly from one bank account to another without using physical cash.",
          hi: "चैक के माध्यम से बिना नकद का उपयोग किए सीधे एक बैंक खाते से दूसरे खाते में भुगतान संभव होता है।",
        },
      },
      {
        q: {
          en: "In the modern economy, what constitutes 'Money'?",
          hi: "आधुनिक अर्थव्यवस्था में 'मुद्रा' के अंतर्गत क्या शामिल है?",
        },
        options: {
          en: [
            "Only paper notes",
            "Only coins and gold",
            "Currency + Demand Deposits with banks",
            "Land and buildings",
          ],
          hi: [
            "केवल कागज़ के नोट",
            "केवल सिक्के और सोना",
            "करेंसी + बैंकों में माँग जमा",
            "भूमि और इमारतें",
          ],
        },
        answer: 2,
        exp: {
          en: "Because cheques against demand deposits are widely accepted for payments just like cash, Currency + Demand Deposits together constitute money.",
          hi: "चैक की सुविधा के कारण माँग जमा भी नकद की तरह भुगतान में काम आता है, इसलिए करेंसी और माँग जमा दोनों मिलकर मुद्रा कहलाते हैं।",
        },
      },
      {
        q: {
          en: "In the NCERT example of barter, who had to find a wheat farmer willing to buy shoes?",
          hi: "NCERT के वस्तु-विनिमय उदाहरण में किसे ऐसा गेहूँ किसान खोजना पड़ता था जो जूते खरीदने का इच्छुक हो?",
        },
        options: {
          en: [
            "A leather supplier",
            "A shoe manufacturer",
            "A cloth weaver",
            "A moneylender",
          ],
          hi: ["चमड़ा आपूर्तिकर्ता", "जूता निर्माता", "कपड़ा बुनकर", "साहूकार"],
        },
        answer: 1,
        exp: {
          en: "The shoe manufacturer wanted wheat in exchange for shoes, demonstrating how difficult barter is without money.",
          hi: "जूता निर्माता जूते बेचकर गेहूँ खरीदना चाहता था, जो दिखाता है कि बिना मुद्रा के विनिमय कितना कठिन है।",
        },
      },
    ],
  },
  {
    id: 1,
    badge: { en: "Quiz 2 • Sections 3 & 4", hi: "क्विज़ 2 • भाग 3 और 4" },
    title: {
      en: "Loan Activities of Banks & Credit Situations",
      hi: "बैंकों की ऋण गतिविधियाँ और साख की स्थितियाँ",
    },
    desc: {
      en: "The 15% cash reserve rule, how banks earn income, Salim's positive credit, Swapna's debt trap.",
      hi: "15% नकद कोष नियम, बैंक की आय, सलीम की कहानी, स्वप्ना की कहानी और कर्ज-जाल।",
    },
    questions: [
      {
        q: {
          en: "Approximately what percentage of their deposits do banks in India hold as cash with themselves?",
          hi: "भारत में बैंक अपनी कुल जमा राशि का लगभग कितना प्रतिशत नकद के रूप में अपने पास रखते हैं?",
        },
        options: {
          en: ["5%", "15%", "50%", "85%"],
          hi: ["5%", "15%", "50%", "85%"],
        },
        answer: 1,
        exp: {
          en: "Banks in India hold about 15% of their deposits as cash to pay depositors who might come to withdraw money on any given day.",
          hi: "भारत में बैंक लगभग 15% राशि नकद रखते हैं ताकि किसी भी दिन पैसा निकालने आने वाले जमाकर्ताओं को भुगतान किया जा सके।",
        },
      },
      {
        q: {
          en: "What do banks do with the major portion of the deposits they receive?",
          hi: "बैंक जनता से प्राप्त जमा राशि के एक बड़े भाग का क्या करते हैं?",
        },
        options: {
          en: [
            "Keep it locked in vaults forever",
            "Use it to extend loans for economic activities",
            "Donate it to charities",
            "Convert it into gold coins",
          ],
          hi: [
            "इसे हमेशा तिजोरी में बंद रखते हैं",
            "विभिन्न आर्थिक गतिविधियों के लिए ऋण देने में उपयोग करते हैं",
            "दान में दे देते हैं",
            "इसे सोने के सिक्कों में बदल देते हैं",
          ],
        },
        answer: 1,
        exp: {
          en: "Banks mediate between depositors (surplus funds) and borrowers (those needing funds) by using the major portion of deposits to give loans.",
          hi: "बैंक जमाकर्ताओं और कर्जदारों के बीच मध्यस्थ बनकर जमा के बड़े हिस्से का उपयोग ऋण देने के लिए करते हैं।",
        },
      },
      {
        q: {
          en: "What is the main source of income for banks?",
          hi: "बैंकों की आय का प्रमुख स्रोत क्या है?",
        },
        options: {
          en: [
            "Printing new currency notes",
            "Government grants",
            "The difference between interest charged from borrowers and interest paid to depositors",
            "Fees charged for opening an account",
          ],
          hi: [
            "नए करेंसी नोट छापना",
            "सरकारी अनुदान",
            "कर्जदारों से लिए गए ब्याज और जमाकर्ताओं को दिए गए ब्याज के बीच का अंतर",
            "खाता खोलने का शुल्क",
          ],
        },
        answer: 2,
        exp: {
          en: "Banks charge a higher interest rate on loans than what they offer on deposits. This difference is their main source of income.",
          hi: "बैंक जमा पर कम ब्याज देते हैं और ऋण पर अधिक ब्याज लेते हैं। इन दोनों के बीच का अंतर ही बैंकों की मुख्य आय है।",
        },
      },
      {
        q: {
          en: "In Salim's story, for how many pairs of shoes did he receive an order from a large trader?",
          hi: "सलीम की कहानी में उसे एक बड़े व्यापारी से कितने जोड़ी जूते बनाने का ऑर्डर मिला था?",
        },
        options: {
          en: ["1,000 pairs", "2,000 pairs", "3,000 pairs", "5,000 pairs"],
          hi: ["1,000 जोड़ी", "2,000 जोड़ी", "3,000 जोड़ी", "5,000 जोड़ी"],
        },
        answer: 2,
        exp: {
          en: "Salim got a festival order for 3,000 pairs of shoes and took a cash advance for 1,000 pairs along with leather on credit.",
          hi: "सलीम को 3,000 जोड़ी जूतों का ऑर्डर मिला था, जिसके लिए उसने 1,000 जोड़ी का नकद एडवांस और उधार चमड़ा लिया।",
        },
      },
      {
        q: {
          en: "How did credit play a positive role in Salim's case?",
          hi: "सलीम के मामले में साख (ऋण) ने सकारात्मक भूमिका कैसे निभाई?",
        },
        options: {
          en: [
            "He did not have to repay the trader",
            "It helped him meet ongoing production expenses, deliver on time, and increase his earnings",
            "It allowed him to sell his workshop",
            "It forced him to take a second loan next year",
          ],
          hi: [
            "उसे व्यापारी का पैसा वापस नहीं करना पड़ा",
            "इससे उत्पादन के खर्च पूरे हुए, समय पर ऑर्डर पूरा हुआ और उसकी आय बढ़ी",
            "उसने अपना कारखाना बेच दिया",
            "उसे अगले साल फिर से बड़ा कर्ज लेना पड़ा",
          ],
        },
        answer: 1,
        exp: {
          en: "Credit met Salim's working capital needs, helping him finish production on time, earn a good profit, and repay all loans.",
          hi: "साख से सलीम के कार्यशील खर्च पूरे हुए, जिससे उसने समय पर उत्पादन कर अच्छा लाभ कमाया और कर्ज चुका दिया।",
        },
      },
      {
        q: {
          en: "In Swapna's story, what crop did she grow on her 3 acres of land?",
          hi: "स्वप्ना की कहानी में वह अपनी 3 एकड़ ज़मीन पर कौन-सी फसल उगाती थी?",
        },
        options: {
          en: ["Wheat", "Rice", "Groundnut", "Cotton"],
          hi: ["गेहूँ", "धान", "मूँगफली", "कपास"],
        },
        answer: 2,
        exp: {
          en: "Swapna grew groundnut on 3 acres of land, but pests destroyed her crop despite spraying expensive pesticides.",
          hi: "स्वप्ना 3 एकड़ ज़मीन पर मूँगफली उगाती थी, लेकिन महँगे कीटनाशकों के बावजूद कीड़ों से फसल बर्बाद हो गई।",
        },
      },
      {
        q: {
          en: "A situation where credit pushes the borrower into a condition from which recovery is very painful is called:",
          hi: "ऐसी स्थिति जहाँ ऋण कर्जदार को ऐसी परिस्थिति में धकेल देता है जिससे बाहर निकलना बहुत कष्टदायक होता है, क्या कहलाती है?",
        },
        options: {
          en: ["Barter Trap", "Debt Trap", "Cash Reserve", "Credit Boom"],
          hi: ["विनिमय जाल", "कर्ज-जाल (Debt Trap)", "नकद कोष", "साख वृद्धि"],
        },
        answer: 1,
        exp: {
          en: "Swapna fell into a Debt Trap and had to sell a part of her land to pay off her accumulating debt.",
          hi: "स्वप्ना कर्ज-जाल में फँस गई थी और कर्ज चुकाने के लिए उसे अपनी ज़मीन का एक हिस्सा बेचना पड़ा।",
        },
      },
      {
        q: {
          en: "Whether credit will be useful or harmful depends primarily on:",
          hi: "साख (ऋण) लाभदायक होगी या हानिकारक, यह मुख्य रूप से किस पर निर्भर करता है?",
        },
        options: {
          en: [
            "The color of currency notes",
            "The risks in the situation and whether there is support in case of loss",
            "Whether the borrower lives in a village or city",
            "Only the age of the borrower",
          ],
          hi: [
            "करेंसी नोटों के रंग पर",
            "परिस्थिति के जोखिमों और हानि होने पर मिलने वाले सहयोग पर",
            "कर्जदार गाँव में रहता है या शहर में",
            "केवल कर्जदार की उम्र पर",
          ],
        },
        answer: 1,
        exp: {
          en: "NCERT highlights that the usefulness of credit depends on the risks involved and whether there is some support in case of loss.",
          hi: "NCERT के अनुसार साख की उपयोगिता परिस्थिति के जोखिम और नुकसान होने पर मिलने वाले सहयोग पर निर्भर करती है।",
        },
      },
    ],
  },
  {
    id: 2,
    badge: { en: "Quiz 3 • Sections 5 & 6", hi: "क्विज़ 3 • भाग 5 और 6" },
    title: {
      en: "Terms of Credit & Formal vs Informal Sectors",
      hi: "ऋण की शर्तें और औपचारिक बनाम अनौपचारिक क्षेत्रक",
    },
    desc: {
      en: "Collateral, Sonpur village cases (Shyamal, Arun, Rama), Krishak Cooperative, RBI supervision & credit gap.",
      hi: "समर्थक ऋणाधार, सोनपुर के उदाहरण (श्यामल, अरुण, रमा), कृषक सहकारी समिति और RBI की निगरानी।",
    },
    questions: [
      {
        q: {
          en: "Which of the following is NOT one of the four 'Terms of Credit'?",
          hi: "निम्नलिखित में से कौन 'ऋण की शर्तों' (Terms of Credit) का हिस्सा नहीं है?",
        },
        options: {
          en: [
            "Interest Rate",
            "Collateral",
            "Documentation Requirement",
            "Borrower's Educational Degree",
          ],
          hi: [
            "ब्याज दर",
            "समर्थक ऋणाधार",
            "आवश्यक कागज़ात",
            "कर्जदार की शैक्षणिक डिग्री",
          ],
        },
        answer: 3,
        exp: {
          en: "The four Terms of Credit are: Interest Rate, Collateral, Documentation Requirement, and Mode of Repayment.",
          hi: "ऋण की चार शर्तें हैं: ब्याज दर, समर्थक ऋणाधार, आवश्यक कागज़ात और भुगतान के तरीके।",
        },
      },
      {
        q: {
          en: "What is 'Collateral' (समर्थक ऋणाधार)?",
          hi: "'समर्थक ऋणाधार' (Collateral) किसे कहते हैं?",
        },
        options: {
          en: [
            "A government subsidy given to farmers",
            "An asset owned by the borrower used as a guarantee to a lender until the loan is repaid",
            "The monthly interest paid on a bank deposit",
            "A type of informal moneylender",
          ],
          hi: [
            "किसानों को दी जाने वाली सरकारी सब्सिडी",
            "कर्जदार की वह संपत्ति जिसका उपयोग ऋण चुकता होने तक उधारदाता के पास गारंटी के रूप में किया जाता है",
            "बैंक जमा पर मिलने वाला मासिक ब्याज",
            "एक प्रकार का अनौपचारिक साहूकार",
          ],
        },
        answer: 1,
        exp: {
          en: "Collateral includes land, building, vehicle, livestock, or bank deposits. If the borrower defaults, the lender has the right to sell it.",
          hi: "भूमि, इमारत, गाड़ी, पशु या बैंक पूँजी समर्थक ऋणाधार के उदाहरण हैं। कर्ज न चुकाने पर उधारदाता इसे बेच सकता है।",
        },
      },
      {
        q: {
          en: "In Sonpur village, at what interest rate did Arun (a medium farmer with 7 acres) get a bank loan?",
          hi: "सोनपुर गाँव में मध्यम किसान अरुण (7 एकड़ ज़मीन) को बैंक से किस ब्याज दर पर ऋण मिला?",
        },
        options: {
          en: [
            "5% per month (60% p.a.)",
            "3% per month (36% p.a.)",
            "8.5% per annum",
            "20% per annum",
          ],
          hi: [
            "5% प्रतिमाह (60% वार्षिक)",
            "3% प्रतिमाह (36% वार्षिक)",
            "8.5% वार्षिक",
            "20% वार्षिक",
          ],
        },
        answer: 2,
        exp: {
          en: "Arun got a formal bank loan at a low interest rate of 8.5% per annum with flexible repayment anytime in 3 years.",
          hi: "अरुण को बैंक से मात्र 8.5% वार्षिक की कम ब्याज दर और 3 साल में कभी भी चुकाने की सुविधा के साथ ऋण मिला।",
        },
      },
      {
        q: {
          en: "How did the agricultural trader exploit Shyamal (1.5 acres) even while charging 3% per month?",
          hi: "कृषि व्यापारी ने 3% प्रतिमाह ब्याज लेने के साथ-साथ श्यामल (1.5 एकड़) का और किस तरह शोषण किया?",
        },
        options: {
          en: [
            "By forcing him to promise to sell his crop to the trader at low prices after harvest",
            "By confiscating his tractor",
            "By asking him to open a bank account",
            "By charging him 8.5% per annum",
          ],
          hi: [
            "उससे वादा करवाकर कि फसल कटने के बाद वह अपनी फसल कम दाम पर व्यापारी को ही बेचेगा",
            "उसका ट्रैक्टर जब्त करके",
            "उसे बैंक खाता खुलवाने को कहकर",
            "उससे 8.5% वार्षिक ब्याज लेकर",
          ],
        },
        answer: 0,
        exp: {
          en: "The trader supplies farm inputs on credit but forces Shyamal to sell his harvest to him at low prices, earning profit both ways.",
          hi: "व्यापारी फसल कम कीमत पर खरीदकर और बाद में ऊँचे दाम पर बेचकर दोहरा मुनाफा कमाता है।",
        },
      },
      {
        q: {
          en: "How does the Krishak Cooperative (2,300 farmer members) near Sonpur arrange funds for cheap loans?",
          hi: "सोनपुर के पास स्थित कृषक सहकारी समिति (2,300 किसान सदस्य) सस्ते ऋण के लिए पूँजी कैसे जुटाती है?",
        },
        options: {
          en: [
            "By borrowing from village moneylenders",
            "By accepting member deposits and using them as collateral to get a large bank loan",
            "By collecting taxes from the village",
            "By printing its own cheques",
          ],
          hi: [
            "गाँव के साहूकारों से उधार लेकर",
            "सदस्यों से जमा प्राप्त कर और उस पूँजी को समर्थक ऋणाधार मानकर बैंक से बड़ा ऋण लेकर",
            "गाँव से कर (टैक्स) वसूलकर",
            "अपने स्वयं के चैक छापकर",
          ],
        },
        answer: 1,
        exp: {
          en: "Krishak Cooperative pools member deposits and uses them as collateral to obtain a large bank loan, which is then lent cheaply to members.",
          hi: "समिति सदस्यों की जमा पूँजी को समर्थक ऋणाधार बनाकर बैंक से बड़ा कर्ज लेती है और सदस्यों को सस्ते ऋण देती है।",
        },
      },
      {
        q: {
          en: "Which of the following belongs to the Formal Sector of credit?",
          hi: "निम्नलिखित में से कौन औपचारिक क्षेत्रक (Formal Sector) के ऋण का स्रोत है?",
        },
        options: {
          en: [
            "Moneylenders and Traders",
            "Friends and Relatives",
            "Banks and Cooperatives",
            "Employers and Landowners",
          ],
          hi: [
            "साहूकार और व्यापारी",
            "दोस्त और रिश्तेदार",
            "बैंक और सहकारी समितियाँ",
            "मालिक और भूस्वामी",
          ],
        },
        answer: 2,
        exp: {
          en: "Banks and Cooperatives form the formal sector and are supervised by the RBI.",
          hi: "बैंक और सहकारी समितियाँ औपचारिक क्षेत्रक में आती हैं, जिनकी निगरानी RBI करता है।",
        },
      },
      {
        q: {
          en: "Which of the following is a key supervisory function of the RBI over formal banks?",
          hi: "औपचारिक बैंकों पर RBI की निगरानी का इनमें से कौन-सा एक मुख्य कार्य है?",
        },
        options: {
          en: [
            "Monitoring that banks maintain the 15% cash balance and also lend to small borrowers",
            "Fixing the price of crops in villages",
            "Supervising village moneylenders",
            "Giving free loans without repayment",
          ],
          hi: [
            "यह जाँचना कि बैंक 15% नकद कोष रखें और छोटे किसानों व कर्जदारों को भी ऋण दें",
            "गाँवों में फसलों के दाम तय करना",
            "गाँव के साहूकारों की निगरानी करना",
            "बिना वापसी के मुफ्त कर्ज देना",
          ],
        },
        answer: 0,
        exp: {
          en: "RBI checks the 15% cash reserve, ensures inclusive lending to small cultivators/industries, and collects periodic lending reports from banks.",
          hi: "RBI 15% नकद कोष की जाँच करता है, छोटे कर्जदारों को ऋण सुनिश्चित करता है और बैंकों से समय-समय पर रिपोर्ट लेता है।",
        },
      },
      {
        q: {
          en: "What is the single biggest reason that prevents poor households (~85% informal credit) from getting bank loans?",
          hi: "गरीब परिवारों (लगभग 85% अनौपचारिक ऋण) को बैंक से ऋण लेने से रोकने वाला सबसे बड़ा कारण क्या है?",
        },
        options: {
          en: [
            "Poor people prefer paying high interest",
            "Absence of collateral and required documents",
            "Banks only lend to city residents",
            "RBI bans loans to poor families",
          ],
          hi: [
            "गरीब लोग अधिक ब्याज देना पसंद करते हैं",
            "समर्थक ऋणाधार (Collateral) और आवश्यक कागज़ात की कमी",
            "बैंक केवल शहर के लोगों को कर्ज देते हैं",
            "RBI गरीब परिवारों को कर्ज देने पर रोक लगाता है",
          ],
        },
        answer: 1,
        exp: {
          en: "Absence of collateral is one of the major reasons preventing the poor from accessing cheap bank credit.",
          hi: "समर्थक ऋणाधार (गारंटी की संपत्ति) का न होना गरीबों को बैंक ऋण से दूर रखने वाला सबसे बड़ा कारण है।",
        },
      },
    ],
  },
  {
    id: 3,
    badge: {
      en: "Quiz 4 • Sections 7 & 8 + Board HOTS",
      hi: "क्विज़ 4 • भाग 7, 8 और बोर्ड HOTS",
    },
    title: {
      en: "Self-Help Groups (SHGs), Grameen Bank & Assertion-Reason",
      hi: "स्वयं सहायता समूह (SHGs), ग्रामीण बैंक और कथन-कारण",
    },
    desc: {
      en: "SHG rules, collective repayment, Grameen Bank of Bangladesh, and CBSE Assertion-Reason questions.",
      hi: "SHG की कार्यप्रणाली, सामूहिक ज़िम्मेदारी, बांग्लादेश का ग्रामीण बैंक और CBSE कथन-कारण प्रश्न।",
    },
    questions: [
      {
        q: {
          en: "A typical Self-Help Group (SHG) has how many members from the same neighborhood?",
          hi: "एक सामान्य स्वयं सहायता समूह (SHG) में एक ही पड़ोस के कितने सदस्य होते हैं?",
        },
        options: {
          en: [
            "5–10 members",
            "15–20 members",
            "50–100 members",
            "2,300 members",
          ],
          hi: ["5–10 सदस्य", "15–20 सदस्य", "50–100 सदस्य", "2,300 सदस्य"],
        },
        answer: 1,
        exp: {
          en: "A typical SHG consists of 15–20 members (mostly rural women) who meet and save ₹25 to ₹100 or more regularly.",
          hi: "एक सामान्य SHG में 15–20 सदस्य (मुख्यतः ग्रामीण महिलाएँ) होते हैं जो नियमित मिलकर ₹25 से ₹100 या अधिक बचत करते हैं।",
        },
      },
      {
        q: {
          en: "Why are banks willing to lend to poor women organized in SHGs even when they have NO collateral?",
          hi: "बैंक स्वयं सहायता समूहों (SHGs) की गरीब महिलाओं को बिना समर्थक ऋणाधार (Collateral) के भी ऋण देने को क्यों तैयार हो जाते हैं?",
        },
        options: {
          en: [
            "Because the group as a whole is responsible for repayment and follows up seriously on any default",
            "Because SHGs pay 60% annual interest",
            "Because the government pays back every SHG loan",
            "Because SHGs do not take bank loans",
          ],
          hi: [
            "क्योंकि ऋण लौटाने की ज़िम्मेदारी पूरे समूह की होती है और चूक होने पर अन्य सदस्य इसे गंभीरता से लेते हैं",
            "क्योंकि SHG 60% वार्षिक ब्याज देते हैं",
            "क्योंकि सरकार हर SHG का कर्ज खुद चुकाती है",
            "क्योंकि SHG बैंक से कर्ज नहीं लेते",
          ],
        },
        answer: 0,
        exp: {
          en: "Collective group responsibility ensures timely repayment, giving banks confidence to lend without individual collateral.",
          hi: "सामूहिक ज़िम्मेदारी के कारण ऋण वापसी सुनिश्चित होती है, इसलिए बैंक बिना समर्थक ऋणाधार के भी कर्ज दे देते हैं।",
        },
      },
      {
        q: {
          en: "In an SHG, who makes the important decisions regarding loan purpose, amount, interest rate, and repayment schedule?",
          hi: "स्वयं सहायता समूह (SHG) में कर्ज के लक्ष्य, रकम, ब्याज दर और वापसी अवधि से जुड़े महत्वपूर्ण निर्णय कौन लेता है?",
        },
        options: {
          en: [
            "The Bank Manager",
            "The Village Sarpanch",
            "The Group Members themselves",
            "The RBI Governor",
          ],
          hi: [
            "बैंक मैनेजर",
            "गाँव का सरपंच",
            "समूह के सदस्य स्वयं",
            "RBI गवर्नर",
          ],
        },
        answer: 2,
        exp: {
          en: "All key decisions regarding savings and loan activities are taken democratically by the SHG members themselves.",
          hi: "बचत और ऋण गतिविधियों से संबंधित सभी महत्वपूर्ण निर्णय समूह के सदस्य आपस में मिलकर स्वयं लेते हैं।",
        },
      },
      {
        q: {
          en: "Apart from financial self-reliance, how do regular SHG meetings help rural women socially?",
          hi: "आर्थिक स्वावलंबन के अलावा, SHG की नियमित बैठकें ग्रामीण महिलाओं की सामाजिक रूप से कैसे मदद करती हैं?",
        },
        options: {
          en: [
            "By providing a platform to discuss and act on health, nutrition, and domestic violence",
            "By conducting school board exams",
            "By issuing currency notes",
            "By replacing village panchayats",
          ],
          hi: [
            "स्वास्थ्य, पोषण और घरेलू हिंसा जैसे सामाजिक विषयों पर चर्चा और कार्रवाई का मंच देकर",
            "स्कूल की बोर्ड परीक्षाएँ आयोजित करके",
            "करेंसी नोट जारी करके",
            "ग्राम पंचायतों को हटाकर",
          ],
        },
        answer: 0,
        exp: {
          en: "Regular SHG meetings act as a social platform to discuss and tackle health, nutrition, and domestic violence issues.",
          hi: "नियमित बैठकें महिलाओं को स्वास्थ्य, पोषण और घरेलू हिंसा जैसे सामाजिक मुद्दों पर चर्चा करने का मंच देती हैं।",
        },
      },
      {
        q: {
          en: "Who founded the Grameen Bank of Bangladesh in the 1970s and won the 2006 Nobel Peace Prize?",
          hi: "1970 के दशक में बांग्लादेश के ग्रामीण बैंक की शुरुआत किसने की थी, जिन्हें 2006 का नोबेल शांति पुरस्कार मिला?",
        },
        options: {
          en: [
            "Prof. Amartya Sen",
            "Prof. Muhammad Yunus",
            "Dr. Manmohan Singh",
            "Raghuram Rajan",
          ],
          hi: [
            "प्रो. अमर्त्य सेन",
            "प्रो. मुहम्मद यूनुस",
            "डॉ. मनमोहन सिंह",
            "रघुराम राजन",
          ],
        },
        answer: 1,
        exp: {
          en: "Professor Muhammad Yunus started Grameen Bank in the 1970s; by 2018 it had over 9 million members across ~81,600 villages.",
          hi: "प्रो. मुहम्मद यूनुस ने 1970 के दशक में इसकी शुरुआत की थी; 2018 तक इसके 81,600 गाँवों में 90 लाख से अधिक सदस्य थे।",
        },
      },
      {
        q: {
          en: "Assertion (A): Poor households in India still depend heavily on informal sources of credit.\nReason (R): Informal lenders charge very low interest rates compared to banks.",
          hi: "कथन (A): भारत में गरीब परिवार आज भी अनौपचारिक ऋण स्रोतों पर अत्यधिक निर्भर हैं।\nकारण (R): अनौपचारिक ऋणदाता बैंकों की तुलना में बहुत कम ब्याज दर लेते हैं।",
        },
        options: {
          en: [
            "Both A and R are true, and R is the correct explanation of A",
            "Both A and R are true, but R is NOT the correct explanation of A",
            "A is true, but R is false",
            "A is false, but R is true",
          ],
          hi: [
            "A और R दोनों सत्य हैं, और R, A की सही व्याख्या है",
            "A और R दोनों सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है",
            "A सत्य है, लेकिन R असत्य है",
            "A असत्य है, लेकिन R सत्य है",
          ],
        },
        answer: 2,
        exp: {
          en: "Assertion (A) is true (~85% of poor household loans are informal), but Reason (R) is false because informal lenders charge very HIGH interest rates.",
          hi: "कथन (A) सत्य है, लेकिन कारण (R) असत्य है क्योंकि अनौपचारिक ऋणदाता बहुत अधिक ब्याज दर वसूलते हैं।",
        },
      },
      {
        q: {
          en: "Assertion (A): The RBI supervises the functioning of formal sources of loans in India.\nReason (R): There is no organization which supervises the credit activities of lenders in the informal sector.",
          hi: "कथन (A): भारत में RBI ऋण के औपचारिक स्रोतों की कार्यप्रणाली पर नज़र रखता है।\nकारण (R): अनौपचारिक क्षेत्रक में ऋणदाताओं की गतिविधियों की देखरेख करने वाली कोई संस्था नहीं है।",
        },
        options: {
          en: [
            "Both A and R are true, and R is the correct explanation of A",
            "Both A and R are true, but R is NOT the correct explanation of A",
            "A is true, but R is false",
            "A is false, but R is true",
          ],
          hi: [
            "A और R दोनों सत्य हैं, और R, A की सही व्याख्या है",
            "A और R दोनों सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है",
            "A सत्य है, लेकिन R असत्य है",
            "A असत्य है, लेकिन R सत्य है",
          ],
        },
        answer: 1,
        exp: {
          en: "Both statements are individually true facts from NCERT, but R describes the informal sector rather than explaining why RBI supervises the formal sector.",
          hi: "दोनों कथन NCERT के अनुसार सही हैं, लेकिन R अनौपचारिक क्षेत्रक के बारे में बताता है, A की व्याख्या नहीं करता।",
        },
      },
      {
        q: {
          en: "Assertion (A): Credit does not always lead to an improvement in the borrower's economic condition.\nReason (R): High risks such as crop failure can push a borrower into a debt trap.",
          hi: "कथन (A): साख (ऋण) से हमेशा कर्जदार की आर्थिक स्थिति में सुधार नहीं होता।\nकारण (R): फसल बर्बाद होने जैसे उच्च जोखिम कर्जदार को कर्ज-जाल में धकेल सकते हैं।",
        },
        options: {
          en: [
            "Both A and R are true, and R is the correct explanation of A",
            "Both A and R are true, but R is NOT the correct explanation of A",
            "A is true, but R is false",
            "A is false, but R is true",
          ],
          hi: [
            "A और R दोनों सत्य हैं, और R, A की सही व्याख्या है",
            "A और R दोनों सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है",
            "A सत्य है, लेकिन R असत्य है",
            "A असत्य है, लेकिन R सत्य है",
          ],
        },
        answer: 0,
        exp: {
          en: "As seen in Swapna's case, crop failure made credit harmful and pushed her into a debt trap—so R directly explains A.",
          hi: "स्वप्ना के उदाहरण में फसल बर्बाद होने से ऋण हानिकारक साबित हुआ और वह कर्ज-जाल में फँस गई—अतः R, A की सही व्याख्या है।",
        },
      },
    ],
  },
];

// State
let currentLang = "en";
let activeQuizIndex = null;
let currentQIndex = 0;
let currentScore = 0;
let answeredCurrent = false;
let selectedOptionIndex = null;
let savedScores = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

// Elements
const homeView = document.getElementById("home-view");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-hi").classList.toggle("active", lang === "hi");
  updateStaticUI();

  if (!homeView.classList.contains("hidden")) {
    renderHome();
  } else if (!quizView.classList.contains("hidden")) {
    renderQuestion(true);
  } else if (!resultView.classList.contains("hidden")) {
    renderResult();
  }
}

function updateStaticUI() {
  const t = UI_TEXT[currentLang];
  document.getElementById("ui-subtitle").textContent = t.subtitle;
  document.getElementById("ui-title").textContent = t.title;
  document.getElementById("ui-desc").textContent = t.desc;
  document.getElementById("ui-stat-completed-label").textContent =
    t.completedLabel;
  document.getElementById("ui-stat-total-label").textContent = t.totalLabel;
  document.getElementById("ui-back-btn").textContent = t.backBtn;
  document.getElementById("exp-title").textContent = t.explanation;
  document.getElementById("ui-retry-btn").textContent = t.retryBtn;
  document.getElementById("next-quiz-btn").textContent = t.nextQuizBtn;
  document.getElementById("ui-wa-btn").textContent = t.waBtn;
  document.getElementById("ui-home-btn").textContent = t.homeBtn;
}

function renderHome() {
  const t = UI_TEXT[currentLang];
  const grid = document.getElementById("quiz-grid");
  grid.innerHTML = "";

  let completedCount = 0;
  let totalBest = 0;
  let totalQuestions = 0;

  QUIZZES.forEach((quiz, idx) => {
    totalQuestions += quiz.questions.length;
    const best = savedScores[quiz.id];
    const hasScore = typeof best === "number";
    if (hasScore) {
      completedCount++;
      totalBest += best;
    }

    const card = document.createElement("div");
    card.className = "quiz-card";
    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="badge">${quiz.badge[currentLang]}</span>
          <span class="score-tag ${hasScore ? "done" : ""}">
            ${hasScore ? `${t.bestScore} ${best}/${quiz.questions.length}` : t.notAttempted}
          </span>
        </div>
        <h3>${quiz.title[currentLang]}</h3>
        <p>${quiz.desc[currentLang]}</p>
      </div>
      <div class="card-footer">
        <span class="q-count">${quiz.questions.length} ${t.questionsWord}</span>
        <button class="primary-btn" onclick="startQuiz(${idx})">
          ${hasScore ? t.retakeSmall : t.startBtn}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  document.getElementById("stat-completed").textContent =
    `${completedCount} / ${QUIZZES.length}`;
  document.getElementById("stat-total").textContent =
    `${totalBest} / ${totalQuestions}`;
}

function startQuiz(idx) {
  activeQuizIndex = idx;
  currentQIndex = 0;
  currentScore = 0;
  answeredCurrent = false;
  selectedOptionIndex = null;

  homeView.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");

  renderQuestion(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion(preserveState) {
  const t = UI_TEXT[currentLang];
  const quiz = QUIZZES[activeQuizIndex];
  const qObj = quiz.questions[currentQIndex];

  document.getElementById("active-quiz-badge").textContent =
    quiz.badge[currentLang];
  document.getElementById("question-counter").textContent =
    `${currentQIndex + 1} / ${quiz.questions.length}`;
  document.getElementById("progress-fill").style.width =
    `${((currentQIndex + 1) / quiz.questions.length) * 100}%`;
  document.getElementById("live-score").textContent =
    `${t.scorePrefix} ${currentScore}`;
  document.getElementById("question-text").textContent = qObj.q[currentLang];

  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  qObj.options[currentLang].forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-letter">${letters[i]}.</span><span>${optText}</span>`;
    btn.onclick = () => selectOption(i);

    if (preserveState && answeredCurrent) {
      btn.disabled = true;
      if (i === qObj.answer) btn.classList.add("correct");
      if (i === selectedOptionIndex && i !== qObj.answer)
        btn.classList.add("wrong");
    }

    optionsList.appendChild(btn);
  });

  const expBox = document.getElementById("explanation-box");
  const nextBtn = document.getElementById("next-btn");

  if (preserveState && answeredCurrent) {
    document.getElementById("exp-text").textContent = qObj.exp[currentLang];
    expBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  } else {
    expBox.classList.add("hidden");
    nextBtn.classList.add("hidden");
  }

  nextBtn.textContent =
    currentQIndex === quiz.questions.length - 1 ? t.finishBtn : t.nextBtn;
}

function selectOption(idx) {
  if (answeredCurrent) return;
  answeredCurrent = true;
  selectedOptionIndex = idx;

  const quiz = QUIZZES[activeQuizIndex];
  const qObj = quiz.questions[currentQIndex];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === qObj.answer) btn.classList.add("correct");
    if (i === idx && i !== qObj.answer) btn.classList.add("wrong");
  });

  if (idx === qObj.answer) {
    currentScore++;
    document.getElementById("live-score").textContent =
      `${UI_TEXT[currentLang].scorePrefix} ${currentScore}`;
  }

  document.getElementById("exp-text").textContent = qObj.exp[currentLang];
  document.getElementById("explanation-box").classList.remove("hidden");
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  const quiz = QUIZZES[activeQuizIndex];
  if (currentQIndex < quiz.questions.length - 1) {
    currentQIndex++;
    answeredCurrent = false;
    selectedOptionIndex = null;
    renderQuestion(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const quiz = QUIZZES[activeQuizIndex];
  const prevBest = savedScores[quiz.id] ?? -1;
  if (currentScore > prevBest) {
    savedScores[quiz.id] = currentScore;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedScores));
  }

  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");
  renderResult();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderResult() {
  const t = UI_TEXT[currentLang];
  const quiz = QUIZZES[activeQuizIndex];
  const total = quiz.questions.length;
  const pct = Math.round((currentScore / total) * 100);

  document.getElementById("result-quiz-name").textContent =
    `${quiz.badge[currentLang]} • ${t.completedTag}`;
  document.getElementById("final-score").textContent =
    `${currentScore}/${total}`;
  document.getElementById("final-percent").textContent = `${pct}%`;

  let remark = t.remarks.low;
  if (pct >= 80) remark = t.remarks.high;
  else if (pct >= 50) remark = t.remarks.mid;

  document.getElementById("result-remark").textContent = remark;
  document.getElementById("result-subtext").textContent = t.subtext;

  const nextQuizBtn = document.getElementById("next-quiz-btn");
  if (activeQuizIndex < QUIZZES.length - 1) {
    nextQuizBtn.classList.remove("hidden");
  } else {
    nextQuizBtn.classList.add("hidden");
  }
}

function retryQuiz() {
  startQuiz(activeQuizIndex);
}

function startNextQuiz() {
  if (activeQuizIndex < QUIZZES.length - 1) {
    startQuiz(activeQuizIndex + 1);
  }
}

function goHome() {
  quizView.classList.add("hidden");
  resultView.classList.add("hidden");
  homeView.classList.remove("hidden");
  renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shareWhatsApp() {
  const quiz = QUIZZES[activeQuizIndex];
  const total = quiz.questions.length;
  const msg =
    currentLang === "hi"
      ? `मैंने CoreStep Academy पर कक्षा 10 अर्थशास्त्र (मुद्रा और साख) के "${quiz.title.hi}" क्विज़ में ${currentScore}/${total} स्कोर किया! आप भी प्रयास करें: https://corestepacademy.github.io/quizzes/class10-eco-ch3/`
      : `I scored ${currentScore}/${total} on "${quiz.title.en}" (Class 10 Economics - Money & Credit) at CoreStep Academy! Try it here: https://corestepacademy.github.io/quizzes/class10-eco-ch3/`;

  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
}

// Initialize
updateStaticUI();
renderHome();
