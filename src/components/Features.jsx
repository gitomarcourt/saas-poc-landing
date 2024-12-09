import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import {
  CpuChipIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyEuroIcon,
  ChartBarIcon,
  CogIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

const mainFeatures = [
  {
    title: "Développement sur Mesure",
    description: "Solutions personnalisées adaptées à vos besoins spécifiques avec une approche agile et itérative.",
    icon: CpuChipIcon,
  },
  {
    title: "Design UX/UI Moderne",
    description: "Interfaces utilisateur intuitives et esthétiques qui optimisent l'expérience de vos utilisateurs.",
    icon: UserGroupIcon,
  },
  {
    title: "Déploiement Rapide",
    description: "Mise en production efficace avec des délais optimisés et un support continu.",
    icon: RocketLaunchIcon,
  }
];

const technicalFeatures = [
  {
    title: "Performance Optimisée",
    description: "Applications rapides et réactives grâce à des techniques d'optimisation avancées",
    icon: ChartBarIcon,
  },
  {
    title: "Sécurité Renforcée",
    description: "Protection des données et conformité aux normes de sécurité les plus strictes",
    icon: ShieldCheckIcon,
  },
  {
    title: "Scalabilité Cloud",
    description: "Architecture évolutive permettant une croissance sans limites",
    icon: CloudArrowUpIcon,
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "4900",
    duration: "7 jours",
    features: [
      "Landing page",
      "Design responsive",
      "Formulaire de contact",
      "Hébergement inclus",
      "Support email"
    ]
  },
  {
    name: "Pro",
    price: "9900",
    duration: "14 jours",
    features: [
      "Application web complète",
      "Design personnalisé",
      "Backend robuste",
      "Base de données",
      "Authentification",
      "Support prioritaire"
    ]
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    duration: "À définir",
    features: [
      "Solution sur mesure",
      "Architecture complexe",
      "Intégrations API",
      "Sécurité avancée",
      "Support 24/7",
      "Formation équipe"
    ]
  }
];

const Features = () => {
  const location = useLocation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="features" className={`bg-gray-900 ${location.pathname === '/services' ? 'pt-32' : 'pt-16'} pb-16`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Nos Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transformez votre vision en réalité avec nos solutions technologiques innovantes.
            De la conception à la mise en production, nous vous accompagnons à chaque étape.
          </p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-secondary/50 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <feature.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Features */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Caractéristiques Techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Nos Forfaits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50 hover:border-secondary/50 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <h4 className="text-2xl font-bold mb-4 text-white">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-secondary">
                    {typeof plan.price === 'string' ? plan.price : `${plan.price}€`}
                  </span>
                  <span className="text-gray-400 ml-2">/ {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary font-semibold transition-colors duration-200">
                  En savoir plus
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
            Notre équipe est là pour vous accompagner dans la réalisation de votre projet.
          </p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:opacity-90 transition-opacity duration-200">
            Demander un devis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
