import { Link } from "react-router-dom";
import image from "../assets/moi.jpg"

function Home(){
    return(
        <body className="w-full min-h-screen">
            <header className="w-full grid grid-cols-3 items-center py-10 px-10">
                <p className="">Developpeuse freelance Front-End & Back-End</p>
                <h2 className="text-center text-4xl uppercase">Raynh</h2>
                <p className="text-right">Portfolio-2023</p>
            </header>
            <main>
                <nav className="w-full">
                    <h1 className="text-center text-9xl py-20"><span>Huynh</span> Raphaëlle</h1>
                    <div className="text-xl py-40 px-10 justify-between flex text-center menu-hover place-items-center">
                        <Link to="/about" className="w-content text-apparition flex">
                            A propos
                            <h1 className="text-white/20 uppercase">A propos</h1>
                        </Link>
                        <Link to="/works" className="w-content text-apparition flex">
                            Experiences
                            <h1 className="text-white/20 uppercase">Experiences</h1>
                        </Link>
                        <Link to="/projects" className="w-content text-apparition flex">
                            Projets
                            <h1 className="text-white/20 uppercase">Projets</h1>
                        </Link>
                        <Link to="/skills" className="w-content text-apparition flex">
                            Compétences
                            <h1 className="text-white/20 uppercase">Compétences</h1>
                        </Link>
                    </div>
                </nav>
                <section className="flex justify-between items-center text-lg px-10">
                    <p className="w-1/5">
                        Raphaëlle HUYNH ou Raynh, je suis développeuse Front-End et Back-end. Basée à Reims en France.
                    </p>
                    <img src={image} className="h-60 w-content grayscale rounded-xl brightness-95" alt="raphaelle huynh"></img>
                    <p className="w-1/5 text-right">
                        Passionnée par la programmation, j'aime la gestion de donnée et travailler autour.
                    </p>
                </section>
            </main>
        </body>
    )
}

export default Home;