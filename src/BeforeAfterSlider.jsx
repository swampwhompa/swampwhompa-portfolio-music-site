import React, { useState, useRef, useEffect } from 'react';

function BeforeAfterSlider({ beforeSrc, afterSrc }) {
  const [sliderPosition, setSliderPosition] = useState(85);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-16">
      {/* Subtle indicator */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-sans animate-pulse">
          ← Drag to compare →
        </div>
      </div>

      {/* Slider container */}
      <div 
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
        style={{ aspectRatio: '16/9' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* After video (left side) */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src={afterSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-sans">
            After
          </div>
        </div>

        {/* Before video (right side) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        >
          <video
            className="w-full h-full object-cover"
            src={beforeSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-sans">
            Before
          </div>
        </div>

        {/* Slider line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider handle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-gray-600"></div>
              <div className="w-0.5 h-4 bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;
