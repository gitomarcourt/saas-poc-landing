import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

const projects = [
  {
    title: 'Plateforme de gestion RH',
    description: 'POC d\'une solution SaaS de gestion des ressources humaines avec tableaux de bord analytiques.',
    image: '/images/project1.jpg', // À remplacer par vos images
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Application IoT Dashboard',
    description: 'Interface de supervision pour objets connectés avec visualisation en temps réel.',
    image: '/images/project2.jpg',
    tags: ['Vue.js', 'Python', 'MongoDB'],
  },
  {
    title: 'CRM Immobilier',
    description: 'Système de gestion de la relation client spécialisé pour les agences immobilières.',
    image: '/images/project3.jpg',
    tags: ['React', 'Django', 'Redis'],
  },
];

const Portfolio = () => {
  const location = useLocation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className={`bg-gray-900 ${location.pathname === '/portfolio' ? 'pt-32' : 'pt-16'} pb-16`} ref={ref}>
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
            Nos{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              réalisations
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Découvrez quelques exemples de POC SaaS que nous avons développés 
            pour nos clients en une semaine.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * (index + 2) }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-secondary/50 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-accent opacity-20" />
                  <div className="absolute inset-0 bg-gray-900/50" />
                  {/* Placeholder pour la démo - à remplacer par de vraies images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-300 mb-8">
            Vous souhaitez voir plus de nos réalisations ?
          </p>
          <button className="btn-primary">
            Voir plus de projets
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
