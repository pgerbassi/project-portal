import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CreatorSection from './components/CreatorSection';
import ExplanationSection from './components/ExplanationSection';
import EyeOfHorus from './components/EyeOfHorus';
import FAQSection from './components/FAQSection';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OfferSection';
import PortalsSection from './components/PortalsSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="fixed inset-0 bg-space-black z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.5],
                scale: [0.8, 1, 0.9]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <EyeOfHorus size="lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative overflow-hidden">
        <HeroSection />
        <ExplanationSection />
        <PortalsSection />
        <CreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <OfferSection />
      </div>
    </>
  );
}

export default App;