import React from 'react';
import { projects } from './portfolioData';

// Project Detail Component
// This shows the full case study for a selected project
function ProjectDetail({ setCurrentPage, projectId }) {
  
  // Get the current project data
  const project = projects.find(p => p.id === projectId);
  
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
            {project.detailPage.category} · {project.detailPage.year}
          </span>
        </div>
        
        <h1 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
          {project.detailPage.title}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.detailPage.tags?.map((tag, i) => (
            <span 
              key={i} 
              className="font-body text-sm text-white/90 px-4 py-2 rounded-full border border-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="font-body text-xl text-white/90 leading-relaxed drop-shadow-lg">
          {project.detailPage.overview}
        </p>
      </div>
      
      {/* Main content grid */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className={
          `grid gap-8 ${project.detailPage.image ? 'md:grid-cols-2' : 'grid-cols-1'}`}
        >

        {/* Video embed - full width for 16:9 */}
        <div 
          className="animate-fadeInUp glass-button p-4 rounded-2xl mb-8"
          style={{ animationDelay: '0.2s' }}
        >
          <div className={
            `rounded-lg overflow-hidden ${project.id === '404-delay' ? 'aspect-[9/16]' : 'aspect-video'}`}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.detailPage.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

      {/* Conditional rendering based on project type */}
      {project.detailPage.image && (
        // Plugin screenshot (for 404 Delay)
        <div 
          className="animate-fadeInUp glass-button p-4 rounded-2xl"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="aspect-[9/16] overflow-hidden rounded-lg">
          <img 
            src={project.detailPage.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        </div>
      )}
      </div>
      
      {project.detailPage.btsImages && (
        // BTS grid (for Heavy Seas)
        <div 
          className="grid grid-cols-2 gap-6 animate-fadeInUp"
          style={{ animationDelay: '0.3s' }}
        >
          {project.detailPage.btsImages.map((img, i) => (
            <div key={i} className="glass-button p-4 rounded-2xl">
              <img 
                src={img}
                alt={`Behind the scenes ${i + 1}`}
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </div>

    
      
      {/* Technical breakdown */}
      <div className="max-w-5xl mx-auto mb-16 space-y-8">
        <h2 
          className="font-heading text-4xl font-bold text-white mb-8 animate-fadeInUp drop-shadow-lg"
          style={{ animationDelay: '0.4s' }}
        >
          Technical Implementation
        </h2>
        
        {project.detailPage.technical.map((section, index) => (
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
            {project.detailPage.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-yellow mt-1">✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* CTA */}
      {project.detailPage.purchaseLink && (
        <div className="max-w-5xl mx-auto">
          <div className="glass-button p-12 text-center animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            <h2 className="font-heading text-4xl font-bold text-white mb-4 drop-shadow-lg">Get the Plugin</h2>
            <a href={project.detailPage.purchaseLink} target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-4 bg-yellow text-text font-body font-bold text-lg rounded-lg">Purchase on Gumroad</a>
          </div>
        </div>
      )}
    </div>
  
  );
}

export default ProjectDetail;