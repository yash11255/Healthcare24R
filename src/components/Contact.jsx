const Contact = () => (
  <section id="contact" className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-secondary px-6 py-12 text-white lg:px-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-semibold">Same-day support for urgent needs.</h2>
          <p className="mt-4 text-white/70">
            Call or leave a message and a care navigator will respond within one business day.
          </p>
          <div className="mt-8 space-y-4 text-white">
            <p className="flex items-center gap-3">
              <i className="fa-regular fa-phone text-primary" />
              1-800-100-900
            </p>
            <p className="flex items-center gap-3">
              <i className="fa-regular fa-envelope text-primary" />
              hello@mediweb.care
            </p>
            <p className="flex items-center gap-3">
              <i className="fa-regular fa-location-dot text-primary" />
              2702 Memory Lane, Chicago, IL 60605
            </p>
          </div>
        </div>
        <form className="space-y-6">
          {["Full Name", "Email", "Phone"].map((placeholder) => (
            <label key={placeholder} className="block">
              <span className="text-sm font-medium text-white/80">{placeholder}</span>
              <input
                type="text"
                placeholder={placeholder}
                className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
              />
            </label>
          ))}
          <label className="block">
            <span className="text-sm font-medium text-white/80">Tell us about your needs</span>
            <textarea
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
              placeholder="Describe your symptoms or goals..."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;

