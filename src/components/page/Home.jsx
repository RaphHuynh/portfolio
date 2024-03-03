import 'aos/dist/aos.css';
import resume from "../../assets/cv/CV_raphaelle_Huynh.pdf";

export default Home;

function Home() {
    return (
        <section className='flex flex-col sm:flex-row min-h-screen w-full pt-10 px-10 lg:px-32 gap-4 items-center' id='Home'>
            <article className='w-full lg:w-2/3'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl pb-6 lg:pb-10 text-amber-400'>
                    Bonjour 👋, je suis Raphaëlle Huynh
                </h1>
                <p className='flex text-sm lg:text-lg pb-6 lg:pb-10 gap-4'>
                    <span>
                        📍France, Reims
                    </span>
                    <span>
                        🚗 Ouvert à la mobilité
                    </span>
                </p>
                <p className='text-sm md:text-lg pb-6 lg:pb-10'>
                    Etudiante en dernière année de licence informatique à l'université de Reims Champagne Ardenne, je m'oriente vers un master en intelligence artificielle et data.
                </p>
                <p className='text-sm md:text-lg pb-6 lg:pb-10'>
                    Actuellement, je suis à la recherche d'une alternance pour mon master dans le domaine de la data science. Effectivement, passionnée par les mathématiques et la science en générale, ce domaine de l'informatique me permet de réunir mes diverses passions.
                </p>
                <p className='text-sm md:text-lg pb-6 lg:pb-10'>
                    A la suite de mon master je souhaite poursuivre mes études en réalisant un doctorat en intelligence artificielle / data pour approfondir au maximum mes connaissances sur le sujet.
                </p>
                <p className='text-sm md:text-lg pb-6 lg:pb-10'>
                    En dehors de mes études, j'aime réaliser divers projets informatiques afin de découvrir, tester de nouvelles technologies.
                </p>
                <div className='flex gap-4'>
                    <a href={'https://www.linkedin.com/in/raphaëlle-huynh-46192919b/'} className='bg-amber-400 text-white dark:text-[#0f1628] px-2 py-1 hover:bg-amber-500 transition delay-75 text-lg'>
                        LinkedIn
                    </a>
                    <a href={'https://github.com/RaphHuynh'} className='bg-amber-400 text-white dark:text-[#0f1628] px-2 py-1 hover:bg-amber-500 transition delay-75 text-lg'>
                        Github
                    </a>
                    <a href={resume} className='bg-amber-400 text-white dark:text-[#0f1628] px-2 py-1 hover:bg-amber-500 transition delay-75 text-lg'>
                        CV
                    </a>
                </div>
            </article>
            <aside className='hidden lg:block w-1/3'>
                <img src={"https://media.licdn.com/dms/image/D4E03AQE2qM_v5UQuAA/profile-displayphoto-shrink_800_800/0/1694529792449?e=2147483647&v=beta&t=n_5ZZft0O3O5HSOItCmqFyJRblehOuNuZTeAZBPvrpI"} className='rounded-full bg-amber-400 p-1'></img>
            </aside>
        </section>
    );
}
