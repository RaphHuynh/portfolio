import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default NavReseaux;

function NavReseaux(props) {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: props.linkedln.content,
      icon: <FaLinkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: props.github.content,
      icon: <FaGithub className="w-5 h-5" />,
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'Email',
      url: 'mailto:raphaelle.huynh@example.com',
      icon: <FaEnvelope className="w-5 h-5" />,
      color: 'hover:text-red-600'
    }
  ];

  return (
    <motion.div 
      className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Ligne verticale */}
        <div className="w-px h-32 bg-gradient-to-b from-primary-500 to-transparent"></div>
        
        {/* Liens sociaux */}
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl transition-all duration-300 text-secondary-600 dark:text-secondary-400 ${link.color} border border-secondary-200 dark:border-secondary-700`}
            whileHover={{ 
              scale: 1.1,
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            aria-label={link.name}
          >
            {link.icon}
          </motion.a>
        ))}
        
        {/* Ligne verticale */}
        <div className="w-px h-32 bg-gradient-to-t from-primary-500 to-transparent"></div>
      </div>
    </motion.div>
  );
}