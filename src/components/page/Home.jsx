import 'aos/dist/aos.css';
import resume from "../../assets/cv/CV_raphaelle_Huynh.pdf";

export default Home;

function Home() {
    return (
        <section className='flex flex-col sm:flex-row min-h-screen w-full pt-20 px-10 lg:px-32 gap-20 items-center' id='Home'>
            <article className='w-full lg:w-2/3'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl pb-6 lg:pb-10 text-indigo-500'>
                    Bonjour 👋, je suis Raphaëlle Huynh
                </h1>
                <p className='flex text-sm lg:text-lg pb-4 lg:pb-6 gap-4 text-slate-600'>
                    <span>
                        📍France, Reims
                    </span>
                    <span>
                        🚗 Ouvert à la mobilité
                    </span>
                    <span>
                        🖥️ Télétravail possible
                    </span>
                </p>
                <div className='grid grid-cols-3 gap-4 pb-4 lg:pb-6'>
                    <div className='px-4 py-6 rounded flex flex-col items-center text-center h-full border border-indigo-500 bg-indigo-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-mortarboard" viewBox="0 0 16 16" className='fill-indigo-500 mb-2'>
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                        </svg>
                        <p className='text-xl font-black text-indigo-500'>Etudiante en Master Informatique</p>
                    </div>

                    <div className='px-4 py-6 rounded flex flex-col items-center text-center h-full border border-indigo-500 bg-indigo-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-mortarboard" viewBox="0 0 16 16" className='fill-indigo-500 mb-2'>
                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                        </svg>
                        <p className='text-xl font-black text-indigo-500'>Data Scientist</p>
                    </div>

                    <div className='px-4 py-6 rounded flex flex-col items-center text-center h-full border border-indigo-500 bg-indigo-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-mortarboard" viewBox="0 0 16 16" className='fill-indigo-500 mb-2'>
                            <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z" />
                        </svg>
                        <p className='text-xl font-black text-indigo-500'>Freelance</p>
                    </div>
                </div>
                <p className='text-sm md:text-lg pb-4 lg:pb-6 text-slate-600'>
                    Etudiante en première année du Master Informatique à l'université de Reims Champagne Ardenne et Data Scientist en alternance à l'IIAS, je réalise aussi des missions en freelance dans divers domaines de l'informatique.
                </p>
                <p className='text-sm md:text-lg pb-4 lg:pb-6 text-slate-600'>
                    Passionnée par les mathématiques, l'informatique et la science en générale, je souhaite réaliser un doctorat dans le domaine de l'intelligence artificielle afin d'approfondir au maximum mes connaissances dans ce domaine.
                </p>
                <div className='flex grid grid-cols-3 gap-4 text-center w-1/2'>
                    <a href={'https://www.linkedin.com/in/raphaëlle-huynh-46192919b/'} className='border border-amber-400 text-[#0f1628] px-2 py-1 bg-amber-400 hover:bg-indigo-300 hover:border-indigo-300 transition delay-75 text-lg rounded'>
                        LinkedIn
                    </a>
                    <a href={'https://github.com/RaphHuynh'} className='border border-amber-400 text-[#0f1628] px-2 py-1 bg-amber-400 hover:bg-indigo-300 hover:border-indigo-300 transition delay-75 text-lg rounded'>
                        Github
                    </a>
                    <a href={resume} className='border border-amber-400 text-[#0f1628] px-2 py-1 bg-amber-400 hover:bg-indigo-300 hover:border-indigo-300 transition delay-75 text-lg rounded'>
                        CV
                    </a>
                </div>
            </article>
            <aside className='hidden lg:block w-1/3'>
                <img src={"https://media.licdn.com/dms/image/D4E03AQE2qM_v5UQuAA/profile-displayphoto-shrink_800_800/0/1694529792449?e=2147483647&v=beta&t=n_5ZZft0O3O5HSOItCmqFyJRblehOuNuZTeAZBPvrpI"} className='rounded-full bg-indigo-500 p-1'></img>
            </aside>
        </section>
    );
}
