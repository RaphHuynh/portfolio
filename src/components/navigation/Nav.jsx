export default Nav;

function Nav(props){

    return [
        <div>
            <nav className="fixed  w-full lg:h-20 z-10 bg-white px-32 border-b flex ">
                <div className='flex items-center'>
                    <div className='flex justify-center md:flex-row  w-full md:w-auto'>
                        {props.textNav.map((text) => (
                            <a key={text.id} className="md:mr-6 text-sm lg:text-xl  sm:text-sm text-zinc-800 border-b hover:border-amber-400 border-b-white transition delay-75" href={text.id}><span >{text.content}</span></a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    ]
}
