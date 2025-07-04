import '../../assets/fonts/Satoshi-Black.otf';

export default function About() {
  return (
    <section className="min-h-screen bg-[#181a1b] flex items-center" id="About">
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
                Passionnée par les sciences, la météorologie et les données. Je développe des projets dans ces thèmes, nottamment des modèles d'intelligence artificielle.<br /> <br />
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
      </div>
    </section>
  );
} 