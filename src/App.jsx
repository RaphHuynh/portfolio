import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavRouter from "./components/navigation/NavRouter"
import PageCurtain, { curtainMeta } from "./components/effect/PageCurtain"
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
  duration: 1000,
  easing: 'ease-out-cubic',
  offset: 60,
  delay: 0,
});

function AnimatedRoutes() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(location);
  const [curtain, setCurtain] = useState(null);
  const pending = useRef(location);
  const currentPath = useRef(location.pathname);
  currentPath.current = current.pathname;

  useEffect(() => {
    if (location.pathname === currentPath.current) return;
    pending.current = location;

    if (reduceMotion) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      setCurrent(location);
      setCurtain(null);
      return;
    }

    const meta = curtainMeta(currentPath.current, location.pathname);
    setCurtain({ id: `${location.pathname}-${Date.now()}`, ...meta });
  }, [location, reduceMotion]);

  return (
    <>
      <div className="min-h-screen">
        <Suspense fallback={<div className="min-h-screen bg-[#181a1b]" />}>
          <Routes location={current}>
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
      {curtain && (
        <PageCurtain
          key={curtain.id}
          title={curtain.title}
          direction={curtain.direction}
          onCovered={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            setCurrent(pending.current);
          }}
          onDone={() => setCurtain(null)}
        />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#181a1b]">
        <NavRouter />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
