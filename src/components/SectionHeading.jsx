const SectionHeading = ({ eyebrow, title, description, align = "left" }) => (
  <div
    className={`max-w-3xl ${
      align === "center" ? "text-center mx-auto" : "text-left"
    }`}
  >
    {eyebrow && (
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
    )}
    <h2 className="mt-3 font-heading text-3xl font-semibold text-secondary md:text-4xl">
      {title}
    </h2>
    {description && <p className="mt-4 text-base text-slate-600">{description}</p>}
  </div>
);

export default SectionHeading;

