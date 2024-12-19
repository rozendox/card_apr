import React from 'react';
import { Github, Linkedin, Instagram, Mail, Music } from 'lucide-react';
import { SocialLink } from './components/SocialLink';
import { CyberpunkContainer } from './components/CyberpunkContainer';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <AnimatedBackground />
      <CyberpunkContainer>
        {/* Profile Section */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-pink-500 
            shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.postimg.cc/mgmH4Ygm/Imagem-do-Whats-App-de-2024-11-18-s-11-15-00-dc803884-Aprimorado-SR-2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
            Gabriel Rozendo
          </h1>
          <p className="text-cyan-400 text-sm mb-4 font-medium">Desenvolvedor Back-End</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 gap-3">
          <SocialLink 
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
            href="https://github.com/rozendox"
          />
          <SocialLink 
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/cgrox/"
          />
          <SocialLink 
            icon={<Instagram className="w-5 h-5" />}
            label="Instagram"
            href="https://www.instagram.com/rozendev/"
          />
          <SocialLink 
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            href="mailto:seu-email@exemplo.com"
          />
          <SocialLink 
            icon={<Music className="w-5 h-5" />}
            label="Codding Harder Playlist"
            href="https://open.spotify.com/playlist/4OepSGVyPfIFclIt3D1s0Y?si=236f7108a0b543a8"
          />
          <SocialLink 
            icon={<Music className="w-5 h-5" />}
            label="Rock Playlist"
            href="https://open.spotify.com/playlist/0bFo2ZoobGSQtW88mQ3ltn?si=da817a63387a4f3d"
          />
        </div>
      </CyberpunkContainer>
    </div>
  );
}

export default App;