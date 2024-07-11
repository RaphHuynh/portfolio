import React, { useState } from 'react';
import CV from "../../assets/cv/CV_raphaelle_Huynh.pdf"

function Experience() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const openModal = (exp) => {
        setSelectedExperience(exp);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedExperience(null);
        setModalOpen(false);
    };


    const formations = [
        {
            id:"Master Informatique : Intelligence Artificielle",
            date:"Septembre 2024 - Actuellement",
            lieux : "Reims",
            entreprise : "Université de Reims",
            more : "Actuellement en première année"
        },
        {
            id:"Licence Informatique",
            date:"Septembre 2019 - Juin 2024",
            lieux : "Reims",
            entreprise : "Université de Reims",
            more : "Pause d'un ans après la 1 er année de licence - Rang : Dans le top 10 chaque années"
        },
        {
            id:"Licence  Electronique, Energie Electrique, Automatique",
            date : "Septembre 2018 - Juin 2019",
            lieux : "Reims",
            entreprise : "Université de Reims",
            more: "Réalisation de la première année."
        }
    ]

    const experience = [
        {
            id: "Alternance - Data Scientist",
            content: "... En attente de la prise de poste",
            langage: ["Python"],
            date: "Septembre 2024 - Actuellement",
            lieux: "Reims",
            entreprise: "CHU - IIAS (institut d'intelligence artificielle en santé)"
        },
        {
            id: "Freelance - Developpeuse Web",
            content: "Developpement d'un outils en ReactJS.",
            langage: ["JavaScript", "ReactJS", "TailwindCSS"],
            date: "Juillet 2024 - Actuellement",
            lieux: "Lille",
            entreprise: "Freaks United",
            more: "(Contrat de confidentialité)"
        },
        {
            id: "Stage - Assistante de recherche en traitement d'image médicale",
            content: "Stage de recherche en traitement d'image médicale incluant à la fois des prétraitements et des algorithmes d’Intelligence Artificielle pour une application orientée recherche.",
            langage: ["Python", "OpenCV", "Pydicom"],
            date: "Avril 2024 - juin 2024",
            lieux: "Reims",
            entreprise: "Université de Reims Champagne-Ardenne",
            more: "Traitement sur des echographies pulmonaires afin de détecter les lignes B à l'aide d'algorithmes utilisant les flux optiques."
        },
        {
            id: "Stage - Developpeuse WordPress",
            content: "Le stage consistait à réaliser une extension WordPress permettant d'automatiser la prise de réunion à plusieurs ( plus de 3 personnes ).",
            lieux: "Paris",
            entreprise: "Cabinet Lacour",
            date: "Avril 2023 - juin 2023",
            langage: ["PHP", "WordPress", "MySQL"],
            more: "Dans un premier temps j'ai réalisé un travail de modélisation en utilisant la méthode UML, pour définir mes classes et construire ma base de donnée. J'ai réalisé par la suite une connexion avec l'API google afin de connecter son google Calendar à l'extension afin de récuperer les horaires libres sur l'agenda pour envoyer aux participants ( sans l'orginasateur ) les horaires et les dates disponibles pour qu'ils puissent mettre leurs disponibilités."
        },
        {
            id: "Stage - Developpeuse Web",
            content: "Le stage consistait à réaliser un site click & collect, afin de faciliter la prise de commande pendant le covid.",
            lieux: "Troyes",
            entreprise: "LeBidibul",
            date: "Mai 2021 - juillet 2021",
            langage: ["PHP", "Symfony", "Tailwind CSS"],
            more: "Avant, de réaliser le projet demandé, j'ai du réaliser un travail de recherche sur les différents framework et CMS existant afin de réaliser un travail de comparaison. Ensuite, pour commencer le projet, je l'ai modélisé avec looping et la méthode mérise, afin de définir mes classes, mes entités et mes relations. Ensuite, j'ai utilisé le framework Symfony pour réaliser le projet. J'ai utilisé Tailwind comme librairie CSS."
        }
    ];

    return (
        <section className='flex flex-col min-h-screen w-full p-10 lg:px-32 justify-center' id="Experience">
            <h1 className='text-2xl md:text-4xl lg:text-6xl text-yellow-400 border-b border-yellow-400 h-fit py-2 w-fit mb-10'>
                💼 Experiences & 🎓 Formations
            </h1>
            <article className='dark:text-white pb-10 text-lg'>
                <p>Mes expériences professionnelles réalisées ou en cours.</p>
            </article>
            <ul className="timeline timeline-vertical">
                {experience.map((exp, index) => (
                    <li key={index} className="">
                        <hr class="bg-amber-400/50" />
                        <div className="timeline-middle px-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                className="h-5 w-5 fill-amber-400">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={`timeline-content cursor-pointer my-2 hover:bg-amber-200/10 border border-amber-400 rounded-lg ${index % 2 === 0 ? 'timeline-start' : 'timeline-end'}`} onClick={() => openModal(exp)}>
                            <h2 className="text-2xl font-black text-yellow-400 border-b border-amber-400 p-6 bg-amber-200/20 text-center">{exp.id}</h2>
                            <div className='p-6'>
                                <p className="mt-2">🗓️ {exp.date}</p>
                                <p className="font-bold mt-1">🏢 {exp.entreprise}</p>
                                <p className="mt-1">📍 {exp.lieux}</p>
                                {exp.content && <p className="mt-1 italic text-white/80">{exp.content}</p>}
                            </div>
                        </div>
                        <hr class="bg-amber-400/50" />
                        {modalOpen && selectedExperience && selectedExperience.id === exp.id && (
                            <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black/40">
                                <div className="relative mx-auto max-w-lg md:max-w-2xl bg-[#0f1628] border border-amber-400 rounded-lg shadow-lg p-6 md:p-8">
                                    <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-200 hover:text-gray-500 focus:outline-none">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-4">{selectedExperience.id}</h2>
                                    <p className="font-bold mb-2">🏢 {selectedExperience.entreprise}</p>
                                    <p className="text-lg mb-4">🗓️ {selectedExperience.date}</p>
                                    <p className="mb-2">📍 {selectedExperience.lieux}</p>
                                    <p className="mb-4">{selectedExperience.content}</p>
                                    {selectedExperience.more && <p className="italic mb-4">{selectedExperience.more}</p>}
                                    {Array.isArray(selectedExperience.langage) && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {selectedExperience.langage.map((lang, langIndex) => (
                                                <span key={langIndex} className="bg-yellow-50 text-yellow-400 px-2 py-1 rounded dark:bg-amber-500  dark:text-[#0f1628]">{lang}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <article className='dark:text-white py-10 text-lg'>
                <p>Mes formations réalisées ou en cours.</p>
            </article>
            <div className="w-full text-sm md:text-lg flex grid grid-cols-3 gap-4">
                {formations.map((formation, index) => (
                    <div key={index} className="border border-amber-400 py-6 rounded">
                        <div className="pb-4 md:pb-auto h-full">
                            <div className='flex w-full items-center justify-center px-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" class="bi bi-mortarboard" viewBox="0 0 16 16" className='fill-amber-400 mb-2 border-2 border-amber-400 rounded-full p-4'>
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                                </svg>
                            </div>    
                            <h2 className="pb-6 md:text-2xl font-bold text-amber-400 text-center px-10 mb-6">
                                {formation.id}
                            </h2>
                            <p className="pb-2 px-10">🗓️ {formation.date}</p>
                            <p className="font-bold pb-2 px-10">🏢 {formation.entreprise}</p>
                            <p className="pb-6 px-10">📍 {formation.lieux}</p>
                            <p className='px-10 text-white/80 italic'>{formation.more}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <a
                    href={CV}
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
                    Télécharger mon CV
                </a>
            </div>
        </section>
    );
}

export default Experience;
