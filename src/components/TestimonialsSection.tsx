import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "O Portal me proporcionou uma experiência transcendental indescritível. Minha percepção da realidade mudou completamente após o terceiro módulo.",
      author: "Maria Silva",
      profession: "Terapeuta Holística",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Nunca imaginei que práticas tão antigas pudessem ter um impacto tão profundo em minha vida moderna. Sou uma pessoa completamente diferente agora.",
      author: "João Pereira",
      profession: "Empresário",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Participar do Portal foi a decisão mais transformadora que já tomei. As técnicas que aprendi me permitiram acessar estados de consciência que nunca imaginei possíveis.",
      author: "Ana Rodrigues",
      profession: "Artista Visual",
      imageUrl: "https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Estava cético no início, mas as práticas do Portal são surpreendentemente eficazes. Minha vida mudou completamente em apenas algumas semanas.",
      author: "Paulo Mendes",
      profession: "Professor",
      imageUrl: "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const swiperRef = useRef(null);

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
          <h2 className="section-title">EXPERIÊNCIAS TRANSFORMADORAS</h2>
          <p className="text-mystic-100 max-w-2xl mx-auto">
            Ouça os relatos daqueles que já atravessaram O Portal e experimentaram 
            uma transformação profunda em suas vidas.
          </p>
        </motion.div>
        
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  profession={testimonial.profession}
                  imageUrl={testimonial.imageUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-space-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-space-black to-transparent z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="section-wave section-wave-bottom"></div>
    </section>
  );
};

export default TestimonialsSection;