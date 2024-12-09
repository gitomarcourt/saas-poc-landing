import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LightBulbIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ChatBubbleBottomCenterTextIcon,
  WrenchScrewdriverIcon,
  DocumentCheckIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const mainSteps = [
  {
    title: "Consultation Initiale",
    description: "Discussion approfondie pour comprendre vos besoins et objectifs",
    icon: ChatBubbleBottomCenterTextIcon,
    details: [
      "Analyse des besoins",
      "Définition des objectifs",
      "Identification des contraintes",
      "Estimation préliminaire"
    ]
  },
  {
    title: "Conception & Design",
    description: "Création des maquettes et de l'architecture technique",
    icon: PencilSquareIcon,
    details: [
      "Wireframes & maquettes",
      "Architecture technique",
      "Choix technologiques",
      "Planning détaillé"
    ]
  },
  {
    title: "Développement",
    description: "Réalisation de votre projet avec des points réguliers",
    icon: CodeBracketIcon,
    details: [
      "Développement agile",
      "Tests continus",
      "Revues de code",
      "Intégration continue"
    ]
  },
  {
    title: "Déploiement",
    description: "Mise en production et accompagnement",
    icon: RocketLaunchIcon,
    details: [
      "Tests finaux",
      "Déploiement production",
      "Formation utilisateurs",
      "Support technique"
    ]
  }
];

const methodology = [
  {
    title: "Sprint Planning",
    description: "Définition des objectifs et tâches pour chaque sprint de développement",
    icon: LightBulbIcon,
  },
  {
    title: "Daily Check-ins",
    description: "Points quotidiens pour suivre l'avancement et lever les blocages",
    icon: ArrowPathIcon,
  },
  {
    title: "Quality Assurance",
    description: "Tests rigoureux à chaque étape du développement",
    icon: DocumentCheckIcon,
  },
  {
    title: "Support Continu",
    description: "Accompagnement technique et maintenance évolutive",
    icon: WrenchScrewdriverIcon,
  }
];

const deliverables = [
  {
    title: "Documentation",
    items: [
      "Spécifications techniques",
      "Guide d'utilisation",
      "Documentation API",
      "Manuel de déploiement"
    ]
  },
  {
    title: "Code Source",
    items: [
      "Repository Git",
      "Tests automatisés",
      "Scripts de déploiement",
      "Configurations"
    ]
  },
  {
    title: "Livrables Design",
    items: [
      "Maquettes Figma",
      "Assets graphiques",
      "Guide de style",
      "Composants UI"
    ]
  }
];

const Process = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isFullPage = location.pathname === '/process';

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

  const displayedSteps = isFullPage ? mainSteps : mainSteps.slice(0, 4);

  return (
    <section id="process" className={`bg-gray-900 ${isFullPage ? 'pt-32 pb-16' : ''}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className={`text-center ${isFullPage ? 'mb-20' : 'mb-12'}`}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Notre Processus
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {isFullPage 
              ? "Une méthodologie éprouvée pour transformer votre idée en réalité, avec un focus sur la rapidité et la qualité."
              : "Un processus simple et efficace pour concrétiser votre projet."
            }
          </p>
        </motion.div>

        {/* Main Steps */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-secondary/50 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                    <step.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-lg font-semibold text-white">{step.title}</span>
                </div>
                <p className="text-gray-400 mb-4">{step.description}</p>
                {isFullPage && (
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Section - Only shown on full page */}
        {isFullPage && (
          <motion.div
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Notre Méthodologie
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodology.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 rounded-xl p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <item.icon className="w-10 h-10 text-accent mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Deliverables Section - Only shown on full page */}
        {isFullPage && (
          <motion.div
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Livrables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 rounded-xl p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <h4 className="text-xl font-semibold mb-4 text-white">{deliverable.title}</h4>
                  <ul className="space-y-2">
                    {deliverable.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {!isFullPage ? (
            <button
              onClick={() => navigate('/process')}
              className="btn-primary"
            >
              En savoir plus sur notre processus
            </button>
          ) : (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Prêt à démarrer votre projet ?
              </h3>
              <button
                onClick={() => navigate('/get-started')}
                className="btn-primary"
              >
                Commencer maintenant
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
