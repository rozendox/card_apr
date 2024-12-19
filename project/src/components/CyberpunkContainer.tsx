import React, { ReactNode } from 'react';

interface CyberpunkContainerProps {
  children: ReactNode;
}

export function CyberpunkContainer({ children }: CyberpunkContainerProps) {
  return (
    <div className="relative max-w-md w-full animate-fadeIn">
      {/* Main container with backdrop */}
      <div className="relative bg-gray-900/40 backdrop-blur-xl p-6 border border-cyan-500/50 
        rounded-lg shadow-[0_0_25px_rgba(6,182,212,0.3)]">
        {/* Content */}
        {children}
      </div>
    </div>
  );
}