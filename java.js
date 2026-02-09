function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const userText = input.value.trim();
    if (userText === "") return;

   
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = userText;
    chatBox.appendChild(userMessage);

   
    input.value = "";

   
    setTimeout(() => {
        const aiMessage = document.createElement("div");
        aiMessage.classList.add("message", "ai");
        aiMessage.innerText = getReply(userText);
        chatBox.appendChild(aiMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}

function getReply(message) {
    message = message.toLowerCase();

    if (message.includes("mysore")) {
        return `🌴 Mysore Solo Trip Plan (1 Day)

Morning:
• Chamundi Hills – Panoramic city view and temple visit.
• Mysore Palace – Explore royal architecture.
• Karanji Lake – Peaceful nature walk and boating.

Afternoon:
• Jaganmohan Palace – Art and heritage museum.
• Mysore Zoo – One of India’s best zoos.
• Lalitha Mahal Palace – Great photo spot.

Night:
• Brindavan Gardens – Musical fountain show.
• Mall of Mysore – Shopping and dining.
• Devaraja Market – Traditional evening market.

💰 Budget: ₹6,000 – ₹8,000 per day`;
    }

    if (message.includes("bangalore")) {
        return `🏙️ Bangalore Solo Trip (1 Day)

Morning:

Nandi Hills – A scenic hilltop spot famous for sunrise views and cool mountain air.
ISKCON Temple – A peaceful spiritual center with grand architecture and devotional ambience.
Orion Mall – A modern mall for shopping, dining, and relaxing by the lake.

Afternoon:

Lalbagh – A historic botanical garden with rare plants and a famous glass house.
Cubbon Park – A large green park in the heart of the city, perfect for walking and photos.
MG Road – A lively area known for shopping, cafés, and city life.

Night:

Church Street – A vibrant street filled with cafés, bookstores, and nightlife.
UB City Mall – A luxury mall offering fine dining and premium shopping.
Night Drives – A relaxing drive to enjoy Bangalore’s cool weather and calm roads.
💰 Budget: ₹4,000 – ₹8,000 per day`;
    }

    if (message.includes("mandya")) {
        return `🏙️ Bangalore Solo Trip (1 Day)

Best Time: Oct–Mar
Morning:
Visit Shivanasamudra Falls (beautiful waterfalls)
• Local breakfast in Mandya town

Afternoon:
Explore Ranganathittu Bird Sanctuary
• Lunch near river area

Evening: 
Check Brindavan Gardens for evening lights
• Dinner — try local Mandya cuisine
tips:
-Visit Key Spots Early: Start your day with Shivanasamudra Falls and Ranganathittu Bird Sanctuary to avoid crowds.
-Transport & Safety: Use local buses or cabs, carry phone, water, and power bank, and avoid late-night travel.
-Local Food & Comfort: Try Maddur vada and other local dishes, wear comfortable shoes, and follow nature/temple rules."`;

    }

    if (message.includes("belagavi")) {
        return `🏙️ belagavi Solo Trip (1 Day)

Best Time: Oct–Feb
Morning:
Visit Shivatirth Mahal Palace or Trikuteshwara Temple
• Breakfast at Belagavi local cafe

Afternoon: 
Explore forts & local markets
• Lunch with local seat belt dosa / jaggery treats

Evening: 
Walk near Ghats & local river spots
• Dinner — try local North Karnataka thali

tips:
-Transport & Safety: Use local cabs or Ola/Uber, keep phone, ID, and cash handy, avoid traveling in unknown areas after dark.
-Weather & Clothing: Visit between October–February, wear comfortable clothes, hat, and sunglasses; carry a light jacket for mornings/evenings.
-Timing & Essentials: Start early around 7–8 AM, carry water and snacks, take short breaks while exploring key spots.`;

    }

  if (message.includes("uttara Kannada")) {
  return `🌴 Uttara Kannada (Karwar / Gokarna) Solo Trip (1 Day)

Best Time: Oct–Mar

Morning:
• Gokarna Om Beach / Paradise Beach  
• Breakfast with coastal views

Afternoon:
• Visit Mahabaleshwar Temple  
• Lunch with seafood or vegetarian coastal food

Evening:
• Sunset at Kudle Beach  
• Dinner — beach café vibes

Tips:
- Transport & Safety: Use local cabs or buses for long distances, keep phone, ID, and cash handy, avoid traveling alone at night in remote areas.
- Weather & Clothing: Wear comfortable clothes and walking shoes, carry a hat and sunglasses for sun protection.
- Timing & Essentials: Start early, carry water and snacks, take short breaks while exploring.
`;
}


        if (message.includes("shivamogga")) {
  return `🌿 Shivamogga Solo Trip (1 Day)

Best Time: Sep–Feb

Morning:
• Jog Falls  
• Breakfast near falls / local hotel

Afternoon:
• Sakrebailu Elephant Camp  
• Lunch – local Karnataka meals

Evening:
• Gudavi Bird Sanctuary or Gajanur Dam  
• Sunset and return

Tips:
- Transport & Safety: Start early, use cab or own vehicle for Jog Falls, avoid forest roads after dark.
- Weather & Clothing: Wear comfortable clothes, carry light jacket or rainwear, non-slip footwear.
- Essentials & Timing: Carry water, snacks, camera, and follow forest area rules.
`;
}

if (message.includes("udupi")) {
  return `🌴 Udupi Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Sri Krishna Matha  
• Breakfast – Udupi special tiffin

Afternoon:
• Malpe Beach / St. Mary’s Island  
• Lunch – coastal veg or seafood

Evening:
• Kaup Beach sunset  
• Dinner near beach cafés

Tips:
- Transport & Safety: Use local buses or autos, boat rides only with life jackets, avoid deep sea swimming.
- Weather & Clothing: Light cotton clothes, cap, sunscreen, comfortable footwear.
- Essentials & Timing: Start temple visit early, carry cash, check boat timings in advance.
`;
}
if (message.includes("kodagu")) {
  return `🌿 Kodagu (Coorg) Solo Trip (1 Day)

Best Time: Oct–Mar

Morning:
• Abbey Falls  
• Breakfast at local café

Afternoon:
• Raja’s Seat  
• Lunch – Coorgi or South Indian food

Evening:
• Coffee estate visit  
• Sunset views and return

Tips:
- Transport & Safety: Prefer cab or own vehicle, avoid night driving on ghat roads.
- Weather & Clothing: Light jacket, rainwear in monsoon, comfortable walking shoes.
- Essentials & Timing: Start early, carry water, follow forest and estate rules.
`;
}

if (message.includes("hassan")) {
  return `🛕 Hassan Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Belur Chennakesava Temple  
• Breakfast near temple

Afternoon:
• Halebidu Hoysaleswara Temple  
• Lunch – local South Indian meals

Evening:
• Shettihalli Rosary Church (sunset)  
• Return to city

Tips:
- Transport & Safety: Use cab or bus between Belur–Halebidu, avoid late travel.
- Weather & Clothing: Comfortable clothes, walking shoes, sun protection.
- Essentials & Timing: Start early, carry water, respect temple rules.
`;
}
if (message.includes("tumakuru")) {
  return `⛰️ Tumakuru Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Devarayanadurga Hills  
• Breakfast near hill base

Afternoon:
• Namada Chilume  
• Lunch – local hotels

Evening:
• Siddara Betta sunset  
• Return

Tips:
- Transport & Safety: Own vehicle or cab preferred, avoid forest areas after dark.
- Weather & Clothing: Light jacket, trekking-friendly footwear.
- Essentials & Timing: Start early, carry water, follow hill safety rules.
`;
}
if (message.includes("chamarajanagar")) {
  return `🌳 Chamarajanagar Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Biligiri Ranganatha Temple (BR Hills)  
• Breakfast on the way

Afternoon:
• Temple visit & viewpoints  
• Lunch – simple local food

Evening:
• Forest viewpoints  
• Return before sunset

Tips:
- Transport & Safety: Day travel only, avoid night driving in forest roads.
- Weather & Clothing: Comfortable clothes, light jacket, good footwear.
- Essentials & Timing: Carry ID, water, follow forest department rules.
`;
}
if (message.includes("kolar")) {
  return `🛕 Kolar Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Kolaramma Temple  
• Breakfast in town

Afternoon:
• Someshwara Temple  
• Lunch – local meals

Evening:
• Antharagange Hills  
• Sunset & return

Tips:
- Transport & Safety: Use local buses/autos, avoid hill area late evening.
- Weather & Clothing: Light cotton clothes, trekking shoes for hills.
- Essentials & Timing: Start early, carry water, simple snacks.
`;
}
if (message.includes("ballari")) {
  return `🏜️ Ballari Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Ballari Fort  
• Breakfast nearby

Afternoon:
• Hampi outskirts visit  
• Lunch – local food

Evening:
• Daroji Bear Sanctuary  
• Sunset views

Tips:
- Transport & Safety: Own vehicle/cab preferred, avoid late travel.
- Weather & Clothing: Hat, sunscreen, comfortable walking shoes.
- Essentials & Timing: Carry water, ID, follow sanctuary timings.
`;
}
if (message.includes("vijayapura")) {
  return `🏰 Vijayapura Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Gol Gumbaz  
• Breakfast near monument

Afternoon:
• Ibrahim Rauza  
• Lunch – local cuisine

Evening:
• Malik-e-Maidan  
• City walk & return

Tips:
- Transport & Safety: Use autos/cabs, avoid mid-day heat.
- Weather & Clothing: Light clothes, cap, sun protection.
- Essentials & Timing: Start early, carry water and cash.
`;
}
if (message.includes("haveri")) {
  return `🛕 Haveri Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Siddhesvara Temple  
• Breakfast in town

Afternoon:
• Architectural temple visits  
• Lunch – simple local food

Evening:
• Town walk  
• Return

Tips:
- Transport & Safety: Short distance travel, autos/buses enough.
- Weather & Clothing: Comfortable cotton clothes.
- Essentials & Timing: Carry water, finish sightseeing by evening.
`;
}
if (message.includes("yadgir")) {
  return `🏞️ Yadgir Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Yadgir Fort  
• Breakfast nearby

Afternoon:
• Shahapur Fort  
• Lunch – local hotels

Evening:
• Hilltop views  
• Return before sunset

Tips:
- Transport & Safety: Day travel only, avoid isolated areas.
- Weather & Clothing: Sun protection, good footwear.
- Essentials & Timing: Carry water, start early.
`;
}
if (message.includes("dharwad")) {
  return `🎓 Dharwad Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Chandramouleshwara Temple  
• Breakfast – Dharwad pedha & tiffin

Afternoon:
• Unkal Lake  
• Lunch – local Karnataka meals

Evening:
• Kelageri Lake sunset  
• Return

Tips:
- Transport & Safety: Use city buses/autos, avoid late-night lake areas.
- Weather & Clothing: Light cotton clothes, comfortable footwear.
- Essentials & Timing: Start early, carry water and cash.
`;
}
if (message.includes("bidar")) {
  return `🏰 Bidar Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Bidar Fort  
• Breakfast near fort area

Afternoon:
• Chaubara & Madrasa Mahmud Gawan  
• Lunch – local cuisine

Evening:
• Gurudwara Nanak Jhira Sahib  
• Return

Tips:
- Transport & Safety: Use autos/cabs, avoid deserted areas after dark.
- Weather & Clothing: Comfortable clothes, walking shoes, sun protection.
- Essentials & Timing: Carry water, respect monument rules.
`;
}
if (message.includes("koppal")) {
  return `🪨 Koppal Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Mahadeva Temple (Itagi)  
• Breakfast on the way

Afternoon:
• Koppal Fort  
• Lunch – local hotels

Evening:
• Hilltop views  
• Return before sunset

Tips:
- Transport & Safety: Cab/own vehicle preferred, avoid night travel.
- Weather & Clothing: Hat, sunscreen, sturdy footwear.
- Essentials & Timing: Start early, carry water and snacks.
`;
}
if (message.includes("raichur")) {
  return `🏯 Raichur Solo Trip (1 Day)

Best Time: Oct–Feb

Morning:
• Raichur Fort  
• Breakfast in city

Afternoon:
• Ek Minar Ki Masjid  
• Lunch – local food

Evening:
• City walk  
• Return

Tips:
- Transport & Safety: Day travel only, autos/cabs preferred.
- Weather & Clothing: Light cotton clothes, sun protection.
- Essentials & Timing: Carry water, avoid peak afternoon heat.
`;
}

    if (message.includes("1 day")) {
        return `✈️ 1 Day Solo Trip Idea:
• Adventure / Nature
• Temples
• Historic Places
• Shopping Areas
• Hidden Places
• Hills`;
    }


    if (message.includes("chikkamagaluru")) {
        return `🌄 Chikkamagaluru Solo Trip(1 Day)

        Morning:
• Mullayanagiri Peak – Start the day with a refreshing trek and panoramic hill views.
• Baba Budangiri – Visit the sacred hills and enjoy misty mountain scenery.
• Seethalayanagiri View Point – A calm spot for sunrise and nature photography.

            Afternoon:
• Coffee Plantation Walk – Experience the aroma and process of Chikkamagaluru’s famous coffee.
• Hirekolale Lake – A peaceful lake surrounded by hills, perfect for relaxation.
• Chikkamagaluru Town Lunch – Try local Malnad - style food.

            Night:
• Kemmangundi Sunset Point – Enjoy a beautiful sunset over the valleys.
• Local Café / Homestay – Relax with coffee and light dinner.
• Quiet Night Walk – Enjoy the cool climate and calm streets.

💰 Budget: ₹4,000 – ₹7,000 per day`;
    }

    return "🤖 I can help you plan solo trips. Try: *1 day trip in Karnataka (city name)*";
}
