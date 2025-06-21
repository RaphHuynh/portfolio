import React, { useState } from 'react';
import CV from "../../assets/cv/CV_raphaelle_Huynh.pdf"
import AOS from 'aos';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaCode, FaTimes, FaExternalLinkAlt, FaStar, FaRocket, FaLightbulb, FaDatabase, FaLaptopCode, FaSearch, FaCogs, FaDesktop } from 'react-icons/fa';

AOS.init();

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Experience() {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const experiences = [
        {
            id: "Alternance - Data Scientist - Data Manager",
            content: "Participation à la mise en place de l'entrepôt de données du CHU. Mise en place de différents modèles d'IA de deep learning.",
            langage: ["Python", "OpenCV", "Pydicom", "Tensorflow", "Pytorch", "Yolo", "Numpy", "Transfer Learning", "Deep Learning", "Clickhouse", "SQL", "Dagster", "ReactJS", "TailwindCSS","ViteJS"],
            date: "Septembre 2024 - Actuellement",
            lieux: "Reims",
            entreprise: "CHU - IIAS (Institut d'Intelligence Artificielle en Santé)",
            more: "Mise en place de différents modèles d'IA de deep learning pour de la segmentation, de la classification et de la détection dans le domaine du traitement d'images. Prétraitement des données et amélioration de la qualité des données. Création d'un annotateur d'images.",
            achievements: [
                "Développement de modèles de détection de tumeurs",
                "Participation à la mise en place d'un entrepôt de données avec ClickHouse",
                "Collaboration avec les équipes médicales pour la validation des modèles",
                "Ecriture d'articles scientifiques",
                "Création d'un annotateur d'images"
            ],
            impact: "Amélioration de modèle d'IA, amélioration de la qualité des données de l'entrepôt.",
            icon: <FaDatabase className="w-6 h-6" />,
            color: "from-blue-500 to-blue-600"
        },
        {
            id: "Freelance - Chef de projet",
            content: "Développement d'outils web pour générer des bases de données, gestion de projet et management d'équipes.",
            langage: ["JavaScript", "ReactJS", "TailwindCSS", "TypeScript", "NextJS", "React Flow"],
            date: "Juillet 2024 - Novembre 2024",
            lieux: "Paris",
            entreprise: "Freaks United",
            more: "Commencé en tant que développeuse web, j'ai évolué en chef de projet pour gérer une équipe de développeurs puis d'alternants. J'ai également développé des portfolio artistiques.",
            achievements: [
                "Gestion d'une équipe de développeurs web",
                "Mise en place de méthodologies Agile",
                "Développement d'outils de génération de bases de données",
                "Développement de portfolio artistique"
            ],
            impact: "Livraison de 2 projets majeurs dans les délais impartis",
            icon: <FaBriefcase className="w-6 h-6" />,
            color: "from-green-500 to-green-600"
        },
        {
            id: "Stage - Assistante de recherche en traitement d'image médicale",
            content: "Stage de recherche en traitement d'image médicale incluant à la fois des prétraitements et des algorithmes d'Intelligence Artificielle pour une application orientée recherche.",
            langage: ["Python", "OpenCV", "Pydicom", "Yolo"],
            date: "Avril 2024 - Juin 2024",
            lieux: "Reims",
            entreprise: "Université de Reims Champagne-Ardenne",
            more: "Traitement d'image sur des échographies pulmonaires afin de détecter les lignes B à l'aide d'algorithmes utilisant les flux optiques.",
            achievements: [
                "Développement d'algorithmes de détection de lignes B",
                "Prétraitement d'images échographiques",
            ],
            icon: <FaSearch className="w-6 h-6" />,
            color: "from-orange-500 to-orange-600"
        },
        {
            id: "Stage - Développeuse WordPress",
            content: "Le stage consistait à réaliser une extension WordPress permettant d'automatiser la prise de réunion à plusieurs (plus de 3 personnes).",
            langage: ["PHP", "WordPress", "MySQL"],
            date: "Avril 2023 - Juin 2023",
            lieux: "Paris",
            entreprise: "Cabinet Lacour",
            more: "Dans un premier temps j'ai réalisé un travail de modélisation en utilisant la méthode UML, pour définir mes classes et construire ma base de données. J'ai réalisé par la suite une connexion avec l'API Google afin de connecter son Google Calendar à l'extension.",
            achievements: [
                "Modélisation UML complète du système",
                "Intégration avec l'API Google Calendar",
            ],
            icon: <FaCode className="w-6 h-6" />,
            color: "from-gray-500 to-gray-600"
        },
        {
            id: "Stage - Développeuse Web",
            content: "Le stage consistait à réaliser un site click & collect, afin de faciliter la prise de commande pendant le covid.",
            langage: ["PHP", "Symfony", "Tailwind CSS"],
            date: "Mai 2021 - Juillet 2021",
            lieux: "Troyes",
            entreprise: "LeBidibul",
            more: "Avant de réaliser le projet demandé, j'ai dû réaliser un travail de recherche sur les différents frameworks et CMS existants afin de réaliser un travail de comparaison. Ensuite, pour commencer le projet, je l'ai modélisé avec Looping et la méthode Merise.",
            achievements: [
                "Étude comparative des frameworks web",
                "Modélisation Merise du système",
                "Développement avec Symfony",
                "Interface utilisateur avec Tailwind CSS"
            ],
            icon: <FaDesktop className="w-6 h-6" />,
            color: "from-indigo-500 to-indigo-600"
        }
    ];

    const formations = [
        {
            id: "Master Informatique : Intelligence Artificielle",
            date: "Septembre 2024 - Actuellement",
            lieux: "Reims",
            entreprise: "Université de Reims",
            more: "Actuellement en première année"
        },
        {
            id: "Licence Informatique",
            date: "Septembre 2019 - Juin 2024",
            lieux: "Reims",
            entreprise: "Université de Reims",
            more: "Pause d'un an après la 1ère année de licence - Rang : Dans le top 10 chaque année"
        },
        {
            id: "Licence Électronique, Énergie Électrique, Automatique",
            date: "Septembre 2018 - Juin 2019",
            lieux: "Reims",
            entreprise: "Université de Reims",
            more: "Réalisation de la première année."
        }
    ];

    const openModal = (experience) => {
        setSelectedExperience(experience);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedExperience(null);
    };

    return (
        <section className="section-padding gradient-bg" id="Experience">
            <div className="container-custom">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Expériences & <span className="gradient-text">Formations</span>
                    </motion.h2>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    >
                        Mon parcours professionnel et académique qui m'a permis de développer une expertise solide en data science et développement.
                    </motion.p>
                </motion.div>

                {/* Expériences professionnelles */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <motion.h3 
                        variants={fadeInUp}
                        className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center justify-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                            <FaBriefcase className="w-6 h-6 text-white" />
                        </div>
                        Expériences Professionnelles
                    </motion.h3>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="experience-card p-8 group"
                                whileHover={{ y: -8 }}
                                onClick={() => openModal(exp)}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                                    <div className="text-white">
                                                        {exp.icon}
                                                    </div>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                                    {exp.id}
                                                </h4>
                                            </div>
                                            <FaExternalLinkAlt className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                                <FaBuilding className="w-4 h-4 text-blue-500" />
                                                <span className="font-medium">{exp.entreprise}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                                <FaMapMarkerAlt className="w-4 h-4 text-green-500" />
                                                <span className="font-medium">{exp.lieux}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                                <FaCalendarAlt className="w-4 h-4 text-purple-500" />
                                                <span className="font-medium">{exp.date}</span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                            {exp.content}
                                        </p>
                                    </div>
                                </div>

                                {exp.langage && (
                                    <div className="mb-6">
                                        <div className="flex items-center space-x-2 mb-4">
                                            <FaCode className="w-4 h-4 text-blue-500" />
                                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                Technologies utilisées :
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.langage.slice(0, 6).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="skill-tag"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {exp.langage.length > 6 && (
                                                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600">
                                                    +{exp.langage.length - 6} autres
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                                        Cliquez pour plus de détails →
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        Impact: {exp.impact}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Formations */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        variants={fadeInUp}
                        className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center justify-center"
                    >
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                            <FaGraduationCap className="w-6 h-6 text-white" />
                        </div>
                        Formations
                    </motion.h3>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {formations.map((formation, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="card p-8 text-center card-hover"
                                whileHover={{ y: -8 }}
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <FaGraduationCap className="w-10 h-10 text-white" />
                                </div>
                                
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {formation.id}
                                </h4>
                                
                                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
                                    <div className="flex items-center justify-center space-x-2">
                                        <FaBuilding className="w-4 h-4 text-blue-500" />
                                        <span className="font-medium">{formation.entreprise}</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <FaMapMarkerAlt className="w-4 h-4 text-green-500" />
                                        <span className="font-medium">{formation.lieux}</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <FaCalendarAlt className="w-4 h-4 text-purple-500" />
                                        <span className="font-medium">{formation.date}</span>
                                    </div>
                                </div>
                                
                                {formation.more && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                                        {formation.more}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Modal pour les détails d'expérience */}
            <AnimatePresence>
                {isModalOpen && selectedExperience && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${selectedExperience.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            <div className="text-white">
                                                {selectedExperience.icon}
                                            </div>
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                                            {selectedExperience.id}
                                        </h2>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
                                    >
                                        <FaTimes className="w-6 h-6 text-gray-500" />
                                    </button>
                                </div>

                                <div className="grid gap-8 lg:grid-cols-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                            <FaBuilding className="w-5 h-5 text-blue-500 mr-2" />
                                            Informations générales
                                        </h3>
                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                                <FaBuilding className="w-5 h-5 text-blue-500" />
                                                <div>
                                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Entreprise</div>
                                                    <div className="text-gray-900 dark:text-white font-semibold">{selectedExperience.entreprise}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                                <FaMapMarkerAlt className="w-5 h-5 text-green-500" />
                                                <div>
                                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Lieu</div>
                                                    <div className="text-gray-900 dark:text-white font-semibold">{selectedExperience.lieux}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                                <FaCalendarAlt className="w-5 h-5 text-purple-500" />
                                                <div>
                                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Période</div>
                                                    <div className="text-gray-900 dark:text-white font-semibold">{selectedExperience.date}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                                Description
                                            </h4>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                                                {selectedExperience.more}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                            <FaBriefcase className="w-5 h-5 text-gray-600 mr-2" />
                                            Réalisations principales
                                        </h3>
                                        {selectedExperience.achievements && (
                                            <ul className="space-y-3 mb-8">
                                                {selectedExperience.achievements.map((achievement, index) => (
                                                    <li key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-700 dark:text-gray-300">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {selectedExperience.impact && (
                                            <div className="mb-8">
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                                    <FaBriefcase className="w-5 h-5 text-green-500 mr-2" />
                                                    Impact
                                                </h4>
                                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
                                                    <p className="text-green-700 dark:text-green-300 font-semibold text-lg">
                                                        {selectedExperience.impact}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                                <FaCode className="w-5 h-5 text-blue-500 mr-2" />
                                                Technologies utilisées
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedExperience.langage.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="skill-tag"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Experience;
