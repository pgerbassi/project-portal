import React from 'react';
import { motion } from 'framer-motion';
import { XIcon as Icon } from 'lucide-react';

interface MysticIconProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const MysticIcon: React.FC<MysticIconProps> = ({ icon: IconComponent, title, description }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-6 golden-border rounded-md bg-space-black bg-opacity-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-24 h-24 flex items-center justify-center mb-6 relative">
        <motion.div 
          className="absolute inset-0 rounded-full bg-gold opacity-10 blur-lg"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <IconComponent className="w-16 h-16 text-gold" />
      </div>
      
      <h3 className="text-2xl font-cinzel text-gold mb-3">{title}</h3>
      
      <p className="text-center text-mystic-100 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default MysticIcon;