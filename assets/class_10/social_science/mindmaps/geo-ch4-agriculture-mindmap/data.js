const mindMapData = {
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
            { name: "Higher doses of modern inputs (HYV seeds, fertilizers)" },
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
            { name: "Helped by western temperate cyclones & Green Revolution" },
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
                { name: "Staple food crop; 2nd largest producer after China" },
                { name: "Kharif crop; High temp (>25°C) & high humidity" },
                { name: "Annual rainfall above 100 cm" },
                { name: "Plains of North/NE India, coastal & deltaic regions" },
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
                    { name: "Grows well on sandy soils & shallow black soil" },
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
                    { name: "Red, black, sandy, loamy & shallow black soils" },
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
                { name: "Temp: 21°C – 27°C; grows well in old alluvial soil" },
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
                { name: "Baba Budan Hills & Nilgiri in Karnataka, Kerala, TN" },
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
};
