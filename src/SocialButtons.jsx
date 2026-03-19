import React from 'react';
import { Instagram, Youtube, CloudIcon } from 'lucide-react';

function SocialButtons() {
  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/souls.are.spent/', Icon: Instagram },
    { name: 'YouTube', url: 'https://www.youtube.com/@swampwhompa', Icon: Youtube },
    { name: 'SoundCloud', url: 'https://soundcloud.com/dennis-cornell', Icon: CloudIcon }
  ];
  
  return (
    <div className="fixed top-8 right-8 z-50 flex gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button w-12 h-12 flex items-center justify-center rounded-full glow-hover transition-all duration-300 hover:scale-110"
          title={social.name}
        >
          <social.Icon className="w-5 h-5 text-white" />
        </a>
      ))}
    </div>
  );
}

export default SocialButtons;