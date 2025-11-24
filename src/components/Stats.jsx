import { stats } from "../data/content.js";

const Stats = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-[#050d2b] to-secondary py-20 text-white">
    <div className="pointer-events-none absolute inset-0 opacity-40">
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-primary/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-[140px]" />
    </div>
    <div className="relative mx-auto max-w-5xl px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
        Outcomes
      </p>
      <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight md:text-4xl">
        Clinical excellence backed by measurable impact.
      </h2>
      <p className="mt-4 text-sm text-white/70">
        Every number reflects a multidisciplinary team working in sync—from triage nurses to surgeons to virtual navigators.
      </p>
    </div>
    <div className="relative mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-primary/40"
        >
          <p className="text-4xl font-semibold text-white">{stat.value}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            {stat.label}
          </p>
          <p className="mt-3 text-sm text-white/80">{stat.detail}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;

