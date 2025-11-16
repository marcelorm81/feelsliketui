import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-xs sm:text-sm p-2 sm:p-3 mt-auto font-mono">
      <div className="border-t border-t-[#00ff00] pt-2 text-[#00ff00]/70">
        <p className="mb-1"> RENDER BANK 1  [STATUS: OK] [ENCRYPTION: AES-256] [SESSION: ACTIVE]</p>
        <p> RENDER BANK 2  [CLIENT: GUEST] [CONNECTION: SECURE] [LOAD: 1.337ms]            FEELS LIKE</p>
      </div>
      <p className="text-[#00ff00]/50 text-[10px] sm:text-xs mt-2">══════════════════════════════════════════════════════════════════════════════════════════════════════════════</p>
    </footer>
  );
};

export default Footer;