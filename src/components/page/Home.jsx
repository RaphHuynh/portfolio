import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaChartLine, FaBrain, FaDatabase, FaCode } from 'react-icons/fa';
import resume from "../../assets/cv/CV_raphaelle_Huynh.pdf";

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
    <section className="min-h-screen flex items-center justify-center section-padding pt-20" id="Home">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* En-tête */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 bg-warning-500 rounded-full mr-2 animate-pulse"></span>
                Actuellement indisponible - Reprise en 2026
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 dark:text-white">
                Bonjour, je suis{" "}
                <span className="gradient-text">Raphaëlle Huynh</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-secondary-600 dark:text-secondary-300 font-medium">
                Data Scientist & Développeuse Full-Stack
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed"
            >
              Étudiante en Master Informatique et Data Scientist en alternance, je combine expertise technique et vision analytique pour transformer les données en insights actionnables. Passionnée par l'IA et les mathématiques, je vise un doctorat en intelligence artificielle.
            </motion.p>

            {/* Compétences clés */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="card p-4 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-primary-500">{skill.icon}</div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white">{skill.title}</h3>
                      <p className="text-sm text-secondary-500 dark:text-secondary-400">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Boutons d'action */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href={resume}
                className="btn-primary flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-4 h-4" />
                <span>Télécharger CV</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/raphaëlle-huynh-46192919b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/RaphHuynh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>

            {/* Informations de localisation */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 text-sm text-secondary-500 dark:text-secondary-400"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-success-500 rounded-full"></span>
                <span>📍 Reims, France</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-warning-500 rounded-full"></span>
                <span>🚗 Mobilité nationale</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>💻 Télétravail possible</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image de profil */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://media.licdn.com/dms/image/D4E03AQE2qM_v5UQuAA/profile-displayphoto-shrink_800_800/0/1694529792449?e=2147483647&v=beta&t=n_5ZZft0O3O5HSOItCmqFyJRblehOuNuZTeAZBPvrpI"
                  alt="Raphaëlle Huynh"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Éléments décoratifs */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
