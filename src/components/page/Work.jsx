import React, { useState, useEffect, useRef } from 'react';
import '../../assets/fonts/Satoshi-Black.otf';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import ImgBotDisMeteo from '../../assets/img_projet/bot_meteo.png';
import ImgBotDisCVDev from '../../assets/img_projet/bot_cv.png';
import ImgBotDisChoixPoop from '../../assets/img_projet/choix_de_poop.png';
import ImgAnalyseSentiment from '../../assets/img_projet/analyse_sentiment.png';
import ImgChatBotCovid from '../../assets/img_projet/chatbot_covid.png';
import ImgCoursIA from '../../assets/img_projet/cours_ia.png';
import ImgFRDesDev from '../../assets/img_projet/frdesdev.png';
import ImgHSR from '../../assets/img_projet/hsr.png';
import ImgPortRaphDem from '../../assets/img_projet/portfolio_raph_demets.png';
import ImgSumApp from '../../assets/img_projet/sumApp.png';
import ImgPortJonathanStueur from '../../assets/img_projet/portfolioJonathan.png';
import ImgNLP from '../../assets/img_projet/nlp.png';
import { projets } from '../../data/projets';

const Work = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWheel = (e) => {
    if (isMobile) return; // Désactiver sur mobile
    
    e.preventDefault();
    const delta = e.deltaY;
    setScrollAccumulator(prev => {
      const newAccumulator = prev + delta;
      
      if (Math.abs(newAccumulator) >= 600) {
        if (newAccumulator > 0) {
          setCurrentProjectIndex(prev => (prev + 1) % projets.length);
        } else {
          setCurrentProjectIndex(prev => (prev - 1 + projets.length) % projets.length);
        }
        return 0;
      }
      return newAccumulator;
    });
  };

  const handleTabClick = (index) => {
    if (isMobile) return; // Désactiver sur mobile
    
    setIsTransitioning(true);
    setCurrentProjectIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleKeyDown = (e) => {
    if (isMobile) return; // Désactiver sur mobile
    
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIsTransitioning(true);
      setCurrentProjectIndex(prev => (prev - 1 + projets.length) % projets.length);
      setTimeout(() => setIsTransitioning(false), 300);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsTransitioning(true);
      setCurrentProjectIndex(prev => (prev + 1) % projets.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      const section = document.getElementById('Projet');
      if (section) {
        section.addEventListener('wheel', handleWheel, { passive: false });
        section.addEventListener('keydown', handleKeyDown);
        
        return () => {
          section.removeEventListener('wheel', handleWheel);
          section.removeEventListener('keydown', handleKeyDown);
        };
      }
    }
  }, [isMobile]);

  // Design classique pour mobile
  if (isMobile) {
    return (
      <div className="min-h-screen bg-stone-950 text-white p-4">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
              Projets
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto rounded-full"></div>
          </div>

          {/* Grille de cartes pour mobile */}
          <div className="space-y-8">
            {projets.map((projet, index) => (
              <div key={index} className="bg-stone-900 rounded-xl border border-stone-700 overflow-hidden shadow-lg">
                {/* Image */}
                <div className="w-full">
                  <img
                    src={projet.img}
                    alt={projet.id}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                {/* Contenu */}
                <div className="p-6 space-y-4">
                  {/* En-tête avec titre et catégorie */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
                      {projet.id}
                    </h3>
                    <span className="text-xs font-bold text-[var(--primary-color)] uppercase tracking-wide">
                      {projet.category}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-stone-300 leading-relaxed">
                    {projet.content}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    <FaCode className="w-4 h-4 text-[var(--primary-color)] mt-1" />
                    {projet.lang.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 rounded-full bg-[#23232a] text-stone-300 border border-stone-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Liens */}
                  <div className="flex gap-3 pt-2">
                    {projet.github && (
                      <a 
                        href={projet.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-stone-400 hover:text-[var(--primary-color)] transition-colors duration-200"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {projet.live && (
                      <a 
                        href={projet.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-stone-400 hover:text-[var(--primary-color)] transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Design desktop original avec onglets style dossier et système de pagination
  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-[#181a1b] flex flex-col items-center pt-20 md:pt-28 pb-10" 
      id="Projet"
      tabIndex={0}
    >
      <div className="w-full px-6 md:px-28">
        {/* Titre principal au-dessus de la barre d'onglets */}
        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-6 text-left highlight-blue w-fit" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
          Projets
        </h2>
        <div className="border-b border-stone-700 mb-6 w-full" />
        <article className='flex gap-6 mb-10'>
          <p className='text-stone-300 w-full'>Voici une sélection de projets que j'ai réalisés. Tu peux naviguer entre les projets en utilisant la molette de ta souris. Si tu veux en savoir plus sur un projet, tu peux cliquer sur le bouton github ou le bouton live. Tu peux aussi voir d'autres projets sur mon github.</p>
          <div className="w-full flex justify-end items-center mb-4">
            <a
              href="https://github.com/RaphHuynh"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-stone-300 transition-colors duration-200"
              style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}
            >
              <FaGithub className="w-10 h-10" />
            </a>
          </div>
        </article>
        {/* Barre d'onglets avec effet dossier parfait */}
        <div className="relative overflow-x-auto scrollbar-hide">
          <div className="flex flex-row border-b rounded-t-xl bg-transparent">
            {projets.map((projet, idx) => (
              <button
                key={projet.id}
                onClick={() => setCurrentProjectIndex(idx)}
                className={`relative px-5 py-2 font-bold uppercase tracking-widest transition-all duration-200 whitespace-nowrap text-base select-none border
                  ${currentProjectIndex === idx
                    ? 'text-white border-b border-b-transparent z-10'
                    : 'text-stone-400 border-b border-b-stone-400 hover:text-white z-0'}
                `}
                style={{
                  fontFamily: 'Satoshi-Black, sans-serif',
                  background: currentProjectIndex === idx ? '#181a1b' : 'transparent',
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                  marginBottom: currentProjectIndex === idx ? '-2px' : '0',
                  outline: 'none',
                }}
              >
                {projet.title}
              </button>
            ))}
          </div>
        </div>
        {/* Bloc principal centré verticalement */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-center lg:items-start border-r border-l border-b px-2 sm:px-4 md:px-6 py-6 md:py-10 rounded-b-xl bg-stone-900 w-full max-w-full">
            {/* Image du projet */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="relative overflow-hidden rounded-lg w-full">
                <img
                  src={projets[currentProjectIndex].img}
                  alt={projets[currentProjectIndex].id}
                  className="w-full h-auto max-h-[320px] sm:max-h-[400px] md:max-h-[480px] object-contain transition-all duration-300 mx-auto"
                  style={{
                    transform: isTransitioning ? 'scale(0.95) opacity(0.7)' : 'scale(1) opacity(1)'
                  }}
                />
              </div>
            </div>
            {/* Contenu du projet */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              {/* Titre long/id du projet à droite de l'image */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white transition-all duration-300 w-fit" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
                {projets[currentProjectIndex].id}
              </h3>
              {/* Catégorie */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-bold text-[var(--primary-color)] uppercase tracking-wide">
                  {projets[currentProjectIndex].category}
                </span>
                {/* Liens */}
                <div className="flex gap-3 mt-2 sm:mt-0">
                  {projets[currentProjectIndex].github && (
                    <a 
                      href={projets[currentProjectIndex].github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-stone-400 hover:text-[var(--primary-color)] transition-colors duration-200"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {projets[currentProjectIndex].live && (
                    <a 
                      href={projets[currentProjectIndex].live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-stone-400 hover:text-[var(--primary-color)] transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed transition-all duration-300">
                {projets[currentProjectIndex].content}
              </p>
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2 md:pt-4 justify-center lg:justify-start">
                <FaCode className="w-4 h-4 text-[var(--primary-color)] mt-1" />
                {projets[currentProjectIndex].lang.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-2 py-1 rounded-full bg-[#23232a] text-stone-300 border border-stone-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

