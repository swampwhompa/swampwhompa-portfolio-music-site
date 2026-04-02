import React from 'react';
import { useNavigate } from 'react-router-dom';

function MusicPage() {
  const navigate = useNavigate();

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
        onClick={() => navigate('/')}
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

      {/* Bio section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-heading text-4xl font-bold text-white mb-8 drop-shadow-lg">
          Bio
        </h2>
      <div className="max-w-6xl mx-auto mb-26">
        <div className="glass-button p-8 animate-fadeIn">
          <p className="font-body text-xl text-white leading-relaxed mb-4 drop-shadow-lg">
            SwampWhompa is Baltimore musician  Dennis Cornell's long-time solo electronic music endeavor. What started as explorations in instrumental hip-hop, IDM and video game-inspired jams has bloomed over the last few years into a grimy, yet club-forward powerhouse, inspired by the cornucopia that is the UK Bass music scene.
          </p>
          <p className="font-body text-xl text-white leading-relaxed mb-4 drop-shadow-lg">
            SwampWhompa is nothing without its mascot - Harold, or simply 'the Whompa'. He's a cute yeti-like creature that swings between virtuous and mischievous. SwampWhompa's music videos and assorted media give us an increasingly defined view into the character as he finds himself in ever more chaotic scenarios. Cornell animates these videos himself, further defining his glitchy, analog flavored aesthetic and plans on adding to the universe with further releases.
          </p>
          <p className="font-body text-xl text-white leading-relaxed drop-shadow-lg">
            SwampWhompa is currently slated to perform his first festival show this summer at the Neon Waves festival in St. Mary's County, MD. He plans to follow the show with more releases, more remixes and as always - more Whompa.
          </p>
          </div>
        </div>
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

export default MusicPage;