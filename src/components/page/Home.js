import {useState} from "react"
export default Home;

function Home(props){
    //State
    console.log(props)
    //Comportement

    //Affichage
    return [
        <div id="Home" className="flex items-center w-full h-screen justify-center p-5 mb-40 md:my-auto">
            <div className="container max-w-4xl m-auto">
                <p className="text-cyan-300 mb-4">{props.textBlue.content}</p>
                <h1 className="text-7xl text-sky-200 mb-4">{props.titre.content}</h1>
                <h2 className="text-6xl text-indigo-300/60 mb-4">{props.sousTitre.content}</h2>
                <p className="text-gray-200 text-justify text-l mb-10">{props.text.content}</p>
                <a href={props.github.content} rel="noreferrer" className=" transition delay-150 box-border px-5 py-2 mt-4 border rounded border-cyan-300 text-center text-cyan-300 text-xl hover:bg-cyan-300/20" target="_blank">{props.github.id}</a>
            </div>
        </div>
    ]
}