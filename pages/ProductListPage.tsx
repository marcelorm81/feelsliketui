
import React, { useState, useEffect } from 'react';
import { projects } from '../data/products';

const ProjectListPage: React.FC = () => {
  const [displayedProjects, setDisplayedProjects] = useState<typeof projects>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setDisplayedProjects(projects);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="projects" className="w-full min-h-screen p-3 sm:p-4 md:p-6" style={{ scrollMarginTop: '20px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="font-mono mb-4 sm:mb-6">
          <h1 className="text-sm sm:text-lg terminal-glow mb-2">[PROJECT_ARCHIVE.DAT]</h1>
          <p className="text-xs sm:text-sm text-[#00ff00]/70">
            &gt; LOADED: {displayedProjects.length} PROJECTS
            {isLoading && <span className="cursor-blink ml-1">_</span>}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="w-full text-xs sm:text-sm border border-[#00ff00] p-2 sm:p-3 flex flex-col hover:shadow-[0_0_8px_#00ff00] transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isLoading ? 'none' : 'fadeIn 0.5s ease-in'
              }}
            >
              <div className="w-full bg-black p-1 border border-[#00ff00] overflow-hidden relative mb-3">
                <div className="absolute top-1 left-1 sm:top-2 sm:left-2 space-y-0.5 z-10">
                  <div className="w-3 h-[1px] bg-[#00ff00]/75"></div>
                  <div className="w-4 h-[1px] bg-[#00ff00]/75"></div>
                </div>
                <div className="overflow-x-auto -mx-1">
                  <pre className="font-mono text-[3px] sm:text-[4px] leading-[3px] sm:leading-[4px] text-[#00ff00]/90" style={{ textShadow: '0 0 1px #00ff00' }}>
                    {project.chafa.map((line, i) => <div key={i}>{line}</div>)}
                  </pre>
                </div>
              </div>
              
              <div className="mt-auto font-mono">
                <div className="border border-[#00ff00] p-2 mb-2 text-[10px] sm:text-xs">
                  <p className="font-bold mb-1 text-[#00ff00]">[METADATA]</p>
                  <p className="text-[#00ff00]/80">&gt; CLIENT: {project.client}</p>
                  <p className="text-[#00ff00]/80">&gt; TITLE: {project.title}</p>
                  <p className="text-[#00ff00]/80">&gt; YEAR: {project.year}</p>
                </div>
                <p className="text-[#00ff00]/70 text-[10px] sm:text-xs leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectListPage;
