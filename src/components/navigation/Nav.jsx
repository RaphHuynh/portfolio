export default Nav;

function Nav(props){
    //State

    //Comportement

    //Affichage
    return [
        <div>
            <nav className="fixed  w-full lg:h-20 z-10 bg-black/30 md:bg-transparent">
                <div className='flex items-center'>
                    <div className="logo md:m-3">
                        <p className="text-amber-400 lg:text-3xl text-left lg:ml-5">{props.logo.content}</p>
                    </div>
                    <div className='flex justify-center md:flex-row md:mr-0 md:ml-auto w-full md:w-auto'>
                        {props.textNav.map((text) => (
                            <a key={text.id} className="text-gray-100 md:mr-2 md:px-4 py-2 text-sm lg:text-base hover:bg-amber-500 hover:text-gray-900 rounded-full transition duration-300 ease-in-out sm:text-sm p-2 mx-2" href={text.id}><span >{text.content}</span></a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    ]
}
