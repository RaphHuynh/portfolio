import ProjectDetail from '../../components/page/ProjectDetail';
import img1 from '../../assets/img_projet/meteoR.png';
import img2 from '../../assets/img_projet/meteoR2.png';

export default function MeteoR() {
  return (
    <ProjectDetail
      title="Meteo'R"
      year="2025"
      role="Projet Personnel"
      subtitle="Dashboard d'analyse de données"
      description="Ce dashboard a été conçu pour pouvoir visualiser et analyser toute les données d'une base de données météorologiques disponible sur kaggle. Une version en python est en cours."
      technologies={['R', 'Shiny', 'ggplot2', 'ggmap', 'plotly', 'igraph']}
      images={[img1, img2]}
      galleryLayout="stack"
    />
  );
}
