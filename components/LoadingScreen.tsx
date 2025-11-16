import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  const directoryStructure = [
    '$ ls -la feels-like-studio/',
    '',
    'total 48',
    'drwxr-xr-x  8 user  staff   256 Dec 2024  feels-like-studio',
    'drwxr-xr-x  3 user  staff    96 Dec 2024  ..',
    'drwxr-xr-x  2 user  staff    64 Dec 2024  .',
    '',
    '$ tree feels-like-studio/',
    '',
    'feels-like-studio/',
    '├── components/',
    '│   ├── Header.tsx',
    '│   ├── Footer.tsx',
    '│   ├── Layout.tsx',
    '│   └── LoadingScreen.tsx',
    '├── pages/',
    '│   └── ProductListPage.tsx',
    '├── data/',
    '│   ├── products.ts (185KB)',
    '│   ├── google.txt (29KB)',
    '│   ├── ch.txt (29KB)',
    '│   ├── moncler.txt (29KB)',
    '│   ├── arcade.txt (29KB)',
    '│   ├── lvmh.txt (29KB)',
    '│   └── valentino.txt (29KB)',
    '',
    '$ cat data/products.ts | grep "export const projects"',
    '> [6] PROJECTS LOADED',
    '',
    '$ ./init.sh',
    '> INITIALIZING FILE SYSTEM...',
    '> SCANNING PORTFOLIO...',
    '> LOADING ASSETS...',
    '> SYSTEM READY',
    '',
    '$',
  ];

  useEffect(() => {
    if (currentLine < directoryStructure.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, directoryStructure[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 80);

      return () => clearTimeout(timer);
    } else {
      // Wait a bit before completing
      const timer = setTimeout(() => {
        onComplete();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono">
      <div className="w-full max-w-3xl p-4 sm:p-6">
        <pre className="text-[#00ff00] text-[10px] sm:text-xs md:text-sm leading-relaxed overflow-hidden">
          {displayedLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index === displayedLines.length - 1 && currentLine < directoryStructure.length && (
                <span className="cursor-blink">_</span>
              )}
              {'\n'}
            </React.Fragment>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default LoadingScreen;

