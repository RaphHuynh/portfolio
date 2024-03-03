export default Work;

function Work(props) {
    const freelance = [{ id: "Association - Site HSR : Front-end", content: "Site vitrine réalisé pour l'association du HSR qui est une association de CTF de la réjoin Grand-Est.", langage: ["ReactJS", "ViteJS", "JavaScript", "TailwindCSS"], github: "https://github.com/RaphHuynh/HackSecuR", link: "https://storied-rolypoly-36ef5a.netlify.app" },
    { id: "Freelance - Portfolio pour boulanger : Front-end", content: "C'est un portfolio réaliser pour un client dans le domaine de la boulangerie. Le design a été réflechis avec le client.", langage: ["ReactJS", "JavaScript", "Tailwind CSS"], github: "https://github.com/RaphHuynh/portfolio-boulanger", link: "http://loicthierry.netlify.app/" }];

    const dataScience = [{ id: "Personnel - Résolution problème N-Reines", content: "Le but de cette intelligence est de trouver à l'aide l'algorithme du minimax et d'autres solutions les solutions du problèmes des n-reines. Le jeu consiste à remplir le plus de case possible sur le plateau avec O voici les contraintes : Quand O est posé on ne peut plus poser de O sur la même ligne / colonne et diagonales.", langage: ["Python", "Numpy", "Multi-thread"], github: "https://github.com/RaphHuynh/ia_renforcement_minimax/blob/main/jeuPlateauTP2.ipynb", link: "https://github.com/RaphHuynh/ia_renforcement_minimax/blob/main/jeuPlateauTP2.ipynb" },
    { id: "Personnel - Clustering avec K-Means", content: "Ce projet illustre l'utilisation de l'algorithme de clustering K-Means pour regrouper des données en clusters. Le code est écrit en Python et utilise la bibliothèque scikit-learn pour l'implémentation de K-Means et pour la génération de données aléatoires.", langage: ["Python", "Numpy", "Matplotlib", "Scikit-learn"], github: "https://github.com/RaphHuynh/Clustering-avec-K-Means/blob/main/clustering_kmeans.ipynb", link: "https://github.com/RaphHuynh/Clustering-avec-K-Means/blob/main/clustering_kmeans.ipynb" }];

    const web = [{ id: "Personnel - Site Françaises des développeuses : Front-end", content: "Site web de françaises des developpeuses. Ce site permet aux femmes dans le domaine de l'informatique de partager leur profil, portfolio afin de mettre leur profil en avant.", langage: ["JavaScript", "ViteJS", "ReactJS", "TailwindCSS"], github: "https://github.com/RaphHuynh/francaise-des-developpeuses", link: "" }];

    const back = [{ id: "Personnel - API Françaises des développeuses : Back-end", content: "Cette API REST permet de gérer la partie Back-end de mon projet Françaises des développeuses.", langage: ["Python", "MySQL", "FAST API"], github: "https://github.com/RaphHuynh/api-francaises-des-dev", link: "" },
    { id: "Personnel - Bot discord CV developper : Back-end", content: "C'est un bot discord qui permet de mettre en ligne son CV sur discord afin de faciliter le partage de celui-ci. Il permet aussi de génerer un CV au format PDF.", langage: ["Python", "NoSQL", "Json"], github: "https://github.com/RaphHuynh/bot-cv-developer-v1", link: "" }];

    const universitaire = [{ id: "Universitaire - Gestion de plateforme de vente de bois et de cuisine", content: "Le projet consiste à créer un site site de vente de cuisine. Un client peut acheter une cuisine. La commande est validé par le site uniquement si les revendeurs travaillant avec le site possèdent les pièces ou le bois suffisant pour réaliser les pièces. Le lien entre le site web php et le revendeur qui est un serveur java a été réalisé en HTTP. Le revendeur peut acheter du bois sur un marché de bois où chaque entreprise vendant des planches de bois peuvent mettre en vente leurs planches. La mise en vente des planches de bois doit être vérifié et certifié par une instance internationale. Etc ...", langage: ["PHP", "Java", "NoSQL", "Json", "UDP", "TCP", "HTTP"], github: "", link: "" },
    { id: "Universitaire - Pass O Camping : BDD", content: "C'est un projet universitaire de base de données qui consistait à réaliser et à mettre en oeuvre une base de données permettant de gérer un camping.", langage: ["Looping", "phpMyAdmin", "MySQL"], github: "", link: "" }
    ];

    return (
        <section className="flex flex-col min-h-screen w-full px-32 pb-10 justify-center" id="Projet">
            <h1 className='text-6xl text-yellow-400 border-b h-fit py-2 w-fit mb-10'>
                📂 Projets
            </h1>
            <p className="pb-10 text-lg">Cette section présente les divers projets que j'ai réalisé et que j'ai choisi de mettre en avant. <br />
                Pour trouver mes autres projets personnels il faut se rendre sur github.</p>
            <h2 className="text-4xl mb-4 text-amber-500">Freelance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {freelance.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="🏢" />
                ))}
            </div>
            <h2 className="text-4xl my-4 text-amber-500">Data Science</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dataScience.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="🔬" />
                ))}
            </div>
            <h2 className="text-4xl my-4 text-amber-500">Web</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {web.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="💻" />
                ))}
            </div>
            <h2 className="text-4xl my-4 text-amber-500">Back-end</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {back.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="🛠️" />
                ))}
            </div>
            <h2 className="text-4xl my-4 text-amber-500">Universitaire</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {universitaire.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="🎓" />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, emoji }) {
    return (
        <div className="flex h-full">
            {project.link ? (
                <a href={project.link} className="flex flex-col justify-between bg-slate-50 p-6 rounded-lg hover:shadow hover:cursor-pointer hover:bg-blue-50">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-2xl mr-2">{emoji}</span>
                                <h2 className="text-xl text-yellow-400 font-bold">{project.id}</h2>
                            </div>
                            <p className="text-lg mb-4">{project.content}</p>
                        </div>
                        <div className="flex gap-4 items-center mt-auto">
                            {project.github && (
                                <a href={project.github} className="" target="_blank" rel="noopener noreferrer">
                                    <img src="https://simpleicons.org/icons/github.svg" alt="GitHub Logo" className="w-6 h-6" />
                                </a>
                            )}
                            {project.discord && (
                                <a href={project.discord} className="" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 hover:fill-yellow-400">
                                        <path d="M11.998 0c-6.628 0-12 5.373-12 11.998 0 5.415 3.564 9.989 8.459 11.569.619.137 1.019-.248 1.019-.617v-2.479c-4.507-1.23-7.707-4.872-7.707-9.473 0-5.279 4.305-9.584 9.584-9.584s9.584 4.305 9.584 9.584c0 4.601-3.2 8.243-7.707 9.473v2.479c0 .369.4.754 1.019.617 4.896-1.58 8.459-6.154 8.459-11.569 0-6.625-5.373-11.998-12-11.998zm-2.423 15.858l-.027.019c-.219.14-.548.106-.732-.08-.768-.745-1.49-1.267-2.42-1.514-.93-.247-1.918-.055-2.636.524-.219.139-.494.169-.732.08l-.025-.016c-.35-.217-.482-.664-.325-1.028.151-.365.514-.589.935-.589h.035c.304.001.587.138.77.374.518.715 1.25 1.209 2.027 1.447.777.238 1.6.119 2.285-.358.352-.239.771-.353 1.19-.353s.839.114 1.191.353c.685.477 1.508.596 2.285.358.777-.238 1.509-.731 2.027-1.447.183-.236.467-.373.771-.374h.035c.422 0 .784.224.936.589.157.364.025.811-.324 1.028zm-4.575-4.109c-.828-.001-1.523-.613-1.61-1.431h.346c.114.617.642 1.07 1.264 1.07h.364c.61 0 1.152-.431 1.268-1.043-.097.008-.191.015-.285.015zm1.98 0c-.095 0-.189-.007-.284-.015.116.611.659 1.043 1.269 1.043h.364c.622 0 1.15-.453 1.265-1.07h.346c-.087.818-.783 1.429-1.61 1.43zm4.282-1.431c-.088.818-.783 1.43-1.611 1.431-.094 0-.188-.007-.283-.015.115.611.657 1.043 1.267 1.043h.364c.622 0 1.15-.453 1.264-1.07h.346zm1.566-2.874c-.014 0-.028.002-.042.003-.472-.874-1.226-1.438-2.123-1.55-.266-.037-.532-.055-.793-.055-.79 0-1.559.19-2.273.555-.248.129-.507.194-.785.194-.625 0-1.222-.322-1.65-.907-.074-.11-.182-.173-.297-.173h-.025c-.116.002-.224.063-.298.174-.429.585-1.026.906-1.65.907-.278 0-.537-.065-.785-.194-.714-.365-1.483-.555-2.274-.555-.261 0-.527.018-.793.055-.897.112-1.651.676-2.123 1.55-.012-.001-.028-.003-.04-.003-.692 0-1.253.561-1.253 1.253 0 .69.563 1.252 1.253 1.252.012 0 .028-.001.04-.003.472.874 1.226 1.438 2.123 1.55.266.037.532.055.793.055.79 0 1.559-.19 2.273-.555.248-.129.507-.194.785-.194.625 0 1.222.322 1.65.907.074.11.182.173.297.173h.025c.116-.002.224-.063.298-.174.429-.585 1.026-.906 1.65-.907.278 0 .537.065.785.194.714.365 1.483.555 2.274.555.261 0 .527-.018.793-.055.897-.112 1.651-.676 2.123-1.55.012.001.028.003.042.003.69 0 1.253-.561 1.253-1.253s-.563-1.253-1.253-1.253zm-6.255 1.253c0 .691.562 1.253 1.253 1.253s1.253-.562 1.253-1.253c0-.691-.562-1.253-1.253-1.253s-1.253.562-1.253 1.253z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                        <div className="flex flex-wrap mt-4">
                            {project.langage.map((lang, index) => (
                                <span key={index} className="inline-block bg-yellow-50 border border-yellow-400 text-yellow-400 px-2 py-1 rounded mr-2 mb-2">{lang}</span>
                            ))}
                        </div>
                    </div>
                </a>

            ) : (
                <div className="flex flex-col justify-between bg-slate-50 p-6 rounded-lg">
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-2">{emoji}</span>
                            <h2 className="text-xl text-yellow-400 font-bold">{project.id}</h2>
                        </div>
                        <p className="text-lg mb-4">{project.content}</p>
                    </div>
                    <div className="flex gap-4 items-center mt-auto">
                        {project.github && (
                            <a href={project.github} className="" target="_blank" rel="noopener noreferrer">
                                <img src="https://simpleicons.org/icons/github.svg" alt="GitHub Logo" className="w-6 h-6 hover:fill-yellow-400" />
                            </a>
                        )}
                        {project.discord && (
                            <a href={project.discord} className="" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 hover:fill-yellow-400">
                                    <path d="M11.998 0c-6.628 0-12 5.373-12 11.998 0 5.415 3.564 9.989 8.459 11.569.619.137 1.019-.248 1.019-.617v-2.479c-4.507-1.23-7.707-4.872-7.707-9.473 0-5.279 4.305-9.584 9.584-9.584s9.584 4.305 9.584 9.584c0 4.601-3.2 8.243-7.707 9.473v2.479c0 .369.4.754 1.019.617 4.896-1.58 8.459-6.154 8.459-11.569 0-6.625-5.373-11.998-12-11.998zm-2.423 15.858l-.027.019c-.219.14-.548.106-.732-.08-.768-.745-1.49-1.267-2.42-1.514-.93-.247-1.918-.055-2.636.524-.219.139-.494.169-.732.08l-.025-.016c-.35-.217-.482-.664-.325-1.028.151-.365.514-.589.935-.589h.035c.304.001.587.138.77.374.518.715 1.25 1.209 2.027 1.447.777.238 1.6.119 2.285-.358.352-.239.771-.353 1.19-.353s.839.114 1.191.353c.685.477 1.508.596 2.285.358.777-.238 1.509-.731 2.027-1.447.183-.236.467-.373.771-.374h.035c.422 0 .784.224.936.589.157.364.025.811-.324 1.028zm-4.575-4.109c-.828-.001-1.523-.613-1.61-1.431h.346c.114.617.642 1.07 1.264 1.07h.364c.61 0 1.152-.431 1.268-1.043-.097.008-.191.015-.285.015zm1.98 0c-.095 0-.189-.007-.284-.015.116.611.659 1.043 1.269 1.043h.364c.622 0 1.15-.453 1.265-1.07h.346zm4.282-1.431c-.088.818-.783 1.43-1.611 1.431-.094 0-.188-.007-.283-.015.115.611.657 1.043 1.267 1.043h.364c.622 0 1.15-.453 1.264-1.07h.346zm1.566-2.874c-.014 0-.028.002-.042.003-.472-.874-1.226-1.438-2.123-1.55-.266-.037-.532-.055-.793-.055-.79 0-1.559.19-2.273.555-.248.129-.507.194-.785.194-.625 0-1.222-.322-1.65-.907-.074-.11-.182-.173-.297-.173h-.025c-.116.002-.224.063-.298.174-.429.585-1.026.906-1.65.907-.278 0-.537-.065-.785-.194-.714-.365-1.483-.555-2.274-.555-.261 0-.527.018-.793.055-.897.112-1.651.676-2.123 1.55-.012-.001-.028-.003-.04-.003-.692 0-1.253.561-1.253 1.253 0 .69.563 1.252 1.253 1.252.012 0 .028-.001.04-.003.472.874 1.226 1.438 2.123 1.55.266.037.532.055.793.055.79 0 1.559-.19 2.273-.555.248-.129.507-.194.785-.194.625 0 1.222.322 1.65.907.074.11.182.173.297.173h.025c.116-.002.224-.063.298-.174.429-.585 1.026-.906 1.65-.907.278 0 .537.065.785.194.714.365 1.483.555 2.274.555.261 0 .527-.018.793-.055.897-.112 1.651-.676 2.123-1.55.012.001.028.003.042.003.69 0 1.253-.561 1.253-1.253s-.563-1.253-1.253-1.253zm-6.255 1.253c0 .691.562 1.253 1.253 1.253s1.253-.562 1.253-1.253c0-.691-.562-1.253-1.253-1.253s-1.253.562-1.253 1.253z" />
                                </svg>
                            </a>
                        )}
                    </div>
                    <div className="flex flex-wrap mt-4">
                        {project.langage.map((lang, index) => (
                            <span key={index} className="inline-block bg-yellow-50 border border-yellow-400 text-yellow-400 px-2 py-1 rounded mr-2 mb-2">{lang}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

