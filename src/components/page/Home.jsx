import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaChartLine, FaBrain, FaDatabase, FaCode } from 'react-icons/fa';
import resume from "../../assets/cv/CV_raphaelle_Huynh.pdf";
import '../../assets/fonts/Satoshi-Black.otf';
import About from './About';
import StarField from '../effect/StarField';
import Moon from '../effect/Moon';
import forestBg from '../../assets/forest_bg.png';
import { useState, useEffect } from 'react';

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

function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();
    
    // Observer les changements de classe sur document.documentElement
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);


  return (
    <main className={`px-6 md:px-24 transition-colors duration-300 min-h-screen ${isDark ? 'bg-[#181a1b]' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}>
      {/* Overlay forêt bien noire */}
      <img
        src={forestBg}
        alt="Forêt silhouette"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{ filter: 'brightness(0)', opacity: 0.7 }}
        aria-hidden="true"
      />
      {/* Infos bas gauche */}
      <div className="fixed bottom-6 left-6 z-20 flex flex-col gap-1 text-xs md:text-sm text-white/80 select-none ml-24" style={{fontFamily: 'Satoshi-Black, sans-serif'}}>
        Basée à <br/> REIMS, FRANCE
      </div>
      {/* FOND UNI OU DÉGRADÉ EN LIGHT MODE, GALAXIE EN DARK MODE */}
      {isDark ? (
        <StarField starCount={150} />
      ) : null}
      {/* LUNE AU MILIEU */}
      <Moon />
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-between pt-20 md:pt-24 pb-6 px-2" id="Home">
        <div className="flex-1 flex flex-col pt-10 w-full z-10">
          <h1 className="text-[clamp(2.5rem,12vw,8rem)] md:text-[clamp(3.5rem,16vw,8rem)] uppercase tracking-tight leading-none text-center md:text-left w-full" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
            <span className="text-white">RA</span>
            <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>PHAËlle</span>
          </h1>
          <h1 className="text-[clamp(2.5rem,12vw,8rem)] md:text-[clamp(3.5rem,16vw,8rem)] uppercase tracking-tight leading-none text-center md:text-left w-full z-20" style={{ fontFamily: 'Satoshi-Black, sans-serif', WebkitTextStroke: '2px white', color: 'transparent' }}>
            HU
            <span className="text-white">YNH</span>
          </h1>
        </div>
        <div className="w-full md:w-full text-center md:text-left px-2 z-10">
          <p className={`text-base md:w-1/2 text-right mr-0 ml-auto md:text-lg lg:text-2xl font-light tracking-wide ${isDark ? 'text-stone-400' : 'text-gray-600'}`}>
            Data Scientist, Manager et Développeuse Full-Stack
          </p>
        </div>
      </section>
    </main>
  );
}
