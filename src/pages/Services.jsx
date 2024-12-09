import { motion } from 'framer-motion';

const Services = () => {
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
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            De la conception à la livraison, nous vous accompagnons dans la réalisation de votre POC
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Architecture",
    description: "Conception robuste et évolutive de votre solution technique.",
    icon: '🏗️'
  },
  {
    title: "Développement",
    description: "Implémentation rapide des fonctionnalités essentielles.",
    icon: '💻'
  },
  {
    title: "Tests",
    description: "Validation complète des fonctionnalités développées.",
    icon: '🔍'
  },
  {
    title: "Documentation",
    description: "Documentation détaillée pour faciliter la maintenance et l'évolution.",
    icon: '📚'
  },
  {
    title: "Déploiement",
    description: "Mise en production sécurisée de votre solution.",
    icon: '🚀'
  },
  {
    title: "Support",
    description: "Accompagnement technique post-livraison.",
    icon: '🤝'
  }
];

export default Services;
