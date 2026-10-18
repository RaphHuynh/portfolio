import React, { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../assets/fonts/Satoshi-Black.otf';

/**
 * Layout détail projet (récupéré depuis le build gh-pages).
 * galleryLayout: 'jonathan' | 'stack' | 'nlp'
 */
export default function ProjectDetail({
  title,
  year,
  role,
  subtitle,
  description,
  technologies,
  images,
  galleryLayout = 'stack',
  sectionId = 'ProjetDetail',
}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const renderGallery = () => {
    if (galleryLayout === 'jonathan') {
      return (
        <>
          <img
            src={images[0]}
            alt={title}
            className="w-full h-auto md:h-2/3 object-contain md:object-cover shadow-lg cursor-pointer"
            onClick={() => setLightboxIndex(0)}
          />
          <div className="flex flex-col md:flex-row gap-4 h-auto md:h-1/3">
            <img
              src={images[1]}
              alt={title}
              className="w-full h-auto md:h-full object-contain md:object-cover shadow-lg cursor-pointer"
              onClick={() => setLightboxIndex(1)}
            />
            <img
              src={images[2]}
              alt={title}
              className="w-full h-auto md:h-full object-contain md:object-cover shadow-lg cursor-pointer"
              onClick={() => setLightboxIndex(2)}
            />
          </div>
        </>
      );
    }

    if (galleryLayout === 'nlp') {
      return (
        <>
          <div className="flex flex-col md:flex-row gap-4 h-auto md:h-1/3">
            <img
              src={images[0]}
              alt="Dashboard NLP"
              className="w-full h-auto md:h-full object-contain md:object-cover shadow-lg cursor-pointer"
              onClick={() => setLightboxIndex(0)}
            />
            <img
              src={images[1]}
              alt="nuage de mots NLP"
              className="w-full h-auto md:h-full object-contain md:object-cover shadow-lg cursor-pointer"
              onClick={() => setLightboxIndex(1)}
            />
          </div>
          <div className="flex gap-4 h-auto md:h-1/3">
            <img
              src={images[2]}
              alt="chatbot NLP"
              className="w-full h-auto md:h-full object-contain md:object-cover shadow-lg cursor-pointer"
              onClick={() => setLightboxIndex(2)}
            />
          </div>
          <div className="flex gap-4 h-auto md:h-1/3">
            <img
              src={images[3]}
              alt="statistiques NLP"
              className="w-full h-auto md:h-full object-contain md:object-cover shadow-lg cursor-pointer"
              onClick={() => setLightboxIndex(3)}
            />
          </div>
        </>
      );
    }

    // stack (2 images)
    return (
      <>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-auto md:h-1/2 object-contain md:object-cover shadow-lg cursor-pointer"
          onClick={() => setLightboxIndex(0)}
        />
        <img
          src={images[1]}
          alt={title}
          className="w-full h-auto md:h-1/2 object-contain md:object-cover shadow-lg cursor-pointer"
          onClick={() => setLightboxIndex(1)}
        />
      </>
    );
  };

  return (
    <section
      className="min-h-screen md:h-screen bg-[#181a1b] flex flex-col pt-20 md:pt-28 pb-6 md:pb-12 text-[var(--primary-color)]"
      id={sectionId}
      style={{ fontFamily: 'Satoshi-Black, sans-serif' }}
    >
      <div className="flex flex-col md:flex-row w-full h-full gap-6 md:gap-16 px-6 md:px-28">
        <article className="flex flex-col w-full md:w-2/5 justify-between gap-6 md:gap-0">
          <div>
            <h1 className="text-4xl md:text-7xl">{title}</h1>
            <h2 className="text-2xl md:text-4xl mt-2">{year}</h2>
            <h3 className="text-xl md:text-2xl mt-4">{role}</h3>
          </div>

          {/* Mobile: tech tags grid */}
          <div className="block md:hidden">
            <h4 className="text-lg font-bold mb-3">Technologies utilisées :</h4>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 border border-[var(--primary-color)] rounded-lg text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: orbiting tech labels */}
          <div className="hidden md:flex relative w-full h-80 items-center justify-center">
            <div className="absolute w-20 h-20 bg-gradient-to-br from-[var(--primary-color)] to-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.6)]" />
            {technologies.map((tech, index) => {
              const radius = 70 + index * 35;
              const duration = 10 + index * 3;
              return (
                <Fragment key={tech}>
                  <div
                    className="absolute border border-[var(--primary-color)] opacity-20 rounded-full"
                    style={{ width: radius * 2, height: radius * 2 }}
                  />
                  <motion.div
                    className="absolute flex items-center justify-center"
                    style={{ width: radius * 2, height: radius * 2 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration, repeat: Infinity, ease: 'linear' }}
                  >
                    <motion.span
                      className="absolute whitespace-nowrap text-base font-medium"
                      style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
                      animate={{ rotate: -360 }}
                      transition={{ duration, repeat: Infinity, ease: 'linear' }}
                    >
                      {tech}
                    </motion.span>
                  </motion.div>
                </Fragment>
              );
            })}
          </div>

          <div>
            <p className="text-base md:text-lg italic leading-relaxed">
              <h4 className="text-lg md:text-xl not-italic">{subtitle}</h4>
              {description}
            </p>
          </div>
        </article>

        <aside className="flex flex-col gap-4 w-full md:w-3/5 h-auto md:h-full">
          {renderGallery()}
        </aside>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 z-10"
              onClick={closeLightbox}
            >
              ×
            </button>
            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={title}
              className="max-w-[90vw] max-h-[90vh] object-contain cursor-pointer"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
