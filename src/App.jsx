import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
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

export default App;
