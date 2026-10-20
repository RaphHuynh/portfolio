import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDownload, FaChartLine, FaBrain, FaDatabase, FaCode, FaUser, FaBriefcase, FaPalette } from 'react-icons/fa';
import resume from "../../assets/cv/CV_raphaelle_Huynh.pdf";
import '../../assets/fonts/Satoshi-Black.otf';
import About from './About';
import StarField from '../effect/StarField';
import Moon from '../effect/Moon';
import forestBg from '../../assets/forest_bg.png';

export default Home;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const menuItems = [
  {
    path: "/about",
    title: "À Propos"
  },
  {
    path: "/projets", 
    title: "Projets"
  },
  {
    path: "/art",
    title: "Art"
  }
];

function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`px-2 sm:px-4 md:px-8 lg:px-24 transition-colors duration-300 min-h-screen w-full overflow-x-hidden ${isDark ? 'bg-[#181a1b]' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}>
      {/* Overlay forêt bien noire */}
      <img
        src={forestBg}
        alt="Forêt silhouette"
        className="fixed inset-0 w-full h-full object-cover z-10 pointer-events-none select-none"
        style={{ filter: 'brightness(0)', opacity: 0.7 }}
        aria-hidden="true"
      />
      {/* Infos bas gauche */}
      <div className="fixed bottom-4 left-6 sm:bottom-6 sm:left-2 z-20 flex flex-col gap-1 text-[10px] sm:text-xs md:text-sm text-white/80 select-none ml-0 sm:ml-6 md:ml-24" style={{fontFamily: 'Satoshi-Black, sans-serif'}}>
        Basée à <br/> REIMS, FRANCE
      </div>
      {/* Infos bas droite */}
      <div className="fixed bottom-4 right-6 sm:bottom-6 sm:right-2 z-20 flex flex-col gap-1 text-[10px] sm:text-xs md:text-sm text-white/80 select-none mr-0 sm:mr-6 md:mr-24 text-right" style={{fontFamily: 'Satoshi-Black, sans-serif'}}>
        Data Scientist, Engineer <br/> et Développeuse Full-Stack
      </div>
      {/* FOND UNI OU DÉGRADÉ EN LIGHT MODE, GALAXIE EN DARK MODE */}
      {isDark ? (
        <StarField starCount={150} />
      ) : null}
      {/* LUNE AU CENTRE */}
      <Moon />
      
      {/* Grand écran : autour de la lune, taille inchangée à partir de 1280px */}
      {[
        { title: 'À Propos', to: '/about', place: 'hidden lg:block fixed top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-48 lg:-translate-y-64 z-20' },
        { title: 'Projets', to: '/projets', place: 'hidden lg:block fixed top-1/2 left-1/2 md:translate-x-48 lg:translate-x-56 -translate-y-1/2 z-20' },
        { title: 'Art', to: '/art', place: 'hidden lg:block fixed top-1/2 left-1/2 -translate-x-1/2 md:translate-y-48 lg:translate-y-60 z-20' },
      ].map((item) => (
        <motion.div
          key={item.title}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className={item.place}
        >
          <motion.div variants={menuItemVariants}>
            <Link to={item.to}>
              <h3
                className="text-transparent font-bold whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-200 leading-none lg:text-[clamp(1.5rem,5.65vw,4.5rem)] lg:leading-7"
                style={{ fontFamily: 'Satoshi-Black, sans-serif', WebkitTextStroke: '1px white' }}
              >
                {item.title}
              </h3>
            </Link>
          </motion.div>
        </motion.div>
      ))}

      {/* Téléphone : nom au-dessus de la lune, liens en dessous */}
      <div className="lg:hidden fixed inset-0 z-20 flex flex-col pointer-events-none">
        <div className="flex h-[34%] flex-col items-center justify-end px-6 pb-3 pt-16">
          <h1 className="text-center uppercase tracking-tight leading-none text-white text-[clamp(1.7rem,8vw,3.5rem)]">
            Raphaëlle
          </h1>
          <h1 className="mt-1 text-center uppercase tracking-tight leading-none text-white text-[clamp(1.7rem,8vw,3.5rem)]">
            HUYNH
          </h1>
        </div>
        <div className="flex-1" aria-hidden="true" />
        <div className="flex h-[30%] flex-col items-center justify-start gap-[clamp(0.55rem,2.2vh,1.15rem)] px-6 pt-3 pb-16 pointer-events-auto">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <h3
                className="text-transparent font-bold whitespace-nowrap leading-none text-[clamp(1.15rem,4.6vw,2.25rem)] hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Satoshi-Black, sans-serif', WebkitTextStroke: '1px white' }}
              >
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <section className="hidden lg:flex h-screen flex-col items-center justify-center md:px-2" id="Home">
        <div className="flex flex-col items-center lg:items-start w-full z-10">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-[clamp(2rem,6.9vw,5.5rem)] uppercase tracking-tight leading-none text-center lg:text-left w-full text-white mb-2">
              Raphaëlle
            </h1>
            <h1 className="text-[clamp(2rem,6.9vw,5.5rem)] uppercase tracking-tight leading-none text-center lg:text-right w-full z-20 text-white mb-2">
              HUYNH
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
