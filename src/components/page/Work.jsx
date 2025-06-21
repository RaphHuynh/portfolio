import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaFolder } from 'react-icons/fa';
import ImgBotDisMeteo from '../../assets/img_projet/bot_meteo.png';
import ImgBotDisCVDev from '../../assets/img_projet/bot_cv.png';
import ImgBotDisChoixPoop from '../../assets/img_projet/choix_de_poop.png';
import ImgAnalyseSentiment from '../../assets/img_projet/analyse_sentiment.png';
import ImgChatBotCovid from '../../assets/img_projet/chatbot_covid.png';
import ImgCoursIA from '../../assets/img_projet/cours_ia.png';
import ImgFRDesDev from '../../assets/img_projet/frdesdev.png';
import ImgHSR from '../../assets/img_projet/hsr.png';
import ImgPortRaphDem from '../../assets/img_projet/portfolio_raph_demets.png';
import ImgSumApp from '../../assets/img_projet/sumApp.png';
import ImgPortJonathanStueur from '../../assets/img_projet/portfolioJonathan.png';
import ImgNLP from '../../assets/img_projet/nlp.png';

export default Work;

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

function Work() {
  const projets = [
    {
        id : "Projet NLP - Traitement du langage naturel",
        img : ImgNLP,
        content : "J'ai developpé une interface d'analyse de texte en python et shiny afin d'analyser différentes données de documents textes, corpus, comme calculer la distance entre les phrases pour trouver les plus proches voisins d'un corpus. J'ai aussi développé d'autres features comme un simple chatbot et divers nuages de mots.",
        lang : ["Python","NLTK","Scikit-learn","Spacy", "Word2Vec","matplotlib","Plotly","Shiny","Wordcloud","FastText","Doc2Vec","Networkx"],
        category : "NLP - App web",
        github : "https://github.com/RaphHuynh/Interface-NLP-avec-nuage-de-mot-Chatbot-basique-et-Analyse-de-documents",
        live : null
    },
    {
        id : "Sum'App",
        img : ImgSumApp,
        content : "Application web et bot discord pour réaliser des résumés de réunions vocal au format pdf.",
        lang : ["Python","Pycord","TailwindCSS","Django","SQLite","OpenAI","Whisper"],
        category : "IA - App web - Bot Discord",
        github : "https://github.com/RaphHuynh/projet_info707_bot_discord_reunion_resume",
        live : null
    },
    {
        id : "Portfolio Jonathan Stueur - Freelance",
        img : ImgPortJonathanStueur,
        content : "Portfolio réalisé pour un client (Front End) dans le domaine du cinéma et de la réalisation.",
        lang : ["ReactJS", "JavaScript", "TailwindCSS", "ViteJS"],
        category : "Freelance",
        github : null,
        live : "https://www.jonathansteuer.fr"
    },
    {
      id: 'Portfolio Raphël Demets - Freelance',
      img: ImgPortRaphDem,
      content: "Portfolio réalisé pour un client dans le domaine de la vfx et du montage vidéo.",
      lang: ["ReactJS", "JavaScript", "TailwindCSS"],
      category: "Freelance",
      github: null,
      live: null
    },
    {
      id: 'Site web Française des développeuses',
      img: ImgFRDesDev,
      content: "Site web de françaises des développeuses. Ce site permet aux femmes dans le domaine de l'informatique de partager leur profil, portfolio afin de mettre leur profil en avant. Utilise une API REST pour gérer la partie Back-end avec FastAPI.",
      lang: ["JavaScript", "Python", "MySQL", "ReactJS", "FastAPI"],
      category: "Personnel",
      github: "https://github.com/RaphHuynh/francaise-des-developpeuses",
      live: null
    },
    { 
      id: 'Cours d\'intelligence artificielle', 
      img: ImgCoursIA, 
      content: "Cours d'intelligence artificielle sur GitHub dans différentes langues afin d'aider les débutants à comprendre et à faire de l'intelligence artificielle avec des parties cours et des parties pratiques. Actuellement les cours sont publiés sous forme de fichier Jupyter.",
      lang: ["Python", "NLTK"],
      category: "Éducatif",
      github: "https://github.com/RaphHuynh/cours-ia",
      live: null
    },
    { 
      id: 'Bot Discord : Météo', 
      img: ImgBotDisMeteo, 
      content: "Bot Discord affichant la météo de différentes villes à l'aide d'une API météo (OpenWeatherMap).",
      lang: ["Python"],
      category: "Bot Discord",
      github: "https://github.com/RaphHuynh/BotDiscordMeteo",
      live: null
    },
    { 
      id: 'IA Chatbot : Covid', 
      img: ImgChatBotCovid, 
      content: "ChatBot développé à l'aide d'un fichier txt contenant des séries de questions réponses utilisant les méthodes de traitements du langage naturel. Il existe 2 chatbots différents faits avec 2 librairies différentes pour étudier leurs efficacités.",
      lang: ["Python", "Scikit-Learn", "NLTK", "TensorFlow"],
      category: "IA",
      github: "https://github.com/RaphHuynh/chatbot-covid",
      live: null
    },
    { 
      id: 'IA Analyse de sentiment', 
      img: ImgAnalyseSentiment, 
      content: "Analyse de sentiment de tweets utilisant les techniques de pré-traitement du langage naturel et un modèle de RandomForest.",
      lang: ["Python", "NLTK", "Seaborn", "Scikit-learn"],
      category: "IA",
      github: "https://github.com/RaphHuynh/analyse-sentiment",
      live: null
    },
    { 
      id: 'Bot Discord : CV Développeur', 
      img: ImgBotDisCVDev, 
      content: "C'est un bot Discord qui permet de mettre en ligne son CV sur Discord afin de faciliter le partage de celui-ci. Il permet aussi de générer un CV au format PDF.",
      lang: ["Python", "JSON"],
      category: "Bot Discord",
      github: "https://github.com/RaphHuynh/bot-cv-developer-v1",
      live: null
    },
    { 
      id: 'Site Web : HS\'R - Freelance', 
      img: ImgHSR, 
      content: "Site vitrine réalisé pour l'association du HSR qui est une association de CTF de la région Grand-Est.",
      lang: ["JavaScript", "ReactJS"],
      category: "Freelance",
      github: "https://github.com/RaphHuynh/HackSecuR",
      live: "https://storied-rolypoly-36ef5a.netlify.app"
    },
    { 
      id: 'Bot Discord : Choix de Poop', 
      img: ImgBotDisChoixPoop, 
      content: "C'est un bot Discord qui permet aux gens de s'enregistrer dessus respectant aussi le RGPD afin de répondre à une série de questions réponses. Nous pouvons consulter les données des questions sous forme de statistiques anonymes et de graphiques.",
      lang: ["Python", "Plotly", "MySQL"],
      category: "Bot Discord",
      github: "https://github.com/RaphHuynh/Bot-Choix-de-Poop",
      live: null
    }
  ];

  const categories = [...new Set(projets.map(projet => projet.category))];

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800" id="Projet">
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
            Mes <span className="gradient-text">Projets</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
          >
            Une sélection de mes projets les plus significatifs, allant du développement web à l'intelligence artificielle. 
            Chaque projet représente une étape de mon apprentissage et de mon développement professionnel.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
        >
          {projets.map((projet, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card overflow-hidden hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              {/* Image du projet */}
              <div className="relative overflow-hidden">
                <img 
                  src={projet.img} 
                  alt={projet.id} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    {projet.github && (
                      <a
                        href={projet.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {projet.live && (
                      <a
                        href={projet.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    {projet.category}
                  </span>
                  <FaFolder className="w-4 h-4 text-secondary-400" />
                </div>

                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {projet.id}
                </h3>

                <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4 line-clamp-3">
                  {projet.content}
                </p>

                {/* Technologies utilisées */}
                <div className="flex items-center space-x-2 mb-3">
                  <FaCode className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                    Technologies :
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projet.lang.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/RaphHuynh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <FaGithub className="w-5 h-5" />
            <span>Voir tous mes projets sur GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

