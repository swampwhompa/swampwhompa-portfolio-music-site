import React from 'react';
import { useNavigate } from 'react-router-dom';

import DesignThumb from './assets/DesignThumb.mp4';
import MusicThumb from './assets/MusicThumb.mp4';

function HomePage() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = React.useState(null);
  
  const designVideoRef = React.useRef(null);
  const musicVideoRef = React.useRef(null);

  React.useEffect(() => {
    // Set videos to pause on first frame when component mounts
    if (designVideoRef.current) {
      designVideoRef.current.currentTime = 0;
      designVideoRef.current.pause();
    }
    if (musicVideoRef.current) {
      musicVideoRef.current.currentTime = 0;
      musicVideoRef.current.pause();
    }
  }, []);

  const handleMouseEnter = (card) => {
    setHoveredCard(card);
    if (card === 'design' && designVideoRef.current) {
      designVideoRef.current.play();
    } else if (card === 'music' && musicVideoRef.current) {
      musicVideoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    if (designVideoRef.current) {
      designVideoRef.current.pause();
      designVideoRef.current.currentTime = 0;
    }
    if (musicVideoRef.current) {
      musicVideoRef.current.pause();
      musicVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        
        {/* Visuals Card - Top */}
        <div 
          onClick={() => navigate('/design')}
          onMouseEnter={() => handleMouseEnter('design')}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden cursor-pointer transition-all duration-300 rounded-2xl"
          style={{
            aspectRatio: '16/9',
            filter: hoveredCard === 'design' ? 'none' : 'saturate(15%) brightness(0.7)'
          }}
        >
          <video
            ref={designVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={DesignThumb}
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" 
               style={{ opacity: hoveredCard === 'design' ? 0 : 0.6 }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8 z-10">
              <h2 className="font-sans text-4xl font-bold text-white mb-2 drop-shadow-lg tracking-tight">Visuals</h2>
              <p className="font-sans text-lg text-white drop-shadow-md font-light">Portfolio & Services</p>
            </div>
          </div>
        </div>

        {/* Clean Separator */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Music Card - Bottom */}
        <div 
          onClick={() => navigate('/music')}
          onMouseEnter={() => handleMouseEnter('music')}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden cursor-pointer transition-all duration-300 rounded-2xl"
          style={{
            aspectRatio: '16/9',
            filter: hoveredCard === 'music' ? 'none' : 'saturate(15%) brightness(0.7)'
          }}
        >
          <video
            ref={musicVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scale(1.2) translate(4%, 5%)' }}
            src={MusicThumb}
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" 
               style={{ opacity: hoveredCard === 'music' ? 0 : 0.6 }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8 z-10">
              <h2 className="font-sans text-4xl font-bold text-white mb-2 drop-shadow-lg tracking-tight">Music</h2>
              <p className="font-sans text-lg text-white drop-shadow-md font-light">Originals, Remixes & Visuals</p>
            </div>
          </div>
        </div>
        
      </div>  
    </div>  
  );
}

export default HomePage