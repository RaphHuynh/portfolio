import React from 'react';
import '../../assets/fonts/Satoshi-Black.otf';

const formations = [
  {
    annee: "2024 — Aujourd'hui",
    diplome: "Master Informatique, spécialité Intelligence Artificielle",
    etablissement: "Université de Reims Champagne-Ardenne",
    description: "Alternance en Data Science, spécialisé en IA appliquée à la santé."
  },
  {
    annee: "2019 — 2024",
    diplome: "Licence Informatique",
    etablissement: "Université de Reims Champagne-Ardenne",
    description: "Parcours classique"
  },
  {
    annee: "2018 — 2019",
    diplome: "Licence EEEA",
    etablissement: "Université de Reims Champagne-Ardenne",
    description: "Parcours classique"
  },
  {
    annee: "2017 — 2018",
    diplome: "Baccalauréat Scientifique",
    etablissement: "Lycée Jean Jaurès, Reims",
    description: "Spécialité Mathématiques"
  }
];

export default function Formation() {
  return (
    <section className="min-h-screen w-full bg-[#19191c] text-[#d1d1d6] px-6 md:px-28 py-20 font-satoshi" id="Formation">
      <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-4 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
        Formation
      </h2>
      <div className="border-b border-stone-700 mb-12 w-full" />
      <div className="flex flex-col gap-16 md:gap-24">
        {formations.map((f, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Colonne diplôme */}
            <div className="md:col-span-3 flex flex-col">
              <span className="text-xl md:text-3xl font-semibold text-[#e5e5e7] leading-tight mb-2">{f.diplome}</span>
            </div>
            {/* Colonne infos */}
            <div className="md:col-span-3 flex flex-col gap-4 text-sm text-[#b0b0b8]">
              <div className="text-base text-[#b0b0b8] mt-2">{f.etablissement}</div>
              <div><span className="font-semibold text-[#d1d1d6]">Année</span> : {f.annee}</div>
            </div>
            {/* Colonne description */}
            <div className="md:col-span-6 text-base leading-relaxed text-[#d1d1d6]">
              <blockquote className="bg-[#23232a] rounded-lg p-4 md:p-6 text-base text-[#d1d1d6] italic border-l-4 border-[var(--primary-color)]">
                {f.description}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 