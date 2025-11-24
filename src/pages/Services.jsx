import ServicesSection from "../components/Services.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { departments, packages, faqs } from "../data/content.js";

const ServicesPage = () => (
  <>
    <PageHero
      eyebrow="Programs"
      title="Modular care journeys to fit every life event."
      description="Mix specialist visits, remote monitoring, and recovery pods—all orchestrated by a dedicated navigator."
    />
    <ServicesSection />
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Care studios"
          title="Every department feels like its own boutique experience."
          description="Connected via shared records, unified care plans, and ambient technology."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {departments.map((department) => (
            <div
              key={department.title}
              className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-alt p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Studio
                </span>
                <div className="flex gap-2 text-xs text-secondary/70">
                  {department.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/80 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary">{department.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{department.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-alt py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Memberships"
          title="Simplify billing with predictable bundles."
          description="Pick a plan and our team handles everything—benefits, records, and personalized onboarding."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.label}
              className={`rounded-3xl p-6 shadow-sm ${
                pkg.featured
                  ? "border-2 border-primary bg-white shadow-primary/20"
                  : "border border-slate-100 bg-white"
              }`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-primary">{pkg.label}</p>
              <p className="mt-4 text-3xl font-semibold text-secondary">{pkg.price}</p>
              <p className="mt-2 text-sm text-slate-600">{pkg.description}</p>
              <ul className="mt-4 space-y-3 text-sm text-secondary">
                {pkg.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <i className="fa-solid fa-check" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl divide-y divide-slate-200 rounded-3xl border border-slate-100 bg-white px-6 py-10 shadow-sm">
        <SectionHeading
          eyebrow="Questions"
          title="Everything you need before booking."
          align="center"
        />
        <div className="mt-8 space-y-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-transparent p-4 transition hover:border-primary/30">
              <summary className="cursor-pointer list-none text-lg font-semibold text-secondary">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;

