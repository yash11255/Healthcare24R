import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const serviceOptions = [
  "Caregiver Support",
  "Nursing Care",
  "Physiotherapy",
  "Doctor Consultation",
  "General Inquiry",
];

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      // Professional WhatsApp Message Formatting
      const message = [
        `*NEW APPOINTMENT REQUEST*`,
        `──────────────────────────`,
        ` *Patient Name:* ${formData.fullName}`,
        ` *Email:* ${formData.email}`,
        ` *Phone:* ${formData.phone}`,
        ` *Service:* ${formData.service}`,
        `──────────────────────────`,
        ` *Notes & Requirements:*`,
        `${formData.notes}`,
        `──────────────────────────`,
        `_Sent via Website Booking Portal_`
      ].join('\n');

      // WhatsApp number 
      const whatsappNumber = "917678680052";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp link
      window.open(waUrl, "_blank");

      setStatus("Success! Your request has been prepared for WhatsApp.");
      setFormData({ fullName: "", email: "", phone: "", service: "", notes: "" });
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Book Consultation"
        title="Reserve your visit or secure a virtual consultation."
        description="Tell us your needs. Our care team will respond within one business day with available timings and next steps."
      />

      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          {/* LEFT COLUMN — FORM */}
          <div>
            <SectionHeading
              eyebrow="Secure Request Form"
              title="Your personalized care navigator starts here."
              description="Share a few basic details so we can understand your requirements and connect you with the right expert."
            />

            <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-3xl border border-slate-200 p-8 shadow-xl">
              {/* Full Name */}
              <label className="block text-sm font-semibold text-secondary">
                Full Name
                <input
                  name="fullName"
                  type="text"
                  className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base text-secondary placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:outline-none transition duration-200"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </label>

              {/* Email */}
              <label className="block text-sm font-semibold text-secondary">
                Email
                <input
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base text-secondary placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:outline-none transition duration-200"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              {/* Phone */}
              <label className="block text-sm font-semibold text-secondary">
                Phone
                <input
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base text-secondary placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:outline-none transition duration-200"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              {/* Departments */}
              <label className="block text-sm font-semibold text-secondary">
                Preferred Service
                <select
                  name="service"
                  className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-secondary focus:border-primary focus:ring-primary focus:outline-none appearance-none transition duration-200"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a Service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>

              {/* Message */}
              <label className="block text-sm font-semibold text-secondary">
                Reason for Visit / Notes
                <textarea
                  name="notes"
                  rows={5}
                  className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base text-secondary placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:outline-none transition duration-200"
                  placeholder="Describe symptoms, concerns, or service requirements..."
                  required
                  value={formData.notes}
                  onChange={handleChange}
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-6 py-3.5 text-lg font-bold text-white shadow-2xl shadow-primary/40 transition duration-300 hover:bg-primary/90 hover:shadow-primary/50 disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? "Processing..." : "Submit Appointment Request"}
              </button>

              {status && (
                <p className={`text-center text-sm mt-2 font-medium ${status.includes('Success') ? 'text-green-600' : 'text-secondary'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT COLUMN — INFO */}
          <div className="rounded-[32px] bg-secondary p-10 text-white shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent-green font-semibold">
              What Happens Next?
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              A simple process designed for your comfort.
            </h3>

            <p className="mt-3 text-white/70">
              Since we are building personalised care services, we do not offer fixed plans yet. 
              Instead, our medical coordinator will guide you after reviewing your request.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-lg font-semibold">1. Our team reviews your details</p>
                <p className="text-sm text-white/60 mt-1">
                  A care representative checks your requirements and assigns the best available professional.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-lg font-semibold">2. You receive timing options</p>
                <p className="text-sm text-white/60 mt-1">
                  We call or email you within one business day with available appointment slots.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-lg font-semibold">3. Appointment confirmation</p>
                <p className="text-sm text-white/60 mt-1">
                  Once you confirm the date and service type, we finalize your booking instantly.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-lg font-semibold">4. Pre-visit guidance</p>
                <p className="text-sm text-white/60 mt-1">
                  You receive instructions on preparation, what to expect, and who will visit you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentPage;