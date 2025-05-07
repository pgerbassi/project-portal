import { motion } from 'framer-motion';
import {
  Brain,
  Crown,
  Flame,
  Heart,
  Moon,
  Mountain,
  Scale,
  Sparkles,
  Sword,
  TreePine
} from 'lucide-react';
import React from 'react';
import PortalCard from './PortalCard';

const PortalsSection: React.FC = () => {
  const sephirot = [
    {
      number: "כתר",
      title: "Kether",
      description: "A Coroa Suprema - O início de toda manifestação e a fonte primordial da criação.",
      symbol: <Crown className="w-full h-full" />,
      position: "col-start-2 row-start-1",
      color: "from-white/90 to-white/50"
    },
    {
      number: "חכמה",
      title: "Chokmah",
      description: "A Sabedoria Divina - A força criativa masculina e a inspiração espiritual.",
      symbol: <Brain className="w-full h-full" />,
      position: "col-start-1 row-start-2",
      color: "from-blue-500/90 to-blue-500/50"
    },
    {
      number: "בינה",
      title: "Binah",
      description: "O Entendimento - A força receptiva feminina e a compreensão profunda.",
      symbol: <Sparkles className="w-full h-full" />,
      position: "col-start-3 row-start-2",
      color: "from-yellow-500/90 to-yellow-500/50"
    },
    {
      number: "חסד",
      title: "Chesed",
      description: "A Misericórdia - O amor incondicional e a bondade divina.",
      symbol: <Heart className="w-full h-full" />,
      position: "col-start-1 row-start-3",
      color: "from-yellow-200/90 to-yellow-200/50"
    },
    {
      number: "גבורה",
      title: "Geburah",
      description: "O Poder - A força, a justiça e a disciplina espiritual.",
      symbol: <Sword className="w-full h-full" />,
      position: "col-start-3 row-start-3",
      color: "from-blue-400/90 to-blue-400/50"
    },
    {
      number: "תפארת",
      title: "Tiphereth",
      description: "A Beleza - O equilíbrio harmônico e a consciência crística.",
      symbol: <Scale className="w-full h-full" />,
      position: "col-start-2 row-start-4",
      color: "from-green-500/90 to-green-500/50"
    },
    {
      number: "נצח",
      title: "Netzach",
      description: "A Vitória - As emoções refinadas e a expressão artística.",
      symbol: <Flame className="w-full h-full" />,
      position: "col-start-1 row-start-5",
      color: "from-orange-500/90 to-orange-500/50"
    },
    {
      number: "הוד",
      title: "Hod",
      description: "A Glória - O intelecto e a comunicação com o divino.",
      symbol: <Moon className="w-full h-full" />,
      position: "col-start-3 row-start-5",
      color: "from-purple-500/90 to-purple-500/50"
    },
    {
      number: "יסוד",
      title: "Yesod",
      description: "O Fundamento - A base espiritual e o poder da manifestação.",
      symbol: <Mountain className="w-full h-full" />,
      position: "col-start-2 row-start-6",
      color: "from-indigo-500/90 to-indigo-500/50"
    },
    {
      number: "מלכות",
      title: "Malkuth",
      description: "O Reino - A manifestação material e a realização espiritual.",
      symbol: <TreePine className="w-full h-full" />,
      position: "col-start-2 row-start-7",
      color: "from-amber-700/90 to-amber-700/50"
    }
  ];

  return (
    <section className="section-transition py-32 px-4 relative z-10">
      <div className="section-wave section-wave-top"></div>
      <div className="section-overlay"></div>
      <div className="sacred-geometry"></div>
      <div className="mystical-fog"></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">A ÁRVORE DA VIDA</h2>
          <p className="text-mystic-100 max-w-2xl mx-auto">
            Explore os dez Sephirot da Árvore da Vida cabalística, cada um representando 
            um aspecto divino da criação e um caminho para a iluminação espiritual.
          </p>
        </motion.div>
        
        <div className="relative py-12">
          {/* Tree of Life Paths */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 140" preserveAspectRatio="none">
              {/* Vertical Paths */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                d="M50 10 L50 130"
                stroke="url(#goldGradient)"
                strokeWidth="0.5"
                fill="none"
              />
              
              {/* Diagonal and Horizontal Paths */}
              {[
                "M30 30 L70 30", // Top horizontal
                "M30 60 L70 60", // Middle horizontal
                "M30 90 L70 90", // Bottom horizontal
                "M30 30 L70 90", // Right diagonal
                "M70 30 L30 90", // Left diagonal
                "M50 10 L30 30", // Top left
                "M50 10 L70 30", // Top right
                "M30 90 L50 130", // Bottom left
                "M70 90 L50 130", // Bottom right
              ].map((d, i) => (
                <motion.path
                  key={i}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 * i }}
                  d={d}
                  stroke="url(#goldGradient)"
                  opacity={0.7}
                  strokeWidth="0.5"
                  fill="none"
                />
              ))}
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(212,175,55,0.1)" />
                  <stop offset="50%" stopColor="rgba(212,175,55,0.3)" />
                  <stop offset="100%" stopColor="rgba(212,175,55,0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Sephirot Grid */}
          <div className="grid grid-cols-3 gap-8 relative">
            {sephirot.map((sephirah, index) => (
              <div key={index} className={`${sephirah.position}`}>
                <PortalCard
                  number={sephirah.number}
                  title={sephirah.title}
                  description={sephirah.description}
                  symbol={sephirah.symbol}
                  color={sephirah.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="section-wave section-wave-bottom"></div>
    </section>
  );
};

export default PortalsSection;