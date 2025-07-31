import ImgSumApp from '../assets/img_projet/sumApp.png';
import ImgPortRaphDem from '../assets/img_projet/portfolio_raph_demets.png';
import ImgFRDesDev from '../assets/img_projet/frdesdev.png';
import ImgBotDisMeteo from '../assets/img_projet/bot_meteo.png';
import ImgBotDisCVDev from '../assets/img_projet/bot_cv.png';
import ImgHSR from '../assets/img_projet/hsr.png';
import ImgBotDisChoixPoop from '../assets/img_projet/choix_de_poop.png';
import ImgPortJonathanStueur from '../assets/img_projet/portfolioJonathan.png';
import ImgNLP from '../assets/img_projet/nlp.png';

export const projets = [
  {
    title : "NLP",
    id : "Projet NLP - Traitement du langage naturel",
    img : ImgNLP,
    content : "J'ai developpé une interface d'analyse de texte en python et shiny afin d'analyser différentes données de documents textes, corpus, comme calculer la distance entre les phrases pour trouver les plus proches voisins d'un corpus. J'ai aussi développé d'autres features comme un simple chatbot et divers nuages de mots.",
    lang : ["Python","NLTK","Scikit-learn","Spacy", "Word2Vec","matplotlib","Plotly","Shiny","Wordcloud","FastText","Doc2Vec","Networkx"],
    category : "NLP - App web",
    github : "https://github.com/RaphHuynh/Interface-NLP-avec-nuage-de-mot-Chatbot-basique-et-Analyse-de-documents",
    live : null
  },
  {
    title : "Sum'App",
    id : "Sum'App",
    img : ImgSumApp,
    content : "Application web et bot discord pour réaliser des résumés de réunions vocal au format pdf.",
    lang : ["Python","Pycord","TailwindCSS","Django","SQLite","OpenAI","Whisper"],
    category : "IA - App web - Bot Discord",
    github : "https://github.com/RaphHuynh/projet_info707_bot_discord_reunion_resume",
    live : null
  },
  {
    title : "Jonathan Stueur",
    id : "Portfolio Jonathan Stueur - Freelance",
    img : ImgPortJonathanStueur,
    content : "Portfolio réalisé pour un client (Front End) dans le domaine du cinéma et de la réalisation.",
    lang : ["ReactJS", "JavaScript", "TailwindCSS", "ViteJS"],
    category : "Freelance",
    github : null,
    live : "https://www.jonathansteuer.fr"
  },
  {
    title : "Raphël Demets",
    id: 'Portfolio Raphël Demets - Freelance',
    img: ImgPortRaphDem,
    content: "Portfolio réalisé pour un client dans le domaine de la vfx et du montage vidéo.",
    lang: ["ReactJS", "JavaScript", "TailwindCSS"],
    category: "Freelance",
    github: null,
    live: "https://portfolio-raphael-demets.vercel.app/"
  },
  {
    title : "Fr des devs",
    id: 'Site web Française des développeuses',
    img: ImgFRDesDev,
    content: "Site web de françaises des développeuses. Ce site permet aux femmes dans le domaine de l'informatique de partager leur profil, portfolio afin de mettre leur profil en avant. Utilise une API REST pour gérer la partie Back-end avec FastAPI.",
    lang: ["JavaScript", "Python", "MySQL", "ReactJS", "FastAPI"],
    category: "Personnel",
    github: "https://github.com/RaphHuynh/francaise-des-developpeuses",
    live: null
  },
  { 
    title : "Bot Météo",
    id: 'Bot Discord : Météo', 
    img: ImgBotDisMeteo, 
    content: "Bot Discord affichant la météo de différentes villes à l'aide d'une API météo (OpenWeatherMap).",
    lang: ["Python"],
    category: "Bot Discord",
    github: "https://github.com/RaphHuynh/BotDiscordMeteo",
    live: null
  },
  { 
    title : "Bot CV Dev",
    id: 'Bot Discord : CV Développeur', 
    img: ImgBotDisCVDev, 
    content: "C'est un bot Discord qui permet de mettre en ligne son CV sur Discord afin de faciliter le partage de celui-ci. Il permet aussi de générer un CV au format PDF.",
    lang: ["Python", "JSON"],
    category: "Bot Discord",
    github: "https://github.com/RaphHuynh/bot-cv-developer-v1",
    live: null
  },
  { 
    title : "HS'R",
    id: "Site Web : HS'R - Freelance", 
    img: ImgHSR, 
    content: "Site vitrine réalisé pour l'association du HSR qui est une association de CTF de la région Grand-Est.",
    lang: ["JavaScript", "ReactJS"],
    category: "Freelance",
    github: "https://github.com/RaphHuynh/HackSecuR",
    live: "https://storied-rolypoly-36ef5a.netlify.app"
  },
  { 
    title : "Choix de Poop",
    id: 'Bot Discord : Choix de Poop', 
    img: ImgBotDisChoixPoop, 
    content: "C'est un bot Discord qui permet aux gens de s'enregistrer dessus respectant aussi le RGPD afin de répondre à une série de questions réponses. Nous pouvons consulter les données des questions sous forme de statistiques anonymes et de graphiques.",
    lang: ["Python", "Plotly", "MySQL"],
    category: "Bot Discord",
    github: "https://github.com/RaphHuynh/Bot-Choix-de-Poop",
    live: null
  }
]; 