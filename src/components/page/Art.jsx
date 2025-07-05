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

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleWheel = (e) => {
      if (container) {
        e.preventDefault(); // Bloque le scroll vertical
        container.scrollLeft += e.deltaY; // Redirige vers scroll horizontal
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Gérer les touches clavier pour la navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        setCurrentModalIndex(prev => (prev + 1) % drawings.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentModalIndex(prev => (prev - 1 + drawings.length) % drawings.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

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

  return (
    <section className="min-h-screen bg-[#181a1b] flex flex-col items-center pt-20 md:pt-28" id="Art">
      <div className="w-full px-6 md:px-28">
        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-4 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
          Art
        </h2>
        <div className="border-b border-stone-700 mb-12 w-full" />

        {/* Carrousel horizontal avec molette verticale */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none'  /* Internet Explorer 10+ */
          }}
        >
          <div className="flex w-max">
            {drawings.map((drawing, index) => (
              <div key={drawing.id} className="flex w-[500px] items-center justify-center px-4 inline-block">
                <div 
                  className="group relative overflow-hidden cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={drawing.img}
                    alt={drawing.title}
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal pour afficher l'image en grand */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleModalClick}
          >
            <div className="relative max-w-full max-h-[calc(100vh-50px)]">
              <img
                src={drawings[currentModalIndex].img}
                alt={drawings[currentModalIndex].title}
                className="max-w-full max-h-[calc(100vh-50px)] object-contain"
                onClick={nextImage}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
