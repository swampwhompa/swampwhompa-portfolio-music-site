import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// This component creates a fullscreen WebGL shader background
// It wraps your GLSL code in a Three.js setup so it can run in React

function ShaderBackground() {
  // useRef creates a persistent reference to the DOM element
  // It won't change between re-renders, unlike regular variables
  const mountRef = useRef(null);
  
  // useEffect runs after the component mounts (appears on screen)
  // The empty array [] means "run once when component mounts"
  useEffect(() => {
    // --- THREE.JS SETUP ---
    
    // Scene: container for all 3D objects
    const scene = new THREE.Scene();


    
    // Camera: defines the viewpoint
    // OrthographicCamera creates a flat 2D view (perfect for shaders)
    // Parameters: left, right, top, bottom, near, far
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    // Renderer: draws the scene to the canvas
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,  // Smooth edges
      alpha: true       // Transparent background (so content can layer on top)
    });
    
    // Set renderer size to fill the window
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    
    // Attach the renderer's canvas to our div element
    mountRef.current.appendChild(renderer.domElement);
    
    // --- SHADER MATERIAL ---
    
    // ShaderMaterial lets us write custom GLSL code
    const material = new THREE.ShaderMaterial({
      // Uniforms: variables we pass from JavaScript to the shader
      uniforms: {
        // iTime: elapsed time (Shadertoy uses this)
        iTime: { value: 0 },
        // iResolution: screen size (Shadertoy uses this)
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      
      // Vertex shader: runs once per vertex (corner of geometry)
      // This one just passes position through unchanged
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      
      // Fragment shader: runs once per pixel
      // This is your Shadertoy code, converted to work in Three.js
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        varying vec2 vUv;
        
        // --- YOUR SHADER CODE STARTS HERE ---
        
        // Configuration
        const float NUM_COLUMNS = 5.0;
        const float SCROLL_SPEED = 0.3;
        const float SCALE_FORCE = 0.40;
        const float GLITCH_ROWS = 150.0;
        const float GLITCH_OFFSET = 0.09;
        
        // Colors
        const vec3 c_base  = vec3(0.6, 0.63, 0.63);
        const vec3 c_light = c_base * 1.09;
        const vec3 c_dark  = c_base * 0.90;
        
        float hash12(vec2 p) {
          vec3 p3  = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }
        
        vec3 getCol(float id) {
          float type = mod(id + 3000.0, 3.0);
          if (type < 0.5) return c_light;
          if (type < 1.5) return c_dark;
          return c_base;
        }
        
        vec4 renderColumn(vec2 uv, float colID, float scaleStrength) {
          float centerScreen = (colID + 0.5 + (iTime * SCROLL_SPEED)) / NUM_COLUMNS;
          float baseWidth = 1.0 / NUM_COLUMNS;
          float actualWidth = baseWidth * max(0.1, (1.0 + scaleStrength * 2.0));
          float halfWidth = actualWidth * 0.5;
          float dist = uv.x - centerScreen;
          
          if (abs(dist) < halfWidth) {
            vec3 col = getCol(colID);
            return vec4(col, 1.0);
          }
          return vec4(0.0);
        }
        
        void main() {
          // Convert vUv (0 to 1) to fragCoord (pixel coordinates)
          vec2 fragCoord = vUv * iResolution;
          vec2 uv = fragCoord / iResolution;
          
          // --- RHYTHM ---
          float beatSpeed = 0.3;
          float time = iTime * beatSpeed;
          float beatIndex = floor(time);
          float beatTime = fract(time);
          
          float attack = smoothstep(0.0, 0.05, beatTime);
          float release = 0.9 - smoothstep(0.4, 1.2, beatTime);
          float activation = attack * release;
          
          // --- ROW IDENTIFICATION ---
          float rowID = floor(uv.y * GLITCH_ROWS);
          
          // --- BACKGROUND LAYER ---
          float gridPosBase = (uv.x * NUM_COLUMNS) - (iTime * SCROLL_SPEED);
          float bgID = floor(gridPosBase);
          
          float rndBG = hash12(vec2(rowID, (beatIndex * 43.1337) + (bgID * 13.13)));
          float dirBG = step(0.5, rndBG) * 2.0 - 1.0;
          float magBG = (fract(rndBG * 10.0) * 0.5 + 0.5);
          float glitchShiftBG = dirBG * magBG * GLITCH_OFFSET * step(0.5, rndBG) * activation;
          
          float gridPosGlitched = ((uv.x + glitchShiftBG) * NUM_COLUMNS) - (iTime * SCROLL_SPEED);
          vec3 col = getCol(floor(gridPosGlitched));
          
          // --- ACTIVE COLUMNS ---
          float beatStartTime = beatIndex / beatSpeed;
          float centerGridAtStart = (0.5 * NUM_COLUMNS) - (beatStartTime * SCROLL_SPEED);
          float centerID = floor(centerGridAtStart);
          float leftID = centerID - 1.0;
          
          // --- SCALES ---
          float dirC = step(0.5, hash12(vec2(beatIndex, 555.5))) * 2.0 - 1.0;
          float dirL = step(0.5, hash12(vec2(beatIndex, 777.7))) * 2.0 - 1.0;
          
          float forceC = (dirC > 0.0) ? SCALE_FORCE : SCALE_FORCE * 0.5;
          float scaleC = (forceC * dirC) * activation;
          
          float rndLeft = hash12(vec2(beatIndex, 101.0));
          float magL = mix(0.4, 0.8, rndLeft);
          float forceL = (dirL > 0.0) ? magL : magL * 0.5;
          float scaleL = (forceL * dirL) * activation;
          
          // --- RENDER OVERLAYS ---
          float rndL = hash12(vec2(rowID, (beatIndex * 43.1337) + (leftID * 13.13)));
          float glitchShiftL = (step(0.5, rndL) * 2.0 - 1.0) * (fract(rndL * 10.0) * 0.5 + 0.5) * GLITCH_OFFSET * step(0.5, rndL) * activation;
          vec4 overlayL = renderColumn(vec2(uv.x + glitchShiftL, uv.y), leftID, scaleL);
          if (overlayL.a > 0.0) col = overlayL.rgb;
          
          float rndC = hash12(vec2(rowID, (beatIndex * 43.1337) + (centerID * 13.13)));
          float glitchShiftC = (step(0.5, rndC) * 2.0 - 1.0) * (fract(rndC * 10.0) * 0.5 + 0.5) * GLITCH_OFFSET * step(0.5, rndC) * activation;
          vec4 overlayC = renderColumn(vec2(uv.x + glitchShiftC, uv.y), centerID, scaleC);
          if (overlayC.a > 0.0) col = overlayC.rgb;
          
          // --- POST-PROCESSING ---
          float scanline = sin(fragCoord.y * 0.8);
          col *= 0.98 + 0.02 * scanline;
          
          float noise = hash12(uv * iTime * 100.0);
          col += (noise - 0.5) * 0.05;
          
          vec3 edges = fwidth(col);
          col += edges * 1.0;
          
          col = mix(col, smoothstep(0.0, 1.0, col), 0.3);
          
          // In Three.js we use gl_FragColor instead of fragColor
          gl_FragColor = vec4(col, 1.0);
        }
      `
    });
    
    // --- GEOMETRY ---
    
    // Create a flat plane that fills the screen
    // PlaneGeometry(width, height)
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    // Mesh: combines geometry (shape) + material (appearance)
    const mesh = new THREE.Mesh(geometry, material);
    
    // Add the mesh to the scene
    scene.add(mesh);
    
    // --- ANIMATION LOOP ---
    
    // Clock tracks elapsed time
    const clock = new THREE.Clock();
    
    // animate() runs every frame (60fps)
    const animate = () => {
      // Schedule next frame
      requestAnimationFrame(animate);
      
      // Update iTime uniform with elapsed seconds
      material.uniforms.iTime.value = clock.getElapsedTime();
      
      // Render the scene from the camera's perspective
      renderer.render(scene, camera);
    };
    
    // Start the animation loop
    animate();
    
    // --- HANDLE WINDOW RESIZE ---
    
    const handleResize = () => {
     const width = window.innerWidth;
     const height = window.innerHeight;
    
     renderer.setSize(width, height);
     renderer.setPixelRatio(window.devicePixelRatio);
     renderer.domElement.style.width = '100%';
     renderer.domElement.style.height = '100%';
    
     material.uniforms.iResolution.value.set(width, height);
    
     // Force immediate render
     renderer.render(scene, camera);
   };
    
    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // This catches cases where resize event doesn't fire
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.body);
    
    // --- CLEANUP ---
    
    // This function runs when the component unmounts (disappears)
    // It cleans up resources to prevent memory leaks
    return () => {
      // Stop listening for resize
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      
      // Dispose of Three.js objects
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      
      // Remove canvas from DOM
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array = run once on mount
  
  // --- RENDER ---
  
  // Return a div that will hold the WebGL canvas
  // It's positioned fixed to cover the entire viewport
  // z-index: 0 puts it behind other content
  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'  // Let clicks pass through to content below
      }}
    />
  );
}

export default ShaderBackground;