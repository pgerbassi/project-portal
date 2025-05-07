import React from 'react';
import { motion } from 'framer-motion';

interface EyeOfHorusProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const EyeOfHorus: React.FC<EyeOfHorusProps> = ({ 
  className = '', 
  size = 'md',
  animate = true 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  const eyeVariants = {
    blink: {
      scaleY: [1, 0.1, 1],
      transition: {
        duration: 0.3,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 5
      }
    },
    normal: {
      scaleY: 1
    }
  };

  const glowVariants = {
    glow: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <motion.div
        variants={glowVariants}
        animate={animate ? "glow" : "normal"}
        className="absolute inset-0 rounded-full bg-gold opacity-20 blur-md"
      />
      <motion.svg
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <motion.g
          initial={false}
          variants={eyeVariants}
          animate={animate ? "blink" : "normal"}
        >
          {/* Eye outline */}
          <path d="M50 5C25 5 5 30 5 30S25 55 50 55 95 30 95 30 75 5 50 5Z" stroke="#D4AF37" strokeWidth="2" />
          
          {/* Eyebrow curve */}
          <path d="M15 25C25 15 40 10 50 10 60 10 75 15 85 25" stroke="#D4AF37" strokeWidth="2" />
          
          {/* Lower eye curve */}
          <path d="M15 35C25 45 40 50 50 50 60 50 75 45 85 35" stroke="#D4AF37" strokeWidth="2" />
          
          {/* Iris */}
          <circle cx="50" cy="30" r="10" stroke="#D4AF37" strokeWidth="2" />
          
          {/* Pupil */}
          <circle cx="50" cy="30" r="5" fill="#D4AF37" />
          
          {/* Teardrop line */}
          <path d="M50 40V55" stroke="#D4AF37" strokeWidth="2" />
          
          {/* Teardrop */}
          <path d="M50 55L45 60H55L50 55Z" stroke="#D4AF37" strokeWidth="2" fill="#D4AF37" />
          
          {/* Decorative lines */}
          <path d="M45 40L30 50" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M55 40L70 50" stroke="#D4AF37" strokeWidth="1.5" />
        </motion.g>
        
        {/* Rays of light */}
        <motion.g 
          animate={animate ? {
            opacity: [0.7, 1, 0.7],
            scale: [0.98, 1, 0.98],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="0"
              x2="50"
              y2="5"
              stroke="#D4AF37"
              strokeWidth="1"
              transform={`rotate(${i * 30} 50 0)`}
            />
          ))}
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default EyeOfHorus;