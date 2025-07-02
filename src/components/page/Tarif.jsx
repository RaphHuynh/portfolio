import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaCode, FaPalette, FaGlobe, FaCog, FaPause, FaClock } from 'react-icons/fa';
import '../../assets/fonts/Satoshi-Black.otf';

const services = [
  {
    id: "Site Portfolio",
    price: "300€",
    description: "Portfolio professionnel personnalisé avec design moderne et responsive.",
    icon: <FaPalette className="w-7 h-7 text-[#bfa76a] mr-3" />,
    features: ["Design personnalisé", "Responsive", "SEO optimisé", "Formulaire de contact"],
  },
  {
    id: "Site Vitrine",
    price: "500€",
    description: "Site vitrine pour entreprise avec gestion de contenu.",
    icon: <FaGlobe className="w-7 h-7 text-[#bfa76a] mr-3" />,
    features: ["Design professionnel", "Gestion de contenu", "Optimisation SEO", "Support technique"],
  },
  {
    id: "Développement Web",
    price: "300€/jour",
    description: "Développement sur mesure d'applications web complexes.",
    icon: <FaCode className="w-7 h-7 text-[#bfa76a] mr-3" />,
    features: ["Architecture sur mesure", "Base de données", "API REST", "Tests automatisés"],
  },
  {
    id: "Data Science",
    price: "Sur devis",
    description: "Solutions d'intelligence artificielle et d'analyse de données.",
    icon: <FaCog className="w-7 h-7 text-[#bfa76a] mr-3" />,
    features: ["Machine Learning", "Analyse de données", "Visualisation", "Déploiement"],
  }
];

const contactInfo = [
  {
    icon: <FaEnvelope className="w-5 h-5 text-[#bfa76a]" />, label: "Email", value: "raphaelle.huynh@gmail.com", link: "mailto:raphaelle.huynh@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt className="w-5 h-5 text-[#bfa76a]" />, label: "Localisation", value: "Reims, France", link: null
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Tarif() {
  return (
    <section className="min-h-screen w-full bg-[#19191c] text-[#d1d1d6] px-4 sm:px-6 md:px-28 py-12 md:py-20 font-satoshi" id="Tarifs">
      <motion.h2 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[#bfa76a] mb-8 md:mb-12 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
        Services & Tarifs
      </motion.h2>
      <div className="border-b border-[#bfa76a]/30 mb-8 md:mb-12 w-full" />
      {/* Grille des services */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex flex-col gap-2 md:gap-4 items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-center mb-1 md:mb-2 justify-center md:justify-start w-full">
              {service.icon}
              <h3 className="text-base md:text-xl font-bold uppercase tracking-widest text-[#bfa76a]" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.10em' }}>{service.id}</h3>
            </div>
            <div className="text-xl md:text-2xl font-black text-[#bfa76a] mb-1 md:mb-2 tracking-wide">{service.price}</div>
            <p className="text-xs md:text-base text-[#e5e5e7] font-light mb-1 md:mb-2 max-w-xs md:max-w-xl mx-auto md:mx-0">{service.description}</p>
            <div className="flex flex-wrap gap-1 md:gap-2 mb-1 md:mb-2 justify-center md:justify-start">
              {service.features.map((f, idx) => (
                <span key={idx} className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-[#23232a]/70 text-[#bfa76a] border border-[#bfa76a]/20 text-[10px] md:text-xs font-medium uppercase tracking-wide">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Bloc indisponible */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mt-8 mb-12 md:mb-16 text-center"
      >
        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
          <FaPause className="w-6 h-6 md:w-7 md:h-7 text-[#bfa76a]" />
          <span className="text-base md:text-lg font-bold uppercase tracking-widest text-[#bfa76a]" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>Indisponible actuellement</span>
        </div>
        <p className="text-xs md:text-base text-[#e5e5e7] font-light text-center max-w-xs md:max-w-xl mx-auto">
          Je me concentre actuellement sur mes études en Master Informatique et mon alternance en Data Science. Je ne prends pas de nouvelles missions freelance pour le moment.<br />
          <span className="inline-flex items-center gap-1 md:gap-2 mt-1 md:mt-2 text-[#bfa76a] font-semibold"><FaClock className="w-4 h-4 md:w-5 md:h-5" /> Reprise prévue en 2026</span>
        </p>
      </motion.div>
      {/* Contact */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mt-8"
      >
        <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center md:justify-start w-full md:w-auto">
          {contactInfo.map((info, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3">
              <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                {info.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs text-[#bfa76a] uppercase tracking-widest font-semibold">{info.label}</span>
                {info.link ? (
                  <a href={info.link} className="text-xs md:text-base text-[#e5e5e7] hover:underline font-medium">{info.value}</a>
                ) : (
                  <span className="text-xs md:text-base text-[#e5e5e7] font-medium">{info.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-xs md:text-base text-[#bfa76a] font-light mt-4 md:mt-0 text-center md:text-right w-full md:w-auto">
          N'hésitez pas à me contacter pour échanger sur vos projets futurs ou pour discuter de collaborations potentielles.
        </div>
      </motion.div>
    </section>
  );
}