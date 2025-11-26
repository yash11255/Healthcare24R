import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";

const servicesData = {
  caregiver: {
    title: "Hire our Verified Caregivers",
    description: "Hire skilled and trusted caregivers from HealthCare24Hr to provide best home healthcare for your loved ones.",
    features: [
      "Oral hygiene and bed bath/sponge bath",
      "Cleanliness of patients room",
      "Feeding and bathroom assistance",
      "Light massage (10-15 mins)"
    ],
    icon: "/assets/images/service/09.svg",
    image: "/caregiver.png"
  },
  nurse: {
    title: "Choose our Expert Nurses",
    description: "Find skilled and reliable nurses who are certified to handle medical conditions.",
    features: [
      "Ryles tube insertion and feeding",
      "Caring and dressing wounds",
      "Intravenous medication and IV fluid management",
      "Monitoring of vital signs"
    ],
    icon: "/assets/images/service/10.svg",
    image: "/nurse.png"
  },
  physiotherapy: {
    title: "Book our Experienced Physiotherapists",
    description: "Get special treatment just for you and heal faster at home with HealthCare24Hr's trusted & experienced physiotherapy services.",
    features: [
      "Therapy for general injuries",
      "Treatment of frequent body pains",
      "Physiotherapy for stroke & spinal cord injuries",
      "Speedy recovery after surgery"
    ],
    icon: "/assets/images/service/14.svg",
    image: "/physiotherapy.png"
  },
  babyCare: {
    title: "Experienced Baby Sitter and Nanny",
    description: "HealthCare24Hr has caring and experienced baby sitters who are experts in taking care of Baby.",
    features: [
      "Bathing and dressing",
      "Children's laundry",
      "Changing diapers and potty-training*",
      "Organizing bedrooms/toys"
    ],
    icon: "/assets/images/service/12.svg",
    image: "/babycare.png"
  }
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("caregiver");
  const currentService = servicesData[activeTab];

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Our Services"
          title="Professional Home Healthcare Services"
          description="Choose from our comprehensive range of verified and trained healthcare professionals to provide the best care at home."
          align="center"
        />
        
        {/* Tab Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { key: "caregiver", label: "Caregiver" },
            { key: "nurse", label: "Nurse" },
            { key: "physiotherapy", label: "Physiotherapy" },
            { key: "babyCare", label: "Baby Care" }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-8 py-3 text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "border border-slate-200 bg-white text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Service Details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 flex-shrink-0 rounded-2xl bg-primary/10 p-3">
                <img src={currentService.icon} alt="" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-secondary">{currentService.title}</h3>
                <p className="mt-3 text-lg text-slate-600">{currentService.description}</p>
              </div>
            </div>

            <ul className="space-y-4">
              {currentService.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <i className="fa-solid fa-check text-xs" />
                  </span>
                  <p className="text-slate-700">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
              >
                Book Now
                <i className="fa-solid fa-arrow-right" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-secondary/20 px-8 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary">
                <i className="fas fa-phone" />
                Call Us
              </button>
            </div>
          </div>

          {/* Right Side - Consultation Form */}
          <div className="relative h-96 lg:h-[500px]">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full rounded-[32px] object-contain shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur p-6 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Available 24/7
              </p>
              <p className="mt-2 text-xl font-semibold text-secondary">
                Professional Home Healthcare
              </p>
              <Link
                to="/appointment"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
              >
                Book Service Now
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;