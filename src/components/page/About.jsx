import { useEffect, useState } from 'react';
import AOS from 'aos';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { FaPython, FaCode, FaJava, FaPhp, FaDatabase, FaHtml5, FaCss3, FaRProject, FaChartLine, FaTools } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiMysql, SiReact, SiFastapi, SiDjango, SiTailwindcss, SiStreamlit, SiLaravel, SiGit } from 'react-icons/si';
import '../../assets/fonts/Satoshi-Black.otf';
import AboutStarField from '../effect/AboutStarField';

const experiences = [
  { poste: "Data Scientist / Data Engineer", entreprise: "CHU - Institut d'Intelligence Artificielle en Santé : Alternance", lieu: "Reims", date: "2024 — 2026" },
  { poste: "Chef de projet web / Developpeuse Full-Stack", entreprise: "Freaks United : Freelance", lieu: "Reims", date: "2024 - 2025" },
  { poste: "Assistante de recherche IA", entreprise: "Université de Reims Champagne-Ardenne : Stage", lieu: "Reims", date: "2024" },
  { poste: "Développeuse WordPress", entreprise: "Cabinet Lacour : Stage", lieu: "Paris", date: "2023" },
  { poste: "Développeuse Web", entreprise: "LeBidibul : Stage", lieu: "Troyes", date: "2021" },
];

const formations = [
  { diplome: "Master Informatique, spécialité IA", etablissement: "Université de Reims Champagne-Ardenne", annee: "2024 — 2026" },
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
      title: "Intelligence artificielle",
      skills: [
        { name: "NumPy", icon: <SiNumpy /> },
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
      title: "Data Analyse",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Matplotlib", icon: <FaChartLine /> },
        { name: "Seaborn", icon: <FaChartLine /> },
        { name: "Plotly", icon: <FaChartLine /> },
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
        { name: "Mlflow", icon: <FaTools />},
      ]
    }
  ];

/** Même courbe que PageCurtain */
const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)';
const FADE_MS = 560;

function Reveal({ show, children, className = '', as: Tag = 'div' }) {
  return (
    <Tag
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity ${FADE_MS}ms ${EASE}, transform ${FADE_MS}ms ${EASE}`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}

/** Barre verticale de timeline — cachée puis tracée du haut vers le bas */
function TimelineRail({ show }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 bottom-0 w-0.5 bg-stone-700"
      style={{
        transform: show ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'top center',
        opacity: show ? 1 : 0,
        transition: `transform ${FADE_MS}ms ${EASE}, opacity ${FADE_MS * 0.6}ms ${EASE}`,
        willChange: 'transform, opacity',
      }}
    />
  );
}

export default function About() {
  const [shown, setShown] = useState(() => new Set());

  const isShown = (key) => shown.has(key);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      const all = new Set([
        'aboutTitle',
        'aboutLine',
        'aboutLeft',
        'aboutRight',
        'expTitle',
        'expLine',
        'expRail',
        'formTitle',
        'formLine',
        'formRail',
        ...experiences.map((_, i) => `exp-${i}`),
        ...formations.map((_, i) => `form-${i}`),
      ]);
      setShown(all);
      AOS.refreshHard();
      return;
    }

    // Ordre strict, un élément après l'autre (après la curtain)
    const STEP = 180;
    const START = 520;

    const keys = [
      'aboutTitle',
      'aboutLine',
      'aboutLeft',
      'aboutRight',
      'expTitle',
      'expLine',
      'expRail',
      'formTitle',
      'formLine',
      'formRail',
      ...experiences.map((_, i) => `exp-${i}`),
      ...formations.map((_, i) => `form-${i}`),
    ];

    const timers = keys.map((key, i) =>
      window.setTimeout(() => {
        setShown((prev) => new Set(prev).add(key));
      }, START + i * STEP)
    );

    // Compétences : AOS au scroll, après la séquence du haut
    const aosTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, START + keys.length * STEP + 200);

    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      autoRaf: true,
    });

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      window.clearTimeout(aosTimer);
      lenis.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#181a1b] flex flex-col items-center pt-20 md:pt-28" id="About">
      <AboutStarField starCount={120} />
      <div className="relative z-10 w-full px-6 md:px-28">
        <Reveal
          show={isShown('aboutTitle')}
          as="h2"
          className="w-fit text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-4 text-left highlight-yellow"
        >
          <span style={{ fontFamily: 'Satoshi-Black, sans-serif' }}>À propos</span>
        </Reveal>
        <Reveal show={isShown('aboutLine')} className="border-b border-stone-700 mb-12 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Reveal show={isShown('aboutLeft')} className="md:col-span-2 flex flex-col justify-between">
            <p className="text-lg md:text-2xl lg:text-3xl text-stone-200 font-light mb-8 md:mb-10 leading-snug">
              Passionnée par les sciences, la météorologie et les données. Je développe des projets dans ces thèmes, notamment des modèles d'intelligence artificielle.<br /> <br />
              J'envisage de poursuivre mes études en doctorat pour approfondir mes recherches en intelligence artificielle.
            </p>
            <div className="flex flex-wrap gap-8 md:gap-16 mt-6 md:mt-8 text-sm md:text-base text-stone-400 font-light">
              <span>Data Scientist <br />Data Engineer</span>
              <span>Freelance <br /> Developpeuse Web</span>
              <span>
                Me contacter : <br />
                <a href="mailto:raphaelle.huynh@gmail.com" className="underline hover:cursor-pointer">raphaelle.huynh@gmail.com</a>
              </span>
              <span>
                Explore mon profil : <br />
                <a href="https://www.linkedin.com/in/raphaëlle-huynh-46192919b/" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">LinkedIn</a>
              </span>
              <span>
                Explore mes projets : <br />
                <a href="https://github.com/RaphHuynh" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">GitHub</a>
              </span>
            </div>
          </Reveal>
          <Reveal show={isShown('aboutRight')} className="flex flex-col justify-start">
            <p className="text-sm md:text-base lg:text-lg text-stone-400 font-light leading-relaxed mb-4">
              Actuellement en recherche d'une thèse, spécialisé en intelligence artificielle, j'ai l'opportunité de collaborer avec Mikaël Rébeau dans la création d'une entreprise.<br /><br />
              J'accorde une grande importance à la clarté du code et à la transmission des connaissances.<br /><br />
              J'ai également eu l'opportunité de travailler en freelance des la fin de ma licence en tant que developpeur web, chef de projet web et assistante de recherche.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mt-4 md:mt-8 lg:mt-12">
          <div className="flex-1">
            <Reveal
              show={isShown('expTitle')}
              as="h2"
              className="w-fit text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mt-10 mb-6 text-left highlight-blue"
            >
              <span style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>Expérience</span>
            </Reveal>
            <Reveal show={isShown('expLine')} className="border-b border-stone-700 mb-10 w-full" />
            <div className="relative pl-6">
              <TimelineRail show={isShown('expRail')} />
              <ol>
                {experiences.map((exp, i) => (
                  <Reveal key={i} show={isShown(`exp-${i}`)} as="li" className="mb-8">
                    <div className="ml-2">
                      <div className="text-base md:text-lg font-bold text-white">{exp.poste}</div>
                      <div className="text-sm text-stone-300">{exp.entreprise} — {exp.lieu}</div>
                      <div className="text-xs text-stone-400 mt-1">{exp.date}</div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex-1">
            <Reveal
              show={isShown('formTitle')}
              as="h2"
              className="w-fit text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mt-10 mb-6 text-left highlight-green"
            >
              <span style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>Formation</span>
            </Reveal>
            <Reveal show={isShown('formLine')} className="border-b border-stone-700 mb-10 w-full" />
            <div className="relative pl-6">
              <TimelineRail show={isShown('formRail')} />
              <ol>
                {formations.map((f, i) => (
                  <Reveal key={i} show={isShown(`form-${i}`)} as="li" className="mb-8">
                    <div className="ml-2">
                      <div className="text-base md:text-lg font-bold text-white">{f.diplome}</div>
                      <div className="text-sm text-stone-300">{f.etablissement}</div>
                      <div className="text-xs text-stone-400 mt-1">{f.annee}</div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="w-fit text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mt-10 mb-6 text-left highlight-red mt-4 md:mt-8 lg:mt-12"
            style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
          >
            Compétences
          </h2>
          <div
            className="border-b border-stone-700 mb-10 w-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="120"
            data-aos-easing="ease-out-cubic"
          />
          <div className="flex flex-col gap-8">
            {skill.map((cat, i) => (
              <div
                key={i}
                className="mb-2"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={i * 100}
                data-aos-easing="ease-out-cubic"
              >
                <div className="text-base md:text-lg font-bold text-[var(--primary-color)] mb-2" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.06em' }}>{cat.title}</div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/70 text-stone-100 border border-stone-700 text-xs md:text-sm font-medium uppercase tracking-wide" style={{ fontFamilely: 'Satoshi-Black, sans-serif' }}>
                      <span className="w-4 h-4 flex items-center justify-center">{s.icon}</span>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
