import SectionHeading from "./SectionHeading.jsx";

const interestAreas = [
  "Hospital partnership",
  "Corporate wellness",
  "Telehealth rollout",
  "International patient desk",
  "Other (specify below)",
];

const EOIForm = ({ presetTopic }) => {
  const options = presetTopic
    ? [presetTopic, ...interestAreas.filter((area) => area !== presetTopic)]
    : interestAreas;
  const defaultValue = presetTopic || interestAreas[0];

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
        <form className="space-y-5 rounded-[32px] bg-white/10 p-8 shadow-xl backdrop-blur">
          <div className="grid gap-5 sm:grid-cols-2">
            {["Full Name", "Organization"].map((label) => (
              <label key={label} className="text-sm font-medium text-white/80">
                {label}
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                  placeholder={label}
                />
              </label>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Email", "Phone"].map((label) => (
              <label key={label} className="text-sm font-medium text-white/80">
                {label}
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                  placeholder={label}
                />
              </label>
            ))}
          </div>
          <label className="text-sm font-medium text-white/80">
            Area of interest
            <select
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none"
              defaultValue={defaultValue}
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
              className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
              placeholder="Describe your current initiatives, timeline, and the outcome you expect from Mediweb..."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
          >
            Request consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default EOIForm;

