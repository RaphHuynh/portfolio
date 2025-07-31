import React from 'react';
import '../../assets/fonts/Satoshi-Black.otf';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { projets } from '../../data/projets';

const Work = () => {
  return (
    <section className="min-h-screen bg-[#181a1b] flex flex-col items-center pt-20 md:pt-28" id="Projet">
      <div className="w-full px-6 md:px-28">
        {/* En-tête de la section */}
        <h2 className="w-fit text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-4 text-left highlight-blue" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
          Projets
        </h2>
        <div className="border-b border-stone-700 mb-12 w-full" />
        
        <p className="text-lg md:text-xl text-stone-300 mb-12 leading-relaxed">
          Voici quelques projets personnels et des projets réalisés en freelance.
        </p>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projets.map((projet, index) => (
            <div key={index} className="bg-stone-900 rounded-lg border border-stone-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              {/* Image du projet */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={projet.img}
                  alt={projet.id}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-6 space-y-4">
                {/* En-tête avec titre et catégorie */}
                <div className="flex flex-col gap-4 items-start justify-between">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
                    {projet.id}
                  </h3>
                  <div className="text-xs font-bold text-[var(--primary-color)] uppercase tracking-wide bg-stone-800 px-2 py-1 rounded">
                    {projet.category}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-stone-300 text-sm leading-relaxed line-clamp-3">
                  {projet.content}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  <FaCode className="w-4 h-4 text-[var(--primary-color)] mt-1" />
                  {projet.lang.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-1 rounded-full bg-stone-800 text-stone-300 border border-stone-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {projet.lang.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-stone-800 text-stone-400 border border-stone-700">
                      +{projet.lang.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Liens */}
                <div className="flex gap-3 pt-2 border-t border-stone-700">
                  {projet.github && (
                    <a 
                      href={projet.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-stone-400 hover:text-[var(--primary-color)] transition-colors duration-200 text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {projet.live && (
                    <a 
                      href={projet.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-stone-400 hover:text-[var(--primary-color)] transition-colors duration-200 text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center pt-8 border-t border-stone-700 pb-8">
          <p className="text-stone-300 mb-6 text-lg">
            Vous voulez voir plus de projets ?
          </p>
          <a
            href="https://github.com/RaphHuynh"
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 border border-white hover:bg-[var(--secondary-color)] text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:transform hover:scale-105"
            style={{ fontFamily: 'Satoshi-Black, sans-serif' }}
          >
            <FaGithub className="w-5 h-5" />
            Voir mon GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;

