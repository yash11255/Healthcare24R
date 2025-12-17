import { useState } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwglE6vEsX7-5Sg84d7OfBGbBdAdCmBjOanwNYhhHwlrP006cg2oqz91PeJ6OH_SoU9tw/exec";

const Hero = () => {
  const [formData, setFormData] = useState({ email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const qs = new URLSearchParams({
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }).toString();

    try {
      await fetch(`${GOOGLE_SCRIPT_URL}?${qs}`);
      setStatus("✅ Submitted — we’ll notify you soon!");
      setFormData({ email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("✅ Submitted — we’ll notify you soon!");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#dfe8ff,_#f9fbff)] h-screen flex items-center justify-center text-center">
      <div className="space-y-8 max-w-xl mx-auto">
        <h1 className="font-heading text-5xl font-bold text-secondary sm:text-6xl">
          Coming Soon
        </h1>
        <p className="text-lg text-slate-600">
          We're gearing up to launch something meaningful. Be the first to know!
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-white/70 backdrop-blur p-6 rounded-2xl shadow-md border border-slate-200">
          <input
            name="email"
            type="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            placeholder="Your Message or Query"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          <button type="submit" className="w-full rounded-full bg-primary px-8 py-3 text-white font-semibold shadow-lg shadow-primary/40 transition hover:-translate-y-0.5">
            Notify Me
          </button>
        </form>

        {status && <div className="mt-4 text-sm text-secondary">{status}</div>}
      </div>
    </section>
  );
};

export default Hero;