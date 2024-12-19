import React from 'react';
import { BinaryRain } from './BinaryRain';

export function BackgroundElements() {
  return (
    <>
      <BinaryRain />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
      </div>
    </>
  );
}