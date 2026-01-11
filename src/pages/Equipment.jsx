import React from "react";
import { healthEquipment } from "../data/content.js";

const Equipment = () => (
  <section className="bg-white py-16 lg:py-24 min-h-screen">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Health Equipment & Machines</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {healthEquipment.map((item) => (
          <div key={item.name} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-auto object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-primary mb-2 text-center">{item.name}</h3>
            <p className="text-sm text-slate-600 mb-4 text-center">{item.description}</p>
            <a
              href={`https://wa.me/917678680052?text=${encodeURIComponent(`Hello HealthCare24Hr, I am interested in the following equipment: ${item.name}. Please provide more details.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block rounded-full bg-primary px-6 py-2 text-white font-semibold shadow hover:bg-primary/90 transition"
            >
              Enquire Now
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Equipment;
