/* All site content lives here so it's easy to edit. */
window.SITE = {
  brand: {
    name: "MKD Field",
    sub: "Public School",
    sample: false,
    tagline: "Play • Nursery • Class 1–8",
    area: "Shahdara, Delhi",
    web: "mkdfps.in",
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

  hero: {
    badge: "Admissions Open 2026–27",
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=75",
    title: ["A bright, safe", "start for your", "little one"],
    accentWord: 2, // which line gets the colored underline
    sub: "Joyful early learning for Playgroup & Nursery — plus a caring journey all the way to Class 8. Right here in Shahdara, Delhi.",
    primary: "Enquire for Admission",
    secondary: "Explore Programs",
    stats: [
      { n: "18+", l: "Years of care" },
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
      "MKD Field Public School began with one simple belief — that a child's first years should be full of warmth, wonder and play. We are a play-to-Class-8 school in Shahdara, Delhi, with a special love for our youngest learners in Playgroup and Nursery.",
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
      { color: "coral", t: "Secure entry & exit", d: "Controlled gates and a strict authorised-person-only release policy." },
      { color: "grass", t: "GPS school transport", d: "Tracked vans with trained drivers and a female attendant on every route." },
      { color: "sun",   t: "Soft, safe play area", d: "Cushioned floors, rounded edges and age-appropriate, sanitised equipment." },
      { color: "grape", t: "Healthy & hygienic", d: "RO drinking water, clean washrooms and nutritious meal options." },
      { color: "coral", t: "First-aid & care", d: "On-site first-aid, trained staff and quick parent communication." },
    ],
  },

  gallery: {
    kicker: "Life at MKD Field",
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
    { color: "sky",   name: "Rahul M.", role: "Father of a Playgroup child", quote: "We chose MKD Field for the safety and stayed for the warmth. The play area is spotless and the transport van tracking is brilliant." },
    { color: "grass", name: "Aisha K.", role: "Mother of a Class 2 student", quote: "We've been here since playgroup. The way they balance fun and learning is wonderful — my son actually looks forward to school." },
    { color: "grape", name: "Vikram R.", role: "Father of a Nursery child", quote: "Clean, safe and genuinely caring. The admission process was simple and the staff answered all our worried-parent questions patiently." },
  ],

  contact: {
    kicker: "Visit / Contact",
    title: "Come say hello",
    sub: "We'd love to show you around. Walk in, call, or drop us a message anytime.",
    address: "X-13, 1st Floor, Shahdara, Delhi – 110032",
    phone: "+91 87555 55525",
    whatsapp: "+91 87555 55525",
    altphone: "+91 87554 43322",
    email: "mkdfieldpublicschool@gmail.com",
    web: "mkdfps.in",
    hours: "Mon – Sat · 8:00 AM – 4:00 PM",
  },
};
