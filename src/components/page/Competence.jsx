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
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projets réalisés" },
            { number: "3+", label: "Années d'expérience" },
            { number: "15+", label: "Technologies maîtrisées" },
            { number: "100%", label: "Satisfaction client" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

