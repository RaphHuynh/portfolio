import 'aos/dist/aos.css';
import resume from "../../assets/cv/cv_raphaelle_huynh.pdf";

export default Home;

function Home(){
    return [
        <section  className='flex min-h-screen w-full px-32 gap-4 items-center' id='Home'>
            <article className='w-2/3'>
                <h1 className='text-6xl pb-10 text-amber-400'>
                    Bonjour 👋, je suis Raphaëlle Huynh
                </h1>
                <p className='flex text-lg pb-10 gap-4'>
                    <span>
                        📍France, Reims
                    </span>
                    <span>
                        🚗 Ouvert à la mobilité
                    </span></p>
                <p className='text-lg pb-10'>
                    Etudiante en dernière année de licence informatique à l'université de Reims Champagne Ardenne, je m'oriente vers un master en intelligence artificielle et data.
                </p>
                <p className='text-lg pb-10'>
                    Actuellement, je suis à la recherche d'une alternance pour mon master dans le domaine de la data science. Effectivement, passionnée par les mathématiques et la science en générale, ce domaine de l'informatique me permet de réunir mes divers passions.
                </p>
                <p className='text-lg pb-10'>
                    A la suite de mon master je souhaite poursuivre mes études en réalisant un doctorat en intelligence artificielle / data pour approfondir au maximun mes connaissances sur le sujet.
                </p>
                <p className='text-lg pb-10'>
                    En dehors de mes études, j'aime réaliser divers projets informatique afin de découvrir, tester de nouvelle technologies.
                </p>
                <div className='flex gap-4'>
                    <a href={'https://www.linkedin.com/in/raphaëlle-huynh-46192919b/'} className='bg-black text-white px-2 py-1 hover:bg-amber-400 transition delay-75 text-lg'>
                        LinkedIn
                    </a>
                    <a href={'https://github.com/RaphHuynh'} className='bg-black text-white px-2 py-1 hover:bg-amber-400 transition delay-75 text-lg'>
                        Github
                    </a>
                    <a href={resume} className='bg-black text-white px-2 py-1 hover:bg-amber-400 transition delay-75 text-lg'>
                        CV
                    </a>
                </div>
            </article>
            <aside className='w-1/3'>
                <img src={"https://media.licdn.com/dms/image/D4E03AQE2qM_v5UQuAA/profile-displayphoto-shrink_800_800/0/1694529792449?e=2147483647&v=beta&t=n_5ZZft0O3O5HSOItCmqFyJRblehOuNuZTeAZBPvrpI"} className='rounded-full bg-amber-400 p-1'></img>
            </aside>
        </section>
    ]
}
