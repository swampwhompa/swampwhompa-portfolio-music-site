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

//Music Page

function MusicPage({ setCurrentPage }) {
  const originals = [
    { id: 'xVSfRPoPvQQ', title: 'Original Track 1' },
    { id: 'MwCx5JyM_Ns', title: 'Original Track 2' }
  ];
  
  const remixes = [
    { id: '0OcPuI4XfkY', title: 'Remix 1' },
    { id: 'eifpcQ3660U', title: 'Remix 2' }
  ];
  
  return (
    <div className="relative z-10 min-h-screen p-8">
      {/* Back button */}
      <button 
        onClick={() => setCurrentPage('home')}
        className="mb-8 px-6 py-3 font-body text-white/80 hover:text-white transition-colors flex items-center gap-2"
      >
        <span>←</span> Back
      </button>
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="font-heading text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
          Music
        </h1>
        <p className="font-body text-2xl text-white/60 drop-shadow-md">
          Recent tracks & releases
        </p>
      </div>
      
      {/* Originals Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-heading text-4xl font-bold text-white mb-8 drop-shadow-lg">
          Originals
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {originals.map((track, index) => (
            <div 
              key={track.id}
              className="glass-button p-6 rounded-2xl"
              style={{ '--intensity': 0.4,
                       animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both,
                                   float 6s ease-in-out ${-Math.random() * 6}s infinite 
              ` 
              }}
            >
              <div className="glow-hover wobbleMus-hover aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${track.id}`}
                  title={track.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Remixes Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-heading text-4xl font-bold text-white mb-8 drop-shadow-lg">
          Remixes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {remixes.map((track, index) => (
            <div 
              key={track.id}
              className="glass-button p-6 rounded-2xl"
              style={{ '--intensity': 0.4, 
                       animation: `fadeInUp 0.6s ease-out ${index * 0.15 + 0.3}s both,
                                  float 6s ease-in-out ${-Math.random() * 6}s infinite
           ` }}
            >
              <div className="glow-hover wobbleMus-hover aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${track.id}`}
                  title={track.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;