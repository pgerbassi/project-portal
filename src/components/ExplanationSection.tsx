import { motion } from 'framer-motion';
import {
  ArrowUpDown,
  Brain,
  Infinity,
  Radio,
  Scale,
  Sparkles,
  Waves
} from 'lucide-react';
import React from 'react';

const ExplanationSection: React.FC = () => {
  const hermeticLaws = [
    {
      title: "Mentalismo",
      principle: "O TODO é Mente; O Universo é Mental.",
      description: "Tudo que existe emerge da mente universal. Pensamentos se manifestam em realidade.",
      icon: Brain,
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      title: "Correspondência",
      principle: "Como acima, assim abaixo; como abaixo, assim acima.",
      description: "O que acontece em um plano reflete em todos os outros planos da existência.",
      icon: Infinity,
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      title: "Vibração",
      principle: "Nada está imóvel; tudo se move; tudo vibra.",
      description: "Toda matéria e pensamento possuem uma frequência vibratória única.",
      icon: Radio,
      color: "from-green-500/20 to-green-500/5"
    },
    {
      title: "Polaridade",
      principle: "Tudo é duplo; tudo tem polos; tudo tem seu oposto.",
      description: "Opostos são idênticos em natureza, mas diferentes em grau.",
      icon: ArrowUpDown,
      color: "from-red-500/20 to-red-500/5"
    },
    {
      title: "Ritmo",
      principle: "Tudo flui, dentro e fora; tudo tem suas marés.",
      description: "Existe um movimento pendular em todas as coisas, um ciclo natural.",
      icon: Waves,
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      title: "Causa e Efeito",
      principle: "Toda causa tem seu efeito; todo efeito tem sua causa.",
      description: "O acaso é apenas uma lei não reconhecida. Tudo acontece de acordo com a Lei Universal.",
      icon: Scale,
      color: "from-amber-500/20 to-amber-500/5"
    },
    {
      title: "Gênero",
      principle: "O Gênero está em tudo; tudo tem seus princípios masculino e feminino.",
      description: "Gênero se manifesta em todos os planos, físico, mental e espiritual.",
      icon: Sparkles,
      color: "from-gold/20 to-gold/5"
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
          <h2 className="section-title">AS LEIS HERMÉTICAS</h2>
          <p className="text-mystic-100 max-w-2xl mx-auto">
            Explore os sete princípios fundamentais do hermetismo, transmitidos através dos 
            tempos desde o antigo Egito. Estas leis universais governam toda manifestação 
            no cosmos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hermeticLaws.map((law, index) => {
            const Icon = law.icon;
            const isLastOdd = (hermeticLaws.length % 3 === 1) && (index === hermeticLaws.length - 1);
            return (
              <motion.div
                key={index}
                className={`group relative ${isLastOdd ? 'lg:col-start-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full golden-border rounded-lg p-6 bg-space-black bg-opacity-50 relative overflow-hidden transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${law.color} opacity-20 transition-opacity duration-500 group-hover:opacity-30`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-gold opacity-10"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: 1,
                            ease: "easeInOut" 
                          }}
                        />
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                    </div>

                    <h3 className="text-xl font-cinzel text-gold text-center mb-3">
                      {law.title}
                    </h3>

                    <p className="text-gold-light text-sm text-center italic mb-4">
                      {law.principle}
                    </p>

                    <p className="text-mystic-100 text-center text-sm">
                      {law.description}
                    </p>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gold/5 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <div className="section-wave section-wave-bottom"></div>
    </section>
  );
};

export default ExplanationSection;