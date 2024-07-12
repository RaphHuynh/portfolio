import React, { useState } from 'react';
import ImgBotDisMeteo from '../../assets/img_projet/bot_meteo.png';
import ImgBotDisCVDev from '../../assets/img_projet/bot_cv.png';
import ImgBotDisChoixPoop from '../../assets/img_projet/choix_de_poop.png';
import ImgAnalyseSentiment from '../../assets/img_projet/analyse_sentiment.png';
import ImgChatBotCovid from '../../assets/img_projet/chatbot_covid.png';
import ImgCoursIA from '../../assets/img_projet/cours_ia.png';
import ImgFRDesDev from '../../assets/img_projet/frdesdev.png';
import ImgHSR from '../../assets/img_projet/hsr.png';

function Work() {
    const projets = [
        {
            id: 'Site web Française des developpeuse',
            img: ImgFRDesDev,
            content: "Site web de françaises des developpeuses. Ce site permet aux femmes dans le domaine de l'informatique de partager leur profil, portfolio afin de mettre leur profil en avant.\nUtile une API REST pour gérer la partie Back-end avec FastAPI de mon projet Françaises des développeuses.",
            lang:["JavaScript","Python","MySQL","ReactJS","FastAPI"]
        },
        { 
            id: 'Cours d\'intelligence artificielle', 
            img: ImgCoursIA, 
            content: "Cours d'intelligence artificielle sur github dans différentes langues afin d'aider les débutants à comprendre et à faire de l'intelligence artificielle avec des parties cours et des parties pratiques. Actuellement les cours sont publiés sous forme de fichier jupyter.",
            lang:["Python","NLTK"]
        },
        { 
            id: 'Bot Discord : Méteo', 
            img: ImgBotDisMeteo, 
            content: "Bot discord affichant la météo de différentse villes à l'aide d'une API météo (OpenWeatherMap).",
            lang:["Python"]
        },
        { 
            id: 'IA Chatbot : Covid', 
            img: ImgChatBotCovid, 
            content: "ChatBot développé à l'aide d'un fichier txt contenant des séries de questions réponses utilisant les méthodes de traitements du langages naturels. Il existe 2 chatbots différents fait avec 2 librairies différentes pour étudier leurs efficacités et leurs points faibles par rapport à l'autre.",
            lang:["Python","Skicit-Learn","NLTK","TensorFlow"]
        },
        { 
            id: 'IA Analyse de sentiment', 
            img: ImgAnalyseSentiment, 
            content: "Analyse de sentiment de tweet utilisant les techniques de pré-traitement du langages naturels et un modèle de RandomForest.",
            lang:["Python","NLTK","Seaborn","Scikit-learn"]
        },
        { 
            id: 'Bot Discord : CV Developpeur', 
            img: ImgBotDisCVDev, 
            content: "C'est un bot discord qui permet de mettre en ligne son CV sur discord afin de faciliter le partage de celui-ci. Il permet aussi de génerer un CV au format PDF",
            lang:["Python","JSON"]
        },
        { 
            id: 'Site Web : HS\'R', 
            img: ImgHSR, 
            content: "Site vitrine réalisé pour l'association du HSR qui est une association de CTF de la réjoin Grand-Est.",
            lang:["JavaScript","ReactJS"] 
        },
        { 
            id: 'Bot Discord : Choix de Poop', 
            img: ImgBotDisChoixPoop, 
            content: "C'est un bot discord qui permet aux gens de s'enregistrer dessus respectant aussi le RGPD afin de répondre à une série de questions réponses. Nous pouvons consulter les données des questions sous forme de statistiques anonymes et de graphiques.",
            lang:["Python","Plotly","MySQL"]
        },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProjet, setSelectedProjet] = useState(null);

    const openModal = (projet) => {
        setSelectedProjet(projet);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProjet(null);
        setModalOpen(false);
    };

    return (
        <section className="flex flex-col min-h-screen w-full p-10 md:px-32 pb-20 justify-center" id="Projet">
            <h1 className='text-2xl md:text-4xl lg:text-6xl text-yellow-400 h-fit py-2 w-fit mb-10'>
                📂 Projets
            </h1>
            <p className="pb-10 text-sm md:text-lg">
                Cette section présente les divers projets que j'ai réalisés et que j'ai choisi de mettre en avant. <br />
                Pour trouver mes autres projets personnels, il faut se rendre sur GitHub.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projets.map((projet, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => openModal(projet)}>
                        <div className="relative">
                            <img src={projet.img} alt={projet.id} className="w-full h-56 object-cover rounded opacity-80 hover:opacity-100 transition-opacity duration-300 border-2 border-amber-400" />
                            <h2 className="text-amber-400 mt-2 text-xl">{projet.id}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && selectedProjet && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-60">
                    <div className="relative mx-auto max-w-3xl bg-[#0f1628] rounded-lg shadow-lg p-6 md:p-8">
                        <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-200 hover:text-gray-500 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-4 text-center">{selectedProjet.id}</h2>
                        <img src={selectedProjet.img} alt={selectedProjet.id} className="mb-4 w-full h-96 object-cover rounded" />
                        <p className="text-white/80 mb-4">
                            {selectedProjet.content}
                        </p>
                        <div className='flex flex-wrap'>
                            {selectedProjet.lang.map((language, index) => (
                                <span key={index} className='bg-yellow-50 text-yellow-400 px-2 py-1 m-1 rounded dark:bg-amber-500 dark:text-[#0f1628]'>
                                    {language}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-center mt-10">
                <a
                    href={"https://github.com/RaphHuynh"}
                    download
                    className="bg-[#0f1628] border border-amber-400 hover:bg-amber-500 dark:hover:bg-[#0f1628] text-amber-500 dark:hover:text-amber-400 dark:bg-amber-400 dark:text-[#0f1628] font-bold py-2 px-4 rounded inline-flex items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    Mon github
                </a>
            </div>
        </section>
    );
}

export default Work;
