import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Process />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
