import React from 'react';
import { LOGO } from '../constants';
import { Page } from '../App';

interface HeaderProps {
    navigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const navItemClass = "cursor-pointer hover:bg-[#00ff00] hover:text-black px-2 sm:px-3 transition-colors duration-200 font-mono text-[10px] sm:text-xs";

  return (
    <header className="w-full text-xs sm:text-sm font-mono border-b border-[#00ff00]">
      <div className="p-2 sm:p-3">
        <p className="text-[#00ff00]/80 text-[9px] sm:text-xs leading-tight">
          FLS BIOS (TM)    COPYRIGHT FEELS LIKE(C) 2025    DIGITAL STUDIO    VER V1.0    PORT......ONLINE
        </p>
        <p className="text-[#00ff00]/50 text-[8px] sm:text-[10px] mt-1">
          ══════════════════════════════════════════════════════════════════════════════════════════════════════════
        </p>
      </div>

      <pre className="text-[4px] sm:text-[8px] md:text-[10px] leading-none text-center p-1 sm:p-2 text-[#00ff00]">
        <code>{LOGO}</code>
      </pre>

      <div className="p-2 sm:p-3">
        <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4 border-y border-y-[#00ff00] py-2">
            <span
                onClick={() => navigate('projects')}
                className={navItemClass}
                aria-label="Navigate to Work page"
                role="link"
            >
                [WORK]
            </span>
        </div>
      </div>
    </header>
  );
};

export default Header;