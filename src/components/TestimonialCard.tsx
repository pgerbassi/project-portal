import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  profession: string;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  profession, 
  imageUrl = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' 
}) => {
  return (
    <div className="golden-border bg-space-black bg-opacity-70 rounded-lg p-6 md:p-8 flex flex-col h-full">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold mr-4">
          <img 
            src={imageUrl} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-cinzel text-gold text-lg">{author}</h4>
          <p className="text-mystic-200 text-sm">{profession}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <svg className="text-gold w-8 h-8 mb-2 opacity-50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
        </svg>
        
        <p className="text-mystic-100 italic leading-relaxed">{quote}</p>
      </div>
      
      <motion.div 
        className="mt-auto flex justify-end"
        animate={{ 
          opacity: [0.5, 1, 0.5] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <svg className="w-12 h-12 text-gold opacity-20" viewBox="0 0 120 120" fill="currentColor">
          <path d="M60 10L77.32 40.49L110 46.46L85 70.87L91.64 110L60 91.49L28.36 110L35 70.87L10 46.46L42.68 40.49L60 10Z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default TestimonialCard;