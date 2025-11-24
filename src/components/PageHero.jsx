import { Link } from "react-router-dom";

const PageHero = ({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-alt via-white to-primary/10 py-16 lg:py-24">
    <div className="absolute inset-0 opacity-40">
      <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-[140px]" />
    </div>
    <div className="relative mx-auto max-w-5xl px-4 text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-4 font-heading text-4xl font-semibold text-secondary md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">{description}</p>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {primaryAction && (
          <Link
            to={primaryAction.to}
            className="rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-secondary/30 transition hover:-translate-y-0.5"
          >
            {primaryAction.label}
          </Link>
        )}
        {secondaryAction && (
          <Link
            to={secondaryAction.to}
            className="rounded-full border border-secondary/30 px-8 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary"
          >
            {secondaryAction.label}
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;

