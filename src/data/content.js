export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const quickActions = [
  {
    label: "Request Appointment",
    icon: "/assets/images/service/01.svg",
    to: "/appointment",
    pill: "15 clinics",
  },
  {
    label: "Find Doctors",
    icon: "/assets/images/service/02.svg",
    to: "/doctors",
    pill: "120+ experts",
  },
  {
    label: "Emergency Call",
    icon: "/assets/images/service/03.svg",
    to: "tel:+1800100900",
    pill: "24/7 triage",
  },
  {
    label: "Digital Support",
    icon: "/assets/images/service/04.svg",
    to: "/contact",
    pill: "Virtual visits",
  },
];

export const serviceLines = [
  {
    title: "Cardiology",
    description: "Advanced cardiac care with minimally invasive options.",
    icon: "/assets/images/service/09.svg",
    slug: "cardiology",
    longDescription:
      "From preventive screenings to life-saving structural heart procedures, our cardiology pod pairs renowned specialists with intelligent monitoring tech.",
    features: [
      "Hybrid cath labs with live 3D imaging",
      "Remote monitoring wearables with AI alerts",
      "Dedicated recovery lounge with cardiac rehab coaches",
    ],
    image: "/assets/images/banner/14.webp",
  },
  {
    title: "Neurology",
    description: "Comprehensive diagnostics for complex neurological issues.",
    icon: "/assets/images/service/10.svg",
    slug: "neurology",
    longDescription:
      "Neurologists, neurosurgeons, and therapists co-design treatment plans for stroke, epilepsy, and neurodegenerative conditions.",
    features: [
      "Immersive VR neuro-therapy suites",
      "Advanced imaging and microsurgery",
      "Cognitive coaching and family education",
    ],
    image: "/assets/images/banner/15.webp",
  },
  {
    title: "Mental Health",
    description: "Whole-person support from licensed therapists and psychiatrists.",
    icon: "/assets/images/service/12.svg",
    slug: "mental-health",
    longDescription:
      "Personalized therapy, psychiatry, and community support programs to help you navigate stress, burnout, and long-term mental wellness.",
    features: [
      "Integrated therapy + medication management",
      "Digital CBT and mindfulness curriculum",
      "24/7 urgent support line",
    ],
    image: "/assets/images/banner/13.webp",
  },
  {
    title: "Orthopedics",
    description: "Joint preservation, sports medicine, and rehabilitation.",
    icon: "/assets/images/service/14.svg",
    slug: "orthopedics",
    longDescription:
      "Sports medicine physicians, surgeons, and rehab specialists collaborate within our Motion Lab to restore movement quickly and safely.",
    features: [
      "Biomechanics lab with gait analysis",
      "Robotic-assisted joint surgery",
      "Performance-focused rehab pods",
    ],
    image: "/assets/images/banner/16.webp",
  },
  {
    title: "Radiology",
    description: "High-resolution imaging with rapid turnaround times.",
    icon: "/assets/images/service/27.svg",
    slug: "radiology",
    longDescription:
      "Imaging technologists and radiologists deliver crystal-clear answers with the fastest reporting window in the region.",
    features: [
      "Low-dose CT, MRI, and PET capabilities",
      "Same-day results with clinician consult",
      "Integrated image sharing with your care team",
    ],
    image: "/assets/images/banner/17.webp",
  },
  {
    title: "Cancer Care",
    description: "Personalized treatment plans backed by leading research.",
    icon: "/assets/images/service/26.svg",
    slug: "cancer-care",
    longDescription:
      "From diagnosis to survivorship, our oncology program centralizes chemo, radiation, and clinical trial access in a calming environment.",
    features: [
      "Molecular tumor boards and precision protocols",
      "On-site infusion spa suites",
      "Family support, nutrition, and mental health services",
    ],
    image: "/assets/images/banner/18.webp",
  },
];

export const stats = [
  {
    label: "Years Experience",
    value: "25+",
    detail: "Integrating research-backed medicine with hospitality-grade service since 2010.",
  },
  {
    label: "Specialist Doctors",
    value: "120+",
    detail: "Board-certified clinicians collaborating across cardiology, neuro, oncology, and more.",
  },
  {
    label: "Patients Cared For",
    value: "2.4M",
    detail: "Personalized care plans, remote monitoring, and recovery coaching worldwide.",
  },
  {
    label: "Locations",
    value: "18",
    detail: "Connected campuses with unified records and same-day diagnostics.",
  },
];

export const coreValues = [
  {
    title: "Whole-person medicine",
    description:
      "Behavioral health, nutrition, and social work teams partner with every clinician.",
  },
  {
    title: "Precision diagnostics",
    description:
      "Same-day imaging, labs, and AI-assisted insight keep care plans moving quickly.",
  },
  {
    title: "Always-on access",
    description:
      "Virtual visits, remote monitoring, and 24/7 chat for reassurance between visits.",
  },
];

export const careTimeline = [
  {
    decade: "2010",
    title: "Clinic roots",
    description:
      "Opened the first Mediweb campus serving South Chicago with 20 clinicians.",
  },
  {
    decade: "2015",
    title: "Network expansion",
    description:
      "Launched telehealth, urgent care pods, and a multi-state clinician network.",
  },
  {
    decade: "2020",
    title: "Digital hospital",
    description:
      "Introduced remote monitoring, patient apps, and research-backed care pathways.",
  },
  {
    decade: "2025",
    title: "Global partnerships",
    description:
      "Partnering with innovators to bring advanced therapies to every campus.",
  },
];

export const servicePackages = [
  {
    name: "Preventive Plus",
    price: "$149",
    description: "Annual labs, lifestyle coaching, and smart health tracking.",
    items: ["Same-day visits", "Dedicated care guide", "Custom actionable plan"],
  },
  {
    name: "Chronic Care Pro",
    price: "$289",
    description: "Coordinated support for long-term conditions with specialists.",
    items: ["Quarterly specialist review", "Medication sync", "Remote monitoring kit"],
  },
  {
    name: "Surgical Journey",
    price: "$489",
    description: "End-to-end prep, stay, and recovery concierge services.",
    items: ["Personal navigator", "Virtual PT sessions", "Family support briefings"],
  },
];

export const specialties = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Women's Health",
  "Mental Health",
  "Oncology",
  "Radiology",
  "Pediatrics",
  "Primary Care",
];

export const faqs = [
  {
    question: "Do you accept my insurance?",
    answer:
      "Mediweb partners with most major plans plus tailored self-pay bundles. Our coordinators verify coverage in under 24 hours.",
  },
  {
    question: "How quickly can I see a specialist?",
    answer:
      "Urgent cases are matched same day. Standard referrals are scheduled within 3 business days with virtual options if you prefer.",
  },
  {
    question: "Can I move my records to Mediweb?",
    answer:
      "Yes. Sign a single consent form and we import your history, imaging, and prescriptions securely in 48 hours.",
  },
];

export const locations = [
  { city: "Chicago", address: "2702 Memory Lane, Chicago, IL 60605" },
  { city: "Austin", address: "1200 Barton Springs Rd, Austin, TX 78704" },
  { city: "Seattle", address: "88 Pike Street, Seattle, WA 98101" },
];

export const departments = [
  {
    title: "Precision Cardiology",
    copy: "Hybrid cath labs wired to remote monitoring wearables and AI triage.",
    tags: ["Wearables", "AI Reports"],
  },
  {
    title: "Neuro Recovery Studio",
    copy: "Immersive VR therapy combined with minimally invasive neurosurgery.",
    tags: ["VR Rehab", "Microsurgery"],
  },
  {
    title: "Women's Health Collective",
    copy: "Doula-backed maternity, fertility, and preventive gynecology teams.",
    tags: ["Holistic", "Fertility"],
  },
  {
    title: "Motion Lab",
    copy: "Sports medicine, rehab robotics, and orthopedic surgery under one roof.",
    tags: ["Robotics", "Sports Lab"],
  },
];

export const packages = [
  {
    label: "Essential Preventive",
    price: "$249",
    description: "Annual physical, lab panels, and lifestyle roadmap.",
    perks: ["Next-day visits", "Virtual coach", "Curated labs"],
  },
  {
    label: "Elite Care",
    price: "$699",
    description: "Same-day multispecialty access with concierge diagnostics.",
    perks: ["Priority imaging", "Care navigator", "Unlimited messaging"],
    featured: true,
  },
  {
    label: "Corporate Wellness",
    price: "Custom",
    description: "On-site clinics, wellbeing programming, and analytics.",
    perks: ["Population data", "Employee portal", "Dedicated liaison"],
  },
];

export const doctors = [
  {
    name: "Dr. Melinda Chavez",
    title: "Cardiologist",
    photo: "/assets/images/team/01.jpg",
    focus: "Structural cardiology",
    tenure: "15 yrs",
    bio: "Leads minimally invasive valve therapies, mentoring teams across three campuses.",
  },
  {
    name: "Dr. Jakira Gold",
    title: "Orthopedics",
    photo: "/assets/images/team/02.jpg",
    focus: "Sports medicine",
    tenure: "12 yrs",
    bio: "Partners with the Motion Lab to rebuild mobility with robotics and precision rehab.",
  },
  {
    name: "Dr. Anika Patel",
    title: "Neurologist",
    photo: "/assets/images/team/03.jpg",
    focus: "Neuro recovery",
    tenure: "10 yrs",
    bio: "Combines microsurgery with immersive neuro-therapy for faster cognitive recovery.",
  },
  {
    name: "Dr. Andrew Wayne",
    title: "Family Physician",
    photo: "/assets/images/team/04.jpg",
    focus: "Preventive care",
    tenure: "18 yrs",
    bio: "Designs whole-family care plans with nutritionists, therapists, and remote monitoring.",
  },
];

export const testimonials = [
  {
    quote:
      "The entire Mediweb team treated me like family. From diagnosis to recovery, every step felt coordinated and compassionate.",
    patient: "Roxanna Mills",
    role: "Cancer Survivor",
  },
  {
    quote:
      "I booked a virtual visit and had answers the same day. It's refreshing to see technology and bedside manner work together.",
    patient: "Ethan Price",
    role: "Telehealth Patient",
  },
  {
    quote:
      "Their preventive care program helped me build sustainable habits. I feel better than I have in years.",
    patient: "Caroline James",
    role: "Wellness Member",
  },
];

export const blogPosts = [
  {
    title: "How To Prepare For Your Annual Checkup",
    excerpt:
      "Simple steps to get the most out of your appointment and help clinicians spot issues early.",
    image: "/assets/images/testimonials/01.jpg",
    date: "Nov 02, 2025",
  },
  {
    title: "Why Heart Health Starts In The Kitchen",
    excerpt:
      "Cardiologists explain the Mediterranean-inspired habits they recommend to every patient.",
    image: "/assets/images/testimonials/02.png",
    date: "Oct 24, 2025",
  },
  {
    title: "The Future Of Hybrid Care",
    excerpt:
      "In-person expertise meets seamless virtual follow-ups for a better recovery experience.",
    image: "/assets/images/testimonials/03.png",
    date: "Oct 05, 2025",
  },
];

