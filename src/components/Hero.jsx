import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-32" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
      
      {/* Animated circles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/30 mix-blend-screen blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/30 mix-blend-screen blur-[60px]"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-white">
                De l'idée à la réalité en 7 jours
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex flex-wrap items-center gap-x-4">
                  <span>Votre</span>
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                      POC
                    </span>
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 358 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      <path
                        d="M3 9C118.957 4.47226 236.914 4.47226 355 9"
                        stroke="url(#paint0_linear)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="3"
                          y1="9"
                          x2="355"
                          y2="9"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4F46E5" />
                          <stop offset="1" stopColor="#10B981" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </div>
                <div className="flex items-center gap-x-4">
                  <span>fonctionnel</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <span>en</span>
                  <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    7 jours
                  </span>
                </div>
              </div>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Validez rapidement votre idée avec un POC fonctionnel. Notre équipe d'experts 
              transforme votre vision en réalité en seulement une semaine.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <button className="btn-primary group">
                <span className="flex items-center">
                  Commencer votre projet
                  <motion.svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </span>
              </button>
              <button className="px-6 py-3 text-white border border-gray-700 rounded-lg hover:bg-white/5 transition-colors duration-300 flex items-center group">
                <span className="mr-2">Voir nos réalisations</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              {[
                { value: '50+', label: 'Projets livrés' },
                { value: '7', label: 'Jours maximum' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side with 3D mockup */}
          <motion.div
            className="relative lg:ml-12"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-accent opacity-20 blur-2xl rounded-full" />
              
              {/* Main mockup */}
              <div className="relative z-10 w-full h-full rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 transform hover:scale-105 transition-transform duration-500">
                {/* Window controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Code editor mockup */}
                <div className="space-y-4">
                  <div className="h-4 bg-gray-800 rounded-full w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-800 rounded-full w-1/2" />
                  <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-gray-800 rounded-lg animate-pulse" />
                    <div className="h-16 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg border border-gray-700" />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-xl"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
