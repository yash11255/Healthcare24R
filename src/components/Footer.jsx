import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <img src="/assets/images/logo/logo.svg" alt="Mediweb" className="h-10" />
        <p className="mt-4 text-sm text-white/70">
          Mediweb delivers seamless healthcare journeys powered by coordinated teams and
          digital convenience.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Navigate
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-white/60">
          {[
            { label: "Services", to: "/services" },
            { label: "Doctors", to: "/doctors" },
            { label: "Testimonials", to: "/about" },
            { label: "Blog", to: "/blog" },
          ].map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Contact
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          <li>1-800-100-900</li>
          <li>hello@mediweb.care</li>
          <li>2702 Memory Lane, Chicago</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Newsletter
        </h4>
        <p className="mt-4 text-sm text-white/70">
          Healthy tips and clinic updates delivered monthly.
        </p>
        <form className="mt-4 space-y-3">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder:text-white/60 focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
      © {new Date().getFullYear()} Mediweb. All rights reserved.
    </div>
  </footer>
);

export default Footer;

