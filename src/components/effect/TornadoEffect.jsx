import { motion } from "framer-motion";

const TornadoEffect = ({ tornadoCount = 3 }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Fond de ciel clair avec nuages */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 opacity-30" />
      
      {/* Nuages de fond */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-16 bg-white/40 rounded-full blur-sm"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-20 right-20 w-24 h-12 bg-white/30 rounded-full blur-sm"
        animate={{
          x: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Tornades multiples */}
      {Array.from({ length: tornadoCount }).map((_, index) => (
        <div key={index} className="absolute inset-0">
          {/* Corps principal de la tornade */}
          <motion.div
            className="absolute left-1/2 top-0 w-2 h-full bg-gradient-to-b from-gray-800 via-gray-600 to-transparent rounded-full"
            style={{
              left: `${20 + index * 30}%`,
              transform: "translateX(-50%)",
            }}
            animate={{
              rotate: [0, 360],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Spirales de la tornade */}
          {Array.from({ length: 8 }).map((_, spiralIndex) => (
            <motion.div
              key={spiralIndex}
              className="absolute w-1 h-8 bg-gray-700 rounded-full"
              style={{
                left: `${20 + index * 30}%`,
                top: `${spiralIndex * 12}%`,
                transform: "translateX(-50%)",
              }}
              animate={{
                rotate: [0, 360],
                x: [0, 20, -20, 0],
                y: [0, -10, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + spiralIndex * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            />
          ))}
          
          {/* Base de la tornade (effet de poussière) */}
          <motion.div
            className="absolute w-16 h-16 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full blur-sm"
            style={{
              left: `${20 + index * 30}%`,
              bottom: "10%",
              transform: "translateX(-50%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}
      
      {/* Particules de débris */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`debris-${index}`}
          className="absolute w-1 h-1 bg-gray-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Effet de vent/brume */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default TornadoEffect; 