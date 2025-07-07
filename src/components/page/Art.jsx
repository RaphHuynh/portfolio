import React, { useState, useEffect, useRef } from 'react';
import '../../assets/fonts/Satoshi-Black.otf';

// Import de toutes les images du dossier dessin
import dessin1 from '../../assets/dessin/dessin_1.jpg';
import dessin2 from '../../assets/dessin/dessin_2.jpg';
import dessin3 from '../../assets/dessin/dessin_3.jpg';
import dessin4 from '../../assets/dessin/dessin_4.jpg';
import dessin5 from '../../assets/dessin/dessin_5.jpg';
import dessin6 from '../../assets/dessin/dessin_6.jpg';
import dessin7 from '../../assets/dessin/dessin_7.jpg';
import dessin8 from '../../assets/dessin/dessin_8.png';
import dessin9 from '../../assets/dessin/dessin_9.jpg';
import dessin10 from '../../assets/dessin/dessin_10.png';
import dessin11 from '../../assets/dessin/dessin_11.jpg';
import dessin13 from '../../assets/dessin/dessin_13.jpg';
import dessin16 from '../../assets/dessin/dessin_16.png';
import dessin17 from '../../assets/dessin/dessin_17.png';
import dessin18 from '../../assets/dessin/dessin_18.png';
import dessin19 from '../../assets/dessin/dessin_19.jpg';
import dessin20 from '../../assets/dessin/dessin°20.png';
import dessin21 from '../../assets/dessin/dessin_21.png';
import dessin22 from '../../assets/dessin/dessin_22.png';
import dessin23 from '../../assets/dessin/dessin_23.png';
import dessin24 from '../../assets/dessin/dessin_24.png';

// Tableau de toutes les images avec leurs métadonnées
const drawings = [
  { id: "Dessin 1", img: dessin1, title: "Dessin 1", year: "2024" },
  { id: "Dessin 2", img: dessin2, title: "Dessin 2", year: "2024" },
  { id: "Dessin 3", img: dessin3, title: "Dessin 3", year: "2024" },
  { id: "Dessin 4", img: dessin4, title: "Dessin 4", year: "2024" },
  { id: "Dessin 5", img: dessin5, title: "Dessin 5", year: "2024" },
  { id: "Dessin 6", img: dessin6, title: "Dessin 6", year: "2024" },
  { id: "Dessin 7", img: dessin7, title: "Dessin 7", year: "2024" },
  { id: "Dessin 8", img: dessin8, title: "Dessin 8", year: "2024" },
  { id: "Dessin 9", img: dessin9, title: "Dessin 9", year: "2024" },
  { id: "Dessin 10", img: dessin10, title: "Dessin 10", year: "2024" },
  { id: "Dessin 11", img: dessin11, title: "Dessin 11", year: "2024" },
  { id: "Dessin 13", img: dessin13, title: "Dessin 13", year: "2024" },
  { id: "Dessin 16", img: dessin16, title: "Dessin 16", year: "2024" },
  { id: "Dessin 17", img: dessin17, title: "Dessin 17", year: "2024" },
  { id: "Dessin 18", img: dessin18, title: "Dessin 18", year: "2024" },
  { id: "Dessin 19", img: dessin19, title: "Dessin 19", year: "2024" },
  { id: "Dessin 20", img: dessin20, title: "Dessin 20", year: "2024" },
  { id: "Dessin 21", img: dessin21, title: "Dessin 21", year: "2024" },
  { id: "Dessin 22", img: dessin22, title: "Dessin 22", year: "2024" },
  { id: "Dessin 23", img: dessin23, title: "Dessin 23", year: "2024" },
  { id: "Dessin 24", img: dessin24, title: "Dessin 24", year: "2024" }
];

export default function Art() {
  const scrollContainerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleWheel = (e) => {
      if (container && !isMobile) {
        e.preventDefault(); // Bloque le scroll vertical seulement sur desktop
        
        // Amélioration de la sensibilité et de la fluidité
        const scrollSpeed = 2; // Vitesse de défilement augmentée
        const scrollAmount = e.deltaY * scrollSpeed;
        
        container.scrollLeft += scrollAmount;
        
        // Gérer la boucle infinie
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll) {
          // Retour au début quand on arrive à la fin
          container.scrollLeft = 0;
        } else if (container.scrollLeft <= 0) {
          // Aller à la fin quand on revient en arrière depuis le début
          container.scrollLeft = maxScroll;
        }
      }
    };

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isMobile]);

  // Gérer les touches clavier pour la navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) {
        // Navigation dans le carrousel avec les flèches
        const container = scrollContainerRef.current;
        if (container) {
          const scrollAmount = isMobile ? 300 : 600; // Ajustement pour mobile
          
          if (e.key === 'ArrowRight') {
            container.scrollLeft += scrollAmount;
          } else if (e.key === 'ArrowLeft') {
            container.scrollLeft -= scrollAmount;
          }
          
          // Gérer la boucle infinie pour les flèches aussi
          const maxScroll = container.scrollWidth - container.clientWidth;
          if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = 0;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft = maxScroll;
          }
        }
      } else {
        // Navigation dans le modal
        if (e.key === 'Escape') {
          setIsModalOpen(false);
        } else if (e.key === 'ArrowRight') {
          setCurrentModalIndex(prev => (prev + 1) % drawings.length);
        } else if (e.key === 'ArrowLeft') {
          setCurrentModalIndex(prev => (prev - 1 + drawings.length) % drawings.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, isMobile]);

  const openModal = (index) => {
    setCurrentModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentModalIndex(prev => (prev + 1) % drawings.length);
  };

  const prevImage = () => {
    setCurrentModalIndex(prev => (prev - 1 + drawings.length) % drawings.length);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Créer un tableau infini en dupliquant les images
  const infiniteDrawings = [...drawings, ...drawings, ...drawings, ...drawings, ...drawings];

  return (
    <section className="min-h-screen bg-[#181a1b] flex flex-col items-center justify-center pt-16 md:pt-20" id="Art">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-28">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-4 text-left highlight-green w-fit" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
          Art
        </h2>
        <div className="border-b border-stone-700 mb-8 md:mb-12 w-full" />

        {/* Carrousel horizontal avec molette verticale */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide touch-pan-x"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none',  /* Internet Explorer 10+ */
            // Hauteurs responsive optimisées avec plus de marge
            height: isMobile ? 'calc(100vh - 250px)' : 'calc(100vh - 220px)',
            minHeight: isMobile ? '280px' : '380px',
            maxHeight: isMobile ? '450px' : '700px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="flex w-max items-center" style={{height: '100%'}}>
            {infiniteDrawings.map((drawing, index) => (
              <div 
                key={`${drawing.id}-${index}`} 
                className={`flex items-center justify-center inline-block h-full ${
                  isMobile 
                    ? 'px-2' 
                    : 'px-4'
                }`}
                style={{
                  width: 'auto',
                  flexShrink: 0
                }}
              >
                <div 
                  className="group relative overflow-hidden cursor-pointer flex items-center justify-center h-full"
                  onClick={() => openModal(index % drawings.length)}
                  style={{height: '100%'}}
                >
                  <img
                    src={drawing.img}
                    alt={drawing.title}
                    className={`object-contain transition-transform duration-300 hover:scale-105 ${
                      isMobile 
                        ? 'h-full w-auto max-w-[75vw]' 
                        : 'h-full w-auto max-w-[55vw]'
                    }`}
                    style={{
                      maxHeight: '90%', // Réduction de 100% à 90%
                      height: '90%',    // Réduction de 100% à 90%
                      width: 'auto'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal pour afficher l'image en grand */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={handleModalClick}
            style={{cursor: 'pointer'}}
          >
            <div className="relative w-full max-w-full max-h-[90vh] flex items-center justify-center" style={{pointerEvents: 'none'}}>
              <img
                src={drawings[currentModalIndex].img}
                alt={drawings[currentModalIndex].title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={nextImage}
                style={{pointerEvents: 'auto', cursor: 'pointer'}}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}