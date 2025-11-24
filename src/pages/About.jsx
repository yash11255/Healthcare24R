import About from "../components/About.jsx";
import Stats from "../components/Stats.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { coreValues, careTimeline } from "../data/content.js";

const AboutPage = () => (
  <>
    <PageHero
      eyebrow="Our Story"
      title="Care redesigned for the modern patient."
      description="We are a collective of researchers, technologists, and clinicians building the health system we always wished existed."
    />
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Operating principles"
          title="Three rules keep Mediweb radically patient-first."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-slate-100 bg-gradient-to-b from-white via-white to-alt p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-secondary">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <About />
    <section className="bg-alt py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Evolution"
          title="Built in the community, scaling globally."
          description="Every milestone reflects new technology, new leaders, and new campuses joined under one promise—human-centered medicine."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {careTimeline.map((item) => (
            <div
              key={item.decade}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {item.decade}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-secondary">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40 opacity-0 transition hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
    <Stats />
  </>
);

export default AboutPage;
