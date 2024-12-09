import { motion } from 'framer-motion';
import { useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les POCs que nous avons réalisés pour nos clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-video">
                {/* Project image */}
                <div
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.shortDescription}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Plateforme E-learning",
    shortDescription: "POC d'une plateforme de formation en ligne",
    description: "Développement d'un POC pour une plateforme de formation en ligne avec système de cours en direct, quiz interactifs et suivi de progression.",
    image: '/projects/elearning.jpg',
    technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB']
  },
  {
    title: "App de Réservation",
    shortDescription: "Système de réservation temps réel",
    description: "POC d'une application de réservation en temps réel avec gestion des disponibilités et paiement intégré.",
    image: '/projects/booking.jpg',
    technologies: ['Vue.js', 'Firebase', 'Stripe', 'PWA']
  },
  {
    title: "Dashboard IoT",
    shortDescription: "Interface de monitoring IoT",
    description: "POC d'un dashboard pour la visualisation et le contrôle d'appareils IoT en temps réel.",
    image: '/projects/iot.jpg',
    technologies: ['React', 'WebSocket', 'GraphQL', 'D3.js']
  },
  {
    title: "App de Livraison",
    shortDescription: "Suivi de livraison en temps réel",
    description: "POC d'une application de suivi de livraison avec géolocalisation en temps réel et notifications.",
    image: '/projects/delivery.jpg',
    technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB']
  },
  {
    title: "Marketplace NFT",
    shortDescription: "Plateforme d'échange de NFTs",
    description: "POC d'une marketplace pour l'achat et la vente de NFTs avec wallet integration.",
    image: '/projects/nft.jpg',
    technologies: ['Next.js', 'Solidity', 'IPFS', 'Web3.js']
  },
  {
    title: "CRM Intelligent",
    shortDescription: "CRM avec IA intégrée",
    description: "POC d'un CRM utilisant l'intelligence artificielle pour l'analyse client et les prédictions.",
    image: '/projects/crm.jpg',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL']
  }
];

export default Portfolio;
