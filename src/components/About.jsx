import SectionHeading from "./SectionHeading.jsx";

const About = () => (
  <section
    id="about"
    className="bg-gradient-to-b from-white via-white to-alt py-16 lg:py-24"
  >
    <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="About Mediweb"
          title="Trusted healthcare powered by compassion and science."
          description="We combine world-class clinicians, modern facilities, and proactive care plans to keep families healthy. Our multidisciplinary team collaborates daily so every patient feels heard, informed, and supported."
        />
        <ul className="space-y-4 text-slate-600">
          {[
            "Same-day appointments across our primary specialties.",
            "Integrated diagnostic labs and imaging for faster answers.",
            "Personal health teams with nurses, nutritionists, and care guides.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                <i className="fa-solid fa-check" />
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-4xl font-semibold text-secondary">98%</p>
            <p className="text-sm text-slate-500">patient satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-secondary">4.9/5</p>
            <p className="text-sm text-slate-500">experience scores</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
          >
            Book a Visit
          </a>
          <a
            href="#services"
            className="rounded-full border border-secondary/20 px-8 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary"
          >
            View Services
          </a>
        </div>
      </div>
      <div className="relative">
        <img
          src="/assets/images/about/01.png"
          alt="Care team"
          className="w-full rounded-[32px] object-cover shadow-2xl"
        />
        <div className="absolute -bottom-8 left-6 rounded-3xl bg-white p-6 shadow-xl">
          <p className="text-sm uppercase tracking-widest text-primary">Award</p>
          <p className="text-2xl font-semibold text-secondary">Top Regional Hospital 2024</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

