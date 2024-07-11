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
        { id: 'Site web Française des developpeuse', img: ImgFRDesDev },
        { id: 'Cours d\'intelligence artificielle', img: ImgCoursIA },
        { id: 'Bot Discord : Méteo', img: ImgBotDisMeteo },
        { id: 'IA Chatbot : Covid', img: ImgChatBotCovid },
        { id: 'IA Analyse de sentiment', img: ImgAnalyseSentiment },
        { id: 'Bot Discord : CV Developpeur', img: ImgBotDisCVDev },
        { id: 'Site Web : HS\'R', img: ImgHSR },
        { id: 'Bot Discord : Choix de Poop', img: ImgBotDisChoixPoop },
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
            <h1 className='text-2xl md:text-4xl lg:text-6xl text-yellow-400 border-b border-yellow-400 h-fit py-2 w-fit mb-10'>
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
                <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative mx-auto max-w-3xl bg-[#0f1628] border border-amber-400 rounded-lg shadow-lg p-6 md:p-8">
                        <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-200 hover:text-gray-500 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-4">{selectedProjet.id}</h2>
                        <img src={selectedProjet.img} alt={selectedProjet.id} className="mb-4 w-full h-72 object-cover rounded" />
                        <p className="text-white/80 mb-4">
                            {/* Ajoutez ici d'autres informations sur le projet si nécessaire */}
                        </p>
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
