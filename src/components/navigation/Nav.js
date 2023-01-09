export default Nav;

function Nav(props){
    //State

    //Comportement

    //Affichage
    return [
        <div>
            <div className="fixed w-full bg-slate-900/80 sm:bg-black/10 h-15 lg:h-20 z-10">
                <div className='flex items-center'>
                    <h1 className="text-cyan-300  lg:text-3xl text-left lg:ml-5 text-2xl my-2">{props.logo.content}</h1>
                    <div className='flex flex-row mr-0 ml-auto lg:my-7 lg:mr-0'>
                        {props.textNav.map((text) => (
                            <a key={text.id} className="text-white/60 sm:px-5 px-2" href={text.id}><span className="border-cyan-300/30 hover:border-b-4 hover:text-cyan-300/50 lg:text-lg text-sm">{text.content}</span></a>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    ]
}