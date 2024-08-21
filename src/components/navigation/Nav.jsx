import {FaHome, FaLaptop, FaBriefcase, FaProjectDiagram, FaMoneyBillWave} from 'react-icons/fa';

export default Nav;

function Nav() {
    const textNav = [
        {id : "#Home", content : "Accueil", icon: <FaHome/>},
        {id : "#Competence", content :"Compétences", icon: <FaLaptop/>},
        {id : "#Experience", content :"Expériences", icon: <FaBriefcase/>},
        {id : "#Projet", content : "Projets", icon: <FaProjectDiagram/>},
        {id : "#Prix", content : "Tarifs", icon: <FaMoneyBillWave/>},
      ];

    return (
        <div>
            <nav className="fixed w-full h-10 lg:h-20 z-10 px-10 lg:px-32 border-b border-gray-300 flex justify-between">
                <div className='flex items-center w-full justify-between'>
                    <h3 className='text-indigo-500 text-lg md:text-2xl'>Raphaëlle Huynh</h3>
                    <div className='flex'>
                        {textNav.map((text) => (
                            <a key={text.id} className="mr-2 lg:mr-6 lg:text-xl text-zinc-800 border-b-2 border-transparent hover:border-indigo-500 transition delay-75 flex items-center" href={text.id}>
                                <span className='text-indigo-500'>{text.icon}</span>
                                <span className="ml-2 hidden md:inline">{text.content}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
}

