import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import EyeOfHorus from './EyeOfHorus';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = container.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      mouseRef.current = { x, y };
      
      container.style.setProperty('--mouse-x', `${x * 100}%`);
      container.style.setProperty('--mouse-y', `${y * 100}%`);

      const rays = container.querySelector('.light-rays') as HTMLElement;
      if (rays) {
        const translateX = (x - 0.5) * 20;
        const translateY = (y - 0.5) * 20;
        rays.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${x * 360}deg)`;
      }

      const pyramid = container.querySelector('.pyramid-silhouette') as HTMLElement;
      if (pyramid) {
        const moveX = (0.5 - x) * 20;
        const moveY = (0.5 - y) * 10;
        pyramid.style.transform = `translate(${moveX}px, ${moveY}px) translateZ(-10px)`;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      <div className="stars-container"></div>
      <div className="hieroglyphs-overlay"></div>
      <div className="light-rays"></div>
      <div className="mystical-fog"></div>
      <div className="pyramid-silhouette"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <EyeOfHorus size="lg" className="mx-auto animate-float" />
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gold-text-glow tracking-wide"
        >
          ATRAVESSE O PORTAL
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-gold-light max-w-3xl mb-12"
        >
          Entenda as Leis e Transforme a sua Realidade
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl mx-auto mb-12 relative aspect-video golden-border rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isVideoReady ? 1 : 0, 
            scale: isVideoReady ? 1 : 0.95 
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-space-black/50 backdrop-blur-sm -z-10"></div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=9K4aseXKIXc"
            width="100%"
            height="100%"
            playing={false}
            controls={true}
            light={true}
            onReady={() => setIsVideoReady(true)}
            className="absolute inset-0"
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  rel: 0
                }
              }
            }}
          />
        </motion.div>
        
        <motion.button
          variants={itemVariants}
          className="mystical-button px-10 py-4 rounded-sm text-space-black font-cinzel text-lg tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          INICIAR
        </motion.button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-gold-light text-sm mb-2">Descubra mais</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;