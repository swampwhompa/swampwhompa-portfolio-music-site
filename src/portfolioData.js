import pluginImage from './assets/Filthy404Screenshot.jpg';

import pluginImageThumb from './assets/Filthy404ScreenshotThumb.jpg';
import beerAdThumb from './assets/beerAdThumb.jpg';

import heavySeasBTS1 from './assets/BeerAdBTS1.png';
import heavySeasBTS2 from './assets/BeerAdBTS2.png';
import heavySeasBTS3 from './assets/BeerAdBTS3.png';
import heavySeasBTS4 from './assets/BeerAdBTS4.png';

// Portfolio projects array
// Each object represents one project with all its data
export const projects = [
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

  ,
  {
    id: 'heavy-seas-ad',
    title: "Heavy Seas Beer Ad",
    description: "Character animation and VFX for Maryland craft beer brand",
    category: "Animation & VFX",
    year: "2025",
    tags: ["Blender", "Character Animation", "VFX", "3D"],
    image: beerAdThumb,
    
    detailPage: {
      videoId: "UJbIbekHHFw",
      category: "Animation & VFX",
      year: "2025",
      tags: ["Blender", "Character Animation", "VFX", "3D"],
      purchaseLink: null,  // No purchase link for client work
      btsImages: [heavySeasBTS1, heavySeasBTS2, heavySeasBTS3, heavySeasBTS4],
      
      overview: "Over the summer of 2025, I landed one of the coolest freelance projects of my career: creating an ad and social campaign for local craft beer titan Heavy Seas Beer. Their nautical, sea-faring aesthetic is quintessentially Maryland, and I knew I had to lean into it hard. The result is a short animation where I threw every trick in the book at it—volumetric lighting, character rigging, rope physics, smoke and spark simulations. The skeleton character, inspired by their iconic Loose Cannon bottle art, really jumps off the screen. Heavy Seas loved it, and I hope you do too.",
      
      technical: [
        {
          heading: "Character Rigging & Animation",
          content: "The skeleton character was rigged with a full IK/FK bone structure, allowing for dynamic poses and natural movement. Careful weight painting ensured smooth deformation during animation, while maintaining the stylized, cartoony aesthetic that matches Heavy Seas' brand identity."
        },
        {
          heading: "Volumetric Lighting & Atmosphere",
          content: "Volumetric lighting creates the moody, dramatic atmosphere throughout the piece. Light scattering through the fog and smoke adds depth and draws attention to the hero product shots, while maintaining the nautical, mysterious vibe."
        },
        {
          heading: "Physics Simulations",
          content: "Multiple simulation systems were layered together: rope physics for realistic rigging movement, particle systems for smoke and sparks, and rigid body dynamics for interactive elements. Each simulation was carefully art-directed to maintain visual appeal while staying physically plausible."
        }
      ],
      
      features: [
        "Full character rigging and animation",
        "Volumetric lighting and atmosphere",
        "Rope physics simulation",
        "Smoke and spark particle systems",
        "Product-focused cinematography",
        "Brand-aligned art direction"
      ]
    }
  }

];

