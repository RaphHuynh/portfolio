import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaLaptop, FaBriefcase, FaProjectDiagram, FaMoneyBillWave, FaBars, FaTimes } from 'react-icons/fa';
import '../../assets/fonts/Satoshi-Black.otf';

export default function NavRouter() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: "/", content: "Accueil", icon: <FaHome /> },
        { path: "/competences", content: "Compétences", icon: <FaLaptop /> },
        { path: "/experience", content: "Expériences", icon: <FaBriefcase /> },
        { path: "/formation", content: "Formation", icon: <FaBriefcase /> },
        { path: "/projets", content: "Projets", icon: <FaProjectDiagram /> },
        { path: "/tarifs", content: "Tarifs", icon: <FaMoneyBillWave /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur px-6 md:px-28 py-4 md:py-5 flex items-center justify-between transition-all duration-300" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
            {/* Gauche - Logo RAYNH */}
            <div className="flex items-center text-2xl md:text-3xl font-black uppercase tracking-normal select-none" style={{ letterSpacing: '0.07em' }}>
                <span className="text-white">RA</span>
                <span className="-ml-1" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>YNH</span>
            </div>
            
            {/* Droite */}
            <div className="flex items-center gap-4 md:gap-8">
                {/* Menu desktop */}
                <ul className="hidden md:flex items-center gap-8 font-medium uppercase tracking-widest text-[var(--primary-color)]">
                    <li>
                        <Link to="/" className="hand-drawn-highlight hover:no-underline">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hand-drawn-highlight hover:no-underline">
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link to="/projets" className="hand-drawn-highlight hover:no-underline">
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link to="/art" className="hand-drawn-highlight hover:no-underline">
                            Art
                        </Link>
                    </li>
                </ul>
                
                {/* Bouton hamburger mobile */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-[var(--primary-color)] p-2"
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
                    className="absolute top-full left-0 w-full bg-[#181a1b]/95 backdrop-blur border-t border-[var(--primary-color)]/20 md:hidden"
                >
                    <ul className="flex flex-col py-4">
                        <li className="px-6 py-3 border-b border-[var(--primary-color)]/10">
                            <Link to="/" className="block text-[var(--primary-color)] font-medium uppercase tracking-widest hover:underline" onClick={closeMobileMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className="px-6 py-3 border-b border-[var(--primary-color)]/10">
                            <Link to="/about" className="block text-[var(--primary-color)] font-medium uppercase tracking-widest hover:underline" onClick={closeMobileMenu}>
                                À propos
                            </Link>
                        </li>
                        <li className="px-6 py-3 border-b border-[var(--primary-color)]/10">
                            <Link to="/projets" className="block text-[var(--primary-color)] font-medium uppercase tracking-widest hover:underline" onClick={closeMobileMenu}>
                                Projets
                            </Link>
                        </li>
                        <li className="px-6 py-3">
                            <Link to="/art" className="block text-[var(--primary-color)] font-medium uppercase tracking-widest hover:underline" onClick={closeMobileMenu}>
                                Art
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
} 