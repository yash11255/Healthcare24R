import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { doctors } from "../data/content.js";

const Doctors = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setIsAtStart(el.scrollLeft <= 8);
      setIsAtEnd(el.scrollLeft >= maxScrollLeft - 8);
    };
    handleScroll();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollBy = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section id="doctors" className="bg-alt py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Expert Team"
          title="Meet the physicians championing your health."
          description="Board-certified specialists, allied health, and research fellows work in pods so every case benefits from collective insight."
        />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-secondary/70">
            Hover to learn more or swipe through the carousel to find your specialist.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Scroll doctors left"
              onClick={() => scrollBy(-1)}
              className={`h-11 w-11 rounded-full border border-secondary/20 text-secondary transition hover:border-primary hover:text-primary ${
                isAtStart ? "opacity-40" : ""
              }`}
              disabled={isAtStart}
            >
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button
              type="button"
              aria-label="Scroll doctors right"
              onClick={() => scrollBy(1)}
              className={`h-11 w-11 rounded-full border border-secondary/20 text-secondary transition hover:border-primary hover:text-primary ${
                isAtEnd ? "opacity-40" : ""
              }`}
              disabled={isAtEnd}
            >
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group relative min-w-[260px] snap-center rounded-[32px] border border-slate-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:border-primary/40 sm:min-w-[320px] lg:min-w-[360px]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">{doctor.name}</h3>
                  <p className="text-sm text-slate-500">{doctor.title}</p>
                </div>
                <span className="rounded-full bg-alt px-3 py-1 text-xs font-semibold text-secondary/70">
                  {doctor.tenure}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-primary">{doctor.focus}</p>
              <p className="mt-2 text-sm text-slate-600">{doctor.bio}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Book with {doctor.name.split(" ")[1]}
                <i className="fas fa-arrow-right" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

