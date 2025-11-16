import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [loading, setLoading] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const fullText = '> INITIALIZING SYSTEM...\n> LOADING PORTFOLIO...\n> READY';

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div id="home" className="w-full min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {loading ? (
          <div className="font-mono text-sm sm:text-base">
            <pre className="text-[#00ff00] whitespace-pre-wrap">
              {displayText}
              <span className="cursor-blink">_</span>
            </pre>
          </div>
        ) : (
          <div className="font-mono space-y-6">
            <div className="text-[#00ff00]">
              <pre className="whitespace-pre-wrap text-xs sm:text-sm">
{`> SYSTEM READY
> PORTFOLIO LOADED
> [6] PROJECTS AVAILABLE

> TYPE 'VIEW' TO CONTINUE`}
              </pre>
            </div>
            <button
              onClick={() => navigate('projects')}
              className="border border-[#00ff00] px-4 py-2 text-xs sm:text-sm uppercase transition-all duration-200 hover:bg-[#00ff00] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#00ff00] shadow-[0_0_8px_#00ff00] mt-4 font-mono"
            >
              &gt; VIEW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;