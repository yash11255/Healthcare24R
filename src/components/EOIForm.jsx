import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const interestAreas = [
  "Hospital partnership",
  "Corporate wellness",
  "Telehealth rollout",
  "International patient desk",
  "Other (specify below)",
];

const EOIForm = ({ presetTopic }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    interest: presetTopic || interestAreas[0],
    background: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const GOOGLE_SCRIPT_URL =
    import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
    "https://script.google.com/macros/s/DEPLOYMENT_ID/exec";

  const options = presetTopic
    ? [presetTopic, ...interestAreas.filter((area) => area !== presetTopic)]
    : interestAreas;
  const defaultValue = presetTopic || interestAreas[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");
    try {
      // Format WhatsApp message
      const message =
        `*New EOI Request*\n` +
        `-----------------------------\n` +
        `*Full Name:* ${formData.fullName}\n` +
        `*Organization:* ${formData.organization}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Interest Area:* ${formData.interest}\n` +
        `*Background & Goals:* ${formData.background}`;

      // WhatsApp number (provided by user)
      const whatsappNumber = "917678680052";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp link in new tab
      window.open(waUrl, "_blank");

      setStatus("Thanks! We received your request and will reply within 48 hours.");
      setFormData({
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        interest: defaultValue,
        background: "",
      });
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-secondary via-[#060b25] to-secondary py-16 lg:py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Expression of Interest"
            title="Request a consultation tailored to your organization."
            description="Tell us about your team, patient population, or program you want to launch. We’ll assemble a proposal and an expert panel within 48 hours."
          />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">What to expect</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {[
                "Dedicated partnership lead",
                "Outcome modeling & pilot roadmap",
                "Tech + clinical integration checklist",
                "On-site or virtual workshop",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <i className="fa-solid fa-check" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[32px] bg-white/10 p-8 shadow-xl backdrop-blur">
          <div className="grid gap-5 sm:grid-cols-2">
            {["Full Name", "Organization"].map((label) => {
              const key = label === "Full Name" ? "fullName" : "organization";
              return (
                <label key={label} className="text-sm font-medium text-white/80">
                  {label}
                  <input
                    required
                    name={key}
                    type="text"
                    value={formData[key]}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                    placeholder={label}
                  />
                </label>
              );
            })}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Email", "Phone"].map((label) => {
              const key = label.toLowerCase();
              return (
                <label key={label} className="text-sm font-medium text-white/80">
                  {label}
                  <input
                    required
                    name={key}
                    type={label === "Email" ? "email" : "tel"}
                    value={formData[key]}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                    placeholder={label}
                  />
                </label>
              );
            })}
          </div>
          <label className="text-sm font-medium text-white/80">
            Area of interest
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none"
            >
              {options.map((area) => (
                <option key={area} value={area} className="text-secondary">
                  {area}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-white/80">
            Background & goals
            <textarea
              rows={4}
              name="background"
              value={formData.background}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
              placeholder="Describe your current initiatives, timeline, and the outcome you expect from HealthCare24Hr..."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Request consultation"}
          </button>
          {status && <p className="text-sm text-center text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default EOIForm;

