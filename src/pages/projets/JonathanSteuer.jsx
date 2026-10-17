import ProjectDetail from '../../components/page/ProjectDetail';
import img1 from '../../assets/img_projet/portfolioJonathan.png';
import img2 from '../../assets/img_projet/jo-2.png';
import img3 from '../../assets/img_projet/jo-3.png';

export default function JonathanSteuer() {
  return (
    <ProjectDetail
      title="Jonathan Steuer"
      year="2024"
      role="Freelance - Front End"
      subtitle="Portfolio artistique"
      description="Ce portfolio artistique a été réalisé pour le réalisateur Jonathan Steuer. L'objectif principal de ma mission était de créer toute la partie front-end du site et de mettre en place les choix artistique ainsi que de réfléchir avec Jonathan et son designer."
      technologies={['React', 'CSS', 'JavaScript', 'TailwindCSS', 'Framer Motion']}
      images={[img1, img2, img3]}
      galleryLayout="jonathan"
      sectionId="JonathanSteuer"
    />
  );
}
