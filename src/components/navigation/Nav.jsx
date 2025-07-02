import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaLaptop, FaBriefcase, FaProjectDiagram, FaMoneyBillWave, FaBars, FaTimes } from 'react-icons/fa';
import '../../assets/fonts/Satoshi-Black.otf';

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: "#Home", content: "Accueil", icon: <FaHome /> },
        { id: "#Competence", content: "Compétences", icon: <FaLaptop /> },
        { id: "#Experience", content: "Expériences", icon: <FaBriefcase /> },
        { id: "#Projet", content: "Projets", icon: <FaProjectDiagram /> },
        { id: "#Prix", content: "Tarifs", icon: <FaMoneyBillWave /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#181a1b]/90 backdrop-blur px-6 md:px-28 py-4 md:py-5 flex items-center justify-between transition-all duration-300" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
            {/* Gauche - Caché sur mobile */}
            <div className="hidden md:block text-[#bfa76a] font-light tracking-wide">
                Basée à <br /> <span className='uppercase'>Reims, France</span>
            </div>
            
            {/* Centre - Caché sur mobile */}
            <div className="hidden md:block text-[#bfa76a] font-light tracking-wide">
                Me contacter <br />
                <a href="mailto:raphaelle.huynh@gmail.com" className='underline'>raphaelle.huynh@gmail.com</a>
            </div>
            
            {/* Droite */}
            <div className="flex items-center gap-4 md:gap-8">
                {/* Menu desktop */}
                <ul className="hidden md:flex items-center gap-8 font-medium uppercase tracking-widest text-[#bfa76a]">
                    <li><a href="#Formation" className="hover:underline">Formation</a></li>
                    <li><a href="#Competence" className="hover:underline">Compétences</a></li>
                    <li><a href="#Experience" className="hover:underline">Expérience</a></li>
                    <li><a href="#Projet" className="hover:underline">Projets</a></li>
                    <li><a href="#Tarifs" className="hover:underline">Tarifs</a></li>
                </ul>
                
                {/* Bouton hamburger mobile */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-[#bfa76a] p-2"
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            
            {/* Menu mobile */}
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-[#181a1b]/95 backdrop-blur border-t border-[#bfa76a]/20 md:hidden"
                >
                    <ul className="flex flex-col py-4">
                        <li className="px-6 py-3 border-b border-[#bfa76a]/10">
                            <a href="#Formation" className="block text-[#bfa76a] font-medium uppercase tracking-widest hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                                Formation
                            </a>
                        </li>
                        <li className="px-6 py-3 border-b border-[#bfa76a]/10">
                            <a href="#Competence" className="block text-[#bfa76a] font-medium uppercase tracking-widest hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                                Compétences
                            </a>
                        </li>
                        <li className="px-6 py-3 border-b border-[#bfa76a]/10">
                            <a href="#Experience" className="block text-[#bfa76a] font-medium uppercase tracking-widest hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                                Expérience
                            </a>
                        </li>
                        <li className="px-6 py-3 border-b border-[#bfa76a]/10">
                            <a href="#Projet" className="block text-[#bfa76a] font-medium uppercase tracking-widest hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                                Projets
                            </a>
                        </li>
                        <li className="px-6 py-3">
                            <a href="#Tarifs" className="block text-[#bfa76a] font-medium uppercase tracking-widest hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                                Tarifs
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
}

