import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";
import { serviceLines } from "../data/content.js";

const Services = () => (
  <section id="services" className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeading
        eyebrow="Our Services"
        title="Multidisciplinary programs under one roof."
        description="Choose from advanced specialties designed to work together—so your care plan stays coordinated even when your needs change."
        align="center"
      />
      <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-secondary/70">
        {["Same-day imaging", "Hybrid visits", "Care navigators"].map((pill) => (
          <span key={pill} className="rounded-full border border-slate-200/80 bg-alt px-4 py-2">
            {pill}
          </span>
        ))}
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="grid gap-8 sm:grid-cols-2">
          {serviceLines.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-[32px] border border-slate-100 bg-gradient-to-br from-white to-alt p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-2xl bg-white p-3 shadow-sm">
                  <img src={service.icon} alt="" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <div className="flex flex-wrap gap-3 text-secondary/70">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs">
                    <i className="fa-regular fa-shield-heart" />
                    Accredited
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs">
                    <i className="fa-regular fa-users-medical" />
                    Team based
                  </span>
                </div>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-primary"
                >
                  Explore
                  <i className="fa-solid fa-arrow-up-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="rounded-[32px] border border-slate-100 bg-gradient-to-b from-secondary via-[#0c1a4b] to-secondary/90 p-8 text-white shadow-2xl lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Consultation
          </p>
          <h3 className="mt-4 text-2xl font-semibold">
            Request a custom treatment plan.
          </h3>
          <p className="mt-3 text-sm text-white/80">
            Tell us your goals and preferred timeframe. Our care concierge will reply with curated specialists and next steps within 12 hours.
          </p>
          <form className="mt-6 space-y-4">
            {["Full Name", "Email"].map((label) => (
              <label key={label} className="block text-sm font-medium text-white/80">
                {label}
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                  placeholder={label}
                />
              </label>
            ))}
            <label className="block text-sm font-medium text-white/80">
              Service focus
              <select className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none">
                {serviceLines.map((service) => (
                  <option key={service.title} className="text-secondary">
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-white/80">
              Notes
              <textarea
                rows={3}
                className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                placeholder="Share symptoms, goals, or preferred appointment window..."
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
            >
              Request consultation
            </button>
            <p className="text-center text-xs text-white/70">
              By submitting you agree to be contacted by Mediweb’s care concierge.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Services;

