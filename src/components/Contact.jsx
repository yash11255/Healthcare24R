import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop reload
    setSubmitted(true); // fake success
  };

  return (
    <section id="contact" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          {/* Left Side - Image Card */}
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
            <img
              src="/nurses.png"
              alt="Healthcare Professional"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-8 text-white">
              <h3 className="text-2xl font-semibold">
                Professional Care at Your Doorstep
              </h3>
              <p className="mt-2 text-white/80">
                Trusted by 50,000+ families across India
              </p>
            </div>
          </div>

          {/* Right Side - Form Card */}
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-secondary via-[#0c1a4b] to-secondary/90 px-8 py-12 text-white shadow-2xl lg:px-12">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Get Started
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Request a Callback
              </h2>
              <p className="mt-4 text-white/70">
                Fill in your details and our care manager will contact you within 24 hours.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted ? (
              <div className="rounded-2xl bg-green-500/20 border border-green-400 px-6 py-8 text-center">
                <h3 className="text-xl font-semibold text-green-300">
                  ✅ Submitted Successfully
                </h3>
                <p className="mt-2 text-white/80">
                  Thank you! Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="text-sm font-medium text-white/80">Name *</span>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-white/80">Phone *</span>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-white/80">Select Your City *</span>
                  <select
                    required
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                  >
                    <option value="" className="text-secondary">Choose your city</option>
                    <option className="text-secondary">Delhi</option>
                    <option className="text-secondary">Mumbai</option>
                    <option className="text-secondary">Bangalore</option>
                    <option className="text-secondary">Hyderabad</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-white/80">Requirements</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-primary focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
                >
                  Request a Callback
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;