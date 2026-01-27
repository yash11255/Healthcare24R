import { motion } from "framer-motion";

const tags = ["Verified Caregivers", "24/7 Support", "Transparent Pricing"];
const MotionDiv = motion.div;

const Hero = () => (
  <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#dfe8ff,_#f9fbff)]">
    {/* Background */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
    </div>

    <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
      
      {/* Left Content */}
      <MotionDiv
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-secondary shadow-sm">
          <img src="/assets/images/banner/icon/08.svg" alt="" className="h-6 w-6" />
          Trusted Home Healthcare Services
        </p>

        <h1 className="font-heading text-4xl font-semibold text-secondary sm:text-5xl">
          Healthcare at Home, Right When You Need It
        </h1>

        <p className="text-lg text-slate-600">
          HealthCare24Hr delivers professional caregivers, nurses, and medical services to your doorstep. 
          Compassion-driven care designed for comfort, safety, and dignity.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/40 transition hover:-translate-y-0.5"
          >
            Request a Callback
            <i className="fas fa-arrow-right" />
          </a>
        </div>

        {/* Trust Section (No Numbers) */}
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-lg font-semibold text-secondary">Trusted Professionals</p>
            <p className="text-sm text-slate-600">Caregivers you can rely on</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-secondary">Expanding Across NCR</p>
            <p className="text-sm text-slate-600">Serving more families every day</p>
          </div>
        </div>
      </MotionDiv>

      {/* Right Image + Bubbles */}
      <MotionDiv
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative mx-auto flex max-w-md items-end">
          <img
            src="/image-removebg-preview (19).png"
            alt="Caregiver"
            className="w-full drop-shadow-2xl"
          />

          {["Elderly Care", "Nursing", "Physiotherapy"].map((label, index) => (
            <div
              key={label}
              className={`absolute rounded-2xl bg-white/90 px-4 py-3 text-sm shadow-xl backdrop-blur ${
                index === 0
                  ? "left-4 top-6"
                  : index === 1
                  ? "right-4 top-1/4"
                  : "bottom-6 right-6"
              }`}
            >
              <div className="font-semibold text-secondary">{label}</div>
              <p className="text-xs text-slate-500">Professional care</p>
            </div>
          ))}
        </div>

        {/* Mini Cards (Rewritten Without Stats) */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 text-center shadow-sm">
            <p className="text-sm font-semibold text-secondary">Quality Care</p>
            <p className="text-xs text-slate-500">Delivered with compassion</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 text-center shadow-sm">
            <p className="text-sm font-semibold text-secondary">NCR Coverage</p>
            <p className="text-xs text-slate-500">Expanding rapidly</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 text-center shadow-sm">
            <p className="text-sm font-semibold text-secondary">Dedicated Support</p>
            <p className="text-xs text-slate-500">Always here for you</p>
          </div>
        </div>
      </MotionDiv>
    </div>
  </section>
);

export default Hero;