import React from 'react';
import whompaGif from './assets/whompafloat.gif';
import whompaPng from './assets/whompafloat.png';
import beerGif from './assets/beerad.gif';
import beerPng from './assets/beerad.png';

// This is our main App component - the entry point of our application
// In React, everything is a component. Think of components as reusable building blocks
function App() {
  // useState is a React Hook that lets us add state to our component
  // State = data that can change over time and causes the component to re-render when it changes
  // Syntax: const [variableName, setterFunction] = useState(initialValue)
  const [currentPage, setCurrentPage] = React.useState('home');
  
  // This is a conditional render - we show different components based on state
  // The === operator checks for strict equality (value AND type must match)
  if (currentPage === 'home') {
    return <HomePage setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'design') {
    return <DesignPortfolio setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'music') {
    return <MusicPage setCurrentPage={setCurrentPage} />;
  }
}

// HomePage Component
// Props (properties) are how we pass data from parent to child components
// Here we're receiving setCurrentPage as a prop using destructuring: { setCurrentPage }
function HomePage({ setCurrentPage }) {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = React.useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-6xl font-bold text-white text-center mb-16">
          Welcome
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Design Portfolio Card */}
          <div 
            onClick={() => setCurrentPage('design')}
            onMouseEnter={() => setHoveredCard('design')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div 
                className="aspect-square flex items-center justify-center transition-all duration-300"
                style={{ 
                    backgroundImage: `url(${hoveredCard === 'design' ? beerGif : beerPng})`,
                    backgroundSize: '184%',
                    backgroundPosition: 'center'
  }}
>
              <div className="text-center p-8 bg-black/40 w-full h-full flex flex-col items-center justify-center">
                <div className="text-8xl mb-4">🎨</div>
                <h2 className="text-4xl font-bold text-white mb-2">Design Portfolio</h2>
                <p className="text-white/80">Case studies, Videos & Rates</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Music Card */}
          <div 
            onClick={() => setCurrentPage('music')}
            onMouseEnter={() => setHoveredCard('music')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div 
                className="aspect-square flex items-center justify-center transition-all duration-300"
                style={{ 
                    backgroundImage: `url(${hoveredCard === 'music' ? whompaGif : whompaPng})`,
                    backgroundSize: '110%',
                    backgroundPosition: 'calc(50% - 10px) center'
  }}
>
              <div className="text-center p-8 bg-black/40 w-full h-full flex flex-col items-center justify-center">
                <div className="text-8xl mb-4">🎵</div>
                <h2 className="text-4xl font-bold text-white mb-2">Music</h2>
                <p className="text-white/80">Music and Audio Reactive Visuals</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Design Portfolio Component
function DesignPortfolio({ setCurrentPage }) {
  // This is an array of objects - a common data structure for lists of similar items
  // Each object has properties (title, description, category)
  const projects = [
    { title: "Brand Identity System", description: "Complete visual identity for tech startup", category: "Branding" },
    { title: "E-commerce Redesign", description: "UX/UI overhaul increasing conversion by 40%", category: "Web Design" },
    { title: "Mobile App Interface", description: "Clean, intuitive design for fitness tracking", category: "UI/UX" },
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button 
        onClick={() => setCurrentPage('home')}
        className="mb-8 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
      >
        ← Back Home
      </button>
      
      <h1 className="text-5xl font-bold mb-4">Design Portfolio</h1>
      <p className="text-gray-400 mb-12 text-xl">Selected case studies & work</p>
      
      {/* .map() is a JavaScript array method that transforms each item in an array */}
      {/* It takes a function and applies it to each element, returning a new array */}
      {/* When rendering lists in React, each item needs a unique "key" prop for performance */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4" />
            <span className="text-sm text-purple-400 font-semibold">{project.category}</span>
            <h3 className="text-2xl font-bold mt-2 mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-800 rounded-xl p-8 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Rates & Contact</h2>
        <div className="space-y-4 text-gray-300">
          <p><strong>Branding Projects:</strong> Starting at $5,000</p>
          <p><strong>Web Design:</strong> Starting at $3,000</p>
          <p><strong>Hourly Rate:</strong> $150/hour</p>
          <button className="mt-6 px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

// Music Page Component - This is where we'll add audio reactive stuff later
function MusicPage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <button 
        onClick={() => setCurrentPage('home')}
        className="mb-8 px-6 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
      >
        ← Back Home
      </button>
      
      <h1 className="text-5xl font-bold mb-12">Music</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Latest Tracks</h2>
          <div className="space-y-4">
            {['Midnight Pulse', 'Neon Dreams', 'Digital Horizon'].map((track, i) => (
              <div key={i} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded" />
                  <div>
                    <h3 className="font-bold text-xl">{track}</h3>
                    <p className="text-gray-400">Electronic · 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-4">Audio Visualizer</h2>
          <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl p-8 aspect-square flex items-center justify-center border border-pink-500/30">
            <p className="text-gray-400 text-center">
              WebGL audio visualizer will go here<br/>
              <span className="text-sm">(We'll add Three.js next!)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;