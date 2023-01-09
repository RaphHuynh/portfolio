export default Nav;

function Nav(props){
    //State

    //Comportement

    //Affichage
    return [
        <div>
            <div className="fixed w-full bg-black/10 h-20">
                <div className='flex'>
                    <h1 className="text-cyan-300  text-3xl text-left ml-5 mt-5">{props.logo.content}</h1>
                    <div className='flex flex-row mr-0 ml-auto mt-7'>
                        {props.textNav.map((text) => (
                            <a key={text.id} className="text-white/60 px-5" href={text.id}><span className="border-cyan-300/30 hover:border-b-4 hover:text-cyan-300/50">{text.content}</span></a>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    ]
}