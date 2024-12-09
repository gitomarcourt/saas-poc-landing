import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left side with text */}
          <div className="lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 mb-8"
              >
                <span className="text-sm text-gray-300">De l'idée à la réalité en 7 jours</span>
              </motion.div>

              {/* Titre */}
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

              {/* Description et CTA */}
              <motion.p 
                className="text-xl text-gray-300 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                Validez rapidement votre idée avec un POC fonctionnel. Notre équipe d'experts 
                transforme votre vision en réalité en seulement une semaine.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <button className="btn-primary group">
                  <span className="flex items-center">
                    Commencer maintenant
                    <motion.svg 
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side with animation */}
          <div className="hidden lg:block lg:w-1/2">
            <motion.div
              className="w-full max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                {/* Barre de titre avec boutons */}
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Contenu avec animation de code */}
                <div className="p-6 space-y-4">
                  {/* Ligne de code 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <div className="h-4 w-3/4 bg-gradient-to-r from-secondary to-accent rounded"></div>
                  </motion.div>

                  {/* Ligne de code 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <div className="h-4 w-1/2 bg-gradient-to-r from-secondary to-accent rounded"></div>
                  </motion.div>

                  {/* Bloc de progression */}
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                    className="h-24 bg-gradient-to-r from-secondary via-accent to-secondary rounded-lg relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear"
                      }}
                    />
                  </motion.div>

                  {/* Indicateurs de statut */}
                  <div className="flex justify-between mt-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="h-2 w-16 bg-green-500/30 rounded"></div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.2 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="h-2 w-16 bg-blue-500/30 rounded"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Effet de brillance */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                    repeatDelay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
