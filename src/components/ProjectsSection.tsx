import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const projectsData: Project[] = [
    {
      id: 1,
      title: 'Social Media Learning ',
      description: 'A platform for college students to share knowledge, resources, and create subject-specific pages for collaboration.',
      image: 'https://res.cloudinary.com/dy1txrjmy/image/upload/v1745639195/Screenshot_2025-04-26_091306_izexeb.png',
      category: ['development'],
      links: {
        demo: 'https://social-media-gold-iota.vercel.app/LandingPage',
      }
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'Created Eflora, a comprehensive e-commerce platform for plants and gardening accessories, featuring responsive design, secure payments, and efficient inventory management.',
      image: 'https://res.cloudinary.com/dy1txrjmy/image/upload/v1745639195/Screenshot_2025-04-26_091403_uver6p.png',
      category: ['development'],
      links: {
        demo: 'https://e-flora.vercel.app/',
      }
    },
    {
      id: 3,
      title: 'Video Edits',
      description: 'Since 2020, I’ve crafted over 500+ video edits that spark laughter, stir emotions, and bring creativity to life',
      image: 'https://res.cloudinary.com/dy1txrjmy/image/upload/v1745648354/Untitled-1_tniftk.png',
      category: ['video'],
      links: {
        demo: 'https://www.instagram.com/most_entertaining_memes/reels/'
      }
    },
    {
      id: 4,
      title: 'MEMES AND ME',
      description: 'Since 2020, I’ve created 500+ memes and tech promos that entertain, engage, and leave a lasting impact',
      image: 'https://res.cloudinary.com/dy1txrjmy/image/upload/v1745649130/memes_mckmfi.png',
      category: ['meme'],
      links: {
        demo: 'https://www.instagram.com/most_entertaining_memes/reels/'
      }
    }
    ,
    {
      id: 8,
      title: 'FIGMA',
      description: 'Over the past year, Ive explored Figma extensively, crafting a wide range of designs that blend creativity with purpose',
      image: 'https://res.cloudinary.com/dy1txrjmy/image/upload/v1745654886/Screenshot_2025-04-26_133747_ev5t5e.png',
      category: ['design'],
      links: {
        demo: 'https://www.instagram.com/most_entertaining_memes/reels/'
      }
    },
    {
      id: 5,
      title: 'web designer and developer',
      description: 'As a freelance developer at Cezensoftwaresolutions.com, since March 2025, I’ve designed, developed, and deployed over 10 websites',
      image: 'https://res.cloudinary.com/dy1txrjmy/image/upload/v1745649576/Screenshot_2025-04-26_120845_ayayqo.png',
      category: ['design', ],
      links: {
        demo: 'https://cezensoftwaresolutions.com/'
      }
    },
    
  ];
  
  useEffect(() => {
    setProjects(projectsData);
    setVisibleProjects(projectsData);
  }, []);
  
  useEffect(() => {
    const filterProjects = () => {
      setIsAnimating(true);
      
      setTimeout(() => {
        if (activeFilter === 'all') {
          setVisibleProjects(projects);
        } else {
          const filtered = projects.filter(project => 
            project.category.includes(activeFilter)
          );
          setVisibleProjects(filtered);
        }
        
        setIsAnimating(false);
      }, 500);
    };
    
    filterProjects();
  }, [activeFilter, projects]);
  
  const filterCategories = ['all', 'development', 'design', 'video', 'meme'];
  
  // Horizontal scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
        const progress = (scrollY - (sectionTop - window.innerHeight)) / (sectionHeight + window.innerHeight);
        const scrollContainer = sectionRef.current.querySelector('.projects-container') as HTMLElement;
        if (scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          scrollContainer.scrollLeft = maxScroll * progress;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleProjects]);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 relative min-h-screen"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mt-4"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A showcase of my best work across different disciplines.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category 
                  ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-lg' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div 
        className={`projects-container overflow-x-hidden whitespace-nowrap transition-opacity duration-500 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="inline-flex gap-8 px-8">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="project-item w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden whitespace-normal"
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.category.map((cat) => (
                    <span 
                      key={`${project.id}-${cat}`}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {visibleProjects.length === 0 && !isAnimating && (
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            No projects match the selected filter.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;