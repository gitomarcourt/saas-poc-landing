import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Consultation initiale',
    description: 'Discussion approfondie pour comprendre votre vision, vos objectifs et les fonctionnalités clés de votre SaaS.',
  },
  {
    number: '02',
    title: 'Conception rapide',
    description: 'Définition de l\'architecture et des technologies adaptées à votre projet, avec une maquette interactive.',
  },
  {
    number: '03',
    title: 'Développement agile',
    description: 'Développement intensif avec des points quotidiens pour assurer l\'alignement avec vos attentes.',
  },
  {
    number: '04',
    title: 'Livraison & Support',
    description: 'Déploiement de votre POC et formation à son utilisation, avec support technique inclus.',
  },
];

const Process = () => {
  const location = useLocation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className={`bg-gray-900 ${location.pathname === '/process' ? 'pt-32' : 'pt-16'} pb-16`} ref={ref}>
      {/* Animated background element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Notre processus de{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              création rapide
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Une méthodologie éprouvée pour transformer votre idée en POC 
            fonctionnel en seulement une semaine.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * (index + 2) }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary/50 to-transparent -z-10" />
              )}
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-secondary/50 transition-colors duration-300">
                <span className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold my-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <button className="btn-primary">
            Démarrer votre projet
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
