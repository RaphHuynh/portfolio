import '../../assets/fonts/Satoshi-Black.otf';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
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
    id: "Cours d'intelligence artificielle", 
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
    id: "Site Web : HS'R - Freelance", 
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

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + '…' : str;
}

export default function Work() {
  return (
    <section className="min-h-screen w-full bg-[#19191c] text-[#d1d1d6] px-0 py-20 font-satoshi" id="Projet">
      <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[#22304a] dark:text-[#bfa76a] mb-12 px-28 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
        Projets
      </h2>
      <div className="flex flex-col gap-24">
        {projets.map((projet, i) => (
          <div
            key={i}
            className="relative w-full group overflow-hidden"
            style={{ minHeight: 340 }}
          >
            {/* Image immersive */}
            <div className="w-full h-[340px] md:h-[420px] relative">
              <img
                src={projet.img}
                alt={projet.id}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07] group-hover:rotate-[-1deg]"
                style={{ filter: 'brightness(0.85) contrast(1.08)' }}
              />
              {/* Overlay glass/degradé */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent group-hover:from-[#22304a]/80 group-hover:via-black/40 group-hover:to-transparent transition-all duration-500" />
              {/* Overlay contenu */}
              <div className="absolute inset-0 flex flex-col justify-between p-10 md:p-16">
                {/* Titre + badge */}
                <div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[#bfa76a] drop-shadow-lg mb-4 transition-all duration-500 group-hover:tracking-[0.25em] group-hover:text-white" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.12em' }}>
                    {projet.id}
                  </h3>
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-[#23232a]/70 text-[#bfa76a] mb-4 uppercase tracking-wide">
                    {projet.category}
                  </span>
                </div>
                {/* Description + technos + liens */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <p className="text-lg md:text-xl font-light text-[#e5e5e7] max-w-2xl mb-2 md:mb-0" style={{ textShadow: '0 2px 8px #181a1b' }}>
                    {truncate(projet.content, 180)}
                  </p>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex flex-wrap gap-2 items-center">
                      <FaCode className="w-5 h-5 text-[#bfa76a] mr-1" />
                      {projet.lang.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded bg-[#23232a]/70 text-[#bfa76a] font-medium border border-[#bfa76a]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-2 justify-end">
                      {projet.github && (
                        <a href={projet.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#bfa76a] hover:text-white transition-colors duration-200 text-xl">
                          <FaGithub className="w-6 h-6" />
                        </a>
                      )}
                      {projet.live && (
                        <a href={projet.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#bfa76a] hover:text-white transition-colors duration-200 text-xl">
                          <FaExternalLinkAlt className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

