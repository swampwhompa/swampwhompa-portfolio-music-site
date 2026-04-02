import React from 'react';
import { useNavigate } from 'react-router-dom';

import whompaGif from './assets/whompafloat.gif';
import whompaPng from './assets/whompafloat.png';
import beerGif from './assets/beerad.gif';
import beerPng from './assets/beerad.png';

function HomePage() {
  // State to track which card is being hovered
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = React.useState(null);
  
  // Preload GIFs on component mount
  React.useEffect(() => {
    const img1 = new Image();
    img1.src = beerGif;
    const img2 = new Image();
    img2.src = whompaGif;
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="drop-shadow-lg text-4xl md:text-6xl font-heading font-bold text-white text-center mb-16 md:mb-32 tracking-wide">
        <span className="block md:inline">Dennis Cornell</span>
        <span className="hidden md:inline mx-12"> ⬡ </span>
        <span className="block md:hidden my-2">⬡</span>
        <span className="block md:inline">SwampWhompa</span>
      </h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Design Portfolio Card */}
          <div 
          onClick={() => navigate('/design')}
          onMouseEnter={() => setHoveredCard('design')}
          onMouseLeave={() => setHoveredCard(null)}
          className="float-animation glow-hover wobble-hover group relative overflow-hidden rounded-2xl cursor-pointer  bg-white/10 shadow-xl transition-all duration-300"
        >
          <div 
            className="aspect-square flex items-center justify-center transition-all duration-300"
            style={{ 
              backgroundImage: `url(${hoveredCard === 'design' ? beerGif : beerPng})`,
              backgroundSize: '182%',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-background/30 group-hover:bg-background/0 transition-all duration-300" />
            <div className="relative text-center p-8 z-10">
              <h2 className="font-heading text-4xl font-bold text-white mb-2 drop-shadow-lg">Design</h2>
              <p className="font-body text-white drop-shadow-md">Portfolio & Services</p>
            </div>
          </div>
        </div>

          
          {/* Music Card */}
          <div 
              onClick={() => navigate('/music')}
              onMouseEnter={() => setHoveredCard('music')}
              onMouseLeave={() => setHoveredCard(null)}
              className="float-animation glow-hover wobble-hover group relative overflow-hidden rounded-2xl cursor-pointer bg-white/10 shadow-xl transition-all duration-300"
            >
              <div 
                className="aspect-square flex items-center justify-center transition-all duration-300"
                style={{ 
                  backgroundImage: `url(${hoveredCard === 'music' ? whompaGif : whompaPng})`,
                  backgroundSize: '120%',
                  backgroundPosition: 'calc(50% - 20px) 20%'
                }}
              >
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/0 transition-all duration-300" />
                <div className="relative text-center p-8 z-10">
                  <h2 className="font-heading text-4xl font-bold text-white mb-2 drop-shadow-lg">Music</h2>
                  <p className="font-body text-white drop-shadow-md">Originals, Remixes & Visuals</p>
                </div>
              </div>
            </div>
         </div>  
      </div>  
    </div>  
  );
}

export default HomePage 