import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default Home;

function Home(props){
    //State

    //Comportement

    //Affichage
    return [
        <div id="Home" className="flex items-center w-full min-h-screen justify-center p-5">
            <div className="container max-w-4xl m-20 lg:m-auto">
                <p className="text-amber-400 mb-4" data-aos="fade" data-aos-duration="2000">{props.textBlue.content}</p>
                <h1 className="text-5xl sm:text-7xl text-yellow-500 mb-4" data-aos="fade" data-aos-duration="2000" data-aos-delay="500">{props.titre.content}</h1>
                <h2 className="text-4xl sm:text-6xl text-yellow-500/60 mb-4" data-aos="fade" data-aos-duration="2000" data-aos-delay="1000">{props.sousTitre.content}</h2>
                <p className="text-gray-200 sm:text-justify sm:text-xl text-sm mb-10" data-aos="fade" data-aos-duration="2000" data-aos-delay="1500">{props.text.content}</p>
                <a href={props.github.content} rel="noreferrer" className=" transition delay-150 box-border px-5 py-2 mt-4 border rounded border-amber-400 text-center text-amber-500 text-xl hover:bg-amber-500/20" data-aos="fade" data-aos-duration="2000" data-aos-delay="2000" target="_blank">{props.github.id}</a>
            </div>
        </div>
    ]
}
