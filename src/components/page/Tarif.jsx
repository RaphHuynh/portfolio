import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaCode, FaPalette, FaGlobe, FaCog, FaPause, FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

export default Tarif;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Tarif() {
  const services = [
    {
      id: "Site Portfolio",
      price: "300€",
      description: "Portfolio professionnel personnalisé avec design moderne et responsive",
      icon: <FaPalette className="w-6 h-6" />,
      features: ["Design personnalisé", "Responsive", "SEO optimisé", "Formulaire de contact"],
      available: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "Site Vitrine",
      price: "500€",
      description: "Site vitrine pour entreprise avec gestion de contenu",
      icon: <FaGlobe className="w-6 h-6" />,
      features: ["Design professionnel", "Gestion de contenu", "Optimisation SEO", "Support technique"],
      available: false,
      color: "from-green-500 to-green-600"
    },
    {
      id: "Développement Web",
      price: "300€/jour",
      description: "Développement sur mesure d'applications web complexes",
      icon: <FaCode className="w-6 h-6" />,
      features: ["Architecture sur mesure", "Base de données", "API REST", "Tests automatisés"],
      available: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      id: "Data Science",
      price: "Sur devis",
      description: "Solutions d'intelligence artificielle et d'analyse de données",
      icon: <FaCog className="w-6 h-6" />,
      features: ["Machine Learning", "Analyse de données", "Visualisation", "Déploiement"],
      available: false,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      value: "raphaelle.huynh@example.com",
      link: "mailto:raphaelle.huynh@example.com"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      label: "Localisation",
      value: "Reims, France",
      link: null
    }
  ];

  return (
    <section className="section-padding gradient-bg" id="Tarifs">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Services & <span className="gradient-text">Tarifs</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Actuellement, je ne suis pas disponible pour des missions freelance car je me concentre sur mes études 
            et mon alternance en data science. Cependant, n'hésitez pas à me contacter pour échanger sur vos projets futurs.
          </motion.p>
        </motion.div>

        {/* Statut de disponibilité */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="card p-10 text-center max-w-3xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-700">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <FaPause className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Actuellement indisponible
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Je me concentre actuellement sur mes études en Master Informatique et mon alternance en Data Science. 
              Je ne prends pas de nouvelles missions freelance pour le moment.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-lg font-semibold shadow-lg">
              <FaClock className="w-5 h-5 mr-3" />
              Reprise prévue en 2026
            </div>
          </div>
        </motion.div>

        {/* Services (pour référence future) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card p-8 text-center transition-all duration-500 opacity-60 hover:opacity-80"
              whileHover={{ y: -5 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-400 dark:text-gray-500 mb-3">
                {service.id}
              </h3>
              
              <div className="text-3xl font-bold text-gray-400 dark:text-gray-500 mb-4">
                {service.price}
              </div>
              
              <p className="text-gray-400 dark:text-gray-500 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 text-left">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-400 dark:text-gray-500">
                    <FaCheckCircle className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Informations de contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              Contactez-moi
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Même si je ne suis pas disponible pour des missions freelance actuellement, 
              n'hésitez pas à me contacter pour échanger sur vos projets futurs ou pour discuter 
              de collaborations potentielles.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-semibold"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 dark:text-white font-semibold">
                        {info.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div variants={fadeInUp} className="card p-8">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaEnvelope className="w-5 h-5 text-blue-500 mr-2" />
              Envoyez-moi un message
            </h4>
            
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Votre projet"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Décrivez votre projet..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}