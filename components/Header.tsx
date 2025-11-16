import React, { useState, useEffect } from 'react';
import { LOGO, SYMBOL } from '../constants';
import { Page } from '../App';

interface HeaderProps {
    navigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const systemStatusLines = [
    'SYSTEM STATUS: ONLINE  V1.0',
    'RENDER ENGINE: ACTIVE',
    'BUILD: 2025-Q1',
    'MEMORY: 98% CREATIVE / 2% CHAOS',
    'TERMINAL MODE: 01',
    'UPTIME: 2811 HOURS',
    'NETLINK: SECURE',
    'PROCESSOR: HUMAN–AI HYBRID UNIT',
    'REFRESH CYCLE: 60FPS / BITMAP',
    'PORT: FL-001',
    'DEVICE: FLS NODE',
    'OS: FEELS LIKE / CUSTOM'
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= systemStatusLines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = systemStatusLines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        const lines: string[] = [];
        // Add all completed lines
        for (let i = 0; i < currentLineIndex; i++) {
          lines.push(systemStatusLines[i]);
        }
        // Add current line being typed
        lines.push(currentLine.substring(0, currentCharIndex + 1));
        setDisplayedText(lines.join('\n'));
        setCurrentCharIndex(prev => prev + 1);
      }, 30); // Typing speed

      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 100); // Delay between lines

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, systemStatusLines]);

  return (
    <header className="w-full font-mono overflow-x-hidden">
      <div className="w-full p-3 sm:p-4 md:p-6" style={{ paddingTop: '30px', paddingBottom: '10px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="border border-[#00ff00] p-2 sm:p-4 flex flex-col sm:flex-row items-start justify-between gap-4 overflow-x-hidden">
            <div className="flex flex-col items-start w-full sm:w-auto" style={{ padding: 0 }}>
              <pre className="text-[2px] leading-[2px] text-[#00ff00] text-left whitespace-pre" style={{ margin: 0, padding: 0, fontFamily: 'monospace' }}>
                <code>{LOGO}</code>
              </pre>
              <pre className="text-[9px] leading-[10px] text-[#00ff00]/80 text-left whitespace-pre" style={{ margin: 0, padding: 0, paddingTop: '15px', fontFamily: 'monospace' }}>
                {displayedText}
                {!isComplete && <span className="cursor-blink">_</span>}
                {isComplete && <span className="cursor-blink">_</span>}
              </pre>
            </div>
            <div className="w-full sm:w-auto flex justify-end overflow-hidden">
              <div className="symbol-3d-container">
                <pre className="text-[2px] leading-[2px] text-[#00ff00] whitespace-pre font-mono symbol-3d" style={{ margin: 0, padding: 0, fontFamily: 'monospace', letterSpacing: '0', wordSpacing: '0', textAlign: 'left', display: 'block' }}>
                  <code style={{ fontFamily: 'monospace', whiteSpace: 'pre', display: 'block' }}>{SYMBOL}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s infinite;
        }
        .symbol-3d-container {
          perspective: 2000px;
          perspective-origin: center center;
          transform-style: preserve-3d;
        }
        .symbol-3d {
          transform-style: preserve-3d;
          transform-origin: center center;
          animation: rotate3d-tumble 15s linear infinite;
        }
        @keyframes rotate3d-tumble {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          25% {
            transform: rotateY(90deg) rotateX(90deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(180deg);
          }
          75% {
            transform: rotateY(270deg) rotateX(270deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(360deg);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;