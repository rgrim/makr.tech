// components/DynamicBackground.tsx
'use client';

import { useEffect } from 'react';

const DynamicBackground = () => {
  // Le hook useEffect avec un tableau de dépendances vide [] 
  // s'exécute une seule fois, après le premier rendu du composant.
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;

    const colors = ['#0D4F8B', '#D84315', '#7A8450', '#F4A259', '#6A4C93', '#2A9D8F'];

    // On vérifie si les particules existent déjà pour éviter de les dupliquer
    // lors des re-render en mode développement.
    if (particlesContainer.childElementCount > 0) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle'; // On utilise la classe globale

      const size = Math.random() * 6 + 3;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.background = color;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;

      particlesContainer.appendChild(particle);
    };

    for (let i = 0; i < 30; i++) {
      createParticle();
    }
  }, []); // Le tableau vide [] est crucial !

  return (
    <>
      {/* Les particules seront injectées ici par le script */}
      <div id="particles-container" className="particles"></div>

      {/* Les formes inspirées de Gaudi */}
      <div className="gaudi-background">
        <div className="gaudi-curve gaudi-curve-1"></div>
        <div className="gaudi-curve gaudi-curve-2"></div>
        <div className="gaudi-curve gaudi-curve-3"></div>
      </div>
    </>
  );
};

export default DynamicBackground;