import React, { useState } from 'react';
import CV from "../../assets/cv/CV_raphaelle_Huynh.pdf"
import AOS from 'aos';

AOS.init();

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
            more : "Pause d'un an après la 1 er année de licence - Rang : Dans le top 10 chaque année"
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
            id: "Freelance - Chef de projet",
            content: "Developpement d'outils web pour générer des base de données, gestion de projet et management d'équipes..",
            langage: ["JavaScript", "ReactJS", "TailwindCSS","TypeScript", "NextJS", "React Flow"],
            date: "Juillet 2024 - Actuellement",
            lieux: "Paris",
            entreprise: "Freaks United",
            more: "Commencé en tant que développeuse web, j'ai évolué en chef de projet pour gérer une équipe de développeurs et d'alternants."
        },
        {
            id: "Stage - Assistante de recherche en traitement d'image médicale",
            content: "Stage de recherche en traitement d'image médicale incluant à la fois des prétraitements et des algorithmes d’Intelligence Artificielle pour une application orientée recherche.",
            langage: ["Python", "OpenCV", "Pydicom"],
            date: "Avril 2024 - juin 2024",
            lieux: "Reims",
            entreprise: "Université de Reims Champagne-Ardenne",
            more: "Traitement d'image sur des echographies pulmonaires afin de détecter les lignes B à l'aide d'algorithmes utilisant les flux optiques."
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
        <section className='flex flex-col min-h-screen w-full p-10 lg:px-32 justify-center z-10' id="Experience">
            <h1 className='text-2xl md:text-3xl lg:text-5xl text-slate-700 h-fit py-2 w-fit mb-10'
                data-aos="fade-up"
            >
                💼 Experiences & 🎓 Formations
            </h1>
            <article className='text-slate-600 pb-10 text-lg lg:text-xl'
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <p>Mes expériences professionnelles réalisées ou en cours.</p>
            </article>
            <ul className="timeline timeline-vertical">
                {experience.map((exp, index) => (
                    <li key={index} className="">
                        <hr className="bg-amber-400" 
                            data-aos="zoom-in"
                        />
                        <div className="hidden md:block md:timeline-middle px-2"
                            data-aos="zoom-in"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                className="h-5 w-5 fill-amber-500">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={`cursor-pointer my-2 transition delay-75 shadow bg-white hover:bg-indigo-100 rounded-lg ${index % 2 === 0 ? 'timeline-middle md:timeline-start' : 'timeline-middle md:timeline-end'}`} onClick={() => openModal(exp)} 
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay="200"
                        >
                            <h2 className="flex text-sm md:text-lg lg:text-xl text-white p-6 bg-indigo-500 justify-center rounded-t-lg">{exp.id}</h2>
                            <div className='p-6'>
                                <p className='md:hidden text-sm text-slate-600'>🗓️ {exp.date}</p>
                                <p className="font-bold mt-1 text-slate-600 text-sm md:text-base">🏢 {exp.entreprise}</p>
                                <p className="mt-1 text-slate-600 text-sm md:text-base">📍 {exp.lieux}</p>
                                {exp.content && <p className="mt-1 italic text-slate-500 text-sm md:text-base">{exp.content}</p>}
                            </div>
                        </div>
                        <div className={`bg-white my-2 ${index % 2 === 0 ? 'hidden md:block md:timeline-end' : 'hidden md:block md:timeline-start'}`}
                            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                            data-aos-delay="200"
                            >
                            
                                <p className="p-4 text-slate-600 rounded shadow text-sm md:text-base">🗓️ {exp.date}</p>

                        </div>
                        <hr className="bg-amber-400" 
                            data-aos="zoom-in"
                        />
                        {modalOpen && selectedExperience && selectedExperience.id === exp.id && (
                            <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black/60">
                                <div className="relative mx-auto max-w-lg md:max-w-2xl bg-[#dee4fe] rounded-lg shadow-lg p-6 md:p-8">
                                    <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-800 hover:text-gray-500 focus:outline-none">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    <h2 className="text-2xl md:text-2xl font-bold text-indigo-500 mb-4 text-center">{selectedExperience.id}</h2>
                                    <p className="font-bold mb-1 text-center text-slate-600"> {selectedExperience.entreprise}</p>
                                    <p className="text-lg mb-1 text-center text-slate-600">{selectedExperience.date}</p>
                                    <p className="mb-4 text-center text-slate-600">{selectedExperience.lieux}</p>
                                    <p className="mb-4 text-slate-600">{selectedExperience.content}</p>
                                    {selectedExperience.more && <p className="italic mb-4 text-slate-600">{selectedExperience.more}</p>}
                                    {Array.isArray(selectedExperience.langage) && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {selectedExperience.langage.map((lang, langIndex) => (
                                                <span key={langIndex} className="bg-indigo-300 text-indigo-700 px-2 py-1 rounded">{lang}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <article className='text-slate-600 py-10 text-lg lg:text-xl'
                data-aos="fade-up"
            >
                <p>Mes formations réalisées ou en cours.</p>
            </article>
            <div className="w-full text-sm md:text-lg md:flex md:grid md:grid-cols-3 md:gap-4">
                {formations.map((formation, index) => (
                    <div key={index} className="bg-white py-6 rounded-lg shadow-lg my-4 md:m-0"
                        data-aos="fade-up"
                        data-aos-delay={index*200}
                    >
                        <div className="pb-4 md:pb-auto h-full">
                            <div className='flex w-full items-center justify-center px-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" className='fill-indigo-500 my-2  bg-indigo-200 rounded-full p-4'viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                                </svg>
                            </div>    
                            <h2 className="pb-6 md:text-lg lg:text-xl font-bold text-indigo-500 text-center px-10 mb-6">
                                {formation.id}
                            </h2>
                            <p className="pb-2 px-10 text-slate-600">🗓️ {formation.date}</p>
                            <p className="font-bold pb-2 px-10 text-slate-600">🏢 {formation.entreprise}</p>
                            <p className="pb-6 px-10 text-slate-600">📍 {formation.lieux}</p>
                            <p className='px-10 text-slate-500 italic'>{formation.more}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10"
                data-aos="zoom-in"
            >
                <a
                    href={CV}
                    download
                    className="flex items-center justify-center border border-amber-400 text-[#0f1628] px-4 py-2 bg-amber-400 hover:bg-indigo-300 hover:border-indigo-300 transition delay-75 text-lg rounded shadow-md"
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
