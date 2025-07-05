import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import NavRouter from "./components/navigation/NavRouter"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import WorkPage from "./pages/WorkPage"
import ArtPage from "./pages/ArtPage"

AOS.init({
  once: true,
});

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300'>
        <NavRouter />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projets" element={<WorkPage />} />
          <Route path="/art" element={<ArtPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
