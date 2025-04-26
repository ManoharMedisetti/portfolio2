import React, { useEffect, useRef } from 'react';
import { Code, Palette, Film } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = scrollY - sectionTop;
      
      if (scrollY >= sectionTop - window.innerHeight && scrollY <= sectionTop + sectionHeight) {
        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-purple-600 dark:text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <img 
              ref={imageRef}
              src="https://res.cloudinary.com/dy1txrjmy/image/upload/v1745653839/shadow-api-is-the-leading-api-security-threat-with-over-5-billion-attacks-says-api-protection-report_1500_xc2sdd.jpg" 
              alt="Portrait" 
              className="relative z-10 rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 w-full"
            />
          </div>
          
          {/* Content Column */}
          <div ref={contentRef}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Passionate Frontend Developer and Digital Creative
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a dedicated digital professional with a strong foundation in UI/UX design, frontend development, and content creation. With hands-on experience in technologies like the MERN stack, and a keen eye for visual design and user experience, I aim to build digital solutions that are not only functional but also engaging and impactful.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Driven by a passion for technology and creativity, I focus on delivering user-centered designs and seamless interfaces. My diverse skill set enables me to contribute effectively to building modern, responsive, and visually appealing web applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Code className="text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-200">MERN Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-200">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Film className="text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-200">Video Editing</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all transform hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
