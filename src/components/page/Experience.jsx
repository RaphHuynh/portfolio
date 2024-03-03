import AOS from 'aos';
import 'aos/dist/aos.css';

export default Experience;

function Experience() {
    // State
    const experience = [
        {
            id: "Stage développement Back-end Symfony",
            content: "Le stage consistait à réaliser un site click & collect, afin de faciliter la prise de commande pendant le covid.",
            lieux: "Troyes",
            entreprise: "LeBidibul",
            date: "Mai 2021 - juillet 2021",
            langage: ["PHP", "Symfony", "Tailwind CSS"],
            more: "Avant, de réaliser le projet demandé, j'ai du réaliser un travail de recherche sur les différents framework et CMS existant afin de réaliser un travail de comparaison. Ensuite, pour commencer le projet, je l'ai modélisé avec looping et la méthode mérise, afin de définir mes classes, mes entités et mes relations. Ensuite, j'ai utilisé le framework Symfony pour réaliser le projet. J'ai utilisé Tailwind comme librairie CSS."
        },
        {
            id: "Stage développement extension WordPress",
            content: "Le stage consistait à réaliser une extension WordPress permettant d'automatiser la prise de réunion à plusieurs ( plus de 3 personnes ).",
            lieux: "Paris",
            entreprise: "Cabinet Lacour",
            date: "Avril 2023 - juin 2023",
            langage: ["PHP", "WordPress", "MySQL"],
            more: "Dans un premier temps j'ai réalisé un travail de modélisation en utilisant la méthode UML, pour définir mes classes et construire ma base de donnée. J'ai réalisé par la suite une connexion avec l'API google afin de connecter son google Calendar à l'extension afin de récuperer les horaires libres sur l'agenda pour envoyer aux participants ( sans l'orginasateur ) les horaires et les dates disponibles pour qu'ils puissent mettre leurs disponibilités."
        },
        {
            id: "Stage Assistante de recherche en traitement d'image médicale",
            content: "Stage de recherche en traitement d'image médicale incluant à la fois des prétraitements et des algorithmes d’Intelligence Artificielle pour une application orientée recherche",
            langage: ["Python"],
            date: "Avril 2024 - juin 2024",
            lieux: "Reims",
            entreprise: "Université de Reims Champagne-Ardenne"
        }
    ];

    return (
        <section className='flex flex-col min-h-screen w-full px-32 justify-center' id="Experience">
            <h1 className='text-6xl text-yellow-400 border-b h-fit py-2 w-fit mb-10'>
                💼 Experiences professionnelles
            </h1>
            <div className="w-full text-lg">
                {experience.map((exp, index) => (
                    <div key={index} className="flex items-center py-4">
                        <div className="w-2/5 px-4">
                            <h2 className="text-xl font-bold">{exp.id}</h2>
                            <p className="">🗓️ {exp.date}</p>
                            <p className=" font-bold">🏢 {exp.entreprise}</p>
                            <p className="">📍 {exp.lieux}</p>
                        </div>
                        <div className="w-3/5 bg-slate-50 p-4 rounded-md ">
                            <p className="text-justify">{exp.content}</p>
                            <p className="text-justify">{exp.more}</p>
                            {Array.isArray(exp.langage) && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.langage.map((lang, langIndex) => (
                                        <span key={langIndex} className="bg-yellow-50 border border-yellow-400 text-yellow-400 px-2 py-1 rounded">{lang}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

