import ServicesSection from "../components/Services.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { departments, faqs } from "../data/content.js";

const ServicesPage = () => (
  <>
    {/* 1. PAGE HERO: Optimized for primary keywords */}
    <PageHero
      eyebrow="Integrated Care Pathways"
      // H1 Optimization: Target "Modular Healthcare," "Indian Wellness"
      title="Modular, precision healthcare tailored for your life's milestones."
      description="Seamlessly blend specialist consultations, remote biometrics, and dedicated recovery spaces—all guided by your personal Care Navigator. **Discover the future of Indian integrated wellness.**"
    />
    
    {/* NOTE ON IMAGES: Place a prominent, high-quality image here showing a modern Indian clinic or a diverse set of Indian patients/doctors.
    * <img src="path/to/indian-healthcare-facility.jpg" alt="Modern integrated Indian healthcare facility and services" className="w-full h-auto object-cover" />
    */}
    
    <ServicesSection />
    
    {/* 2. CARE STUDIOS SECTION: Content optimized for "Specialty Clinics" */}
    <section className="bg-white py-20 lg:py-32"> 
      <div className="mx-auto max-w-7xl px-4"> 
        <SectionHeading
          eyebrow="Specialty Care Studios"
          // H2 Optimization: Target "Specialty Clinics," "Boutique Experience"
          title="Every department is a center of excellence and tranquility."
          description="Powered by unified electronic health records and ambient technology for a truly cohesive patient journey. **Explore our boutique specialty clinics across India.**"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"> 
          {departments.map((department) => (
            <div
              key={department.title}
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-xl transition duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/15"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-extrabold text-secondary group-hover:text-primary transition duration-300">
                  {department.title}
                </h3>
              </div>
              
              <p className="mt-4 text-base text-slate-600">
                {department.copy}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-secondary/80 mt-6 pt-4 border-t border-slate-100"> 
                <span className="text-sm font-semibold uppercase tracking-widest text-primary/80">
                    Studio:
                </span>
                {department.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-50 px-3 py-1 border border-slate-200 transition duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* 4. FAQ SECTION: Content optimized for "Booking Questions" */}
    {/* <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-5xl"> 
        <SectionHeading
          eyebrow="Essential Questions"
          // H2 Optimization: Target "Booking Questions," "Getting Started"
          title="Clarity before commitment."
          description="Find answers to common questions about our services and how to get started with **India's leading integrated care provider**."
          align="center"
        />
        
        <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-2xl">
          {faqs.map((faq) => (
            <details 
              key={faq.question} 
              className="group py-5 transition duration-500 open:bg-primary/5 px-4 -mx-4 rounded-lg" 
            >
              <summary className="cursor-pointer list-none flex justify-between items-center text-xl font-semibold text-secondary hover:text-primary transition duration-300">
                {faq.question}
                <span className="ml-4 flex-shrink-0 text-primary transition-transform duration-500 group-open:rotate-[135deg]">
                    <i className="fa-solid fa-plus text-lg"></i>
                </span>
              </summary>
              <p className="mt-4 text-base text-slate-700 pr-10 border-t border-slate-200/50 pt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section> */}
  </>
);

export default ServicesPage;