import React from 'react';
import pluginImage from './assets/Filthy404ScreenShot.jpg';

// Project Detail Component
// This shows the full case study for a selected project
function ProjectDetail({ setCurrentPage, projectId }) {
  
  // Project data - in a real app this would come from a database or CMS
  const projectData = {
    '404-delay': {
      title: "Filthy 404 Delay",
      category: "Audio Plugin Development",
      year: "2024",
      tags: ["C++", "JUCE", "DSP", "Audio Development"],
      videoId: "sMfukpJhHWw", // YouTube Shorts ID
      gumroadLink: "https://swampwhompa.gumroad.com/l/Filthy404Delay",
      
      overview: "The Filthy 404 Delay is a faithful recreation of the beat delay effect from Roland's iconic SP-404SX sampler. What makes this plugin unique is its embrace of the original hardware's quirky buffer behavior - rather than smoothing out artifacts, it captures and amplifies the glitchy, stuttering character that made the 404 a staple in lo-fi hip-hop production.",
      
      technical: [
        {
          heading: "Buffer Implementation",
          content: "The core of the effect lies in a custom circular buffer that preserves audio artifacts during delay time adjustments. Unlike traditional delays that interpolate or discard buffer contents, this implementation maintains the raw, unprocessed glitches—creating unpredictable rhythmic variations that are impossible to recreate with clean DSP."
        },
        {
          heading: "Grit Processing",
          content: "The GRIME control chain applies gain-compensated saturation and adaptive bit reduction in the feedback path. Each repeat passes through a carefully tuned distortion algorithm that adds harmonic content without overwhelming the mix. The gain compensation ensures consistent levels regardless of grit amount, maintaining mix balance while adding texture."
        },
        {
          heading: "Custom UI Framework",
          content: "Built with JUCE, the interface features custom-drawn components with real-time parameter visualization. The killswitch button provides tactile buffer manipulation, while the extended delay time grid goes beyond the original hardware's limitations. All graphics are vector-based for crisp rendering at any screen resolution."
        }
      ],
      
      features: [
        "Authentic SP-404SX buffer behavior with artifact preservation",
        "Extended delay time range beyond original hardware",
        "GRIME control: layered saturation + bit reduction",
        "Killswitch for manual buffer manipulation",
        "Gain-compensated processing maintains mix levels",
        "Custom vector UI with parameter feedback",
        "VST3/AU/AAX formats for any DAW"
      ]
    }
  };
  
  // Get the current project data
  const project = projectData[projectId];
  
  // If project doesn't exist, show error
  if (!project) {
    return (
      <div className="relative z-10 min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-4 drop-shadow-lg">Project Not Found</h1>
          <button 
            onClick={() => setCurrentPage('design')}
            className="font-body text-yellow hover:text-white transition-colors"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative z-10 min-h-screen p-8">
      {/* Back button */}
      <button 
        onClick={() => setCurrentPage('design')}
        className="mb-8 px-6 py-3 font-body text-white/80 hover:text-white transition-colors flex items-center gap-2 animate-fadeIn"
      >
        <span>←</span> Back to Portfolio
      </button>
      
      {/* Hero section */}
      <div className="max-w-5xl mx-auto mb-16 animate-fadeIn">
        <div className="mb-6">
          <span className="font-body text-sm text-yellow font-semibold uppercase tracking-wider">
            {project.category} · {project.year}
          </span>
        </div>
        
        <h1 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="font-body text-sm text-white/90 px-4 py-2 rounded-full border border-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="font-body text-xl text-white/90 leading-relaxed drop-shadow-lg">
          {project.overview}
        </p>
      </div>
      
      {/* Main content grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        {/* Video embed */}
        <div 
          className="animate-fadeInUp glass-button p-4 rounded-2xl"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="aspect-[9/16] rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Plugin screenshot */}
        <div 
          className="animate-fadeInUp glass-button p-4 rounded-2xl"
          style={{ animationDelay: '0.3s' }}
        >
          <img 
            src={pluginImage} 
            alt="Filthy 404 Delay Interface"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Technical breakdown */}
      <div className="max-w-5xl mx-auto mb-16 space-y-8">
        <h2 
          className="font-heading text-4xl font-bold text-white mb-8 animate-fadeInUp drop-shadow-lg"
          style={{ animationDelay: '0.4s' }}
        >
          Technical Implementation
        </h2>
        
        {project.technical.map((section, index) => (
          <div 
            key={index}
            className="glass-button p-8 animate-fadeInUp"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-4 drop-shadow-lg">
              {section.heading}
            </h3>
            <p className="font-body text-lg text-white/90 leading-relaxed drop-shadow-lg">
              {section.content}
            </p>
          </div>
        ))}
      </div>
      
      {/* Features list */}
      <div className="max-w-5xl mx-auto mb-16">
        <div 
          className="glass-button p-8 animate-fadeInUp"
          style={{ animationDelay: '0.8s' }}
        >
          <h2 className="font-heading text-3xl font-bold text-white mb-6 drop-shadow-lg">
            Key Features
          </h2>
          <ul className="space-y-3 font-body text-lg text-white/90">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-yellow mt-1">✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-5xl mx-auto">
        <div 
          className="glass-button p-12 text-center animate-fadeInUp"
          style={{ animationDelay: '0.9s' }}
        >
          <h2 className="font-heading text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Get the Plugin
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 drop-shadow-lg">
            Available now as VST3 for Windows & MacOS
          </p>
          <a 
            href={project.gumroadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-yellow text-text font-body font-bold text-lg rounded-lg hover:bg-yellow/90 transition-colors"
          >
            Purchase on Gumroad
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;