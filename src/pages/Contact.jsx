import ContactSection from "../components/Contact.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { faqs, locations } from "../data/content.js";

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Connect"
      title="Concierge support for every question."
      description="Tell us about your health goals, schedule needs, or partnership ideas—we’ll route you to the right team."
    />
    <ContactSection />
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Visit us"
          title="Campus locations with cohesive standards."
          description="Same great experience, from urgent care pods to research hospitals."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {locations.map((location) => (
            <div key={location.city} className="rounded-3xl border border-slate-100 bg-alt p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">{location.city}</p>
              <p className="mt-3 text-sm text-secondary">{location.address}</p>
            </div>
          ))}
        </div>
        {/* Embedded Google Map */}
        <div className="mt-12 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3704.970239818596!2d77.23657607549829!3d28.563506975702484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzQ4LjYiTiA3N8KwMTQnMjAuOSJF!5e1!3m2!1sen!2sin!4v1768110015176!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: '1.5rem', width: '100%', maxWidth: 600 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HealthCare24Hr Location Map"
          ></iframe>
        </div>
      </div>
    </section>
    <section className="bg-alt py-16">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white px-6 py-10 shadow-sm">
        <SectionHeading
          eyebrow="FAQs"
          title="Answers before you reach out."
          align="center"
        />
        <div className="mt-8 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-100 bg-white/70 p-5">
              <h3 className="text-lg font-semibold text-secondary">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;

