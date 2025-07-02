import '../../assets/fonts/Satoshi-Black.otf';
import { FaPython, FaDatabase, FaCode, FaChartLine, FaBrain, FaServer, FaTools, FaRProject, FaJava, FaPhp, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';
import { SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiReact, SiFastapi, SiMysql, SiGit, SiDjango, SiTailwindcss, SiStreamlit, SiLaravel } from 'react-icons/si';

export default function Competence() {
  const skillCategories = [
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
        { name: "C", icon: <FaC /> },
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

  return (
    <section className="min-h-screen bg-white dark:bg-[#181a1b] flex items-center w-full" id="Competence">
      <div className="px-28 w-full">
        {/* Titre et séparateur */}
        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[#22304a] dark:text-[#bfa76a] mb-4 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
          Compétences
        </h2>
        <div className="border-b border-[#d1d5db] dark:border-stone-700 mb-12 w-full" />
        <p className="text-base lg:text-lg text-[#22304a] dark:text-stone-200 font-light mb-12 max-w-3xl text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
          J'ai développé ces compétences tout au long de mon parcours en informatique, aussi bien lors de mes études que dans le cadre de mes expériences professionnelles. J'ai également enrichi mon expertise à travers des projets personnels et en pratiquant le pair programming avec des développeurs seniors.
        </p>
        {/* Grille des cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#181a1b] border border-[#e5e7eb] dark:border-stone-700 rounded-2xl p-8 flex flex-col gap-6 transition-all duration-200 hover:scale-[1.02] hover:border-[#bfa76a]"
            >
              <h3 className="text-xl font-semibold text-[#22304a] dark:text-[#bfa76a] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-base text-[#22304a] dark:text-stone-400 font-light">
                    <span className="text-lg opacity-40">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

