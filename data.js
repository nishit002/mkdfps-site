/* All site content lives here so it's easy to edit. */
window.SITE = {
  brand: {
    name: "Modern KD",
    sub: "Public School",
    sample: false,
    tagline: "ESTD. 2004 · Govt. Recognised · Play to Class 8",
    motto: "Learn · Grow · Succeed",
    area: "Naveen Shahdara, Delhi",
    web: "mkdfps.in",
    estd: "2004",
    years: "25",
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

  hero: {
    badge: "25th Year · Admissions Open 2026–27",
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=75",
    title: ["A bright, safe", "start for your", "little one"],
    accentWord: 2, // which line gets the colored underline
    sub: "Joyful early learning for Playgroup & Nursery — plus a caring journey all the way to Class 8. Celebrating 25 years of education in Naveen Shahdara, Delhi.",
    primary: "Enquire for Admission",
    secondary: "Explore Programs",
    stats: [
      { n: "25", l: "Years of care" },
      { n: "1:10", l: "Teacher ratio" },
      { n: "100%", l: "CCTV covered" },
    ],
  },

  marquee: ["Playgroup", "Nursery", "LKG & UKG", "Primary 1–5", "Middle 6–8", "Safe Transport", "CCTV Secured", "Trained Staff"],

  highlights: [
    { color: "coral", title: "Play-based Learning", text: "Children learn through stories, songs, art and hands-on play — never rote." },
    { color: "sky",   title: "Always Supervised", text: "CCTV across every room & play area, with caring, trained staff at all times." },
    { color: "grass", title: "Safe Pick & Drop", text: "GPS-tracked vans, female attendants and a strict, secure release policy." },
    { color: "grape", title: "Happy, Bright Spaces", text: "Sunlit classrooms, soft-floor play zones and child-sized everything." },
  ],

  about: {
    kicker: "About our school",
    img: "https://images.unsplash.com/photo-1544773088-d142e38f5793?auto=format&fit=crop&w=1100&q=75",
    title: "Where little ones feel at home",
    body: [
      "Modern KD Public School began in 2004 with one simple belief — that a child's first years should be full of warmth, wonder and play. Twenty-five years on, we are a Govt.-recognised, play-to-Class-8 school in Panchsheel Garden, Naveen Shahdara, Delhi, with a special love for our youngest learners in Playgroup and Nursery.",
      "Our teachers are trained in early-childhood care, our spaces are designed to be safe and joyful, and our doors are always open to parents. Every day, we help curious little minds grow confident, kind and ready for the world.",
    ],
    points: [
      { color: "coral", t: "Caring, trained teachers", d: "Warm educators trained in early-childhood development." },
      { color: "sun",   t: "Parents always welcome", d: "Open-door policy and regular updates on your child." },
      { color: "grass", t: "Clean & hygienic", d: "RO water, sanitised toys and healthy meal options." },
      { color: "sky",   t: "Learning that lasts", d: "A smooth path from play to a strong primary foundation." },
    ],
    values: [
      { color: "coral", t: "Play" },
      { color: "sun",   t: "Care" },
      { color: "grass", t: "Curiosity" },
      { color: "sky",   t: "Confidence" },
      { color: "grape", t: "Kindness" },
    ],
  },

  programs: {
    kicker: "Our programs",
    title: "From first steps to Class 8",
    sub: "Our Playgroup and Nursery years are the heart of what we do — a gentle, joyful start that sets children up to thrive.",
    featured: [
      {
        color: "coral", tag: "Most loved", name: "Playgroup",
        age: "1.5 – 2.5 years",
        img: "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?auto=format&fit=crop&w=1100&q=75",
        text: "A soft, loving first step away from home. Sensory play, rhymes, free play and lots of cuddles help tiny ones feel safe and curious.",
        bullets: ["Settling-in support", "Sensory & messy play", "Toilet-training help", "Short, happy days"],
      },
      {
        color: "grape", tag: "Admissions open", name: "Nursery",
        age: "2.5 – 3.5 years",
        img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1100&q=75",
        text: "Where friendships begin. Children explore colours, shapes, sounds and stories while building early speech, motor skills and confidence.",
        bullets: ["Early language & phonics", "Art, music & movement", "Sharing & social skills", "School-readiness"],
      },
    ],
    ladder: [
      { color: "sun",   name: "LKG & UKG", age: "3.5 – 5 yrs", text: "Pre-reading, numbers and a love for learning." },
      { color: "sky",   name: "Primary 1–5", age: "5 – 10 yrs", text: "Strong foundations in language, maths and discovery." },
      { color: "grass", name: "Middle 6–8", age: "10 – 13 yrs", text: "Confident thinkers ready for the bigger world." },
    ],
  },

  facilities: {
    kicker: "Facilities & safety",
    img: "https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?auto=format&fit=crop&w=1100&q=75",
    title: "Safe hands, every single moment",
    sub: "Your child's safety is the foundation of everything. Here's how we keep every day secure, clean and joyful.",
    items: [
      { color: "sky",   t: "CCTV everywhere", d: "Cameras across classrooms, corridors and play areas, monitored through the day." },
      { color: "coral", t: "Dedicated Medical Aid", d: "Well-equipped first-aid & dressing room with MBBS/MD doctor guidance and instant online video consultation — every day till 8 PM." },
      { color: "grass", t: "GPS school transport", d: "Tracked vans with trained drivers and a female attendant on every route." },
      { color: "sun",   t: "Children's Canteen", d: "Modern in-campus canteen with hygienic popcorn, cold drinks and snacks (chargeable, parents' choice)." },
      { color: "grape", t: "Healthy & hygienic", d: "RO drinking water, clean washrooms and sanitised toys & equipment." },
      { color: "coral", t: "Secure entry & exit", d: "Controlled gates and a strict authorised-person-only release policy." },
      { color: "sun",   t: "Soft, safe play area", d: "Cushioned floors, rounded edges and age-appropriate, sanitised equipment." },
      { color: "sky",   t: "Kidz Chill Street access", d: "Members of our flagship 100% screen-free play street — toy jeep rides, dolphin zone, live music and more." },
    ],
  },

  gallery: {
    kicker: "Life at Modern KD",
    title: "Smiles, colours & busy little hands",
    sub: "A peek into our classrooms, play zones and celebration days.",
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
    title: "Let's begin your child's journey",
    sub: "Seats are filling for Playgroup & Nursery. Tell us a little about your child and our team will call you back.",
    steps: [
      { color: "coral", n: "1", t: "Enquire", d: "Fill the quick form or call us." },
      { color: "sun",   n: "2", t: "Visit us", d: "Tour the school and meet our teachers." },
      { color: "grass", n: "3", t: "Apply", d: "Submit a simple admission form." },
      { color: "sky",   n: "4", t: "Welcome!", d: "Confirm the seat and join the family." },
    ],
    classes: ["Playgroup", "Nursery", "LKG", "UKG", "Class 1–5", "Class 6–8"],
  },

  testimonials: [
    { color: "coral", name: "Priya S.", role: "Mother of a Nursery child", quote: "My daughter cried on day one and now she refuses to come home! The teachers are so loving and I get updates every day. The CCTV access gives me real peace of mind." },
    { color: "sky",   name: "Rahul M.", role: "Father of a Playgroup child", quote: "We chose Modern KD for the safety and stayed for the warmth. The play area is spotless and the transport van tracking is brilliant." },
    { color: "grass", name: "Aisha K.", role: "Mother of a Class 2 student", quote: "We've been here since playgroup. The way they balance fun and learning is wonderful — my son actually looks forward to school." },
    { color: "grape", name: "Vikram R.", role: "Father of a Nursery child", quote: "Clean, safe and genuinely caring. The admission process was simple and the staff answered all our worried-parent questions patiently." },
  ],

  contact: {
    kicker: "Visit / Contact",
    title: "Come say hello",
    sub: "We'd love to show you around. Walk in, call, or drop us a message anytime.",
    address: "Modern KD Public School Campus, Panchsheel Garden, Naveen Shahdara, Delhi – 110032",
    phone: "+91 87 55 55 55 25",
    whatsapp: "+91 87 55 55 55 25",
    email: "mkdfieldpublicschool@gmail.com",
    web: "www.mkdfps.in",
    hours: "School: Mon–Sat 8 AM – 4 PM · Kidz Chill Street: Daily 4 PM – 8 PM",
  },

  kidzStreet: {
    kicker: "World-first initiative",
    title: "Introducing Kidz Chill Street",
    subEn: "Play, Learn & Grow — fun every day, without mobiles.",
    subHi: "मज़ा हर रोज़, बिना मोबाइल के!",
    note: "India's first 100% screen-free play street, right inside our campus. Phones are safely locked away on entry — kids step into a magical world of real-world play, creativity and learning.",
    opening: "Grand Opening · 15 June 2026",
    hours: "Open daily · 4:00 PM – 8:00 PM · 365 days",
    offer: "Special launch offer: 7 DAYS FREE!",
    offerSub: "Daily Pass & Monthly Subscription available — both designed to be very affordable.",
    photo: "FREE professional photography — beautiful moments captured & sent straight to parents on WhatsApp.",
    attractions: [
      { color: "coral", t: "Toy Jeep Rides", d: "Kids' own safe & thrilling driving street where they actually learn to drive toy jeeps." },
      { color: "sky",   t: "Remote-Control Dolphin Zone", d: "A magical water zone where children steer a swimming dolphin by remote." },
      { color: "grass", t: "Physical Games & Fun Activities", d: "Old-school and modern physical games that keep little bodies & minds fit." },
      { color: "grape", t: "Live Music & Baby Dance", d: "A safe stage for tiny ones to dance, sing and let their hidden talent out." },
      { color: "sun",   t: "Happy Vibes Canteen", d: "Hygienic popcorn, cold drinks and snacks — fresh, tasty and lovingly served." },
      { color: "sky",   t: "Kids Photography", d: "Professional photographers capture moments and send them straight to parents on WhatsApp — free." },
    ],
    future: [
      { color: "grape", t: "Hansgulla Gali (Comedy Mirror Alley)", d: "Magical mirrors that make kids laugh till they fall — a perfect photo zone." },
      { color: "grass", t: "Touch & Feel Pets Corner", d: "White rabbits, guinea pigs and colourful love-birds in a fully legal, safe enclosure." },
      { color: "sun",   t: "Kids Storybook Library & Role-Play Town", d: "Story tree, supermarket and doctor-clinic role-play sets — kids become chef, doctor and shopkeeper." },
    ],
  },
};
