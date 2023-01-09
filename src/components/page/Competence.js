import AOS from 'aos';
import 'aos/dist/aos.css';

export default Competence;

function Competence(props){
    //State

    //comportement

    //Affichage
    return [
        <div id="Competence" className="flex items-center w-full min-h-screen justify-center">
            <div className="container">
                <div className="container flex items-center justify-center" data-aos="fade-down" data-aos-duration="2000">
                    <h1 className="text-sky-200 text-xl text-center">Compétences</h1>
                    <span className="sm:bg-white/30 sm:h-0.5 sm:w-40 md:w-80 sm:ml-7"></span>
                </div>
                <div className="lg:flex w-4/6 m-auto">
                    <div className="w-content sm:w-80 items-center text-center mx-auto my-5 p-5" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
                        <h2 className="text-indigo-300/60 text-2xl my-5">Front-end</h2>
                        <div className="text-white/70 text-left">
                            {props.devFront.map((skill) => (
                                <div>
                                    <span key={skill.id} className="mb-3 flex items-center"> 
                                        <svg viewBox="0 0 128 128" height="20px" className="mr-3">
                                            <path fill="#E44D26" d={skill.content} className="fill-cyan-500"></path>
                                        </svg>
                                        {skill.id}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-content sm:w-80 items-center text-center mx-auto my-5 p-5" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                        <h2 className="text-indigo-300/60 text-2xl my-5">Back-end</h2>
                        <div className="text-white/70 text-left">
                            {props.devBack.map((skill) => (
                                <div>
                                    <span key={skill.id} className="mb-3 flex items-center"> 
                                        <svg viewBox="0 0 128 128" height="20px" className="mr-3">
                                            <path fill="#E44D26" d={skill.content} className="fill-cyan-500"></path>
                                        </svg>
                                        {skill.id}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-content sm:w-80 items-center text-center mx-auto my-5 p-5" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
                        <h2 className="text-indigo-300/60 text-2xl my-5">Autre</h2>
                        <div className="text-white/70 text-left">
                            {props.devAutre.map((skill) => (
                                <div>
                                    <span key={skill.id} className="mb-3 flex items-center">
                                        <svg viewBox="0 0 128 128" height="20px" className="mr-3">
                                            <path fill="#E44D26" d={skill.content} className="fill-cyan-300/70"></path>
                                        </svg>
                                        {skill.id}
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    ]
}