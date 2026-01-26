import React from 'react';
import whompaGif from './assets/whompafloat.gif';
import whompaPng from './assets/whompafloat.png';
import beerGif from './assets/beerad.gif';
import beerPng from './assets/beerad.png';
import ShaderBackground from './ShaderBackground';
import DesignPortfolio from './DesignPortfolio';
import ProjectDetail from './ProjectDetail';
import ContactForm from './ContactForm';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentProject, setCurrentProject] = React.useState(null);

  return (
    <>
      <ShaderBackground />
      
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'design' && (
        <DesignPortfolio 
          setCurrentPage={setCurrentPage} 
          setCurrentProject={setCurrentProject} 
        />
      )}
      {currentPage === 'project-detail' && (
        <ProjectDetail 
          setCurrentPage={setCurrentPage} 
          projectId={currentProject} 
        />
      )}
      {currentPage === 'music' && <MusicPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'contact' && <ContactForm setCurrentPage={setCurrentPage} />}
    </>
  );
}
  
// HomePage Component

function HomePage({ setCurrentPage }) {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = React.useState(null);
  
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="drop-shadow-lg text-6xl font-heading font-bold text-white text-center mb-32 ml-9 tracking-wide">
                Dennis Cornell <span className="mx-12"> ⬡ </span> SwampWhompa
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Design Portfolio Card */}
          <div 
          onClick={() => setCurrentPage('design')}
          onMouseEnter={() => setHoveredCard('design')}
          onMouseLeave={() => setHoveredCard(null)}
          className="float-animation glow-hover wobble-hover group relative overflow-hidden rounded-2xl cursor-pointer backdrop-blur-md bg-white/10 shadow-xl transition-all duration-300"
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
              onClick={() => setCurrentPage('music')}
              onMouseEnter={() => setHoveredCard('music')}
              onMouseLeave={() => setHoveredCard(null)}
              className="float-animation glow-hover wobble-hover group relative overflow-hidden rounded-2xl cursor-pointer backdrop-blur-md bg-white/10 shadow-xl transition-all duration-300"
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


// Music Page Component - This is where we'll add audio reactive stuff later
function MusicPage({ setCurrentPage }) {
  return (
    <div className="relative z-10 min-h-screen p-8 flex flex-col items-center justify-center text-center">
      {/* Back Button - Essential so users aren't trapped! */}
      <button 
        onClick={() => setCurrentPage('home')}
        className="absolute top-8 left-8 px-6 py-3 font-body text-white/80 hover:text-white transition-colors flex items-center gap-2"
      >
        <span>←</span> Back Home
      </button>
      
    <div className="max-w-2xl animate-fadeIn">
        {/* The Icon/Visual Focus */}
        <div className="mb-8 text-8xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          🎧
        </div>

        <h1 className="font-heading text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-md">
          Welcome to the Beat Temple!  
        </h1>
        
        <div className="glass-button p-8 backdrop-blur-xl">
          <p className="font-body text-2xl text-white/80 mb-4">
            Currently in the studio...
          </p>
          <p className="font-body text-lg text-white/80 leading-relaxed">
            I'm building out a WebGL audio visualizer and some custom DSP experiments. 
            Check back soon to hear my best tracks the way they were meant to be heard.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <div className="h-1 w-12 bg-yellow/50 rounded-full animate-pulse"></div>
          <div className="h-1 w-12 bg-yellow rounded-full animate-pulse [animation-delay:0.2s]"></div>
          <div className="h-1 w-12 bg-yellow/50 rounded-full animate-pulse [animation-delay:0.4s]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;