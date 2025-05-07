import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: "Quanto tempo preciso dedicar aos estudos?",
      answer: "Recomendamos dedicar pelo menos 1 hora por dia aos estudos e práticas. O programa é estruturado para ser completado em 7 semanas, mas você pode adaptar o ritmo às suas necessidades."
    },
    {
      question: "Preciso ter experiência prévia com práticas espirituais?",
      answer: "Não, O Portal foi desenvolvido para acolher tanto iniciantes quanto praticantes experientes. O conteúdo é apresentado de forma progressiva, permitindo que cada um evolua no seu próprio ritmo."
    },
    {
      question: "O acesso ao conteúdo tem prazo de expiração?",
      answer: "Não, uma vez que você adquire O Portal, tem acesso vitalício a todo o conteúdo, incluindo atualizações futuras e material complementar."
    },
    {
      question: "Existe suporte durante o programa?",
      answer: "Sim, oferecemos suporte completo através de nossa comunidade exclusiva, onde você pode interagir com outros alunos e receber orientação direta do Vitor Piana."
    },
    {
      question: "Como posso acessar o conteúdo?",
      answer: "Todo o conteúdo está disponível em nossa plataforma online, que pode ser acessada de qualquer dispositivo com conexão à internet. Também oferecemos um aplicativo dedicado para iOS e Android."
    }
  ];

  return (
    <section className="section-transition py-32 px-4 relative z-10">
      <div className="section-wave section-wave-top"></div>
      <div className="section-overlay"></div>
      <div className="sacred-geometry"></div>
      <div className="mystical-fog"></div>
      
      <div className="container mx-auto max-w-4xl relative">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          PERGUNTAS FREQUENTES
        </motion.h2>
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="golden-border rounded-lg overflow-hidden bg-space-black bg-opacity-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-cinzel text-gold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gold" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 border-t border-gold border-opacity-20 text-mystic-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="section-wave section-wave-bottom"></div>
    </section>
  );
};

export default FAQSection;