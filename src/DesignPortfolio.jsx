import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pluginImageThumb from './assets/Filthy404ScreenshotThumb.jpg';
import beerAdThumb from './assets/beerAdThumb.jpg'
import ProjectDetail from './ProjectDetail';
import ContactForm from './ContactForm';
import { projects } from './portfolioData';
import BeforeAfterSlider from './BeforeAfterSlider';
import WebsiteBefore from './assets/WebsiteBefore.mp4';
import WebsiteAfter from './assets/WebsiteAfter.mp4';

// Design Portfolio Component
function DesignPortfolio() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState('portfolio');

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };
    
    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };
    
    const goToProject = (index) => {
        setCurrentIndex(index);
    };

  // This is an array of objects - a common data structure for lists of similar items
  // Each object has properties (title, description, category)
    
  return (
    <div className="relative z-10 min-h-screen p-8">
      {/* Back button */}
      <button 
        onClick={() => navigate('/')}
        className="mb-8 px-6 py-3 font-sans text-white/80 hover:text-white transition-colors flex items-center gap-2"
      >
        <span>←</span> Back
      </button>
      
            {/* Header with fade-in */}
      <div className="max-w-6xl mx-auto mb-16 animate-fadeIn text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight text-center whitespace-nowrap" style={{ fontFamily: "'Akira Expanded', sans-serif", fontWeight: 900, textShadow: '3px 3px 0px rgba(0,0,0,0.8), 6px 6px 0px rgba(0,0,0,0.4)' }}>
          Your stage - <span className="inline-block animate-swoop-delayed">AMPLIFIED</span>
        </h1>
        <p className="font-sans text-2xl text-white/60 drop-shadow-md font-light">
          Custom Visuals for Live Music Environments
        </p>
      </div>

      {/* Before/After slider */}
      <BeforeAfterSlider beforeSrc={WebsiteBefore} afterSrc={WebsiteAfter} />

            {/* Project carousel */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="relative">
          {/* Carousel container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 p-8"
                  onClick={() => navigate(`/design/${project.id}`)}
                >
                  <div className="group cursor-pointer flex flex-col md:flex-row gap-6 hover:scale-[1.02] transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="glow-on-group-hover w-full md:w-64 h-48 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: project.id === 'swampwhompa-visuals' ? 'center 10%' : 'center' }}
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
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-yellow transition-colors drop-shadow-md" style={{ fontFamily: "'Akira Expanded', sans-serif", fontWeight: 900 }}>
                          {project.title}
                        </h3>
                        
                        <p className="font-body text-lg text-white/90 drop-shadow-md">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-yellow transition-colors">
                        <span className="text-sm font-semibold" style={{ fontFamily: "'Akira Expanded', sans-serif", fontWeight: 900 }}>View Case Study</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 bottom-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10 md:hidden"
          >
            ←
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 bottom-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10 md:hidden"
          >
            →
          </button>
          <button
            onClick={prevProject}
            className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10 hidden md:block"
          >
            ←
          </button>
          <button
            onClick={nextProject}
            className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10 hidden md:block"
          >
            →
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact section */}
      <div className="max-w-6xl mx-auto mt-24 animate-fadeIn" style={{ animationDelay: `${projects.length * 0.15}s` }}>
        <div className="glass-button p-12">
          <h2 className="text-4xl text-white mb-6" style={{ fontFamily: "'Akira Expanded', sans-serif", fontWeight: 900 }}>
            Work With Me
          </h2>
          <div className="space-y-4 font-sans text-white/90 text-lg mb-8">
            <p><strong className="text-white">Live music visuals:</strong> Custom Logo Animation / Motion Graphics / Video Loops</p>
            <p><strong className="text-white">Other services:</strong> Music Videos / Custom Audio Intros / Remixes / Touchdesigner Networks</p>
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