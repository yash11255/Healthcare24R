import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const AppointmentPage = () => (
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

            {/* Departments */}
            <label className="block text-sm font-semibold text-secondary">
              Preferred Service
              <select className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-secondary focus:border-primary focus:ring-primary focus:outline-none appearance-none transition duration-200">
                <option disabled selected>Select a Service</option>
                <option>Caregiver Support</option>
                <option>Nursing Care</option>
                <option>Physiotherapy</option>
                <option>Doctor Consultation</option>
                <option>General Inquiry</option>
              </select>
            </label>

            {/* Message */}
            <label className="block text-sm font-semibold text-secondary">
              Reason for Visit / Notes
              <textarea
                rows={5}
                className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base text-secondary placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:outline-none transition duration-200"
                placeholder="Describe symptoms, concerns, or service requirements..."
                required
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3.5 text-lg font-bold text-white shadow-2xl shadow-primary/40 transition duration-300 hover:bg-primary/90 hover:shadow-primary/50"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN — NO PLANS, ONLY INFO */}
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
            {/* Step 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-lg font-semibold">1. Our team reviews your details</p>
              <p className="text-sm text-white/60 mt-1">
                A care representative checks your requirements and assigns the best available professional.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-lg font-semibold">2. You receive timing options</p>
              <p className="text-sm text-white/60 mt-1">
                We call or email you within one business day with available appointment slots.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-lg font-semibold">3. Appointment confirmation</p>
              <p className="text-sm text-white/60 mt-1">
                Once you confirm the date and service type, we finalize your booking instantly.
              </p>
            </div>

            {/* Step 4 */}
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

export default AppointmentPage;