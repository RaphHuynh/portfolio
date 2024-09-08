import './App.css';
import { useState } from "react";

import Nav from "./components/navigation/Nav"
import Home from "./components/page/Home"
import NavReseaux from './components/navigation/NavReseaux';
import Competence from './components/page/Competence'
import Experience from './components/page/Experience';
import Work from './components/page/Work';
import AOS from 'aos';
import Tarif from './components/page/Tarif';
import AnimatedBubbles from './components/effect/AnimatedBubbles';

AOS.init({
  once: true,
});

function App() {
  //state

  //reseaux
  const [github, setGithub] = useState(
    {id: "GitHub", content : "https://github.com/RaphHuynh"}
  )

  const [linkedln, setlinkedln] = useState(
    {id : "Linkedln", content : "https://www.linkedin.com/in/rapha%C3%ABlle-huynh-46192919b/"}
  )

  //Projet
  const [projet, setProjet] = useState([
    {id:"Association - Site HSR : Front-end",content:"Site vitrine réalisé pour l'association du HSR qui est une association de CTF de la réjoin Grand-Est.",langage:["ReactJS","ViteJS","JavaScript","TailwindCSS"],github:"https://github.com/RaphHuynh/HackSecuR",link:"https://storied-rolypoly-36ef5a.netlify.app"},
    {id:"Freelance - Portfolio pour boulanger : Front-end", content:"C'est un portfolio réaliser pour un client dans le domaine de la boulangerie. Le design a été réflechis avec le client.", langage:["ReactJS", "JavaScript", "Tailwind CSS"], github:"https://github.com/RaphHuynh/portfolio-boulanger",link: "http://loicthierry.netlify.app/"},
    {id :"Personnel - Site Françaises des développeuses : Front-end", content:"Site web de françaises des developpeuses. Ce site permet aux femmes dans le domaine de l'it de partager leur profil, portfolio afin de mettre leur profil en avant.", langage:["JavaScript","ViteJS","ReactJS","TailwindCSS"], github:"https://github.com/RaphHuynh/francaise-des-developpeuses", link: ""},
    {id :"Personnel - API Françaises des développeuses : Back-end", content:"Cette API REST permet de gérer la partie Back-end de mon projet Françaises des développeuses.", langage:["Python","MySQL","FAST API"], github:"https://github.com/RaphHuynh/api-francaises-des-dev", link: ""},
    {id :"Personnel - Bot discord CV developper : Back-end", content:"C'est un bot discord qui permet de mettre en ligne son CV sur discord afin de faciliter le partage de celui-ci. Il permet aussi de génerer un CV au format PDF.", langage:["Python", "NoSQL", "Json"], github:"https://github.com/RaphHuynh/bot-cv-developer-v1", link: ""},
    {id :"Personnel - Site bot discord : Front-end", content:"C'est un site en ThreeJS pour mettre en ligne mes différents bots discord. Ce projet m'est venu à l'esprit car je voulais découvrir la bibliothèque ThreeJS.", langage: ["Javascript","ThreeJS","ViteJS"], github:"https://github.com/RaphHuynh/threejs-raynhcoding", link: ""},
    {id :"Personnel - Bot Discord Choix de Poop : Back-end", content:"C'est un projet personnel basé sur un système de Quizz. Il a pour but principal de récuperer des données afin de permettre une visualisation des données en fonction des questions.",langage: ["Python", "MySQL"], github:"https://github.com/RaphHuynh/Bot-Choix-de-Poop", link: ""},
    {id :"Personnel - Portfolio : Front-end", content:"Mon portfolio est actuellement celui-ci. Je l'ai réalisé avec ReactJS et Tailwind CSS. J'ai choisie React pour faire ce projet afin de découvrir ce framework.", langage:["Javascript","ReactJS","ViteJS","Tailwind CSS"], github:"", link: ""},
    {id :"Personnel - Bot Discord Meteo : Back-end", content:"C'est un projet personnel qui permet d'afficher la météo d'une ville en entrant une commande directement sur un serveur discord.",langage:["Python","API OpenWeatherMap"], github:"https://github.com/RaphHuynh/BotDiscordMeteo", link: ""},
    {id :"Universitaire - Pass O Camping : BDD", content:"C'est un projet universitaire de base de données qui consistait à réaliser et à mettre en oeuvre une base de données permettant de gérer un camping.", langage:["Looping","phpMyAdmin","MySQL"], github:"", link: ""},
    {id: "Universitaire - Pass O Lan : Back-end", content:"C'est un projet universitaire qui consistait à réaliser et à mettre en oeuvre un site permettant de gérer des évènements irl ou en ligne.", langage:["php","Laravel","phpMyAdmin","Bootstrap"], github:"", link: ""}
  ])

  //comportement
 
  //Affichage
  return (
    <div className='max-w-full overflow-x-hidden'>
      <Nav/>
      <AnimatedBubbles/>
      <NavReseaux
        github={github}
        linkedln={linkedln}
      />
      <Home/>
      <Competence/>
      <Experience />
      <Work
        projet={projet}
        key={projet.id}
      />
      <Tarif/>
    </div>
  );
}

export default App;
