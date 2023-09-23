import AOS from 'aos';
import 'aos/dist/aos.css';

export default Experience;

function Experience(){
    //state
    const experience = [
        {id : "Stage développement Back-end Symfony", content:"Le stage consistait à réaliser un site click & collect, afin de faciliter la prise de commande pendant le covid.", lieux:"Troyes", entreprise : "LeBidibul",date:"mai 2021 - juillet 2021", langage : ["php","Symfony","Tailwind CSS"], more:"Avant, de réaliser le projet demandé, j'ai du réaliser un travail de recherche sur les différents framework et CMS existant afin de réaliser un travail de comparaison. Ensuite, pour commencer le projet, je l'ai modélisé avec looping et la méthode mérise, afin de définir mes classes, mes entités et mes relations. Ensuite, j'ai utilisé le framework Symfony pour réaliser le projet. J'ai utilisé Tailwind comme librairie CSS."},
        {id : "Stage développement extension WordPress", content:"Le stage consistait à réaliser une extension WordPress permettant d'automatiser la prise de réunion à plusieurs ( plus de 3 personnes ).", lieux:"Paris", entreprise:"Cabinet Lacour", date:"avril 2023 - juin 2023", langage: ["php","WordPress","MySQL"], more:"Dans un premier temps j'ai réalisé un travail de modélisation en utilisant la méthode UML, pour définir mes classes et construire ma base de donnée. J'ai réalisé par la suite une connexion avec l'API google afin de connecter son google Calendar à l'extension afin de récuperer les horaires libres sur l'agenda pour envoyer aux participants ( sans l'orginasateur ) les horaires et les dates disponibles pour qu'ils puissent mettre leurs disponibilités."}
    ]

    //Affichage
    return[
        <div id="Experience" className="flex items-center max-w-[63%] lg:max-w-[49%] mx-auto min-h-screen justify-center my-auto">
            <div className="">
                <div className="flex justify-center items-center" data-aos="fade-down" data-aos-duration="2000">
                    <span className="sm:bg-white/30 sm:h-0.5 sm:w-40 md:w-80 sm:mr-7"></span>
                    <h1 className="text-amber-200 text-xl text-center">Expériences</h1>
                </div>
                <div className="flex justify-center text-white/70 mx-auto" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                    <div className="container my-auto md:my-5">
                        {experience.map((exp) => (
                            <div className="mt-10 mx-auto">
                                <h1 key={exp.id} className="text-yellow-500 text-xl sm:text-2xl text-justify mb-5">
                                    {exp.id}
                                </h1>
                                <h1 key={exp.id} className="mb-5 text-yellow-300/90 sm:text-lg text-sm">
                                    {exp.date}
                                </h1>
                                <p key={exp.id} className="text-justify text-sm md:text-base">
                                    {exp.content}
                                </p>
                                <details className='mb-5'>
                                    <summary className='list-none'>
                                        <a className="text-sm md:text-base text-amber-500 hover:text-amber-200 hover:cursor-pointer mr-auto list-none">Lire plus ...</a>
                                    </summary>
                                    <p key={exp.id} className="text-sm md:text-base text-justify mb-5">
                                            {exp.more}
                                    </p>
                                </details>
                                <h1 key={exp.id} className="text-yellow-300/90 mb-5 sm:text-lg text-sm">
                                    {exp.entreprise} - {exp.lieux}
                                </h1>
                                {exp.langage.map((lang) =>(
                                    <span key={exp.id} className="mb-1 mr-2 border rounded-full px-3 py-1 border-amber-400 text-amber-400 inline-block">
                                    {lang}
                                </span>
                                ))}
                                <div className="bg-white/30 h-1 mt-5"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ]
}