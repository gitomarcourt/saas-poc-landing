import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ClockIcon, 
  CubeTransparentIcon, 
  UserGroupIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const features = [
  {
    title: 'Rapidité d\'exécution',
    description: 'Votre POC fonctionnel livré en moins d\'une semaine, prêt à être testé par vos utilisateurs.',
    icon: ClockIcon,
  },
  {
    title: 'Expertise technique',
    description: 'Une équipe d\'experts en développement SaaS qui maîtrise les dernières technologies.',
    icon: UserGroupIcon,
  },
  {
    title: 'Architecture évolutive',
    description: 'Une base de code solide et scalable, prête pour l\'évolution future de votre produit.',
    icon: CubeTransparentIcon,
  },
  {
    title: 'Mise sur le marché rapide',
    description: 'Validez rapidement votre concept et accélérez votre time-to-market.',
    icon: RocketLaunchIcon,
  },
];

const Features = () => {
  const router = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className={`bg-gray-900 ${router.pathname === '/services' ? 'pt-32' : 'pt-16'} pb-16`} ref={ref}>
      <div className="max-w-7xl mx-auto">
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
            Pourquoi choisir notre service de{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              création de POC
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Nous combinons expertise technique et rapidité d'exécution pour 
            transformer votre idée en un produit SaaS fonctionnel.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-secondary/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
