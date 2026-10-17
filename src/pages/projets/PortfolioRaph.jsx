import ProjectDetail from '../../components/page/ProjectDetail';
import img1 from '../../assets/img_projet/portfolio_raph_demets.png';
import img2 from '../../assets/img_projet/prd.png';

export default function PortfolioRaph() {
  return (
    <ProjectDetail
      title="Raphaël Demets"
      year="2024"
      role="Freelance"
      subtitle="Portfolio étudiant"
      description="Ce portfolio a été réalisé pour aider un étudiant à trouver un stage."
      technologies={['React', 'JavaScript', 'TailwindCSS', 'Framer Motion']}
      images={[img1, img2]}
      galleryLayout="stack"
    />
  );
}
