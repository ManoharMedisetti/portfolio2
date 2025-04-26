import React, { useState } from 'react';
import { Code, Palette, Film, Smile, ChevronRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServicesSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const services: Service[] = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Creating intuitive interfaces and user experiences that engage and delight. From wireframes to high-fidelity prototypes, I ensure beautiful, functional designs.',
      icon: <Palette size={40} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'MERN Development',
      description: 'Full-stack development using MongoDB, Express, React, and Node.js. Building scalable and responsive web applications with modern best practices.',
      icon: <Code size={40} />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Video Editing',
      description: 'Professional video editing and post-production services. From color grading to motion graphics, I bring your story to life with dynamic visuals.',
      icon: <Film size={40} />,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Meme Marketing',
      description: 'Leveraging humor and cultural relevance to create shareable content that connects with audiences. Innovative meme strategies that boost engagement.',
      icon: <Smile size={40} />,
      color: 'from-orange-500 to-red-500'
    }
  ];
  
  return (
    <section 
      id="services" 
      className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 relative"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-gray-800 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-purple-600 dark:text-purple-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mt-4"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I offer a diverse range of creative and technical services to help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-white dark:bg-gray-750 rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                borderRadius: '16px',
                boxShadow: hoveredService === service.id 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              {/* Service content */}
              <div className="p-8">
                <div 
                  className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${service.color} text-white transform transition-all duration-500 ${
                    hoveredService === service.id ? 'scale-110' : ''
                  }`}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium transition-all hover:text-purple-700 dark:hover:text-purple-300"
                >
                  Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;