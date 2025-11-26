import { Navigate, useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import EOIForm from "../components/EOIForm.jsx";
import { serviceLines } from "../data/content.js";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceLines.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = serviceLines.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Specialty Care"
        title={service.title}
        description={service.longDescription}
        primaryAction={{ label: `Book ${service.title}`, to: "/appointment" }}
        secondaryAction={{ label: "Talk to concierge", to: "/contact" }}
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="overflow-hidden rounded-[36px] bg-alt">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <SectionHeading
              eyebrow="What to expect"
              title="A dedicated pod built around your needs."
              description="From intake to recovery, you’ll have a dedicated navigator plus access to all HealthCare24Hr support services."
            />
            <ul className="mt-6 space-y-4 text-slate-600">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-2xl bg-alt/60 p-4">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <i className="fa-solid fa-check" />
                  </span>
                  <p className="text-sm">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary">Coordinated Services</h3>
              <p className="mt-3 text-sm text-slate-600">
                Choose from diagnostics, outpatient visits, inpatient procedures, and ongoing recovery—all managed by the same core team.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Same-day diagnostics", "Integrated pharmacy", "Virtual updates", "Family support"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-100 bg-alt px-4 py-3 text-sm font-semibold text-secondary"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-100 bg-alt p-8 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Related programs
              </p>
              <div className="mt-4 space-y-4">
                {relatedServices.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-secondary transition hover:-translate-y-0.5 hover:text-primary"
                  >
                    {item.title}
                    <i className="fas fa-arrow-right" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <EOIForm presetTopic={service.title} />
    </>
  );
};

export default ServiceDetails;

