import AOS from 'aos';
import 'aos/dist/aos.css';

export default Competence;

function Competence(){
    //State
    const langage = [{id:"Python"},{id:"C"},{id:"Java"},{id:"PHP"},{id:"Javascript"}];

    const dataScience = [{id:"Anaconda"},{id:"Pandas"},{id:"Numpy"},{id:"Matplotlib"},{id:"Scikit-learn"},{id:"Tensorflow"},{id:"Pytorch"}]

    const data = [{id:"MySQL"},{id:"PL/SQL - Oracle"},{id:"NoSQL"}]

    const web = [{id:"Fast Api"},{id:"ReactJS"},{id:"Laravel"},{id:"Wordpress"},{id:"Tailwind CSS"},{id:"Bootstrap"}]

    const autre = [{id:"Git"},{id:"Bash"},{id:"UML"},{id:"Merise"}]

    //comportement

    //Affichage
    return (
        <section className='flex flex-col min-h-screen w-full p-10 lg:px-32 justify-center' id="Competence">
            <h1 className='text-2xl md:text-4xl lg:text-6xl text-yellow-400 border-b border-yellow-400 h-fit py-2 w-fit mb-10'>
                💻 Compétences
            </h1>
            <aside className="text-sm md:text-lg pb-10">
                <p>
                    Voici les différentes technologies que j'utilise au quotidien dans mon travail, à l'université ou pour mes projets personnels.
                </p>
            </aside>
            <article className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-sm md:text-lg'>
                <div className="w-full p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-xl md:text-2xl lg:text-3xl text-yellow-400 text-center pb-4'>🛠️ Langages</h2>
                    <ul className=''>
                        {langage.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-xl md:text-2xl lg:text-3xl text-yellow-400 text-center pb-4'>📊 Data science</h2>
                    <ul>
                        {dataScience.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-xl md:text-2xl lg:text-3xl text-yellow-400 text-center pb-4'>🗃️ Database</h2>
                    <ul>
                        {data.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-xl md:text-2xl lg:text-3xl text-yellow-400 text-center pb-4'>🌐 Web</h2>
                    <ul>
                        {web.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-xl md:text-2xl lg:text-3xl text-yellow-400 text-center pb-4'>⚙️ Autres</h2>
                    <ul>
                        {autre.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    );
}
