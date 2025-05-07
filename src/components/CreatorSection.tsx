import { motion } from 'framer-motion';
import { Book, Scroll, Star, Users } from 'lucide-react';
import React from 'react';

const CreatorSection: React.FC = () => {
  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "100+",
      label: "Alunos"
    },
    {
      icon: <Book className="w-6 h-6" />,
      value: "10+",
      label: "Anos de Estudo"
    },
    {
      icon: <Scroll className="w-6 h-6" />,
      value: "7",
      label: "Cursos Publicados"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "10+",
      label: "Workshops"
    }
  ];

  return (
    <section className="section-transition py-32 px-4 relative z-10">
      <div className="section-wave section-wave-top"></div>
      <div className="section-overlay"></div>
      <div className="sacred-geometry"></div>
      <div className="mystical-fog"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden golden-border">
              <img 
                src="https://i.ibb.co/JLVsGXn/Whats-App-Image-2025-04-24-at-10-51-13.jpg"
                alt="Vitor Piana"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent z-10"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 golden-border rounded-lg bg-space-black bg-opacity-50"
                >
                  <div className="text-gold mb-2">{achievement.icon}</div>
                  <div className="font-cinzel text-2xl text-gold mb-1">{achievement.value}</div>
                  <div className="text-sm text-mystic-100">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left">VITOR PIANA</h2>
            <h3 className="text-gold-light text-xl mb-6">Mestre em Sabedoria Ancestral</h3>
            
            <div className="space-y-6 text-mystic-100">
              <p>
                Com mais de 15 anos dedicados ao estudo das tradições místicas do Antigo Egito, 
                Vitor Piana desenvolveu O Portal como uma ponte entre a sabedoria ancestral e o 
                mundo moderno.
              </p>
              
              <p>
                Sua jornada o levou a explorar os mais profundos mistérios dos templos egípcios, 
                onde descobriu técnicas transformadoras que agora compartilha com seus alunos.
              </p>
              
              <p>
                Através de uma metodologia única que combina conhecimento ancestral com práticas 
                contemporâneas, Vitor guia seus alunos em uma jornada de autodescoberta e 
                transformação interior.
              </p>
            </div>
            
            <motion.button
              className="mystical-button px-8 py-3 rounded-sm text-space-black font-cinzel mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              CONHEÇA MINHA HISTÓRIA
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <div className="section-wave section-wave-bottom"></div>
    </section>
  );
};

export default CreatorSection;