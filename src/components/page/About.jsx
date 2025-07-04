import React from 'react';
import { FaPython, FaCode, FaJava, FaPhp, FaDatabase, FaHtml5, FaCss3, FaRProject, FaChartLine, FaTools } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiMysql, SiReact, SiFastapi, SiDjango, SiTailwindcss, SiStreamlit, SiLaravel, SiGit } from 'react-icons/si';
import '../../assets/fonts/Satoshi-Black.otf';

const experiences = [
  { poste: "Data Scientist / Data Manager", entreprise: "CHU - Institut d'Intelligence Artificielle en Santé", lieu: "Reims", date: "2024 — Aujourd'hui" },
  { poste: "Chef de projet web / Developpeuse Full-Stack", entreprise: "Freaks United : Freelance", lieu: "Reims", date: "2024 - 2025" },
  { poste: "Assistante de recherche IA", entreprise: "Université de Reims Champagne-Ardenne", lieu: "Reims", date: "2024" },
  { poste: "Développeuse WordPress (Stage)", entreprise: "Cabinet Lacour", lieu: "Paris", date: "2023" },
  { poste: "Développeuse Web (Stage)", entreprise: "LeBidibul", lieu: "Troyes", date: "2021" },
];

const formations = [
  { diplome: "Master Informatique, spécialité IA", etablissement: "Université de Reims Champagne-Ardenne", annee: "2024 — Aujourd'hui" },
  { diplome: "Licence Informatique", etablissement: "Université de Reims Champagne-Ardenne", annee: "2019 — 2024" },
  { diplome: "Licence EEEA", etablissement: "Université de Reims Champagne-Ardenne", annee: "2018 — 2019" },
  { diplome: "Baccalauréat Scientifique", etablissement: "Lycée Jean Jaurès, Reims", annee: "2017 — 2018" },
];

const skill = [
    {
      title: "Langages de programmation",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaCode /> },
        { name: "Java", icon: <FaJava /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "R", icon: <FaRProject /> },
        { name: "C", icon: <FaCode /> },
      ]
    },
    {
      title: "Machine Learning & IA",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "OpenCV", icon: <FaCode /> },
        { name: "NLTK", icon: <FaCode /> },
        { name: "YOLO", icon: <FaCode /> },
        { name: "Pydicom", icon: <FaCode /> },
        { name: "Spacy", icon: <FaCode /> },
      ]
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: <FaChartLine /> },
        { name: "Seaborn", icon: <FaChartLine /> },
        { name: "Plotly", icon: <FaChartLine /> },
        { name: "Shiny", icon: <FaChartLine /> },
        { name: "ggplot2", icon: <FaChartLine /> },
        { name: "Wordcloud", icon: <FaChartLine /> },
        { name: "ggplot", icon: <FaChartLine /> },
        { name: "ggmap", icon: <FaChartLine /> },
        { name: "Networkx", icon: <FaChartLine /> },
      ]
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "SQLite", icon: <FaDatabase /> },
        { name: "ClickHouse", icon: <FaDatabase /> },
        { name: "PL/SQL Oracle", icon: <FaDatabase /> },
        { name: "UML", icon: <FaDatabase /> },
        { name: "Merise", icon: <FaDatabase /> },
      ]
    },
    {
      title: "Développement Web",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "ViteJS", icon: <FaCode /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "Streamlit", icon: <SiStreamlit /> },
        { name: "Shiny", icon: <FaCode /> },
        { name: "Laravel", icon: <SiLaravel /> },
      ]
    },
    {
      title: "Outils & DevOps",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Docker", icon: <FaTools /> },
        { name: "Jupyter", icon: <FaTools /> },
        { name: "VS Code", icon: <FaTools /> },
        { name: "Linux", icon: <FaTools /> },
        { name: "Bash", icon: <FaTools /> },
        { name: "Anaconda", icon: <FaTools />},
      ]
    }
  ];

export default function About() {
  return (
    <section className="min-h-screen bg-[#181a1b] flex flex-col items-center pt-20 md:pt-28" id="About">
      <div className="w-full px-6 md:px-28">
        {/* Titre et séparateur */}
        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-4 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
          À propos
        </h2>
        <div className="border-b border-stone-700 mb-12 w-full" />
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Colonne gauche (accroche) */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <p className="text-lg md:text-2xl lg:text-3xl text-stone-200 font-light mb-8 md:mb-10 leading-snug">
                Passionnée par les sciences, la météorologie et les données. Je développe des projets dans ces thèmes, notamment des modèles d'intelligence artificielle.<br /> <br />
                J'envisage de poursuivre mes études en doctorat pour approfondir mes recherches en intelligence artificielle.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-16 mt-6 md:mt-8 text-sm md:text-base text-stone-400 font-light">
              <span>Data Sciencist <br />Data Manager</span>
              <span>Freelance <br /> Developpeuse Web</span>
              <span className=''>
                Me contacter : <br />
                <a href="mailto:raphaelle.huynh@gmail.com" className="underline hover:cursor-pointer">raphaelle.huynh@gmail.com</a>
              </span>
              <span className=''>
                Explore mon profil : <br />
                <a href="https://www.linkedin.com/in/raphaëlle-huynh-46192919b/" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">LinkedIn</a>
              </span>
              <span className=''>
                Explore mes projets : <br />
                <a href="https://github.com/RaphHuynh" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">GitHub</a>
              </span>
            </div>
          </div>
          {/* Colonne droite (parcours détaillé) */}
          <div className="flex flex-col justify-start">
            <p className="text-sm md:text-base lg:text-lg text-stone-400 font-light leading-relaxed mb-4">
              Actuellement en Master en informatique, spécialisé en intelligence artificielle, j'ai l'opportunité de collaborer avec l'institut d'intelligence articielle en santé de Reims pour apporter des solutions à des problématiques de santé.<br /><br />
              J'accorde une grande importance à la clarté du code et à la transmission des connaissances.<br /><br />
              J'ai également eu l'opportunité de travailler en freelance des la fin de ma licence en tant que developpeur web, chef de projet web et assistante de recherche.
            </p>
          </div>
        </div>
        {/* Timeline Parcours */}
        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mt-10 mb-6 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>Parcours</h2>
        <div className="border-b border-stone-700 mb-10 w-full" />
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Timeline Expérience */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-stone-200 mb-4 uppercase tracking-wide">Expérience</h4>
            <ol className="relative border-l-2 border-stone-700 pl-6">
              {experiences.map((exp, i) => (
                <li key={i} className="mb-8">
                  <div className="ml-2">
                    <div className="text-base md:text-lg font-bold text-white">{exp.poste}</div>
                    <div className="text-sm text-stone-300">{exp.entreprise} — {exp.lieu}</div>
                    <div className="text-xs text-stone-400 mt-1">{exp.date}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* Timeline Formation */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-stone-200 mb-4 uppercase tracking-wide">Formation</h4>
            <ol className="relative border-l-2 border-stone-700 pl-6">
              {formations.map((f, i) => (
                <li key={i} className="mb-8">
                  <div className="ml-2">
                    <div className="text-base md:text-lg font-bold text-white">{f.diplome}</div>
                    <div className="text-sm text-stone-300">{f.etablissement}</div>
                    <div className="text-xs text-stone-400 mt-1">{f.annee}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Section Compétences */}
        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mt-10 mb-6 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>Compétences</h2>
        <div className="border-b border-stone-700 mb-10 w-full" />
        {/* Section Compétences */}
        <div className="flex flex-col gap-8 mb-16">
          {skill.map((cat, i) => (
            <div key={i} className="mb-2">
              <div className="text-base md:text-lg font-bold text-[var(--primary-color)] mb-2" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.06em' }}>{cat.title}</div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {cat.skills.map((s, j) => (
                  <span key={j} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/70 text-stone-100 border border-stone-700 text-xs md:text-sm font-medium uppercase tracking-wide" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
                    <span className="w-4 h-4 flex items-center justify-center">{s.icon}</span>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 