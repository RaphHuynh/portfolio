import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaLaptop, FaBriefcase, FaProjectDiagram, FaMoneyBillWave, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
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
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#181a1b]/10 backdrop-blur px-28 py-5 flex items-center justify-between transition-all duration-300" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
            {/* Gauche */}
            <div className="text-[#22304a] dark:text-[#bfa76a] font-light tracking-wide">
                Basée à <br /> <span className='uppercase'>Reims, France</span>
            </div>
            {/* Centre */}
            <div className="text-[#22304a] dark:text-[#bfa76a] font-light tracking-wide">
                Me contacter <br />
                <a href="mailto:raphaelle.huynh@gmail.com" className='underline'>raphaelle.huynh@gmail.com</a>
            </div>
            {/* Droite */}
            <div className="flex items-center gap-8">
                <ThemeToggle />
                <ul className="flex items-center gap-8 font-medium uppercase tracking-widest dark:text-[#bfa76a]">
                    <li><a href="#Skill" className="hover:underline">Competences</a></li>
                    <li><a href="#Experience" className="hover:underline">Expérience</a></li>
                    <li><a href="#Work" className="hover:underline">Projets</a></li>
                    <li><a href="#Contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

