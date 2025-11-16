import React from 'react';
import { projects } from '../data/products';

const ProjectListPage: React.FC = () => {
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          .image-container-mobile {
            margin-left: -0.5rem !important;
            margin-right: -0.5rem !important;
            width: calc(100% + 1rem) !important;
          }
        }
        @media (min-width: 640px) {
          .image-container-mobile {
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
      <div id="projects" className="w-full min-h-screen p-3 sm:p-4 md:p-6 overflow-x-hidden" style={{ scrollMarginTop: '20px' }}>
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="w-full text-xs sm:text-sm border border-[#00ff00] p-2 sm:p-3 flex flex-col hover:shadow-[0_0_8px_#00ff00] transition-all duration-300"
            >
              <div className="w-full bg-black p-0 border border-[#00ff00] overflow-hidden relative mb-3 image-container-mobile">
                <div className="absolute top-1 left-1 sm:top-2 sm:left-2 space-y-0.5 z-10">
                  <div className="w-3 h-[1px] bg-[#00ff00]/75"></div>
                  <div className="w-4 h-[1px] bg-[#00ff00]/75"></div>
                </div>
                <div className="overflow-x-auto w-full" style={{ maxWidth: '100%' }}>
                  <pre className="font-mono text-[4px] leading-[4px] text-[#00ff00]/90 select-none w-full" style={{ textShadow: '0 0 1px #00ff00', width: '100%', margin: 0, padding: 0 }}>
                    {project.chafa.map((line, i) => (
                      <div key={i} className="w-full" style={{ wordBreak: 'break-all', overflowWrap: 'break-word', width: '100%' }}>{line}</div>
                    ))}
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
                <p className="text-[#00ff00]/70 text-[10px] sm:text-xs leading-relaxed whitespace-pre-line">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectListPage;
