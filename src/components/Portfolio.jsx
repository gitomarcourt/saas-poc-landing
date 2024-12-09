import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { 
  GlobeAltIcon, 
  ShoppingCartIcon, 
  ChartBarIcon,
  CalendarIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  CogIcon,
  DocumentIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "E-commerce SaaS",
    description: "Plateforme e-commerce complète avec gestion des stocks et paiements",
    image: "/portfolio/ecommerce.jpg",
    icon: ShoppingCartIcon,
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Gestion des produits",
      "Panier d'achat",
      "Paiement sécurisé",
      "Tableau de bord admin"
    ],
    duration: "2 semaines",
    client: "RetailTech Solutions"
  },
  {
    title: "Dashboard Analytics",
    description: "Interface de visualisation de données pour entreprise",
    image: "/portfolio/analytics.jpg",
    icon: ChartBarIcon,
    category: "Analytics",
    technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
    features: [
      "Graphiques interactifs",
      "Rapports automatisés",
      "Export de données",
      "Filtres avancés"
    ],
    duration: "10 jours",
    client: "DataViz Corp"
  },
  {
    title: "Plateforme RH",
    description: "Application de gestion des ressources humaines",
    image: "/portfolio/hr.jpg",
    icon: UserGroupIcon,
    category: "RH",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
    features: [
      "Gestion des employés",
      "Suivi des congés",
      "Évaluations",
      "Rapports RH"
    ],
    duration: "3 semaines",
    client: "HR Solutions"
  },
  {
    title: "Système de Réservation",
    description: "Application de réservation pour restaurants",
    image: "/portfolio/booking.jpg",
    icon: CalendarIcon,
    category: "Réservation",
    technologies: ["React Native", "Firebase", "Node.js", "Redis"],
    features: [
      "Réservation en temps réel",
      "Notifications push",
      "Gestion des tables",
      "Interface restaurant"
    ],
    duration: "2 semaines",
    client: "RestauBook"
  },
  {
    title: "Plateforme de Support",
    description: "Système de ticketing et support client",
    image: "/portfolio/support.jpg",
    icon: ChatBubbleBottomCenterTextIcon,
    category: "Support",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Socket.io"],
    features: [
      "Chat en temps réel",
      "Gestion des tickets",
      "Base de connaissances",
      "Rapports d'activité"
    ],
    duration: "12 jours",
    client: "SupportPro"
  },
  {
    title: "CMS Personnalisé",
    description: "Système de gestion de contenu sur mesure",
    image: "/portfolio/cms.jpg",
    icon: DocumentIcon,
    category: "CMS",
    technologies: ["Nuxt.js", "Laravel", "MySQL", "Redis"],
    features: [
      "Éditeur WYSIWYG",
      "Gestion des médias",
      "Versions multilingues",
      "SEO optimisé"
    ],
    duration: "3 semaines",
    client: "ContentMaster"
  }
];

const categories = [
  "Tous",
  "E-commerce",
  "Analytics",
  "RH",
  "Réservation",
  "Support",
  "CMS"
];

const Portfolio = () => {
  const location = useLocation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="portfolio" className={`bg-gray-900 ${location.pathname === '/portfolio' ? 'pt-32' : 'pt-16'} pb-16`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez nos projets récents et comment nous avons aidé nos clients
            à transformer leurs idées en solutions concrètes.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700/50 hover:border-secondary/50 transition-all duration-300 cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 bg-gray-700">
                <project.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-gray-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-700/50 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-400">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Fonctionnalités</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Client</h4>
                      <p className="text-white">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Durée</h4>
                      <p className="text-white">{selectedProject.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-secondary/20 rounded-full text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">
            Vous avez un projet similaire ?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Nous pouvons vous aider à le réaliser. Contactez-nous pour discuter
            de vos besoins et obtenir un devis personnalisé.
          </p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:opacity-90 transition-opacity duration-200">
            Démarrer votre projet
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
