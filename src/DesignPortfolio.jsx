import React from 'react';
import pluginImageThumb from './assets/Filthy404ScreenshotThumb.jpg';
import beerAdThumb from './assets/beerAdThumb.jpg'
import ProjectDetail from './ProjectDetail';
import ContactForm from './ContactForm';


// Design Portfolio Component
function DesignPortfolio({ setCurrentPage, setCurrentProject }) {
  // This is an array of objects - a common data structure for lists of similar items
  // Each object has properties (title, description, category)
  const projects = [
    { 
      id: '404-delay',
      title: "Filthy 404 Delay", 
      description: "Audio plugin recreating the iconic glitchy delay from the SP-404SX", 
      category: "Audio Development",
      tags: ["C++", "JUCE", "DSP", "Plugin Development"],
      image: pluginImageThumb
    },
    { 
      id: 'heavyseas-ad',
      title: "Heavy Sees Beer Ad", 
      description: "Animated ad for the Heavy Seas Beer Company", 
      category: "Animation",
      tags: ["Heavy Seas", "Advertising", "Animation"],
      image: beerAdThumb
    },
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
      
            {/* Header with fade-in */}
      <div className="max-w-6xl mx-auto mb-16 animate-fadeIn">
        <h1 className="font-heading text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-md">
          Design Portfolio
        </h1>
        <p className="font-body text-2xl text-white/60 drop-shadow-md">
          Selected projects & case studies
        </p>
      </div>

            {/* Project cards - horizontal layout with staggered fade-in */}
      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => {
              setCurrentPage('project-detail');
              setCurrentProject(project.id);
            }}
            className="glass-button group cursor-pointer p-8 flex flex-col md:flex-row gap-6 hover:scale-[1.02] transition-all duration-300"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
            }}
          >
            {/* Thumbnail placeholder - replace with actual images */}
            <div className="glow-hover w-full md:w-64 h-48 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
            
            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-sm text-yellow font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="font-body text-xs text-white/50 px-2 py-1 rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="font-heading text-3xl font-bold text-white mb-3 group-hover:text-yellow transition-colors drop-shadow-md">
                  {project.title}
                </h3>
                
                <p className="font-body text-lg text-white/90 drop-shadow-md">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-yellow transition-colors">
                <span className="font-body text-sm font-semibold">View Case Study</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Contact section */}
      <div className="max-w-6xl mx-auto mt-24 animate-fadeIn" style={{ animationDelay: `${projects.length * 0.15}s` }}>
        <div className="glass-button p-12">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Work With Me
          </h2>
          <div className="space-y-4 font-body text-white/90 text-lg mb-8">
            <p><strong className="text-white">Audio Plugin Development:</strong> Custom VST/AU plugins from concept to release</p>
            <p><strong className="text-white">Web Design & Development:</strong> Modern, responsive sites built with React</p>
            <p><strong className="text-white">Hourly Rate:</strong> $150/hour</p>
          </div>
          <button 
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-yellow text-text font-body font-bold rounded-lg hover:bg-yellow/90 transition-colors"
            >
              Get in Touch
            </button>
        </div>
      </div>
    </div>
  );
}

export default DesignPortfolio