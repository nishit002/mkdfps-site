/* All site content lives here so it's easy to edit. */
window.SITE = {
  brand: {
    name: "Modern KD Field",
    sub: "Public School",
    sample: false,
    tagline: "ESTD. 2004 · Govt. Recognised · Play to Class 8",
    motto: "Learn · Grow · Succeed",
    area: "Naveen Shahdara, Delhi",
    web: "mkdfps.in",
    estd: "2004",
    years: "25",
    campusPhoto: "./images/campus.jpg",
    /* Drop the client's crest PNG at images/logo.png to show the real logo.
       Leave as null to use the built-in navy+gold lockup. */
    logo: null,
  },

  /* Social + contact links used in the footer icon row.
     Replace the FB / Instagram / YouTube "#" placeholders with the
     school's real profile URLs when available. */
  social: {
    facebook:  "#",
    instagram: "#",
    youtube:   "#",
    whatsapp:  "https://wa.me/918755555525",
    phone:     "tel:+918755555525",
    email:     "mailto:mkdfieldpublicschool@gmail.com",
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "facilities", label: "Facilities" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Parents" },
    { id: "contact", label: "Contact" },
  ],

  /* Quick links (not on nav, used by sticky CTA / footer) */
  quickLinks: [
    { label: "Kidz Chill Street", anchor: "kidz" },
  ],

  /* Custom kid-centric flipbook — real page-turning storybook built on
     StPageFlip. Each page is rendered from this data (fully ours). */
  flipbook: {
    kicker: "Our little storybook",
    title: "Flip Through the Fun!",
    sub: "Turn the pages and peek inside Kidz Chill Street — drag a corner or tap the arrows.",
    pages: [
      { type: "cover", emoji: "🎪", grad: ["#3b1d6e", "#7b2ff7"],
        title: "Kidz Chill\nStreet", subtitle: "Modern KD Field Public School",
        foot: "Play · Chill · Skill", hint: "Tap a corner to open →" },
      { emoji: "👋", grad: ["#ff6fae", "#ff7a59"], title: "Welcome, friends!",
        img: "https://images.unsplash.com/photo-1533222535026-754c501569dd?auto=format&fit=crop&w=800&q=70",
        lines: ["A happy place made just for kids.", "Play, learn and grow — every day!"] },
      { emoji: "🚗", grad: ["#f7771f", "#ffb13b"], title: "Toy Jeep Rides",
        img: "https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?auto=format&fit=crop&w=800&q=70",
        lines: ["Drive your very own little jeep!", "A safe road just for you."] },
      { emoji: "🎈", grad: ["#1fa9d6", "#36c9a6"], title: "Fun Play Zone",
        img: "https://images.unsplash.com/photo-1621354598022-16599af1b8b2?auto=format&fit=crop&w=800&q=70",
        lines: ["Ball pits, splashes and surprises.", "So much to discover and giggle about!"] },
      { emoji: "🎶", grad: ["#7b2ff7", "#b14bff"], title: "Music & Dance",
        img: "https://images.unsplash.com/photo-1627764940620-90393d0e8c34?auto=format&fit=crop&w=800&q=70",
        lines: ["Hold hands, twirl and shine.", "Sing, dance and giggle out loud!"] },
      { emoji: "🎯", grad: ["#1f9e63", "#74cf4a"], title: "Games & Play",
        img: "https://images.unsplash.com/photo-1746010531981-3bd12f88e5ce?auto=format&fit=crop&w=800&q=70",
        lines: ["Swing, run, climb and win!", "Real games — no mobiles needed."] },
      { emoji: "🍿", grad: ["#ff5f6d", "#ff9e57"], title: "Happy Canteen",
        img: "https://images.unsplash.com/photo-1595183241165-f6ba98b7d4eb?auto=format&fit=crop&w=800&q=70",
        lines: ["Fresh snacks and yummy treats.", "Tasty bites for happy tummies!"] },
      { emoji: "📵", grad: ["#2f6fd0", "#19b9e6"], title: "No-Mobile Zone",
        img: "https://images.unsplash.com/photo-1747110604852-8f3edc2451ea?auto=format&fit=crop&w=800&q=70",
        lines: ["100% screen-free fun.", "Real play makes the biggest smiles."] },
      { emoji: "🎉", grad: ["#ef7a1a", "#e5325f"], title: "Grand Opening!",
        img: "https://images.unsplash.com/photo-1621354599177-7e672eb37d31?auto=format&fit=crop&w=800&q=70",
        lines: ["15 June 2026", "Open daily · 4 PM – 8 PM"] },
      { type: "cover", emoji: "📍", grad: ["#7b2ff7", "#3b1d6e"],
        title: "Come play\nwith us!", subtitle: "Panchsheel Garden, Naveen Shahdara, Delhi",
        foot: "📞 87 55 55 55 25", hint: "First 7 days FREE!" },
    ],
  },

  hero: {
    badge: "Admissions Open · 2026–27",
    img: "https://images.unsplash.com/photo-1624434350526-0ad3a4f3c1cb?auto=format&fit=crop&w=900&q=80",
    title: ["A safe, caring", "school for your", "child"],
    accentWord: 2, // which line gets the colored underline
    sub: "Govt.-recognised English-medium school in Panchsheel Garden, Naveen Shahdara. Playgroup to Class 8. Established 2004.",
    primary: "Apply for Admission",
    secondary: "View Programs",
    stats: [
      { n: "25", l: "Years since 2004" },
      { n: "1:10", l: "Teacher–child ratio" },
      { n: "100%", l: "CCTV coverage" },
    ],
  },

  marquee: ["Playgroup", "Nursery", "LKG & UKG", "Primary 1–5", "Middle 6–8", "Safe Transport", "CCTV Secured", "Trained Staff"],

  highlights: [
    { color: "coral", title: "Activity-based learning", text: "Children learn through activities, stories, art and play — not rote memorisation." },
    { color: "sky",   title: "Trained, supervised staff", text: "CCTV in every classroom and play area. Trained teachers supervise children throughout the day." },
    { color: "grass", title: "Safe pick & drop", text: "GPS-tracked school vans with a female attendant on every route." },
    { color: "grape", title: "Clean, well-lit classrooms", text: "Well-ventilated rooms, cushioned play areas and child-friendly furniture." },
  ],

  about: {
    kicker: "About our school",
    img: "https://images.unsplash.com/photo-1544773088-d142e38f5793?auto=format&fit=crop&w=1100&q=75",
    title: "About Modern KD Field Public School",
    body: [
      "Modern KD Field Public School was established in 2004 in Panchsheel Garden, Naveen Shahdara, Delhi. We are a Govt.-recognised, English-medium school offering education from Playgroup to Class 8, with a strong focus on early childhood learning.",
      "Our teachers are trained in early-childhood education. The campus is safe, hygienic and parent-friendly — you are welcome to visit and meet our staff during school hours.",
    ],
    points: [
      { color: "coral", t: "Trained teachers", d: "All teachers trained in early-childhood education." },
      { color: "sun",   t: "Open for parents", d: "Visit the campus anytime. Regular updates on your child's progress." },
      { color: "grass", t: "Clean & hygienic", d: "RO drinking water, sanitised toys and clean washrooms." },
      { color: "sky",   t: "Strong foundation", d: "Clear path from Playgroup to Class 8 with a solid primary base." },
    ],
    values: [
      { color: "coral", t: "Discipline" },
      { color: "sun",   t: "Care" },
      { color: "grass", t: "Curiosity" },
      { color: "sky",   t: "Confidence" },
      { color: "grape", t: "Respect" },
    ],
  },

  programs: {
    kicker: "Our programs",
    title: "Programs from Playgroup to Class 8",
    sub: "Playgroup and Nursery are our specialty. We focus on giving young children a strong, happy start before they move into formal schooling.",
    featured: [
      {
        color: "coral", tag: "Most popular", name: "Playgroup",
        age: "1.5 – 2.5 years",
        img: "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?auto=format&fit=crop&w=1100&q=75",
        text: "A gentle first step away from home. Activity-based learning with rhymes, sensory play and free play helps children settle in.",
        bullets: ["Settling-in support", "Sensory play activities", "Toilet-training help", "Half-day timing"],
      },
      {
        color: "grape", tag: "Admissions open", name: "Nursery",
        age: "2.5 – 3.5 years",
        img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1100&q=75",
        text: "Children learn colours, shapes, sounds and stories. Speech, motor skills and social confidence are built through daily activities.",
        bullets: ["Early language & phonics", "Art, music & movement", "Sharing & social skills", "School-readiness"],
      },
    ],
    ladder: [
      { color: "sun",   name: "LKG & UKG", age: "3.5 – 5 yrs", text: "Pre-reading, basic numbers and activity-based learning." },
      { color: "sky",   name: "Primary 1–5", age: "5 – 10 yrs", text: "Strong base in English, Hindi, Maths, EVS and General Knowledge." },
      { color: "grass", name: "Middle 6–8", age: "10 – 13 yrs", text: "Core subjects: Science, Maths, English, Hindi, Social Studies and Computers." },
    ],
  },

  facilities: {
    kicker: "Facilities & safety",
    img: "https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?auto=format&fit=crop&w=1100&q=75",
    title: "Facilities & Safety",
    sub: "Your child's safety is our top priority. Here is what we have in place.",
    items: [
      { color: "sky",   t: "CCTV coverage", d: "Cameras in every classroom, corridor and play area. Recorded and monitored through the day." },
      { color: "coral", t: "Dedicated Medical Aid", d: "On-campus first-aid and dressing room. MBBS/MD doctor guidance and instant online video consultation available till 8 PM." },
      { color: "grass", t: "GPS school transport", d: "GPS-tracked vans, trained drivers and a female attendant on every route." },
      { color: "sun",   t: "Children's canteen", d: "On-campus canteen with hygienic popcorn, cold drinks and snacks (chargeable)." },
      { color: "grape", t: "Hygiene standards", d: "RO drinking water, clean washrooms and sanitised toys and equipment." },
      { color: "coral", t: "Controlled entry & exit", d: "Visitor screening at the gate. Children are released only to authorised parents or guardians." },
      { color: "sun",   t: "Safe play area", d: "Cushioned floors, rounded edges and age-appropriate, sanitised equipment." },
      { color: "sky",   t: "Kidz Chill Street access", d: "Access to our screen-free play zone — toy jeep rides, dolphin zone, live music and more." },
    ],
  },

  gallery: {
    kicker: "Life at Modern KD",
    title: "Photos from our campus",
    sub: "Classrooms, play zones, activities and events.",
    items: [
      { label: "Classroom", span: "tall", color: "coral", img: "https://images.unsplash.com/photo-1587323655395-b1c77a12c89a?auto=format&fit=crop&w=900&q=75" },
      { label: "Free play", span: "wide", color: "sky", img: "https://images.unsplash.com/photo-1501686637-b7aa9c48a882?auto=format&fit=crop&w=1300&q=75" },
      { label: "Art & craft", span: "", color: "sun", img: "https://images.unsplash.com/photo-1560130958-0ea787c275de?auto=format&fit=crop&w=800&q=75" },
      { label: "Story time", span: "", color: "grass", img: "https://images.unsplash.com/photo-1586694680938-9682c9e1f736?auto=format&fit=crop&w=800&q=75" },
      { label: "Show & tell day", span: "wide", color: "grape", img: "https://images.unsplash.com/photo-1600880291319-1a7499c191e8?auto=format&fit=crop&w=1300&q=75" },
      { label: "Crayons & colours", span: "tall", color: "grass", img: "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?auto=format&fit=crop&w=900&q=75" },
      { label: "Learning toys", span: "", color: "coral", img: "https://images.unsplash.com/photo-1601339434203-130259102db6?auto=format&fit=crop&w=800&q=75" },
      { label: "Montessori corner", span: "", color: "sky", img: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?auto=format&fit=crop&w=800&q=75" },
    ],
  },

  admissions: {
    kicker: "Admissions 2026–27",
    title: "Apply for Admission",
    sub: "Seats are filling for Playgroup and Nursery. Fill the form and our team will call you back.",
    steps: [
      { color: "coral", n: "1", t: "Enquiry", d: "Fill the form or call us." },
      { color: "sun",   n: "2", t: "School visit", d: "Tour the campus and meet the teachers." },
      { color: "grass", n: "3", t: "Apply", d: "Submit the admission form and documents." },
      { color: "sky",   n: "4", t: "Confirmed", d: "Pay the fees and start school." },
    ],
    classes: ["Playgroup", "Nursery", "LKG", "UKG", "Class 1–5", "Class 6–8"],
  },

  testimonials: [
    { color: "coral", name: "Priya S.", role: "Parent — Nursery", quote: "My daughter settled in within two weeks. The teachers send daily updates and the CCTV access gives us peace of mind." },
    { color: "sky",   name: "Rahul M.", role: "Parent — Playgroup", quote: "We chose Modern KD for the safety standards. The play area is clean and the van GPS tracking is reliable." },
    { color: "grass", name: "Aisha K.", role: "Parent — Class 2", quote: "We have been here since Playgroup. The balance between activities and academics works well for our son." },
    { color: "grape", name: "Vikram R.", role: "Parent — Nursery", quote: "Clean campus and helpful staff. The admission process was straightforward and our questions were answered clearly." },
  ],

  contact: {
    kicker: "Visit / Contact",
    title: "Visit or contact us",
    sub: "Visit the campus, call us, or send a message. We will be happy to help.",
    address: "Modern KD Field Public School Campus, Panchsheel Garden, Naveen Shahdara, Delhi – 110032",
    phone: "+91 87 55 55 55 25",
    whatsapp: "+91 87 55 55 55 25",
    email: "mkdfieldpublicschool@gmail.com",
    web: "www.mkdfps.in",
    hours: "School: Mon–Sat 8 AM – 4 PM · Kidz Chill Street: Daily 4 PM – 8 PM",
  },

  kidzStreet: {
    kicker: "New initiative",
    title: "Kidz Chill Street",
    subEn: "Play, learn and grow — every evening, without mobile phones.",
    subHi: "100% No Mobile Zone",
    note: "A 100% screen-free play zone inside our campus. Mobile phones are kept in lockers at the entrance, so children play and learn through real activities — not screens.",
    opening: "Grand Opening · 15 June 2026",
    hours: "Open daily · 4:00 PM – 8:00 PM · 365 days a year",
    offer: "Launch offer: First 7 days FREE",
    offerSub: "Daily Pass and Monthly Subscription available at affordable rates.",
    photo: "Free photography — our team captures moments and sends them to parents on WhatsApp.",
    attractions: [
      { color: "coral", t: "Toy Jeep Rides", d: "A safe driving track where children learn to drive toy jeeps under supervision." },
      { color: "sky",   t: "Remote-Control Dolphin Zone", d: "A water zone where children operate a remote-controlled dolphin toy." },
      { color: "grass", t: "Physical Games & Activities", d: "Traditional and modern physical games that keep children active and fit." },
      { color: "grape", t: "Live Music & Dance Stage", d: "A safe stage where children sing, dance and perform." },
      { color: "sun",   t: "Happy Vibes Canteen", d: "Popcorn, cold drinks and snacks served fresh and hygienically (chargeable)." },
      { color: "sky",   t: "Kids Photography", d: "Our photographers capture moments and send them to parents on WhatsApp — free of cost." },
    ],
    future: [
      { color: "grape", t: "Comedy Mirror Alley", d: "Curved mirrors that change how children look — a fun photo zone." },
      { color: "grass", t: "Touch & Feel Pets Corner", d: "Rabbits, guinea pigs and love-birds in a safe, legally approved enclosure." },
      { color: "sun",   t: "Storybook Library & Role-Play Town", d: "A library and role-play sets where children try out roles like doctor, shopkeeper or chef." },
    ],
  },
};
