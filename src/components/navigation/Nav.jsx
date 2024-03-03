export default Nav;

function Nav(props){

    return [
        <div>
            <nav className="fixed  w-full lg:h-20 z-10 bg-white dark:bg-[#0f1628] px-32 border-b dark:border-0 dark:border-0 flex ">
                <div className='flex items-center'>
                    <div className='flex justify-center md:flex-row  w-full md:w-auto'>
                        {props.textNav.map((text) => (
                            <a key={text.id} className="md:mr-6 text-sm lg:text-xl  sm:text-sm text-zinc-800 border-b dark:border-[#0f1628] hover:border-amber-400 border-b-white transition delay-75 dark:text-white" href={text.id}><span >{text.content}</span></a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    ]
}
