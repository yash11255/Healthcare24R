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
              <a href={item.to} className="hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Contact
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          <li>
            <a href="tel:+917678680052" className="hover:text-white">
              +91 76786 80052
            </a>
          </li>
          <li>
            <a href="mailto:support@HealthCare24Hr.com" className="hover:text-white">
              support@HealthCare24Hr.com
            </a>
          </li>
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
    {/* Interactive Google Map */}
    <div className="mt-10 flex justify-center">
      <iframe
        title="HealthCare24Hr Location"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.208302311737!2d77.23657607549829!3d28.563507075702432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzQ4LjYiTiA3N8KwMTQnMjAuOSJF!5e0!3m2!1sen!2sin!4v1768651629618!5m2!1sen!2sin"
        width="350"
        height="200"
        style={{ border: 0, borderRadius: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full max-w-md"
      ></iframe>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
      © {new Date().getFullYear()} HealthCare24Hr. All rights reserved.
    </div>
  </footer>
);

export default Footer;

