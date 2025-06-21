import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaCode, FaChartLine, FaBrain, FaServer, FaTools, FaRProject, FaJava, FaPhp, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';
import { SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiReact, SiFastapi, SiMysql, SiGit, SiDjango, SiTailwindcss, SiStreamlit, SiLaravel } from 'react-icons/si';

export default Competence;

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

function Competence() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: <FaCode className="w-6 h-6" />,
      description: "Langages de programmation",
      skills: [
        { name: "Python", icon: <FaPython className="w-5 h-5" /> },
        { name: "JavaScript", icon: <FaCode className="w-5 h-5" /> },
        { name: "Java", icon: <FaJava className="w-5 h-5" /> },
        { name: "PHP", icon: <FaPhp className="w-5 h-5" /> },
        { name: "SQL", icon: <FaDatabase className="w-5 h-5" /> },
        { name: "HTML", icon: <FaHtml5 className="w-5 h-5" /> },
        { name: "CSS", icon: <FaCss3 className="w-5 h-5" /> },
        { name: "R", icon: <FaRProject className="w-5 h-5" /> },
        { name: "C", icon: <FaC className="w-5 h-5" /> },
      ]
    },
    {
      title: "Machine Learning & IA",
      icon: <FaBrain className="w-6 h-6" />,
      description: "Modèles prédictifs, deep learning et intelligence artificielle",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5" /> },
        { name: "PyTorch", icon: <SiPytorch className="w-5 h-5" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="w-5 h-5" /> },
        { name: "OpenCV", icon: <FaCode className="w-5 h-5" /> },
        { name: "NLTK", icon: <FaCode className="w-5 h-5" /> },
        { name: "YOLO", icon: <FaCode className="w-5 h-5" /> },
        { name: "Pydicom", icon: <FaCode className="w-5 h-5" /> },
        { name: "Spacy", icon: <FaCode className="w-5 h-5" /> },
      ]
    },
    {
      title: "Data Analysis",
      icon: <FaChartLine className="w-6 h-6" />,
      description: "Analyse exploratoire et visualisation de données",
      skills: [
        { name: "Pandas", icon: <SiPandas className="w-5 h-5" /> },
        { name: "NumPy", icon: <SiNumpy className="w-5 h-5" /> },
        { name: "Matplotlib", icon: <FaChartLine className="w-5 h-5" /> },
        { name: "Seaborn", icon: <FaChartLine className="w-5 h-5" /> },
        { name: "Plotly", icon: <FaChartLine className="w-5 h-5" /> },
        { name: "Shiny", icon: <FaChartLine className="w-5 h-5" /> },
        { name: "ggplot2", icon: <FaChartLine className="w-5 h-5" /> },
        { name: "Wordcloud", icon: <FaChartLine className="w-5 h-5" /> },
        { name: "ggplot", icon: <FaChartLine className="w-5 h-5" /> },
        { name: "ggmap", icon: <FaChartLine className="w-5 h-5" /> },
        { name: "Networkx", icon: <FaChartLine className="w-5 h-5" /> },
      ]
    },
    {
      title: "Développement",
      icon: <FaCode className="w-6 h-6" />,
      description: "Frameworks de développement et librairies web",
      skills: [
        { name: "Python", icon: <FaPython className="w-5 h-5" /> },
        { name: "React", icon: <SiReact className="w-5 h-5" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-5 h-5" /> },
        { name: "Django", icon: <SiDjango className="w-5 h-5" /> },
        { name: "ViteJS", icon: <FaCode className="w-5 h-5" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "Streamlit", icon: <SiStreamlit className="w-5 h-5" /> },
        { name: "Shiny", icon: <FaCode className="w-5 h-5" /> },
        { name: "Laravel", icon: <SiLaravel className="w-5 h-5" /> },
      ]
    },
    {
      title: "Data Engineering",
      icon: <FaDatabase className="w-6 h-6" />,
      description: "Bases de données et pipelines de données",
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <FaDatabase className="w-5 h-5" /> },
        { name: "SQLite", icon: <FaDatabase className="w-5 h-5" /> },
        { name: "ClickHouse", icon: <FaDatabase className="w-5 h-5" /> },
        { name: "PL/SQL Oracle", icon: <FaDatabase className="w-5 h-5" /> },
        { name: "UML", icon: <FaDatabase className="w-5 h-5" /> },
        { name: "Merise", icon: <FaDatabase className="w-5 h-5" /> },
      ]
    },
    {
      title: "Outils & DevOps",
      icon: <FaTools className="w-6 h-6" />,
      description: "Outils de développement et gestion de version",
      skills: [
        { name: "Git", icon: <SiGit className="w-5 h-5" /> },
        { name: "Docker", icon: <FaTools className="w-5 h-5" /> },
        { name: "Jupyter", icon: <FaTools className="w-5 h-5" /> },
        { name: "VS Code", icon: <FaTools className="w-5 h-5" /> },
        { name: "Linux", icon: <FaTools className="w-5 h-5" /> },
        { name: "Bash", icon: <FaTools className="w-5 h-5" /> },
        { name: "Anaconda", icon: <FaTools className="w-5 h-5" />},
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800" id="Competence">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-6"
          >
            Compétences & <span className="gradient-text">Expertise</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
          >
            Mon expertise couvre l'ensemble du pipeline de données, de la collecte à la mise en production de modèles d'IA. 
            Voici les technologies que j'utilise quotidiennement pour transformer les données en insights actionnables.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={fadeInUp}
              className="card p-6 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-secondary-600 dark:text-secondary-400 mb-6 text-sm">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="text-primary-500 dark:text-primary-400">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 "
        >
          {[
            { number: "4", label: "Projets réalisés en Freelance" },
            { number: "5", label: "Nombres de clients totals" },
            { number: "0", label: "Nombres de clients actuels" },
            { number: "1", label: "Années d'expériences en Freelance" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section avis clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Avis Clients
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Découvrez les retours d'expérience de mes clients précédents et leurs recommandations sur mon travail.
            </p>
          </div>

          <div className="card p-8 text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Recommandations LinkedIn
            </h4>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Mes clients précédents ont laissé des recommandations détaillées sur mon profil LinkedIn, 
              témoignant de la qualité de mon travail, de ma réactivité et de ma capacité à livrer des projets 
              dans les délais impartis.
            </p>

            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Recommandations</div>
              </div>
            </div>

            <motion.a
              href="https://www.linkedin.com/in/raphaëlle-huynh-46192919b/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Voir les recommandations</span>
            </motion.a>

            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              ⭐ Tous mes clients ont laissé des recommandations positives
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

