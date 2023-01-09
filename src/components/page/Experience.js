export default Experience;

function Experience(props){
    //state

    //Comportement

    //Affichage
    return[
        <div id="Experience" className="flex items-center w-full h-screen justify-center mb-96 md:m-auto">
            <div className="">
                <div className="flex justify-center items-center">
                    <span className="bg-white/30 h-0.5 w-40 md:w-80 mr-7"></span>
                    <h1 className="text-sky-200 text-xl text-center">Expériences</h1>
                </div>
                <div className="flex justify-center text-white/70">
                    <div className="container w-96 my-5">
                        {props.experience.map((exp) => (
                            <div className="mt-10 mx-10 md:mx-auto">
                                <h1 key={exp.id} className="text-indigo-300/60 text-2xl text-center mb-5">
                                    {exp.id}
                                </h1>
                                <p key={exp.id} className="text-justify mb-5">
                                    {exp.content}
                                </p>
                                <h1 key={exp.id} className="text-white/50">
                                    {exp.entreprise} - {exp.lieux}
                                </h1>
                                <h1 key={exp.id} className="mb-5 text-white/50">
                                    {exp.date}
                                </h1>
                                <p key={exp.id} className="text-right mb-10 text-cyan-300/70">
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