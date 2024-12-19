import React from 'react';

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export function SocialLink({ icon, label, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-pink-500/30 
        hover:border-cyan-400 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]
        hover:scale-105"
    >
      <span className="text-pink-400 group-hover:text-cyan-400 transition-colors">
        {icon}
      </span>
      <span className="text-gray-100 group-hover:text-cyan-400 transition-colors font-medium">
        {label}
      </span>
    </a>
  );
}