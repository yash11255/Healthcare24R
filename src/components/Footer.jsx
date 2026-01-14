import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <img src="/Screenshot 2025-12-04 at 11.50.25 PM.png" alt="HealthCare24Hr" className="h-16" />
        <p className="mt-4 text-sm text-white/70">
          HealthCare24Hr brings professional caregivers, nurses, and healthcare services to your home with compassion and excellence.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Navigate
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-white/60">
          {[
            { label: "Services", to: "/services" },
            { label: "Caregivers", to: "/doctors" },
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
          {/* Phone number removed */}
          <li>support@HealthCare24Hr.in</li>
          <li>Delhi NCR</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Newsletter
        </h4>
        <p className="mt-4 text-sm text-white/70">
          Healthcare tips and service updates delivered monthly.
        </p>
        <form className="mt-4 space-y-3" onSubmit={e => {
          e.preventDefault();
          const email = e.target.elements[0].value;
          const message =
            `*Newsletter Subscription*\n` +
            `-----------------------------\n` +
            `*Email:* ${email}`;
          const whatsappNumber = "917678680052";
          const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
          window.open(waUrl, "_blank");
        }}>
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
      © {new Date().getFullYear()} HealthCare24Hr. All rights reserved.
    </div>
  </footer>
);

export default Footer;

