import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { packages } from "../data/content.js";

const AppointmentPage = () => (
  <>
    <PageHero
      eyebrow="Book"
      title="Reserve a visit or virtual consult."
      description="Tell us what you need. We’ll respond within one business day with times and instructions."
    />
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Request form"
            title="Your care navigator starts here."
            description="Securely share a few details so we can match you with the right specialty team."
          />
          <form className="mt-8 space-y-5">
            {["Full Name", "Email", "Phone"].map((label) => (
              <label key={label} className="block text-sm font-medium text-secondary">
                {label}
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-secondary focus:border-primary focus:outline-none"
                  placeholder={label}
                />
              </label>
            ))}
            <label className="block text-sm font-medium text-secondary">
              Preferred department
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-secondary focus:border-primary focus:outline-none">
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Women’s Health</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-secondary">
              Notes
              <textarea
                rows={4}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-secondary focus:border-primary focus:outline-none"
                placeholder="Describe symptoms, goals, or referral details..."
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
            >
              Submit Request
            </button>
          </form>
        </div>
        <div className="rounded-[32px] bg-secondary/95 p-8 text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Bundles</p>
          <h3 className="mt-3 text-2xl font-semibold">Choose a fast-track plan</h3>
          <p className="mt-3 text-white/70">
            Upgrade from one-off visits to curated experiences coordinated by a dedicated navigator.
          </p>
          <div className="mt-6 space-y-5">
            {packages.map((pkg) => (
              <div key={pkg.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">{pkg.label}</p>
                    <p className="text-lg font-semibold">{pkg.price}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-white/70">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AppointmentPage;

