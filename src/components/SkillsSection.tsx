import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  category: string;
  name: string;
  level: number;
  color: string;
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const skills: Record<string, Skill[]> = {
    design: [
      { category: 'design', name: 'UI/UX Design', level: 60, color: 'bg-pink-500' },
      { category: 'design', name: 'Figma', level: 90, color: 'bg-purple-500' },
      { category: 'design', name: 'Photoshop', level: 85, color: 'bg-indigo-500' },

    ],
    development: [
      { category: 'development', name: 'React', level: 90, color: 'bg-cyan-500' },
      { category: 'development', name: 'Node.js', level: 85, color: 'bg-green-500' },
      { category: 'development', name: 'MongoDB', level: 80, color: 'bg-emerald-500' },
      { category: 'development', name: 'Express', level: 85, color: 'bg-teal-500' },
    ],
    video: [
      { category: 'video', name: 'After Effects', level: 85, color: 'bg-violet-500' },
      { category: 'video', name: 'Premiere Pro', level: 90, color: 'bg-fuchsia-500' },
      { category: 'video', name: 'DaVinci Resolve', level: 70, color: 'bg-rose-500' },
    ],
  };
  
  const [activeCategory, setActiveCategory] = useState<string>('design');
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.3 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-400 dark:bg-purple-700 rounded-full opacity-20 filter blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-pink-400 dark:bg-pink-700 rounded-full opacity-20 filter blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-purple-600 dark:text-purple-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mt-4"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          I've honed my skills across different disciplines by independently handling a variety of projects, allowing me to approach challenges from multiple perspectives.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-purple-200 dark:border-purple-900 p-1 bg-gray-100 dark:bg-gray-700">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-md' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Bars */}
        <div className="max-w-3xl mx-auto">
          {skills[activeCategory].map((skill, index) => (
            <div key={skill.name} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 150}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;