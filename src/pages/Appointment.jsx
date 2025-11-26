import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { packages } from "../data/content.js";

const AppointmentPage = () => (
  <>
    {/* PAGE HERO: Updated Content for SEO and clarity */}
    <PageHero
      eyebrow="Book Consultation"
      // SEO-Optimized Title: Target "Reserve Appointment," "Virtual Consult"
      title="Reserve your visit or secure a virtual consultation."
      description="Tell us your needs. Our dedicated care team will respond within one business day with confirmed times and comprehensive pre-visit instructions."
    />
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2"> {/* Increased max-width and gap */}
        
        {/* LEFT COLUMN: Request Form */}
        <div className="p-0"> {/* Removed padding from the container */}
          <SectionHeading
            eyebrow="Secure Request Form"
            // SEO-Optimized Title: Target "Care Navigator"
            title="Your personalized care navigator starts here."
            description="Securely share a few essential details so we can match you immediately with the right specialty team for your condition."
          />
          <form className="mt-10 space-y-6 rounded-3xl border border-slate-200 p-8 shadow-xl">
            {["Full Name", "Email", "Phone"].map((label) => (
              <label key={label} className="block text-sm font-semibold text-secondary">
                {label}
                <input
                  type={label === "Email" ? "email" : label === "Phone" ? "tel" : "text"}
                  className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base text-secondary placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:outline-none transition duration-200"
                  placeholder={label}
                  required 
                />
              </label>
            ))}
            <label className="block text-sm font-semibold text-secondary">
              Preferred Specialty Department
              <select className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-secondary focus:border-primary focus:ring-primary focus:outline-none appearance-none transition duration-200">
                <option value="" disabled selected>Select a Department</option> {/* Added default prompt */}
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Women’s Health</option>
                <option>General Practice</option>
              </select>
              {/* Optional: Add a custom dropdown arrow icon here */}
            </label>
            <label className="block text-sm font-semibold text-secondary">
              Reason for Visit / Notes
              <textarea
                rows={5}
                className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base text-secondary placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:outline-none transition duration-200"
                placeholder="Describe symptoms, goals, or referral details for optimal preparation..."
                required
              />
            </label>
            <button
              type="submit"
              // Primary Blue background
              className="w-full rounded-xl bg-primary px-6 py-3.5 text-lg font-bold text-white shadow-2xl shadow-primary/40 transition duration-300 hover:bg-primary/90 hover:shadow-primary/50"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>
        
        {/* RIGHT COLUMN: Packages / Membership Promotion */}
        <div 
          // Dark Blue-Gray background from logo
          className="rounded-[32px] bg-secondary p-10 text-white shadow-2xl" 
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent-green font-semibold">
            Membership Bundles
          </p>
          <h3 className="mt-4 text-3xl font-bold">
            Accelerate your care with a fast-track plan.
          </h3>
          <p className="mt-3 text-white/70">
            Upgrade from single visits to curated, end-to-end care experiences coordinated by a dedicated, 24/7 care navigator.
          </p>
          <div className="mt-8 space-y-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.label} 
                // Subtle border using the primary blue color
                className="rounded-2xl border border-primary/20 bg-white/5 p-5 transition duration-300 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    {/* Accent Green for the label */}
                    <p className="text-xs uppercase tracking-[0.3em] text-accent-green font-semibold">
                      {pkg.label}
                    </p>
                    <p className="mt-1 text-xl font-bold">
                      {pkg.price}
                    </p>
                  </div>
                  {/* Call-to-action link using Primary Blue color */}
                  <a 
                    href="#"
                    className="text-primary hover:text-primary/80 font-medium text-sm transition duration-300"
                  >
                    View Details &rarr;
                  </a>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AppointmentPage;