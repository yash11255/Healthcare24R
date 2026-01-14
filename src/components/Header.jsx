import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/content.js";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive ? "text-primary bg-primary/10" : "text-secondary/80 hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white">
      <div className="bg-secondary text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-primary" />
               Delhi | NCR
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-clock text-primary" />
              Available 24/7
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="inline-flex items-center gap-2" href="tel:+918069048802">
              {/* Phone icon and Call Us removed */}
            </a>
            <div className="flex items-center gap-2 text-white">
              {["facebook-f", "linkedin-in", "youtube", "twitter"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/30 text-xs transition hover:bg-white hover:text-secondary"
                >
                  <i className={`fa-brands fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/Screenshot 2025-12-04 at 11.50.25 PM.png" alt="HealthCare24Hr logo" className="h-12 w-auto" />
        </Link>

        <nav className="ml-auto hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            if (link.label === "Contact") {
              return (
                <a
                  key={link.label}
                  href="https://wa.me/917678680052?text=Hello%20HealthCare24Hr%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses({ isActive: false })}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <NavLink key={link.label} to={link.to} className={linkClasses} end={link.to === "/"} onClick={() => setMenuOpen(false)}>
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <Link
          to="/appointment"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 md:inline-flex"
        >
          Book Service
        </Link>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-secondary md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-lg" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.label === "Contact") {
                return (
                  <a
                    key={link.label}
                    href="https://wa.me/917678680052?text=Hello%20HealthCare24Hr%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses({ isActive: false })}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <NavLink key={link.label} to={link.to} className={linkClasses} onClick={() => setMenuOpen(false)} end={link.to === "/"}>
                  {link.label}
                </NavLink>
              );
            })}
            <Link
              to="/appointment"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;