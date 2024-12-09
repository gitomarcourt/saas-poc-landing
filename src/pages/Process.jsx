import { motion } from 'framer-motion';

const Process = () => {
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
            Notre{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Processus
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une méthodologie éprouvée pour livrer votre POC en 7 jours
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.day}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent" />
              )}

              {/* Day bubble */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center flex-shrink-0 mr-6">
                <span className="text-sm font-bold">J{step.day}</span>
              </div>

              {/* Content */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex-grow">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.tasks.map((task, taskIndex) => (
                    <span
                      key={taskIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    day: '1-2',
    title: "Analyse & Design",
    description: "Compréhension approfondie de vos besoins et conception de la solution.",
    tasks: ['Brief client', 'Analyse fonctionnelle', 'Maquettes', 'Architecture']
  },
  {
    day: '3-4',
    title: "Développement Core",
    description: "Mise en place des fonctionnalités principales de votre POC.",
    tasks: ['Setup projet', 'Backend', 'Frontend', 'API']
  },
  {
    day: '5-6',
    title: "Features & Tests",
    description: "Développement des fonctionnalités additionnelles et phase de tests.",
    tasks: ['Features secondaires', 'Tests unitaires', "Tests d'intégration", 'Debug']
  },
  {
    day: '7',
    title: "Finalisation & Livraison",
    description: "Derniers ajustements et livraison de votre POC fonctionnel.",
    tasks: ['Optimisation', 'Documentation', 'Déploiement', 'Formation']
  }
];

export default Process;
