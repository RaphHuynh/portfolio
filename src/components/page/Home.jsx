import { useState, useEffect, useRef } from 'react';
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
  const moonRef = useRef(null);

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

  const handleMenuHover = (isHovering) => {
    if (moonRef.current) {
      const canvas = moonRef.current.querySelector('canvas');
      if (canvas) {
        if (isHovering) {
          canvas.style.filter = 'brightness(1.2) drop-shadow(0 0 40px rgba(255,255,255,0.8))';
        } else {
          canvas.style.filter = 'drop-shadow(0 0 30px rgba(255,255,255,0.4))';
        }
      }
    }
  };

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
      <Moon ref={moonRef} />
      
      {/* À PROPOS AU-DESSUS DE LA LUNE */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="fixed top-1/2 left-1/2 transform -translate-y-32 sm:-translate-y-40 md:-translate-y-48 lg:-translate-y-64 -translate-x-1/2 z-20"
        onMouseEnter={() => handleMenuHover(true)}
        onMouseLeave={() => handleMenuHover(false)}
      >
        <motion.div variants={menuItemVariants}>
          <Link to="/about" className="group">
            <h3 className={`
              text-transparent text-lg sm:text-xl md:text-[clamp(3rem,16vw,4.5rem)] font-bold 
              cursor-pointer hover:text-white transition-colors duration-200
            `} style={{ 
              fontFamily: 'Satoshi-Black, sans-serif',
              WebkitTextStroke: '1px white'
            }}>
              À Propos
            </h3>
          </Link>
        </motion.div>
      </motion.div>

      {/* PROJETS À DROITE DE LA LUNE */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="fixed top-1/2 left-1/2 transform translate-x-32 sm:translate-x-40 md:translate-x-48 lg:translate-x-56 -translate-y-1/2 z-20"
        onMouseEnter={() => handleMenuHover(true)}
        onMouseLeave={() => handleMenuHover(false)}
      >
        <motion.div variants={menuItemVariants}>
          <Link to="/projets" className="group">
            <h3 className={`
              text-transparent text-lg sm:text-xl md:text-[clamp(3rem,16vw,4.5rem)] font-bold 
              cursor-pointer hover:text-white transition-colors duration-200
            `} style={{ 
              fontFamily: 'Satoshi-Black, sans-serif',
              WebkitTextStroke: '1px white'
            }}>
              Projets
            </h3>
          </Link>
        </motion.div>
      </motion.div>

      {/* ART EN DESSOUS DE LA LUNE */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="fixed top-1/2 left-1/2 transform translate-y-32 sm:translate-y-40 md:translate-y-48 lg:translate-y-60 -translate-x-1/2 z-20"
        onMouseEnter={() => handleMenuHover(true)}
        onMouseLeave={() => handleMenuHover(false)}
      >
        <motion.div variants={menuItemVariants}>
          <Link to="/art" className="group">
            <h3 className={`
              text-transparent text-lg sm:text-xl md:text-[clamp(3rem,16vw,4.5rem)] font-bold 
              cursor-pointer hover:text-white transition-colors duration-200
            `} style={{ 
              fontFamily: 'Satoshi-Black, sans-serif',
              WebkitTextStroke: '1px white'
            }}>
              Art
            </h3>
          </Link>
        </motion.div>
      </motion.div>
      


      {/* HERO */}
      <section className="h-screen flex items-center justify-center px-1 sm:px-2" id="Home">
        <div className="flex flex-col items-center md:items-start w-full z-10">
                      {/* Nom et prénom centrés */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-[clamp(2.2rem,10vw,7rem)] md:text-[clamp(3rem,16vw,5.5rem)] uppercase tracking-tight leading-none text-center md:text-left w-full break-words text-white mb-2">
                Raphaëlle
              </h1>
              <h1 className="text-[clamp(2.2rem,10vw,7rem)] md:text-[clamp(3rem,16vw,5.5rem)] uppercase tracking-tight leading-none text-center md:text-right w-full z-20 break-words text-white mb-2">
                HUYNH
              </h1>
            </div>
          

        </div>
      </section>
    </main>
  );
}
