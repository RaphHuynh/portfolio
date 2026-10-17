import ProjectDetail from '../../components/page/ProjectDetail';
import img1 from '../../assets/img_projet/sumApp.png';
import img2 from '../../assets/img_projet/sumApp3.png';

export default function SumApp() {
  return (
    <ProjectDetail
      title="SumApp"
      year="2024"
      role="Projet Personnel"
      subtitle="Bot discord et génération de résumé de réunion"
      description="Ce projet a pour but de créer un bot discord permettant de faire des résumés de conversation vocal et de générer un pdf récapitulatif. Une interface web permet de gérer et visualiser les résumés de son compte."
      technologies={['Python', 'Django', 'Pycord', 'Sqlite', 'OpenAI', 'Whisper']}
      images={[img1, img2]}
      galleryLayout="stack"
    />
  );
}
