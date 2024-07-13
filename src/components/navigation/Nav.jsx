export default Nav;

function Nav(props) {
    return (
        <div>
            <nav className="fixed w-full h-10 lg:h-20 z-10 bg-[#dee4fe] px-10 lg:px-32 border-b border-gray-300 flex justify-between">
                <div className='flex items-center'>
                    <div className='flex w-full md:w-auto'>
                        {props.textNav.map((text) => (
                            <a key={text.id} className="mr-2 lg:mr-6 lg:text-xl text-zinc-800 border-b-2 border-transparent hover:border-indigo-500 transition delay-75" href={text.id}>
                                <span>{text.content}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
}

