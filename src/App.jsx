import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32">
              <div className="space-y-20 md:space-y-32">
                <Hero />
                <Features />
                <Process />
                <Portfolio />
                <Contact />
              </div>
            </main>
          } />
          <Route path="/services" element={<Features />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Composant pour gérer le scroll
function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default App;
