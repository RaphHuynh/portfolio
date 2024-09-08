import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../../assets/illustration.svg"
export default Competence;

AOS.init();

function Competence(){
    //State
    const langage = [{id:"Python"},{id:"C"},{id:"Java"},{id:"PHP"},{id:"Javascript"}];

    const dataScience = [{id:"Anaconda"},{id:"Pandas"},{id:"Seaborn"},{id:"Matplotlib"},{id:"Scikit-learn"},{id:"Tensorflow"},{id:"Pytorch"},{id:"NLTK"},{id:"OpenCV"}]

    const web = [{id:"Fast Api"},{id:"ReactJS"},{id:"Laravel"},{id:"Wordpress"},{id:"Tailwind CSS"},{id:"Bootstrap"}]

    const autre = [{id:"MySQL"},{id:"PL/SQL - Oracle"},{id:"NoSQL"},{id:"Git"},{id:"Bash"},{id:"UML"},{id:"Merise"},{id:"Kaggle"}]

    //Affichage
    return (
        <section className='flex flex-col min-h-screen w-full p-10 lg:px-32 justify-center z-10 bg-indigo-100' id="Competence">
            <h1 className='text-2xl md:text-3xl lg:text-5xl text-slate-700 h-fit py-2 w-fit mb-10' data-aos="fade-up">
                💻 Compétences
            </h1>
            <aside className="text-sm md:text-lg pb-10">
                <p className='text-slate-600' data-aos="fade-up" data-aos-delay="200">
                    Voici les différentes technologies que j'utilise au quotidien dans mon travail, à l'université ou pour mes projets personnels.
                </p>
            </aside>
            <article className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 text-sm md:text-lg'>
                <div className='grid gap-6 grid-rows-2 h-full'>
                    <div className="w-full rounded-lg flex flex-col justify-between bg-white/70 shadow" data-aos="fade-right" data-aos-delay="400">
                        <h2 className='flex md:text-lg lg:text-xl text-white text-center py-4 justify-center items-center border-b bg-indigo-500 rounded-t-lg'>Langages</h2>
                        <div className='px-6 pt-4'>
                            <p className='text-slate-600 mb-2'>Les différents langages de programmation que j'utilise régulièrement</p>
                        </div>
                        <div className='flex flex-wrap pb-6 px-6'>
                            {langage.map(item => (
                                <span className="bg-indigo-300 text-indigo-700 mr-2 px-2 py-1 rounded mb-2 text-sm" key={item.id}>{item.id}</span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full rounded-lg flex flex-col justify-between bg-white/70 shadow" data-aos="fade-right" data-aos-delay="500">
                        <h2 className='flex md:text-lg lg:text-xl text-white text-center py-4 justify-center items-center border-b bg-indigo-500 rounded-t-lg'>Data Science</h2>
                        <div className='px-6 pt-4'>
                            <p className='text-slate-600 mb-2'>Bibliothèques python que j'utilise dans le domaine de la data science</p>
                        </div>
                        <div className='flex flex-wrap px-6 pb-6'>
                                {dataScience.map(item => (
                                    <span className="bg-indigo-300 text-indigo-700 mr-2 px-2 py-1 rounded mb-2 text-sm" key={item.id}>{item.id}</span>
                                ))}
                        </div>
                    </div>
                </div>

                <div className='h-full md:flex items-center hidden' data-aos="zoom-in" data-aos-delay="600">
                    <img src={image} alt="Illustration">
                    </img>
                </div>

                <div className='grid gap-6 grid-rows-2'>
                    <div className="w-full rounded-lg flex flex-col justify-between bg-white/70 shadow" data-aos="fade-left" data-aos-delay="700">
                        <h2 className='flex md:text-lg lg:text-xl text-white text-center py-4 justify-center items-center border-b bg-indigo-500 rounded-t-lg'>Web</h2>
                        <div className='px-6 pt-4'>
                            <p className='text-slate-600 mb-2'>Framework et CMS web que j'utilise pour developper des applications web</p>
                        </div>
                        <div className='flex  flex-wrap pb-6 px-6'>
                                {web.map(item => (
                                    <span className="bg-indigo-300 text-indigo-700 mr-2 px-2 py-1 rounded mb-2 text-sm" key={item.id}>{item.id}</span>
                                ))}
                        </div>
                    </div>
                    <div className="w-full rounded-lg flex flex-col justify-between bg-white/70 shadow" data-aos="fade-left" data-aos-delay="800">
                        <h2 className='flex md:text-lg lg:text-xl text-white text-center py-4 justify-center items-center border-b bg-indigo-500 rounded-t-lg'>Autres</h2>
                        <div className='px-6 pt-4'>
                            <p className='text-slate-600 mb-2'>Base de données et méthodes que j'utilise pour réaliser mes différents projets</p>
                        </div>
                        <div className='flex  flex-wrap px-6 pb-6'>
                                {autre.map(item => (
                                    <span className="bg-indigo-300 text-indigo-700 mr-2 px-2 py-1 rounded mb-2 text-sm" key={item.id}>{item.id}</span>
                                ))}
                            </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

