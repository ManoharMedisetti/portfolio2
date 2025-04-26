import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              MAN<span className="text-purple-400">OHAR</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating digital experiences that blend creativity with functionality.
              From UI/UX design to full-stack development and video editing.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
              VISAKHAPATNAM
              </li>
              <li>
                <a href="mailto:contact@memerdev.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                medisettimanoharprasad2002@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-purple-400 transition-colors">
                +919381995037
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MANOHAR PRASAD MEDISETTI All rights reserved.
          </p>
          
          <div className="text-gray-500 text-sm">
            Designed and developed with 
            <span className="text-red-500 mx-1">♥</span> 
            by MANOHAR
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;