import React, { useEffect, useRef } from 'react';

interface SandTunnelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SandTunnel: React.FC<SandTunnelProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const particles = particlesRef.current;
    if (!container || !particles) return;

    // Delay the start of the animation
    const timer = setTimeout(() => {
      container.classList.add('active');
      
      // Create sand particles
      const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'sand-particle';
        
        // Random starting position
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        // Random ending position
        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;
        
        particle.style.setProperty('--startX', `${startX}px`);
        particle.style.setProperty('--startY', `${startY}px`);
        particle.style.setProperty('--endX', `${endX}px`);
        particle.style.setProperty('--endY', `${endY}px`);
        
        particle.style.animation = `particleFloat ${1 + Math.random()}s linear forwards`;
        particle.style.left = '0';
        particle.style.top = '0';
        
        particles.appendChild(particle);
        
        // Remove particle after animation
        particle.addEventListener('animationend', () => {
          particle.remove();
        });
      };

      // Create multiple particles
      let particleCount = 0;
      const maxParticles = 100;
      
      const particleInterval = setInterval(() => {
        if (particleCount >= maxParticles) {
          clearInterval(particleInterval);
          return;
        }
        createParticle();
        particleCount++;
      }, 20);

      // Activate content with delay
      setTimeout(() => {
        container.querySelectorAll('.sand-tunnel-content').forEach(el => {
          el.classList.add('active');
        });
        
        container.querySelectorAll('.sand-tunnel-image').forEach(el => {
          el.classList.add('active');
        });
      }, 2000);

      return () => {
        clearInterval(particleInterval);
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={containerRef} className={`sand-tunnel-transition ${className}`}>
      <div ref={particlesRef} className="sand-particle-container" />
      {children}
    </div>
  );
};

export default SandTunnel;