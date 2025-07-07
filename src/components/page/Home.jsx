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
    title: "À Propos",
    color: "from-purple-500 to-pink-500"
  },
  {
    path: "/projets", 
    title: "Projets",
    color: "from-blue-500 to-cyan-500"
  },
  {
    path: "/art",
    title: "Art",
    color: "from-orange-500 to-red-500"
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
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{ filter: 'brightness(0)', opacity: 0.7 }}
        aria-hidden="true"
      />
      {/* Infos bas gauche */}
      <div className="fixed bottom-6 left-2 z-20 flex flex-col gap-1 text-[10px] sm:text-xs md:text-sm text-white/80 select-none ml-0 sm:ml-6 md:ml-24" style={{fontFamily: 'Satoshi-Black, sans-serif'}}>
        Basée à <br/> REIMS, FRANCE
      </div>
      {/* FOND UNI OU DÉGRADÉ EN LIGHT MODE, GALAXIE EN DARK MODE */}
      {isDark ? (
        <StarField starCount={150} />
      ) : null}
      {/* LUNE AU MILIEU */}
      <Moon />
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-between pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6 px-1 sm:px-2" id="Home">
        <div className="flex-1 flex flex-col pt-6 sm:pt-10 w-full z-10">
          <div className="flex flex-col md:flex-row  md:justify-between w-full">
            {/* Nom et prénom à gauche */}
            <div className="flex flex-col">
              <h1 className="text-[clamp(2.2rem,10vw,7rem)] md:text-[clamp(3rem,16vw,8rem)] uppercase tracking-tight leading-none text-center md:text-left w-full break-words text-white">
                Raphaëlle
              </h1>
              <h1 className="text-[clamp(2.2rem,10vw,7rem)] md:text-[clamp(3rem,16vw,8rem)] uppercase tracking-tight leading-none text-center md:text-left w-full z-20 break-words text-white">
                HUYNH
              </h1>
            </div>

            {/* MENU ARTISTIQUE À DROITE */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-4 md:gap-12 mt-8 md:mt-6"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={menuItemVariants}
                  className="group"
                >
                  <Link 
                    to={item.path}
                    className="group block"
                  >
                    {/* Titre simple avec effet */}
                    <h3 className={`
                      text-transparent text-3xl md:text-5xl font-bold group-hover:text-white transition-all duration-300 cursor-pointer text-right
                    `} style={{ fontFamily: 'Satoshi-Black, sans-serif', WebkitTextStroke: '2px white' }}>
                      {item.title}
                    </h3>

                    
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-full text-center md:text-left px-1 sm:px-2 z-10 mt-4">
          <p className={`text-base sm:text-lg md:w-2/3 lg:w-1/2 text-center md:text-right mr-0 ml-auto font-light tracking-wide ${isDark ? 'text-stone-400' : 'text-gray-600'}`}>
            Data Scientist, Manager et Développeuse Full-Stack
          </p>
        </div>
      </section>
    </main>
  );
}
