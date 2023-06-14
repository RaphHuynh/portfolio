import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from "../../assets/cv/cv_raphaelle_huynh.pdf";

export default Home;

function Home(props){
    //State

    //Comportement

    //Affichage
    return [
        <div id="Home" className="flex items-center w-full min-h-screen justify-center p-5">
            <div className="container max-w-5xl lg:m-auto">
                <h1 className="text-5xl sm:text-8xl mb-4 text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 to-orange-700" data-aos="fade" data-aos-duration="2000" data-aos-delay="500">{props.titre.content}</h1>
                <h2 className="text-4xl sm:text-5xl text-yellow-500 mb-4" data-aos="fade" data-aos-duration="2000" data-aos-delay="1000">{props.sousTitre.content}</h2>
                <p className="text-gray-200 sm:text-justify sm:text-xl text-sm my-8" data-aos="fade" data-aos-duration="2000" data-aos-delay="1500">{props.text.content}</p>
                <div>
                    <a href={props.github.content} rel="noreferrer" className=" transition delay-150 box-border px-5 py-2 mt-5 mr-5 border-2 rounded-full border-amber-500 text-center text-amber-500 text-xl hover:bg-amber-500 hover:text-white/100" data-aos="fade" data-aos-duration="2000" data-aos-delay="2000" target="_blank">{props.github.id}</a>
                    <a href={resume} download="resume_raphaelle_huynh" rel="noreferrer" className=" transition delay-150 box-border px-5 py-2 mt-5 border-2 rounded-full border-amber-500 text-center text-amber-500 text-xl hover:bg-amber-500 hover:text-white/100" data-aos="fade" data-aos-duration="2000" data-aos-delay="2000" target="_blank">CV</a>
                </div>
            </div>
        </div>
    ]
}
