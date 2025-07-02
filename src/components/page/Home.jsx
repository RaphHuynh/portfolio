import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaChartLine, FaBrain, FaDatabase, FaCode } from 'react-icons/fa';
import resume from "../../assets/cv/CV_raphaelle_Huynh.pdf";
import '../../assets/fonts/Satoshi-Black.otf';
import About from './About';
import StarField from '../effect/StarField';

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
  const skills = [
    { icon: <FaBrain className="w-6 h-6" />, title: "Machine Learning", description: "Modèles prédictifs et IA" },
    { icon: <FaDatabase className="w-6 h-6" />, title: "Data Engineering", description: "ETL et pipelines de données" },
    { icon: <FaChartLine className="w-6 h-6" />, title: "Data Analysis", description: "Analyse exploratoire et statistique" },
    { icon: <FaCode className="w-6 h-6" />, title: "Développement", description: "Python, SQL, React" }
  ];

  return (
    <main className="bg-white dark:bg-[#181a1b] px-20">
      {/* FOND ÉTOILÉ */}
      <StarField starCount={150} />
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-between section-padding pt-24 pb-12" id="Home">
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <h1 className="text-[clamp(3.5rem,16vw,12rem)] uppercase tracking-tight text-[#22304a] dark:text-stone-200 leading-none text-left w-full pb-10" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
            Raphaëlle
          </h1>
          <h1 className="text-[clamp(3.5rem,16vw,12rem)] uppercase tracking-tight text-[#22304a] dark:text-stone-200 leading-none text-right w-full" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
            Huynh
          </h1>
        </div>
        <div className="w-1/2 text-left">
          <p className="text-lg lg:text-2xl text-[#22304a] dark:text-stone-400 font-light tracking-wide">
            Data Scientist, Engineer et Analyst et Développeuse Full-Stack avec 1 ans d'expérience en alternance et en freelance. Projètes de devenir doctorante.
          </p>
        </div>
      </section>
    </main>
  );
}
