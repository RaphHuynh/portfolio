export default Nav;

function Nav(props){
    //State

    //Comportement

    //Affichage
    return [
        <div>
            <div className="fixed w-full lg:h-20 z-10">
                <div className='flex items-center'>
                    <h1 className="text-amber-400  lg:text-3xl text-left lg:ml-5 text-2xl">{props.logo.content}</h1>
                    <div className='flex flex-row mr-0 ml-auto lg:my-7 lg:mr-0'>
                        {props.textNav.map((text) => (
                            <a key={text.id} className="text-gray-100 mr-2 px-4 py-2 text-sm lg:text-base hover:bg-amber-400 hover:text-gray-900 rounded-full transition duration-300 ease-in-out" href={text.id}><span >{text.content}</span></a>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    ]
}
