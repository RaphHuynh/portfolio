import ProjectDetail from '../../components/page/ProjectDetail';
import img1 from '../../assets/img_projet/frdesdev.png';
import img2 from '../../assets/img_projet/frdesdev3.png';

export default function FrancaisesdesDev() {
  return (
    <ProjectDetail
      title="Françaises des développeuses"
      year="2023"
      role="Projet personnel"
      subtitle="Applications web et API"
      description="Ce projet a pour but de mettre en avant le profil des femmes françaises travaillant dans le monde de la tech. Il ne reste plus qu'a le déployer !"
      technologies={['MySQL', 'NextJS', 'Typescript', 'TailwindCSS', 'FastAPI', 'Python']}
      images={[img1, img2]}
      galleryLayout="stack"
    />
  );
}
