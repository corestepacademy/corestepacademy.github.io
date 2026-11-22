const uiText = {
  hi: {
    title: "कृषि (कक्षा 10 भूगोल — अध्याय 4)",
    subtitle: "खोलने/बंद करने के लिए टैप करें • खींचकर घुमाएँ • ज़ूम करें",
    searchPlaceholder: "खोजें (जैसे: रबी, ज्वार, भूदान)...",
    expandAll: "सभी खोलें",
    collapseAll: "समेटें",
    reset: "स्क्रीन फिट",
    lightMode: "☀️ लाइट",
    darkMode: "🌙 डार्क",
    switchLang: "English",
    foundSuffix: "मिले",
  },
  en: {
    title: "Agriculture (Class 10 Geography — Ch. 4)",
    subtitle:
      "Tap any topic to expand or collapse • Drag to pan • Pinch/scroll to zoom",
    searchPlaceholder: "Search topic (e.g., Rabi, Jowar, Bhoodan)...",
    expandAll: "Expand All",
    collapseAll: "Collapse",
    reset: "Fit Screen",
    lightMode: "☀️ Light",
    darkMode: "🌙 Dark",
    switchLang: "हिंदी",
    foundSuffix: "found",
  },
};

const mindMapDataByLang = {
  hi: {
    name: "कृषि (NCERT अध्याय 4)",
    children: [
      {
        name: "परिचय और महत्व",
        children: [
          { name: "प्राथमिक आर्थिक क्रिया" },
          { name: "भारत की दो-तिहाई जनसंख्या कृषि कार्यों में संलग्न" },
          { name: "अधिकांश खाद्यान्न का उत्पादन" },
          { name: "विभिन्न उद्योगों के लिए कच्चा माल" },
        ],
      },
      {
        name: "कृषि के प्रकार",
        children: [
          {
            name: "प्रारंभिक जीविका निर्वाह कृषि",
            children: [
              { name: "भूमि के छोटे टुकड़ों पर आदिम औज़ारों से खेती" },
              { name: "मानसून और मृदा की प्राकृतिक उर्वरता पर निर्भर" },
              { name: "कर्तन दहन प्रणाली (Slash and Burn)" },
              {
                name: "भारत में स्थानीय नाम",
                children: [
                  { name: "झूमिंग (उत्तर-पूर्वी राज्य)" },
                  { name: "पामलू (मणिपुर)" },
                  { name: "दीपा (बस्तर-छत्तीसगढ़ व अंडमान-निकोबार)" },
                  { name: "बेवर / दहिया (मध्य प्रदेश)" },
                  { name: "पोडू / पेंडा (आंध्र प्रदेश)" },
                  { name: "पामा डाबी / कोमान / बरींगा (ओडिशा)" },
                  { name: "कुमारी (पश्चिमी घाट)" },
                  { name: "वालरे / वाल्ट्रे (दक्षिण-पूर्वी राजस्थान)" },
                  { name: "खिल (हिमालयी क्षेत्र) व कुरुवा (झारखंड)" },
                ],
              },
              {
                name: "विश्व में स्थानीय नाम",
                children: [
                  { name: "मिल्पा (मेक्सिको व मध्य अमेरिका)" },
                  { name: "कोनुको (वेनेजुएला)" },
                  { name: "रोका (ब्राज़ील)" },
                  { name: "मसोले (मध्य अफ्रीका)" },
                  { name: "लदांग (इंडोनेशिया)" },
                  { name: "रे (वियतनाम)" },
                ],
              },
            ],
          },
          {
            name: "गहन जीविका कृषि",
            children: [
              { name: "भूमि पर जनसंख्या के अधिक दबाव वाले क्षेत्रों में" },
              { name: "श्रम-गहन खेती" },
              { name: "जैव-रासायनिक निवेशों व सिंचाई का अधिक प्रयोग" },
            ],
          },
          {
            name: "वाणिज्यिक कृषि",
            children: [
              {
                name: "आधुनिक निवेशों (HYV बीज, रासायनिक उर्वरक, कीटनाशक) का अधिक उपयोग",
              },
              { name: "वाणिज्यीकरण का स्तर क्षेत्र के अनुसार भिन्न" },
              {
                name: "रोपण कृषि",
                children: [
                  { name: "लंबे-चौड़े क्षेत्र में एकल फसल बोई जाती है" },
                  { name: "कृषि और उद्योग के बीच का अंतरापृष्ठ" },
                  { name: "उदाहरण: चाय, कॉफी, रबड़, गन्ना, केला" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "शस्य प्रारूप (फसल ऋतुएँ)",
        children: [
          {
            name: "रबी",
            children: [
              { name: "बुवाई: शीत ऋतु (अक्टूबर – दिसंबर)" },
              { name: "कटाई: ग्रीष्म ऋतु (अप्रैल – जून)" },
              { name: "फसलें: गेहूँ, जौ, मटर, चना, सरसों" },
              {
                name: "राज्य: पंजाब, हरियाणा, हिमाचल, जम्मू-कश्मीर, उत्तराखंड, उत्तर प्रदेश",
              },
              { name: "पश्चिमी शीतोष्ण चक्रवातों व हरित क्रांति से लाभ" },
            ],
          },
          {
            name: "खरीफ",
            children: [
              { name: "बुवाई: मानसून के आगमन के साथ" },
              { name: "कटाई: सितंबर – अक्टूबर" },
              {
                name: "फसलें: चावल, मक्का, ज्वार, बाजरा, अरहर (तूर), कपास, जूट",
              },
              {
                name: "क्षेत्र: असम, प. बंगाल, तटीय ओडिशा, आंध्र प्रदेश, तेलंगाना, तमिलनाडु, केरल",
              },
              { name: "असम/प. बंगाल/ओडिशा में धान की 3 फसलें: ऑस, अमन, बोरो" },
            ],
          },
          {
            name: "जायद",
            children: [
              { name: "रबी और खरीफ के बीच ग्रीष्म ऋतु का छोटा मौसम" },
              { name: "फसलें: तरबूज, खरबूजा, खीरा, सब्जियाँ और चारे की फसलें" },
              { name: "गन्ने की फसल को तैयार होने में लगभग एक वर्ष लगता है" },
            ],
          },
        ],
      },
      {
        name: "मुख्य फसलें",
        children: [
          {
            name: "खाद्यान्न फसलें (अनाज)",
            children: [
              {
                name: "चावल",
                children: [
                  {
                    name: "प्रमुख खाद्यान्न; चीन के बाद भारत दूसरा सबसे बड़ा उत्पादक",
                  },
                  { name: "खरीफ फसल; उच्च तापमान (>25°C) और अधिक आर्द्रता" },
                  { name: "100 सेमी से अधिक वार्षिक वर्षा" },
                  {
                    name: "उत्तर व उत्तर-पूर्वी मैदान, तटीय और डेल्टाई क्षेत्र",
                  },
                ],
              },
              {
                name: "गेहूँ",
                children: [
                  { name: "दूसरी सबसे महत्वपूर्ण खाद्यान्न फसल (रबी)" },
                  { name: "उगाने के लिए शीत ऋतु और पकते समय खिली धूप" },
                  { name: "50–75 सेमी समान रूप से वितरित वार्षिक वर्षा" },
                  {
                    name: "गंगा-सतलुज का मैदान और दक्कन का काली मिट्टी वाला प्रदेश",
                  },
                ],
              },
              {
                name: "मोटे अनाज",
                children: [
                  {
                    name: "ज्वार",
                    children: [
                      {
                        name: "क्षेत्रफल व उत्पादन में देश की तीसरी प्रमुख खाद्यान्न फसल",
                      },
                      {
                        name: "वर्षा पर निर्भर फसल (अधिकतर आर्द्र क्षेत्रों में)",
                      },
                      {
                        name: "प्रमुख राज्य: महाराष्ट्र, कर्नाटक, आंध्र प्रदेश, मध्य प्रदेश",
                      },
                    ],
                  },
                  {
                    name: "बाजरा",
                    children: [
                      { name: "बलुआ और उथली काली मिट्टी पर अच्छी उपज" },
                      {
                        name: "प्रमुख राज्य: राजस्थान, उत्तर प्रदेश, महाराष्ट्र, गुजरात, हरियाणा",
                      },
                    ],
                  },
                  {
                    name: "रागी",
                    children: [
                      {
                        name: "शुष्क प्रदेशों की फसल; लोहा, कैल्शियम व भूसी की प्रचुरता",
                      },
                      { name: "लाल, काली, बलुआ, दोमट व उथली काली मिट्टी" },
                      {
                        name: "प्रमुख राज्य: कर्नाटक, तमिलनाडु, हिमाचल प्रदेश, उत्तराखंड, सिक्किम",
                      },
                    ],
                  },
                ],
              },
              {
                name: "मक्का",
                children: [
                  {
                    name: "खाद्यान्न व चारा दोनों रूप में उपयोग (खरीफ; बिहार में रबी)",
                  },
                  {
                    name: "तापमान: 21°C – 27°C; पुरानी जलोढ़ मिट्टी में अच्छी उपज",
                  },
                  {
                    name: "प्रमुख राज्य: कर्नाटक, मध्य प्रदेश, उत्तर प्रदेश, बिहार, आंध्र प्रदेश, तेलंगाना",
                  },
                ],
              },
              {
                name: "दालें",
                children: [
                  { name: "भारत विश्व में सबसे बड़ा उत्पादक व उपभोक्ता" },
                  { name: "शाकाहारी भोजन में प्रोटीन का प्रमुख स्रोत" },
                  {
                    name: "फलीदार फसलें मृदा की उर्वरता बनाए रखती हैं (अरहर को छोड़कर)",
                  },
                  { name: "अरहर (तूर), उड़द, मूँग, मसूर, मटर, चना" },
                  {
                    name: "प्रमुख राज्य: मध्य प्रदेश, राजस्थान, महाराष्ट्र, उत्तर प्रदेश, कर्नाटक",
                  },
                ],
              },
            ],
          },
          {
            name: "अनाजों के अलावा अन्य खाद्य फसलें",
            children: [
              {
                name: "गन्ना",
                children: [
                  {
                    name: "उष्ण व उपोष्ण कटिबंधीय; गर्म व आर्द्र जलवायु (21°C–27°C)",
                  },
                  {
                    name: "वर्षा: 75–100 सेमी; ब्राज़ील के बाद दूसरा सबसे बड़ा उत्पादक",
                  },
                  { name: "चीनी, गुड़, खांडसारी और शीरा का स्रोत" },
                  {
                    name: "प्रमुख राज्य: उत्तर प्रदेश, महाराष्ट्र, कर्नाटक, तमिलनाडु, आंध्र प्रदेश, बिहार",
                  },
                ],
              },
              {
                name: "तिलहन",
                children: [
                  {
                    name: "मूँगफली (खरीफ, कुल तिलहन का ~50%; गुजरात प्रमुख उत्पादक)",
                  },
                  {
                    name: "अलसी व सरसों (रबी); तिल (उत्तर में खरीफ / दक्षिण में रबी)",
                  },
                  { name: "अरंडी (खरीफ और रबी दोनों ऋतुओं में)" },
                ],
              },
              {
                name: "चाय",
                children: [
                  { name: "रोपण पेय फसल; उष्ण व उपोष्ण कटिबंधीय जलवायु" },
                  {
                    name: "ह्यूमस व जीवांश युक्त गहरी, सुगम जल निकास वाली मिट्टी",
                  },
                  {
                    name: "श्रम-सघन उद्योग; असम, दार्जिलिंग, जलपाईगुड़ी, तमिलनाडु, केरल",
                  },
                ],
              },
              {
                name: "कॉफी",
                children: [
                  {
                    name: "यमन से लाई गई 'अरेबिका' किस्म (विश्व में भारी मांग)",
                  },
                  {
                    name: "बाबा बूदन पहाड़ियाँ व नीलगिरि (कर्नाटक, केरल, तमिलनाडु)",
                  },
                ],
              },
              {
                name: "बागवानी फसलें",
                children: [
                  {
                    name: "आम (महाराष्ट्र, आंध्र प्रदेश, तेलंगाना, उत्तर प्रदेश, प. बंगाल)",
                  },
                  { name: "संतरे (नागपुर व चेरापूँजी)" },
                  { name: "केले (केरल, मिज़ोरम, महाराष्ट्र, तमिलनाडु)" },
                  { name: "लीची व अमरूद (उत्तर प्रदेश व बिहार)" },
                  {
                    name: "अनानास (मेघालय) व अंगूर (आंध्र प्रदेश, तेलंगाना, महाराष्ट्र)",
                  },
                  {
                    name: "सेब, नाशपाती, खुबानी, अखरोट (जम्मू-कश्मीर व हिमाचल प्रदेश)",
                  },
                ],
              },
            ],
          },
          {
            name: "अखाद्य फसलें",
            children: [
              {
                name: "रबड़",
                children: [
                  {
                    name: "भूमध्यरेखीय फसल; नम व आर्द्र जलवायु (>200 सेमी वर्षा, >25°C)",
                  },
                  {
                    name: "प्रमुख राज्य: केरल, तमिलनाडु, कर्नाटक, अंडमान-निकोबार, गारो पहाड़ियाँ",
                  },
                ],
              },
              {
                name: "रेशेदार फसलें",
                children: [
                  {
                    name: "कपास, जूट, सन (मिट्टी से) व प्राकृतिक रेशम (रेशम के कीड़े के कोकून से)",
                  },
                  {
                    name: "सेरीकल्चर: रेशम उत्पादन के लिए रेशम के कीड़ों का पालन",
                  },
                ],
              },
              {
                name: "कपास",
                children: [
                  {
                    name: "खरीफ फसल; दक्कन पठार के शुष्क भागों की काली मिट्टी",
                  },
                  {
                    name: "उच्च तापमान, हल्की वर्षा, 210 पाला-रहित दिन व खिली धूप",
                  },
                  {
                    name: "राज्य: महाराष्ट्र, गुजरात, मध्य प्रदेश, कर्नाटक, तेलंगाना, पंजाब",
                  },
                ],
              },
              {
                name: "जूट (सुनहरा रेशा)",
                children: [
                  {
                    name: "बाढ़ के मैदानों की जल निकास वाली उर्वरक मिट्टी; उच्च तापमान",
                  },
                  { name: "राज्य: पश्चिम बंगाल, बिहार, असम, ओडिशा, मेघालय" },
                  { name: "उपयोग: बोरियाँ, चटाई, रस्सी, तंतु व धागे, गलीचे" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "प्रौद्योगिकीय और संस्थागत सुधार",
        children: [
          {
            name: "स्वतंत्रता के बाद सुधार",
            children: [
              {
                name: "जोतों की चकबंदी, सहकारिता व जमींदारी प्रथा समाप्त करना",
              },
              { name: "प्रथम पंचवर्षीय योजना में भूमि सुधार मुख्य लक्ष्य" },
            ],
          },
          {
            name: "1960 और 1970 का दशक",
            children: [
              { name: "हरित क्रांति (पैकेज टेक्नोलॉजी पर आधारित)" },
              { name: "श्वेत क्रांति (ऑपरेशन फ्लड)" },
            ],
          },
          {
            name: "1980 और 1990 का दशक (व्यापक विकास कार्यक्रम)",
            children: [
              { name: "सूखा, बाढ़, चक्रवात, आग व बीमारी के लिए फसल बीमा" },
              { name: "ग्रामीण बैंक, सहकारी समितियाँ व कम ब्याज दर पर ऋण" },
              {
                name: "किसान क्रेडिट कार्ड (KCC) व व्यक्तिगत दुर्घटना बीमा योजना (PAIS)",
              },
              {
                name: "मौसम संबंधी बुलेटिन, कृषि कार्यक्रम व न्यूनतम सहायता मूल्य (MSP)",
              },
            ],
          },
          {
            name: "भूदान – ग्रामदान",
            children: [
              {
                name: "विनोबा भावे द्वारा प्रारंभ (गाँधीजी के आध्यात्मिक उत्तराधिकारी)",
              },
              {
                name: "पोचमपल्ली (आंध्र प्रदेश) से शुरुआत — श्री राम चंद्र रेड्डी",
              },
              {
                name: "इसे 'रक्तहीन क्रांति' (Blood-less Revolution) भी कहा जाता है",
              },
            ],
          },
        ],
      },
    ],
  },

  en: {
    name: "Agriculture (NCERT Ch. 4)",
    children: [
      {
        name: "Overview & Importance",
        children: [
          { name: "Primary economic activity" },
          { name: "Two-thirds of India's population engaged" },
          { name: "Produces most of the food we consume" },
          { name: "Produces raw materials for various industries" },
        ],
      },
      {
        name: "Types of Farming",
        children: [
          {
            name: "Primitive Subsistence",
            children: [
              { name: "Small patches of land, primitive tools" },
              { name: "Depends on monsoon & natural fertility" },
              { name: "Slash and Burn Agriculture" },
              {
                name: "Local Names in India",
                children: [
                  { name: "Jhumming (North-Eastern states)" },
                  { name: "Pamlou (Manipur)" },
                  { name: "Dipa (Bastar, Chhattisgarh & A&N Islands)" },
                  { name: "Bewar / Dahiya (Madhya Pradesh)" },
                  { name: "Podu / Penda (Andhra Pradesh)" },
                  { name: "Pama Dabi / Koman / Bringa (Odisha)" },
                  { name: "Kumari (Western Ghats)" },
                  { name: "Valre / Waltre (SE Rajasthan)" },
                  { name: "Khil (Himalayan belt) & Kuruwa (Jharkhand)" },
                ],
              },
              {
                name: "Names Around the World",
                children: [
                  { name: "Milpa (Mexico & Central America)" },
                  { name: "Conuco (Venezuela)" },
                  { name: "Roca (Brazil)" },
                  { name: "Masole (Central Africa)" },
                  { name: "Ladang (Indonesia)" },
                  { name: "Ray (Vietnam)" },
                ],
              },
            ],
          },
          {
            name: "Intensive Subsistence",
            children: [
              { name: "Areas of high population pressure on land" },
              { name: "Labour-intensive farming" },
              { name: "High doses of biochemical inputs & irrigation" },
            ],
          },
          {
            name: "Commercial Farming",
            children: [
              {
                name: "Higher doses of modern inputs (HYV seeds, fertilizers)",
              },
              { name: "Degree of commercialisation varies by region" },
              {
                name: "Plantation",
                children: [
                  { name: "Single crop grown on a large area" },
                  { name: "Interface of agriculture & industry" },
                  { name: "Examples: Tea, Coffee, Rubber, Sugarcane, Banana" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Cropping Pattern",
        children: [
          {
            name: "Rabi",
            children: [
              { name: "Sown: Winter (Oct – Dec)" },
              { name: "Harvested: Summer (Apr – Jun)" },
              { name: "Crops: Wheat, Barley, Peas, Gram, Mustard" },
              { name: "States: Punjab, Haryana, HP, J&K, Uttarakhand, UP" },
              {
                name: "Helped by western temperate cyclones & Green Revolution",
              },
            ],
          },
          {
            name: "Kharif",
            children: [
              { name: "Sown: Onset of monsoon" },
              { name: "Harvested: September – October" },
              { name: "Crops: Paddy, Maize, Jowar, Bajra, Tur, Cotton, Jute" },
              {
                name: "Regions: Assam, WB, coastal Odisha, AP, Telangana, TN, Kerala",
              },
              { name: "3 paddy crops in Assam/WB/Odisha: Aus, Aman, Boro" },
            ],
          },
          {
            name: "Zaid",
            children: [
              { name: "Short season during summer months" },
              {
                name: "Crops: Watermelon, Muskmelon, Cucumber, Vegetables, Fodder",
              },
              { name: "Sugarcane takes almost a year to grow" },
            ],
          },
        ],
      },
      {
        name: "Major Crops",
        children: [
          {
            name: "Food Crops (Grains)",
            children: [
              {
                name: "Rice",
                children: [
                  {
                    name: "Staple food crop; 2nd largest producer after China",
                  },
                  { name: "Kharif crop; High temp (>25°C) & high humidity" },
                  { name: "Annual rainfall above 100 cm" },
                  {
                    name: "Plains of North/NE India, coastal & deltaic regions",
                  },
                ],
              },
              {
                name: "Wheat",
                children: [
                  { name: "2nd most important cereal crop (Rabi)" },
                  { name: "Cool growing season & bright sunshine at ripening" },
                  { name: "50–75 cm evenly distributed annual rainfall" },
                  { name: "Ganga-Satluj plains & black soil region of Deccan" },
                ],
              },
              {
                name: "Millets (Coarse Grains)",
                children: [
                  {
                    name: "Jowar",
                    children: [
                      {
                        name: "3rd most important food crop (area & production)",
                      },
                      { name: "Rain-fed crop grown in moist areas" },
                      { name: "Major states: Maharashtra, Karnataka, AP, MP" },
                    ],
                  },
                  {
                    name: "Bajra",
                    children: [
                      {
                        name: "Grows well on sandy soils & shallow black soil",
                      },
                      {
                        name: "Major states: Rajasthan, UP, Maharashtra, Gujarat, Haryana",
                      },
                    ],
                  },
                  {
                    name: "Ragi",
                    children: [
                      {
                        name: "Crop of dry regions; rich in iron, calcium & roughage",
                      },
                      {
                        name: "Red, black, sandy, loamy & shallow black soils",
                      },
                      {
                        name: "Major states: Karnataka, TN, HP, Uttarakhand, Sikkim",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Maize",
                children: [
                  {
                    name: "Used both as food and fodder (Kharif; Rabi in Bihar)",
                  },
                  {
                    name: "Temp: 21°C – 27°C; grows well in old alluvial soil",
                  },
                  {
                    name: "Major states: Karnataka, MP, UP, Bihar, AP, Telangana",
                  },
                ],
              },
              {
                name: "Pulses",
                children: [
                  { name: "India is largest producer & consumer" },
                  { name: "Major source of protein in vegetarian diet" },
                  {
                    name: "Leguminous crops restore soil fertility (except Arhar)",
                  },
                  { name: "Tur, Urad, Moong, Masur, Peas, Gram" },
                  {
                    name: "Major states: MP, Rajasthan, Maharashtra, UP, Karnataka",
                  },
                ],
              },
            ],
          },
          {
            name: "Food Crops (Other than Grains)",
            children: [
              {
                name: "Sugarcane",
                children: [
                  {
                    name: "Tropical & subtropical; hot & humid climate (21°C–27°C)",
                  },
                  {
                    name: "Rainfall: 75–100 cm; 2nd largest producer after Brazil",
                  },
                  { name: "Source of sugar, gur, khandsari & molasses" },
                  {
                    name: "Major states: UP, Maharashtra, Karnataka, TN, AP, Bihar",
                  },
                ],
              },
              {
                name: "Oil Seeds",
                children: [
                  {
                    name: "Groundnut (Kharif, ~50% of major oilseeds; Gujarat top)",
                  },
                  {
                    name: "Linseed & Mustard (Rabi); Sesamum (Kharif N / Rabi S)",
                  },
                  { name: "Castor seed (both Rabi & Kharif)" },
                ],
              },
              {
                name: "Tea",
                children: [
                  {
                    name: "Plantation beverage crop; tropical & subtropical climate",
                  },
                  { name: "Deep, fertile, well-drained soil rich in humus" },
                  {
                    name: "Labour-intensive; Assam, Darjeeling, Jalpaiguri, TN, Kerala",
                  },
                ],
              },
              {
                name: "Coffee",
                children: [
                  {
                    name: "Arabica variety brought from Yemen (high global demand)",
                  },
                  {
                    name: "Baba Budan Hills & Nilgiri in Karnataka, Kerala, TN",
                  },
                ],
              },
              {
                name: "Horticulture Crops",
                children: [
                  { name: "Mangoes (Maharashtra, AP, Telangana, UP, WB)" },
                  { name: "Oranges (Nagpur & Cherrapunjee)" },
                  { name: "Bananas (Kerala, Mizoram, Maharashtra, TN)" },
                  { name: "Lichi & Guava (UP & Bihar)" },
                  {
                    name: "Pineapples (Meghalaya) & Grapes (AP, Telangana, Maharashtra)",
                  },
                  { name: "Apples, Pears, Apricots, Walnuts (J&K & HP)" },
                ],
              },
            ],
          },
          {
            name: "Non-Food Crops",
            children: [
              {
                name: "Rubber",
                children: [
                  {
                    name: "Equatorial crop; moist & humid climate (>200 cm rain, >25°C)",
                  },
                  {
                    name: "Major states: Kerala, TN, Karnataka, A&N Islands, Garo Hills",
                  },
                ],
              },
              {
                name: "Fibre Crops",
                children: [
                  {
                    name: "Cotton, Jute, Hemp (soil) & Natural Silk (silkworm cocoons)",
                  },
                  {
                    name: "Sericulture: Rearing of silkworms for silk production",
                  },
                ],
              },
              {
                name: "Cotton",
                children: [
                  {
                    name: "Kharif crop; drier black cotton soil of Deccan plateau",
                  },
                  {
                    name: "High temp, light rainfall, 210 frost-free days, bright sunshine",
                  },
                  {
                    name: "States: Maharashtra, Gujarat, MP, Karnataka, Telangana, Punjab",
                  },
                ],
              },
              {
                name: "Jute (Golden Fibre)",
                children: [
                  {
                    name: "Well-drained fertile soils in flood plains; high temp",
                  },
                  {
                    name: "States: West Bengal, Bihar, Assam, Odisha, Meghalaya",
                  },
                  { name: "Used for gunny bags, mats, ropes, yarn, carpets" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Technological & Institutional Reforms",
        children: [
          {
            name: "Post-Independence Reforms",
            children: [
              {
                name: "Collectivisation, consolidation of holdings, cooperation",
              },
              {
                name: "Abolition of Zamindari; Land reform in 1st Five Year Plan",
              },
            ],
          },
          {
            name: "1960s & 1970s",
            children: [
              { name: "Green Revolution (package technology)" },
              { name: "White Revolution (Operation Flood)" },
            ],
          },
          {
            name: "1980s & 1990s (Comprehensive Programme)",
            children: [
              {
                name: "Crop insurance against drought, flood, cyclone, fire, disease",
              },
              {
                name: "Grameen banks, cooperative societies & low-interest loans",
              },
              {
                name: "Kisan Credit Card (KCC) & Personal Accident Insurance (PAIS)",
              },
              { name: "Weather bulletins, agricultural programmes & MSP" },
            ],
          },
          {
            name: "Bhoodan – Gramdan",
            children: [
              { name: "Initiated by Vinoba Bhave (Gandhi's spiritual heir)" },
              {
                name: "Started at Pochampalli (Andhra Pradesh) — Shri Ram Chandra Reddy",
              },
              { name: "Known as the Blood-less Revolution" },
            ],
          },
        ],
      },
    ],
  },
};
