import SectionHeading from "./SectionHeading.jsx";
import { testimonials } from "../data/content.js";

const Testimonials = () => (
  <section id="testimonials" className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeading
        eyebrow="Patient Voices"
        title="Care experiences that feel personal."
        description="Real stories from people who trusted us with their most important health moments."
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.patient}
            className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <p className="text-lg text-secondary">“{testimonial.quote}”</p>
            <div className="mt-auto pt-6">
              <p className="font-semibold text-secondary">{testimonial.patient}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

