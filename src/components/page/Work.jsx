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
        <section className="flex flex-col min-h-screen w-full px-32 pb-20 justify-center" id="Projet">
            <h1 className='text-6xl text-yellow-400 border-b border-yellow-400 h-fit py-2 w-fit mb-10'>
                📂 Projets
            </h1>
            <p className="pb-10 text-lg">Cette section présente les divers projets que j'ai réalisé et que j'ai choisi de mettre en avant. <br />
                Pour trouver mes autres projets personnels il faut se rendre sur github.</p>
            <h2 className="text-4xl mb-4 text-amber-500">🏢 Freelance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {freelance.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="🏢" />
                ))}
            </div>
            <h2 className="text-4xl my-4 text-amber-500">📊 Data Science</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dataScience.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="📊" />
                ))}
            </div>
            <h2 className="text-4xl my-4 text-amber-500">🌐 Web</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {web.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="🌐" />
                ))}
            </div>
            <h2 className="text-4xl my-4 text-amber-500">🛠️ Back-end</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {back.map((project, index) => (
                    <ProjectCard key={index} project={project} emoji="🛠️" />
                ))}
            </div>
            <h2 className="text-4xl my-4 text-amber-500">🎓 Universitaire</h2>
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
                <a href={project.link} className="flex flex-col justify-between bg-slate-50 dark:bg-white/10 p-6 rounded-lg hover:shadow hover:cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-200/10">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current hover:fill-yellow-400">
                                        <path d="M12 .3C5.37 .3 0 5.67 0 12.3c0 5.39 3.48 9.96 8.32 11.57.61.11.83-.27.83-.6 0-.3-.01-1.3-.02-2.37-3.39.73-4.1-1.63-4.1-1.63-.55-1.4-1.35-1.78-1.35-1.78-1.11-.77.08-.75.08-.75 1.23.09 1.88 1.26 1.88 1.26 1.1 1.88 2.89 1.34 3.6 1.02.11-.8.43-1.34.78-1.65-2.73-.31-5.6-1.36-5.6-6.05 0-1.34.48-2.44 1.26-3.3-.13-.32-.55-1.56.12-3.25 0 0 1.02-.33 3.35 1.26a11.78 11.78 0 0 1 3.25-.45c1.1.01 2.22.15 3.25.45 2.32-1.6 3.34-1.26 3.34-1.26.68 1.69.26 2.93.13 3.25.78.86 1.26 1.96 1.26 3.3 0 4.7-2.88 5.73-5.62 6.04.44.38.83 1.13.83 2.28 0 1.65-.01 2.98-.01 3.39 0 .34.22.73.84.6A12.12 12.12 0 0 0 24 12.3c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                </a>
                            )}
                        </div>
                        <div className="flex flex-wrap mt-4">
                            {project.langage.map((lang, index) => (
                                <span key={index} className="inline-block bg-yellow-50 border border-yellow-400 text-yellow-400 px-2 py-1 rounded mr-2 mb-2 dark:bg-yellow-500 dark:border-yellow-200 dark:text-yellow-200">{lang}</span>
                            ))}
                        </div>
                    </div>
                </a>

            ) : (
                <div className="flex flex-col justify-between bg-slate-50 dark:bg-white/10 p-6 rounded-lg">
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current hover:fill-yellow-400">
                                    <path d="M12 .3C5.37 .3 0 5.67 0 12.3c0 5.39 3.48 9.96 8.32 11.57.61.11.83-.27.83-.6 0-.3-.01-1.3-.02-2.37-3.39.73-4.1-1.63-4.1-1.63-.55-1.4-1.35-1.78-1.35-1.78-1.11-.77.08-.75.08-.75 1.23.09 1.88 1.26 1.88 1.26 1.1 1.88 2.89 1.34 3.6 1.02.11-.8.43-1.34.78-1.65-2.73-.31-5.6-1.36-5.6-6.05 0-1.34.48-2.44 1.26-3.3-.13-.32-.55-1.56.12-3.25 0 0 1.02-.33 3.35 1.26a11.78 11.78 0 0 1 3.25-.45c1.1.01 2.22.15 3.25.45 2.32-1.6 3.34-1.26 3.34-1.26.68 1.69.26 2.93.13 3.25.78.86 1.26 1.96 1.26 3.3 0 4.7-2.88 5.73-5.62 6.04.44.38.83 1.13.83 2.28 0 1.65-.01 2.98-.01 3.39 0 .34.22.73.84.6A12.12 12.12 0 0 0 24 12.3c0-6.63-5.37-12-12-12z"/>
                                </svg>
                            </a>
                        )}
                    </div>
                    <div className="flex flex-wrap mt-4">
                        {project.langage.map((lang, index) => (
                            <span key={index} className="inline-block bg-yellow-50 border border-yellow-400 text-yellow-400 px-2 py-1 rounded mr-2 mb-2 dark:bg-yellow-500 dark:border-yellow-200 dark:text-yellow-200">{lang}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
