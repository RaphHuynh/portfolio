import ProjectDetail from '../../components/page/ProjectDetail';
import img1 from '../../assets/img_projet/nlp.png';
import img2 from '../../assets/img_projet/nlp_2.png';
import img3 from '../../assets/img_projet/nlp_3.png';
import img4 from '../../assets/img_projet/nlp_4.png';

export default function DashboardNLP() {
  return (
    <ProjectDetail
      title="Dashboard NLP"
      year="2024"
      role="Projet personnel"
      subtitle="Applications web"
      description="Ce dashboard permet d'explorer les différentes techniques de base du traitement du langage naturel (NLP) en Python. Il inclut des fonctionnalités telles que le prétraitement de texte, la visualisation de nuages de mots et un chatbot simple."
      technologies={['Python', 'Shiny', 'NLTK', 'Spacy', 'Word2Vec', 'WordCloud', 'scikit-learn']}
      images={[img1, img2, img3, img4]}
      galleryLayout="nlp"
    />
  );
}
