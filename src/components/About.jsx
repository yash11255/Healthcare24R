import SectionHeading from "./SectionHeading.jsx";

const About = () => (
  <section
    id="about"
    className="bg-gradient-to-b from-white via-white to-alt py-16 lg:py-24"
  >
    <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="About HealthCare24Hr"
          title="India's most trusted home healthcare service provider."
          description="We connect you with verified caregivers, professional nurses, and expert physiotherapists who deliver compassionate care in the comfort of your home. Every caregiver is thoroughly screened and trained to provide world-class healthcare services."
        />
        <ul className="space-y-4 text-slate-600">
          {[
            "100% court and criminal verified caregivers and nurses.",
            "Customized 8hr/12hr/24hr care plans tailored to your needs.",
            "365 days dedicated care manager for seamless coordination.",
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
            <p className="text-4xl font-semibold text-secondary">100+</p>
            <p className="text-sm text-slate-500">verified caregivers</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-secondary">4.8/5</p>
            <p className="text-sm text-slate-500">customer rating</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="/appointment"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
          >
            Book Service Now
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
          src="https://img.freepik.com/premium-photo/confident-indian-nurses-with-stethoscopes-hospital_822916-8655.jpg?w=360"
          alt="Care team"
          className="w-full rounded-[32px] object-cover shadow-2xl"
        />
        <div className="absolute -bottom-8 left-6 rounded-3xl bg-white p-6 shadow-xl">
          <p className="text-sm uppercase tracking-widest text-primary">Trusted</p>
          <p className="text-2xl font-semibold text-secondary">Happy Families</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

