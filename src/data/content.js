// Health Equipment/Machines Listing
export const healthEquipment = [
  {
    name: "Philips DreamStation BiPAP Pro",
    image: "/Philips DreamStation BiPAP Pro.jpeg",
    description:
      "Sleep Apnea & Snoring Device with DreamWear Under-the-Nose Nasal Mask (Medium Frame & Headgear). Online demo & installation available.",
  },
  {
    name: "Oxy-Med SleepEasy AutoCPAP Machine",
    image: "/Oxy-Med SleepEasy AutoCPAP Machine.jpeg",
    description:
      "AutoCPAP Machine with heated humidifier and mask. Ideal for sleep apnea. Includes 3-year warranty.",
  },
  {
    name: "GVS Oxygen 5L Oxy-Pure Ultra Silence Oxygen Concentrator",
    image: "/GVS Oxygen 5L Oxy-Pure Ultra Silence Oxygen Concentrator.jpeg",
    description:
      "Ultra-silent 5L oxygen concentrator. Reliable and perfect for home use.",
  },
  {
    name: "BPL Homecare Oxygen Concentrator Oxy 5 Neo",
    image: "/Bpl Homecare Oxygen Concentrators Oxy 5 Neo.jpeg",
    description:
      "Efficient and easy-to-use oxygen concentrator. Suitable for continuous home care.",
  },
];


// ✅ Navigation Links (FINAL FIX APPLIED)
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Equipment", to: "/equipment" },
  { label: "Blog", to: "/blog" },
  { label: "Jobs", to: "/careers" }, // ✅ fixed & placed before contact (better UX)
  { label: "Contact", to: "/contact" },
];


// Quick Actions
export const quickActions = [
  {
    label: "Book Caregiver",
    icon: "/assets/images/service/01.svg",
    to: "/",
    pill: "2000+ caregivers",
  },
  {
    label: "Nursing Services",
    icon: "/assets/images/service/02.svg",
    to: "/",
    pill: "Certified nurses",
  },
  {
    label: "Emergency Call",
    icon: "/assets/images/service/03.svg",
    to: "/",
    pill: "24/7 support",
  },
  {
    label: "Physiotherapy",
    icon: "/assets/images/service/04.svg",
    to: "/",
    pill: "At home",
  },
];
