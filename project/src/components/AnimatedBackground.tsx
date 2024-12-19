import React, { useEffect, useRef } from 'react';
import { BackgroundElements } from './BackgroundElements';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = container.getBoundingClientRect();
      
      const xRelative = ((clientX / width) - 0.5) * 100;
      const yRelative = ((clientY / height) - 0.5) * 100;

      container.style.setProperty('--x-pos', `${50 + xRelative * 0.2}%`);
      container.style.setProperty('--y-pos', `${50 + yRelative * 0.2}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] 
        bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[120px] 
        animate-pulse transition-transform duration-300 ease-out"
        style={{ transform: 'translate(var(--x-pos, 50%), var(--y-pos, 50%))' }}>
      </div>
      <div className="absolute w-[800px] h-[800px] -bottom-[400px] -right-[400px] 
        bg-gradient-to-l from-cyan-500/20 to-blue-500/20 rounded-full blur-[120px] 
        animate-pulse delay-150 transition-transform duration-300 ease-out"
        style={{ transform: 'translate(calc(-1 * var(--x-pos, 50%)), calc(-1 * var(--y-pos, 50%)))' }}>
      </div>

      <BackgroundElements />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
    </div>
  );
}