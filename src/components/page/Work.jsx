import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import '../../assets/fonts/Satoshi-Black.otf';
import ImgPortJonathan from '../../assets/img_projet/portfolioJonathan.png';
import ImgFRDesDev from '../../assets/img_projet/frdesdev.png';

const projetsList = [
  { to: '/projets/jonathan-steuer', title: 'Jonathan Steuer', year: '2024' },
  { to: '/projets/francaises-des-dev', title: 'Françaises des dev', year: '2023' },
  { to: '/projets/dashboard-nlp', title: 'DashBoard NLP', year: '2024' },
  { to: '/projets/portfolio-raph', title: 'Raphaël Demets', year: '2024' },
  { to: '/projets/meteo-r', title: "Meteo'R", year: '2025' },
  { to: '/projets/sum-app', title: "Sum'APP", year: '2024' },
];

const Work = () => {
  return (
    <section
      className="min-h-screen md:h-screen bg-[#181a1b] flex flex-col items-center pt-20 md:pt-28 pb-6 md:pb-12"
      id="Projet"
      style={{ fontFamily: 'Satoshi-Black, sans-serif', letterSpacing: '0.08em' }}
    >
      <div className="w-full h-full flex flex-col px-6 md:px-14">
        <h2 className="w-fit text-3xl lg:text-5xl font-bold uppercase tracking-widest text-[var(--primary-color)] mb-4 text-left highlight-blue">
          Projets
        </h2>
        <div className="border-b border-stone-700 mb-6 w-full" />

        <div className="flex gap-0 md:gap-16 flex-1 overflow-hidden">
          <article className="hidden md:flex w-1/2 h-full flex-col gap-4 overflow-hidden">
            <img
              src={ImgPortJonathan}
              alt="Jonathan Steuer"
              className="w-full h-1/2 object-cover rounded-lg shadow-lg grayscale"
            />
            <img
              src={ImgFRDesDev}
              alt="Françaises des dev"
              className="w-full h-1/2 object-cover rounded-lg shadow-lg grayscale"
            />
          </article>

          <aside className="flex flex-col w-full md:w-1/2 h-full overflow-y-auto">
            <h3
              className="text-2xl md:text-4xl font-bold text-white mb-4 text-center md:text-right md:mr-0 md:ml-auto"
              style={{ fontFamily: 'Satoshi-Black, sans-serif' }}
            >
              Sélections de projets
            </h3>
            <p className="text-base md:text-xl text-stone-300 mb-6 md:mb-4 leading-relaxed w-full md:w-2/3 text-center md:text-right md:mr-0 md:ml-auto">
              Voici quelques projets personnels et des projets réalisés en freelance.
            </p>

            <ul className="mt-4 md:mt-auto mb-0">
              {projetsList.map((projet) => (
                <li key={projet.to} className="mt-4 md:mt-6 first:mt-0">
                  <Link
                    to={projet.to}
                    className="flex text-xl md:text-3xl text-[var(--primary-color)] mb-3 md:mb-4 hover:text-white uppercase"
                  >
                    {projet.title}
                    <span className="mr-0 ml-auto">{projet.year}</span>
                  </Link>
                  <div className="border-b border-[var(--primary-color)] w-full" />
                </li>
              ))}
              <li className="mt-4 md:mt-6">
                <a
                  href="https://github.com/RaphHuynh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-xl md:text-3xl text-[var(--primary-color)] mb-3 md:mb-4 hover:text-white uppercase"
                >
                  Github
                  <FaGithub className="inline mb-1 mr-0 ml-auto" />
                </a>
                <div className="border-b border-[var(--primary-color)] w-full" />
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Work;
