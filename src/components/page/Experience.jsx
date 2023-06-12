import AOS from 'aos';
import 'aos/dist/aos.css';

export default Experience;

function Experience(props){
    //state

    //Comportement

    //Affichage
    return[
        <div id="Experience" className="flex items-center max-w-full min-h-screen justify-center my-auto">
            <div className="">
                <div className="flex justify-center items-center" data-aos="fade-down" data-aos-duration="2000">
                    <span className="sm:bg-white/30 sm:h-0.5 sm:w-40 md:w-80 sm:mr-7"></span>
                    <h1 className="text-amber-200 text-xl text-center">Expériences</h1>
                </div>
                <div className="flex justify-center text-white/70" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                    <div className="container w-96 my-5">
                        {props.experience.map((exp) => (
                            <div className="mt-10 mx-10 md:mx-auto">
                                <h1 key={exp.id} className="text-yellow-500 text-2xl text-center mb-5">
                                    {exp.id}
                                </h1>
                                <p key={exp.id} className="text-justify mb-5">
                                    {exp.content}
                                </p>
                                <h1 key={exp.id} className="text-yellow-300/90">
                                    {exp.entreprise} - {exp.lieux}
                                </h1>
                                <h1 key={exp.id} className="mb-5 text-yellow-300/90">
                                    {exp.date}
                                </h1>
                                <p key={exp.id} className="text-right mb-10 text-amber-400">
                                    {exp.langage}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ]
}