import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Markets from './pages/Markets';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on every route change — matches prototype behaviour.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const App = () => (
  <>
    <ScrollToTop />
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
