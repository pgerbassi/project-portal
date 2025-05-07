import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { ShieldCheck, Award, ZapIcon } from 'lucide-react';

const OfferSection: React.FC = () => {
  // Set target date to 7 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  
  const guarantees = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: "Garantia de 7 Dias",
      description: "Experimente o primeiro módulo sem compromisso"
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "Acesso Vitalício",
      description: "Conteúdo disponível para sempre"
    },
    {
      icon: <ZapIcon className="w-6 h-6 text-gold" />,
      title: "Suporte Exclusivo",
      description: "Acompanhamento direto com o mentor"
    }
  ];

  return (
    <section className="section-transition py-32 px-4 relative z-10">
      <div className="section-wave section-wave-top"></div>
      <div className="section-overlay"></div>
      <div className="sacred-geometry"></div>
      <div className="mystical-fog"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">INICIE SUA JORNADA</h2>
          <p className="text-mystic-100 max-w-2xl mx-auto">
            Uma oportunidade única para despertar seu potencial interior e transformar 
            sua realidade através de conhecimentos ancestrais.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto golden-border rounded-lg bg-space-black bg-opacity-70 p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="#D4AF37" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="#D4AF37" strokeWidth="0.5" />
              <path d="M50 10L90 50L50 90L10 50L50 10Z" stroke="#D4AF37" strokeWidth="0.5" />
              <path d="M30 30L70 30L70 70L30 70L30 30Z" stroke="#D4AF37" strokeWidth="0.5" />
            </svg>
          </div>
          
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-cinzel text-gold mb-2">
              Oferta Especial por Tempo Limitado
            </h3>
            <div className="flex justify-center items-baseline gap-4 mb-6">
              <span className="text-mystic-200 text-lg line-through">R$ 1.997,00</span>
              <span className="text-4xl font-cinzel text-gold">R$ 997,00</span>
            </div>
            <p className="text-mystic-100 mb-4">
              ou 12x de R$ 97,00 sem juros
            </p>
            
            <p className="text-mystic-200 mb-6">
              Esta oferta expira em:
            </p>
            
            <CountdownTimer targetDate={targetDate} className="mb-8" />
            
            <motion.button
              className="mystical-button px-10 py-4 rounded-sm text-space-black font-cinzel font-bold text-lg tracking-wider w-full max-w-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              GARANTIR MINHA VAGA AGORA
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="mb-3">
                  {guarantee.icon}
                </div>
                <h4 className="font-cinzel text-gold text-lg mb-1">{guarantee.title}</h4>
                <p className="text-sm text-mystic-100">{guarantee.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center text-sm text-mystic-200">
            <p>Pagamento 100% seguro via cartão de crédito, boleto ou Pix</p>
          </div>
        </motion.div>
      </div>
      
      <div className="section-wave section-wave-bottom"></div>
    </section>
  );
};

export default OfferSection;