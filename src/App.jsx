import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AOS from 'aos';

import NavRouter from "./components/navigation/NavRouter"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import WorkPage from "./pages/WorkPage"
import ArtPage from "./pages/ArtPage"

const JonathanSteuer = lazy(() => import("./pages/projets/JonathanSteuer"));
const FrancaisesdesDev = lazy(() => import("./pages/projets/FrancaisesdesDev"));
const MeteoR = lazy(() => import("./pages/projets/MeteoR"));
const PortfolioRaph = lazy(() => import("./pages/projets/PortfolioRaph"));
const SumApp = lazy(() => import("./pages/projets/SumApp"));
const DashboardNLP = lazy(() => import("./pages/projets/DashboardNLP"));

AOS.init({
  once: true,
});

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300'>
        <NavRouter />
        <Suspense fallback={<div className="min-h-screen bg-[#181a1b]" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projets" element={<WorkPage />} />
            <Route path="/art" element={<ArtPage />} />
            <Route path="/projets/jonathan-steuer" element={<JonathanSteuer />} />
            <Route path="/projets/francaises-des-dev" element={<FrancaisesdesDev />} />
            <Route path="/projets/meteo-r" element={<MeteoR />} />
            <Route path="/projets/portfolio-raph" element={<PortfolioRaph />} />
            <Route path="/projets/sum-app" element={<SumApp />} />
            <Route path="/projets/dashboard-nlp" element={<DashboardNLP />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
