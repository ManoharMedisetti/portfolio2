import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = sectionRef.current;
      
      if (section) {
        const overlay = section.querySelector('.overlay') as HTMLElement;
        const content = section.querySelector('.content') as HTMLElement;
        const arrow = section.querySelector('.scroll-arrow') as HTMLElement;
        
        if (overlay && content && arrow) {
          // Parallax effect for background overlay
          overlay.style.transform = `translateY(${scrollY * 0.5}px)`;
          
          // Fade out content as user scrolls
          content.style.opacity = `${1 - scrollY * 0.003}`;
          content.style.transform = `translateY(${scrollY * 0.2}px)`;
          
          // Fade out arrow
          arrow.style.opacity = `${1 - scrollY * 0.006}`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dy1txrjmy/image/upload/v1745635715/manohar_mfcxdw.png')",
        }}
      ></div>
      
      {/* Overlay with gradient */}
      <div className="overlay absolute inset-0 bg-gradient-to-b from-purple-900/80 to-black/90"></div>
      
      {/* Content */}
      <div className="content relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          <span className="animate-slide-down inline-block">Hi, I'm </span>
          <span className="text-purple-400 animate-slide-up inline-block">MANOHAR</span>
        </h1>
        
        <div className="overflow-hidden h-12 my-4">
          <ul className="animate-text-slide text-2xl md:text-3xl text-white font-medium">
            <li className="py-2">UI/UX </li>
            <li className="py-2">Video Editor</li>
            <li className="py-2">Meme Creator</li>
            <li className="py-2">MERN Developer</li>
            <li className="py-2">UI/UX Designer</li> {/* Repeated for continuous animation */}
          </ul>
        </div>
        
        <p className="text-xl text-gray-300 mt-6 mb-8 max-w-2xl mx-auto animate-fade-in">
          Creating digital experiences that blend creativity with functionality. 
          I turn ideas into engaging, meme-worthy realities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all transform hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 hover:text-white hover:bg-purple-500 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll down arrow */}
      <div className="scroll-arrow absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDownCircle size={36} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;