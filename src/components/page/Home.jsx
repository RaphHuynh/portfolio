import resume from "../../assets/cv/CV_raphaelle_Huynh.pdf";
import {motion} from "framer-motion";

export default Home;

const fadeInOutVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 1.2,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};

const itemVariants = (delay) => ({
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 1,
            delay: delay,
            ease: "easeInOut"
        }
    }
});

function Home() {
    return (
        <motion.section 
            className='flex flex-col sm:flex-row min-h-screen w-full px-10 lg:px-32 gap-20 items-center justify-center z-10' 
            id='Home'
            variants={fadeInOutVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <motion.article className='w-full lg:w-2/3 z-10 py-16 md:py-0'>
                <motion.h1 className='text-2xl md:text-4xl lg:text-6xl pb-4 lg:pb-10 text-slate-700 z-10'
                    variants={itemVariants(0)}
                >
                    Bonjour 👋, je suis Raphaëlle
                </motion.h1>
                <motion.p className='flex flex-col md:flex-row sm:text-lg pb-4 lg:pb-6 gap-2 md:gap-4 text-slate-600 z-10'>
                    <motion.span
                        variants={itemVariants(0.2)}
                    >
                        📍France, Reims
                    </motion.span>
                    <motion.span
                        variants={itemVariants(0.4)}
                    >
                        🚗 Ouverte à la mobilité
                    </motion.span>
                    <motion.span
                        variants={itemVariants(0.6)}
                    >
                        🖥️ Télétravail possible
                    </motion.span>
                </motion.p>
                <motion.div className='grid sm:grid-cols-3 gap-2 md:gap-4 pb-4 lg:pb-6'>
                    <motion.div className='px-4 py-2 md:py-6 rounded flex flex-col items-center text-center h-full border border-indigo-500 bg-indigo-200 z-10'
                        variants={itemVariants(0.8)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-mortarboard" viewBox="0 0 16 16" className='fill-indigo-500 mb-2'>
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                        </svg>
                        <p className='text-sm md:text-lg lg:text-xl font-black text-slate-800'>Etudiante en Master Informatique</p>
                    </motion.div>

                    <motion.div className='px-4 py-2 md:py-6 rounded flex flex-col items-center text-center h-full border border-indigo-500 bg-indigo-200 z-10'
                        variants={itemVariants(1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-mortarboard" viewBox="0 0 16 16" className='fill-indigo-500 mb-2'>
                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                        </svg>
                        <p className='text-sm md:text-lg lg:text-xl font-black text-slate-900'>Data Scientist en alternance</p>
                    </motion.div>

                    <motion.div className='px-4 py-2 md:py-6 rounded flex flex-col items-center text-center h-full border border-indigo-500 bg-indigo-200 z-10'
                        variants={itemVariants(1.2)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-mortarboard" viewBox="0 0 16 16" className='fill-indigo-500 mb-2'>
                            <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z" />
                        </svg>
                        <p className='text-sm md:text-lg lg:text-xl font-black text-slate-900'>Freelance</p>
                    </motion.div>
                </motion.div>
               <motion.article className="bg-white/70 p-4 mb-6"
                    variants={itemVariants(1.4)}
                >
                <motion.p className='text-sm md:text-lg pb-4 lg:pb-6 text-slate-600 z-10'
                        variants={itemVariants(1.4)}
                    >
                        Etudiante en première année du Master Informatique à l'université de Reims Champagne Ardenne et Data Scientist en alternance à l'IIAS, je réalise aussi des missions en freelance dans divers domaines de l'informatique.
                    </motion.p>
                    <motion.p className='text-sm md:text-lg text-slate-600 z-10'
                        variants={itemVariants(1.6)}
                    >
                        Passionnée par les mathématiques, l'informatique et la science en générale, je souhaite réaliser un doctorat dans le domaine de l'intelligence artificielle afin d'approfondir au maximum mes connaissances dans ce domaine.
                    </motion.p>
               </motion.article>
                <motion.div className='flex grid grid-cols-3 gap-4 text-center md:w-1/2'
                >
                    <motion.a href={'https://www.linkedin.com/in/raphaëlle-huynh-46192919b/'} className='border border-amber-400 text-[#0f1628] px-2 py-1 bg-amber-400 hover:bg-indigo-300 hover:border-indigo-300 transition delay-75 text-sm md:text-lg rounded z-10'
                        variants={itemVariants(1.8)}
                    >
                        LinkedIn
                    </motion.a>
                    <motion.a href={'https://github.com/RaphHuynh'} className='border border-amber-400 text-[#0f1628] px-2 py-1 bg-amber-400 hover:bg-indigo-300 hover:border-indigo-300 transition delay-75 text-sm md:text-lg rounded z-10'
                        variants={itemVariants(2)}
                    >
                        Github
                    </motion.a>
                    <motion.a href={resume} className='border border-amber-400 text-[#0f1628] px-2 py-1 bg-amber-400 hover:bg-indigo-300 hover:border-indigo-300 transition delay-75 text-sm md:text-lg rounded z-10'
                        variants={itemVariants(2.2)}
                    >
                        CV
                    </motion.a>
                </motion.div>
            </motion.article>
            <motion.aside className='hidden lg:block w-1/3 z-10'
                variants={itemVariants(1.5)}
            >
                <img src={"https://media.licdn.com/dms/image/D4E03AQE2qM_v5UQuAA/profile-displayphoto-shrink_800_800/0/1694529792449?e=2147483647&v=beta&t=n_5ZZft0O3O5HSOItCmqFyJRblehOuNuZTeAZBPvrpI"} className='rounded-full bg-indigo-500 p-1'></img>
            </motion.aside>
        </motion.section>
    );
}
