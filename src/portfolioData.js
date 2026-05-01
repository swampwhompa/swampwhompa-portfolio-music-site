import allswellThumb from './assets/allswell-thumb.png'; // You'll need a thumbnail
import allswellGif from './assets/allswell-visuals.gif';
import whompafloat from './assets/whompafloat.png';
import DesignThumb from './assets/DesignThumb.mp4';
import MusicThumb from './assets/MusicThumb.mp4';

import pluginImage from './assets/Filthy404Screenshot.jpg';

import pluginImageThumb from './assets/Filthy404ScreenshotThumb.jpg';

// Portfolio projects array
// Each object represents one project with all its data
export const projects = [
  {
    id: 'allswell-visuals',
    title: "Allswell - Visual Content",
    description: "Music video, live show visuals, and motion graphics for Baltimore metal band",
    category: "Music Video & VFX",
    year: "2024-present",
    tags: ["Music Video", "Live Visuals", "Motion Graphics", "3D"],
    image: allswellThumb,
    
    detailPage: {
     category: "Music Video & VFX",
      year: "2024-present",
      tags: ["Blender", "Music Video", "VFX", "3D"],
      videoId: "hkHs9eBBcTs", // Main music video
      purchaseLink: null,
      additionalVideos: [
        { id: "BwG0FELMpQc", title: "Lyric Video Background" }
      ],
      liveVisualsGif: allswellGif,
      
      overview: "In Allswell's own words - 'you've become very important to the visual language of the band at this point'. Since the band's inception, I've provided my visual expertise to their live performances and music videos, relying on a dusty, textured and worn aesthetic that matches their strained, yet timeless style of hardcore/metal.",
      
      technical: [
        {
          heading: " 'Static' -  Music Video Production",
          content: "Directed and produced the full music video, combining live performance footage with motion tracked composite shots. The visual approach emphasizes texture and atmosphere, using practical lighting techniques and post-processing to create a harsh quality that complements the band's introspective songwriting."
        },
        {
          heading: "'For the Dream' - Lyric Video",
          content: "Developed animated backgrounds for 'For the Dream' lyric video. Created 3D assets, camera motion, dust fx and indoor environments to match the EP's floral album art."
        }
      ],
      
      features: [
        "Full music video direction and post-production",
        "Real-time reactive visuals for live performances",
        "Custom motion graphics and lyric video backgrounds",
        "Cohesive visual identity across all content",
        "Integration with live show technical requirements"
      ]
    }
  }
,
  {
    // Basic info (shows in portfolio grid)
    id: 'swampwhompa-visuals',
    title: "SwampWhompa - Visual Content",
    description: "Music videos, visualizers, and animated loops for my EDM solo project",
    category: "Music Videos & VFX",
    year: "2022 - Present",
    tags: ["Blender", "Music Video", "VFX", "3D"],
    image: whompafloat,
    
    // Detail page data (shows on project detail page)
    detailPage: {
      category: "Music Videos & VFX",
      year: "2022 - Present",
      tags: ["Blender", "Music Video", "VFX", "3D"],
      videoId: "QTqNOE2DTss", // Main YouTube video
      videoAspect: "16/9",
      purchaseLink: null,
      additionalVideos: [
        { id: "EFXLepdz8Iw", title: "Additional Music Video" }
      ],
      
      loopingVideos: [
        { src: DesignThumb, title: "Design Visual Loop" },
        { src: MusicThumb, title: "Music Visual Loop" }
      ],
      
      overview: "Since its creation, my EDM solo project SwampWhompa and my penchant for 3D visuals and whimsical animation have been joined at the hip. I've directed and animated every music video, programmed every visualizer and designed every loop for my live performances from the ground up. I've used SwampWhompa as a testing ground not only for my sonic vocabulary, but also my visual and aesthetic sense, which I hope to bring to many other projects in the years to come.",
      
      technical: [
        {
          heading: "3D Character Animation",
          content: "Created and animated Harold, the SwampWhompa mascot, using Blender's rigging and animation tools. The character serves as a visual anchor across all music videos and promotional materials, providing consistency and brand recognition."
        },
        {
          heading: "Audio-Visual Programming",
          content: "Developed custom visualizers and reactive animations that respond to audio input in real-time. These systems create dynamic, synchronized visuals for live performances that adapt to the energy and structure of each track."
        }
      ],
      
      features: [
        "Original 3D character design and animation",
        "Custom audio-reactive visual systems",
        "Complete music video production pipeline",
        "Live performance visual programming",
        "Cohesive visual brand identity",
        "Cross-platform video optimization"
      ]
    }
  }
,
  {
    // Basic info (shows in portfolio grid)
    id: '404-delay',  // Unique identifier, used in URLs
    title: "Filthy 404 Delay",
    description: "Audio plugin recreating the iconic glitchy delay from the SP-404SX",
    category: "Audio Development",
    year: "2026",
    tags: ["C++", "JUCE", "DSP", "Plugin Development"],
    image: pluginImageThumb,  // Shows in portfolio grid
    
    // Detail page data (shows on project detail page)
    detailPage: {
      category: "Audio Development",
      year: "2026",  
      image: pluginImage,  // Full-size image for detail page
      videoId: "sMfukpJhHWw",  // YouTube video ID
      videoAspect: "9/16",
      tags: ["C++", "JUCE", "DSP", "Plugin Development"],
      purchaseLink: "https://swampwhompa.gumroad.com/l/Filthy404Delay",
      
      overview: "The Filthy 404 Delay is a faithful recreation of the beat delay effect from Roland's iconic SP-404SX sampler. What makes this plugin unique is its embrace of the original hardware's quirky buffer behavior—rather than smoothing out artifacts, it captures and amplifies the glitchy, stuttering character that made the 404 a staple in lo-fi hip-hop production.",
      
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
  }
];
