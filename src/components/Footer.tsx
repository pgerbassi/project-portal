import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import EyeOfHorus from './EyeOfHorus';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#', label: 'Facebook' },
    { icon: <Instagram size={20} />, url: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
    { icon: <Youtube size={20} />, url: '#', label: 'YouTube' }
  ];
  
  const links = [
    { name: 'Sobre', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'FAQ', url: '#' },
    { name: 'Contato', url: '#' },
    { name: 'Termos', url: '#' },
    { name: 'Privacidade', url: '#' }
  ];

  return (
    <footer className="section-transition bg-mystic-900 py-16 px-4 relative z-10">
      <div className="section-wave section-wave-top"></div>
      <div className="section-overlay"></div>
      <div className="sacred-geometry"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <EyeOfHorus size="sm" className="mr-3" />
              <h3 className="font-cinzel text-xl text-gold">O PORTAL</h3>
            </div>
            <p className="text-mystic-100 text-sm mb-4">
              Despertar a consciência interior através de sabedoria antiga e práticas transformadoras.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-gold border-opacity-50 flex items-center justify-center text-gold hover:bg-gold hover:bg-opacity-10 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-cinzel text-gold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-mystic-100 hover:text-gold transition-colors duration-300 animated-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-cinzel text-gold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={16} className="text-gold mt-1 mr-2" />
                <span className="text-mystic-100">contato@oportal.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="text-gold mt-1 mr-2" />
                <span className="text-mystic-100">(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-gold mt-1 mr-2" />
                <span className="text-mystic-100">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-cinzel text-gold mb-4">Newsletter</h4>
            <p className="text-mystic-100 text-sm mb-4">
              Receba novidades e conteúdos exclusivos sobre desenvolvimento espiritual.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-space-black border border-gold border-opacity-50 px-4 py-2 rounded-l-sm text-white placeholder-mystic-300 focus:outline-none focus:border-gold flex-grow"
              />
              <button className="mystical-button px-4 py-2 rounded-r-sm">
                Enviar
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold border-opacity-20 pt-6 text-center">
          <p className="text-mystic-200 text-sm">
            &copy; {currentYear} O Portal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;