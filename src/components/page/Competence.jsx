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
    return [
        <section className='flex flex-col min-h-screen w-full px-32 justify-center' id="Competence">
            <h1 className='text-6xl text-yellow-400 border-b border-yellow-400 h-fit py-2 w-fit mb-10'>
                💻 Compétences
            </h1>
            <aside className="text-lg pb-10">
                <p>
                    Voici les différents technologies que j'utilise aux quotidiens dans mon travail, à l'université ou pour mes projets personnels.
                </p>
                <p></p>
            </aside>
            <article className='flex gap-4 text-lg'>
                <div className="w-1/5 p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-4xl text-yellow-400 text-center pb-4'>🛠️ Langages</h2>
                    <ul className=''>
                        {langage.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/5 p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-4xl text-yellow-400 text-center pb-4'>📊 Data science</h2>
                    <ul>
                        {dataScience.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/5 p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-4xl text-yellow-400 text-center pb-4'>🗃️ Database</h2>
                    <ul>
                        {data.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/5 p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-4xl text-yellow-400 text-center pb-4'>🌐 Web</h2>
                    <ul>
                        {web.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/5 p-6 bg-slate-50 dark:bg-white/10 rounded-lg">
                    <h2 className='text-4xl text-yellow-400 text-center pb-4'>⚙️ Autres</h2>
                    <ul>
                        {autre.map(item => (
                            <li className="my-1" key={item.id}>{item.id}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    ]
}
