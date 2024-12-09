import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineLightningBolt, HiOutlineSparkles, HiOutlineCheck } from 'react-icons/hi';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    description: '',
    features: '',
    targetAudience: '',
    timeline: '7',
    budget: '',
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Commencez votre projet
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Transformez votre idée en réalité en seulement 7 jours
          </p>
        </motion.div>

        <motion.div 
          className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Details Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <HiOutlineLightningBolt className="text-secondary w-6 h-6" />
                <h2 className="text-xl font-semibold text-white">Détails du projet</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-300 flex items-center">
                    Nom du projet
                    <span className="ml-2 text-gray-500 hover:text-gray-300 cursor-help group relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="hidden group-hover:block absolute z-10 w-64 p-2 mt-2 text-sm text-gray-300 bg-gray-800 rounded-lg shadow-lg">
                        Choisissez un nom court et mémorable qui reflète l'essence de votre projet.
                      </span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                    placeholder="ex: InvoiceGenius, TaskMaster, etc."
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
                    Type de projet
                  </label>
                  <select
                    name="projectType"
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="webapp">Application Web</option>
                    <option value="mobileapp">Application Mobile</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="saas">SaaS</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                    Description du projet
                  </label>
                  <div className="space-y-4">
                    <textarea
                      name="description"
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                      placeholder="Quel problème votre projet résout-il ? Quelle est sa valeur ajoutée ?"
                    />
                    
                    <textarea
                      name="features"
                      id="features"
                      rows={3}
                      value={formData.features}
                      onChange={handleChange}
                      className="block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                      placeholder="Quelles sont les fonctionnalités principales que vous souhaitez inclure ?"
                    />
                    
                    <textarea
                      name="targetAudience"
                      id="targetAudience"
                      rows={2}
                      value={formData.targetAudience}
                      onChange={handleChange}
                      className="block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                      placeholder="Qui sont les utilisateurs cibles de votre projet ?"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 flex items-center">
                      Délai souhaité
                      <span className="ml-2 text-gray-500 hover:text-gray-300 cursor-help group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="hidden group-hover:block absolute z-10 w-64 p-2 mt-2 text-sm text-gray-300 bg-gray-800 rounded-lg shadow-lg">
                          Ce délai est indicatif et pourra être ajusté selon la complexité du projet.
                        </span>
                      </span>
                    </label>
                    <select
                      name="timeline"
                      id="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                    >
                      <option value="7">7 jours - MVP rapide</option>
                      <option value="14">14 jours - Version standard</option>
                      <option value="30">30 jours - Version complète</option>
                      <option value="custom">Délai personnalisé</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 flex items-center">
                      Budget estimé (€)
                      <span className="ml-2 text-gray-500 hover:text-gray-300 cursor-help group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="hidden group-hover:block absolute z-10 w-64 p-2 mt-2 text-sm text-gray-300 bg-gray-800 rounded-lg shadow-lg">
                          Donnez une estimation de votre budget. Nous pourrons discuter des options adaptées à vos moyens.
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="budget"
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                      placeholder="ex: 5000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center justify-between mt-8 mb-4">
              <div className="flex items-center space-x-2">
                {[1, 2].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`w-3 h-3 rounded-full ${
                      stepNumber <= step ? 'bg-secondary' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                Étape {step} sur {totalSteps}
              </span>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <HiOutlineSparkles className="text-accent w-6 h-6" />
                <h2 className="text-xl font-semibold text-white">Vos informations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 px-4 py-3"
                    placeholder="Company SAS"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-secondary to-accent hover:from-secondary/80 hover:to-accent/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all duration-300 transform hover:scale-[1.02]"
              >
                <HiOutlineCheck className="w-5 h-5 mr-2" />
                Lancer mon projet
              </button>
            </div>
          </form>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <HiOutlineLightningBolt className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-white">Rapide</h3>
            <p className="mt-2 text-gray-400">Votre POC livré en 7 jours</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <HiOutlineSparkles className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-white">Professionnel</h3>
            <p className="mt-2 text-gray-400">Un rendu de qualité</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <HiOutlineCheck className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-white">Clé en main</h3>
            <p className="mt-2 text-gray-400">Prêt à être utilisé</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;
