import DoctorsSection from "../components/Doctors.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { specialties, servicePackages } from "../data/content.js";

const DoctorsPage = () => (
  <>
    <PageHero
      eyebrow="Our clinicians"
      title="A multidisciplinary roster focused on outcomes."
      description="Physicians partner with behavioral health, nutrition, and tech teams so every patient gets a circle of care—not a single visit."
    />
    <DoctorsSection />
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Specialties"
          title="Expertise across preventative, acute, and chronic care."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <div
              key={specialty}
              className="rounded-2xl border border-slate-100 bg-alt px-4 py-3 text-sm font-semibold text-secondary"
            >
              {specialty}
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-secondary py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Care kits"
          title="Your lead physician assembles the right team and resources."
          description="Choose a pathway or let us customize one after your first visit."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicePackages.map((pkg) => (
            <div key={pkg.name} className="rounded-3xl bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">{pkg.name}</p>
              <p className="mt-4 text-3xl font-semibold">{pkg.price}</p>
              <p className="mt-2 text-sm text-white/80">{pkg.description}</p>
              <ul className="mt-4 space-y-3 text-sm text-white">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <i className="fa-solid fa-check" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default DoctorsPage;

