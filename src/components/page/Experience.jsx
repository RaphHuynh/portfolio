import React from 'react';

const experiences = [
  {
    entreprise: "CHU - Institut d'Intelligence Artificielle en Santé",
    description: "Participation à la mise en place de l'entrepôt de données du CHU. Mise en place de différents modèles d'IA de deep learning pour la segmentation, la classification et la détection dans le domaine du traitement d'images. Prétraitement des données, amélioration de la qualité, création d'un annotateur d'images.",
    poste: "Data Scientist / Data Manager",
    lieu: "Reims, France",
    secteur: "Santé / IA",
    contract: "Alternance",
    date: "2024 — Aujourd'hui",
    site: null
  },
  {
    entreprise: "Freaks United",
    description: "Développement d'outils web pour générer des bases de données, gestion de projet et management d'équipes. Chef de projet, développement de portfolios artistiques, gestion d'équipe, mise en place de méthodologies Agile.",
    poste: "Chef de projet / Développeuse Freelance",
    lieu: "Paris, France",
    secteur: "Web / Freelance",
    contract: "Freelance",
    date: "2024",
    site: null
  },
  {
    entreprise: "Université de Reims Champagne-Ardenne",
    description: "Stage de recherche en traitement d'image médicale : prétraitements, algorithmes d'IA pour la détection de lignes B sur échographies pulmonaires.",
    poste: "Assistante de recherche IA",
    lieu: "Reims, France",
    secteur: "Recherche / IA",
    contract: "Stage",
    date: "2024",
    site: null
  },
  {
    entreprise: "Cabinet Lacour",
    description: "Développement d'une extension WordPress pour automatiser la prise de réunion à plusieurs. Modélisation UML, intégration Google Calendar.",
    poste: "Développeuse WordPress (Stage)",
    lieu: "Paris, France",
    secteur: "Web / WordPress",
    contract: "Stage",
    date: "2023",
    site: null
  },
  {
    entreprise: "LeBidibul",
    description: "Développement d'un site click & collect pour faciliter la prise de commande pendant le covid. Étude comparative des frameworks, modélisation Merise, développement Symfony.",
    poste: "Développeuse Web (Stage)",
    lieu: "Troyes, France",
    secteur: "Web / E-commerce",
    contract: "Stage",
    date: "2021",
    site: null
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen w-full bg-[#19191c] text-[#d1d1d6] px-6 md:px-28 py-20 font-satoshi">
      <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[#bfa76a] mb-4 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }} id="Experience">
        Expérience
      </h2>
      <div className="border-b border-stone-700 mb-12 w-full" />
      <div className="flex flex-col gap-12 md:gap-24">
        {experiences.map((exp, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            {/* Colonne entreprise */}
            <div className="md:col-span-3 flex flex-col">
              <span className="text-xl md:text-3xl font-semibold text-[#e5e5e7] leading-tight md:mb-2">{exp.entreprise}</span>
              <span className="text-base text-[#b0b0b8] md:mt-2">{exp.poste}</span>
            </div>
            {/* Colonne infos */}
            <div className="md:col-span-3 flex flex-col md:gap-2 lg:gap-4 text-sm text-[#b0b0b8]">
            <div><span className="font-semibold text-[#d1d1d6]">Date</span> : {exp.date}</div>
              <div><span className="font-semibold text-[#d1d1d6]">Lieu</span> : {exp.lieu}</div>
              <div><span className="font-semibold text-[#d1d1d6]">Secteur</span> : {exp.secteur}</div>
              <div><span className="font-semibold text-[#d1d1d6]">Contrat</span> : {exp.contract}</div>
              {exp.site && (
                <div><span className="font-semibold text-[#d1d1d6]">Site</span> : <a href={exp.site} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#bfa76a]">{exp.site}</a></div>
              )}
            </div>
            {/* Colonne description */}
            <div className="md:col-span-6 text-base leading-relaxed text-[#d1d1d6]">
              <blockquote className="bg-[#23232a] rounded-lg p-4 md:p-6 text-sm md:text-base text-[#d1d1d6] italic border-l-4 border-[#bfa76a]">
                {exp.description}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
      {/* Section Bilan Freelance */}
      <div className="mt-16 md:mt-24">
        <h2 className="text-2xl lg:text-4xl font-bold uppercase tracking-widest text-[#bfa76a] mb-4 text-left" style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}>
          Freelance
        </h2>
        <div className="border-b border-stone-700 mb-8 w-full" />
        <p className="text-lg text-stone-200 font-light mb-8 w-full md:w-1/2">
          Depuis 2024, j'ai accompagné des clients dans la réalisation de leurs projets informatiques. J'accorde une grande importance à la satisfaction client, à la pédagogie et à la qualité du code livré.
        </p>
        <div className="flex flex-wrap gap-8 md:gap-16 mb-10">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#bfa76a]">5</span>
            <span className="text-base text-stone-400">Clients accompagnés</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#bfa76a]">4</span>
            <span className="text-base text-stone-400">Projets freelance réalisés</span>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#bfa76a] mb-4">Recommandations LinkedIn</h3>
          {/* Témoignages cachés sur mobile, visibles à partir de md */}
          <div className="hidden md:flex flex-col gap-6">
            <blockquote className="bg-[#23232a] rounded-lg p-4 md:p-6 text-base text-[#d1d1d6] italic border-l-4 border-[#bfa76a]">
            J'ai eu l'opportunité de collaborer avec Raphaëlle en tant que développeuse web, et elle s'est distinguée par son autonomie et son engagement. Elle s'est approprié les projets avec une efficacité remarquable, notamment pour quelqu'un d'aussi jeune dans sa carrière.
            <br />
            Raphaëlle a un véritable sens du détail, que ce soit sur les aspects front-end ou back-end, et elle est toujours à l'écoute des besoins de l'équipe. Sa capacité à proposer des solutions adaptées et sa rigueur font d'elle un moteur précieux au sein de l'équipe ! 
            <br />
            Je la recommande vivement, c'est une vraie perle pour toute équipe technique !
              <br />
              <a href="https://www.linkedin.com/in/raphaëlle-huynh-46192919b/" target="_blank" rel="noopener noreferrer" className="text-[#bfa76a] underline mt-2 inline-block">Voir sur LinkedIn</a>
            </blockquote>
            <blockquote className="bg-[#23232a] rounded-lg p-4 md:p-6 text-base text-[#d1d1d6] italic border-l-4 border-[#bfa76a]">
            En tant que CTO, j'ai eu le plaisir de superviser Raphaëlle Huynh durant notre collaboration sur une plateforme de jeu social. Elle a d'abord été intégrée en tant que développeuse JavaScript, où elle a travaillé à la fois sur le front-end, en développant l'éditeur graphique, et sur une partie du back-end. Son engagement, sa motivation et son efficacité lui ont rapidement permis de se démarquer par la qualité de son travail et sa capacité à résoudre des problèmes complexes. Cela nous a conduits à la promouvoir au poste de Lead Developer en cours de projet.
            <br />
            Je suis toujours impressionné par les femmes qui choisissent de s'investir dans le développement logiciel, un domaine exigeant, et Raphaëlle excelle dans ce métier avec une passion et un talent indéniables. C'est un véritable plaisir de travailler à ses côtés, et je la recommande vivement pour toute collaboration future.
            <br />
            Raphaëlle a également démontré un leadership remarquable en gérant son équipe tout en continuant à livrer un code de qualité. En parallèle, elle partage ses compétences à travers des streams de code sur Twitch, témoignant ainsi de son engagement envers la communauté et de sa passion pour le développement.
              <br />
              <a href="https://www.linkedin.com/in/raphaëlle-huynh-46192919b/" target="_blank" rel="noopener noreferrer" className="text-[#bfa76a] underline mt-2 inline-block">Voir sur LinkedIn</a>
            </blockquote>
          </div>
          {/* Lien seul sur mobile ET bouton sur desktop */}
          <div className="flex flex-col">
            <a
              href="https://www.linkedin.com/in/raphaëlle-huynh-46192919b/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-2
                w-full
                md:w-auto
                px-6 py-3
                border border-[#bfa76a]
                text-[#bfa76a]
                rounded-2xl
                font-semibold
                uppercase
                tracking-widest
                text-center
                bg-transparent
                transition-all duration-200
                shadow-none
                md:mx-auto
                md:hover:bg-[#bfa76a] md:hover:text-[#181a1b] md:hover:shadow-lg
                md:shadow-[0_2px_16px_0_rgba(191,167,106,0.10)]
                md:text-base
                md:font-bold
                md:mt-8
              "
            >
              Voir toutes mes recommandations sur LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
