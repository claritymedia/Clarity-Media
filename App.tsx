import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PulsePartners } from './pages/PulsePartners';
import { Podcasting } from './pages/Podcasting';
import { Photography } from './pages/Photography';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { DnaReport } from './pages/DnaReport';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

// ScrollToTop component for HashRouter
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pulse-partners" element={<PulsePartners />} />
        <Route path="/podcasting" element={<Podcasting />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dna-report" element={<DnaReport />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/resources" element={<Home />} /> {/* Placeholder */}
        <Route path="/application" element={<Contact />} /> {/* Placeholder */}
      </Routes>
    </Router>
  );
};

export default App;
