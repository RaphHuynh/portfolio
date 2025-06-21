import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaLaptop, FaBriefcase, FaProjectDiagram, FaMoneyBillWave, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default Nav;

function Nav() {
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
        <>
            <motion.nav
                className={`fixed w-full z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-lg' 
                        : 'bg-transparent'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container-custom px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl lg:text-2xl font-bold gradient-text">
                                Raphaëlle Huynh
                            </h3>
                            <span className="ml-2 text-sm text-secondary-500 dark:text-secondary-400 hidden sm:block">
                                Data Scientist
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.id}
                                    href={item.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                                    whileHover={{ y: -2 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="text-primary-500">{item.icon}</span>
                                    <span>{item.content}</span>
                                </motion.a>
                            ))}
                            
                            {/* Theme Toggle */}
                            <div className="ml-4">
                                <ThemeToggle />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center space-x-4">
                            <ThemeToggle />
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${
                        isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                    <div className="bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
                        <div className="px-4 py-4 space-y-2">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.id}
                                    href={item.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors duration-200"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="text-primary-500">{item.icon}</span>
                                    <span className="font-medium">{item.content}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.nav>
        </>
    );
}

