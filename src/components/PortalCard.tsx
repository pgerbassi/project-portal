import { motion } from 'framer-motion';
import React from 'react';

interface PortalCardProps {
  number: string;
  title: string;
  description: string;
  symbol: React.ReactNode;
  color?: string;
}

const PortalCard: React.FC<PortalCardProps> = ({ 
  number, 
  title, 
  description, 
  symbol,
  color = "from-gold/20 to-gold/5"
}) => {
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-square">
        <div className="w-full h-full relative">
          {/* Circle Background */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-b ${color} golden-border transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]`}>
            <div className='absolute inset-0 bg-black/80'></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center rounded-full">
            <div className="relative z-10 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
              <div className="text-gold-light text-sm font-cinzel mb-2 opacity-75">{number}</div>
              <div className="w-12 h-12 mx-auto mb-3 text-gold transition-transform duration-500 group-hover:scale-110">
                {symbol}
              </div>
              <h3 className="text-lg font-cinzel text-gold mb-1 transition-colors duration-500">
                {title}
              </h3>
            </div>
          </div>

          {/* Hover Description */}
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-48 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <div className="bg-space-black/95 p-3 rounded-lg golden-border text-center">
              <p className="text-sm text-mystic-100">{description}</p>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gold/5 animate-pulse rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortalCard;