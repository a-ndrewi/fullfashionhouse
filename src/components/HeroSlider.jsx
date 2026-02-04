import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSlider = ({ slides, currentSlide, setCurrentSlide, setCurrentPage }) => {
  const navigate = useNavigate();
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Drag/Swipe handlers
  const handleDragStart = (e) => {
    setDragStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
  };
  const handleDragMove = (e) => {
    if (dragStartX === null) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStartX);
  };
  const handleDragEnd = () => {
    if (dragOffset > 60) {
      prevSlide();
    } else if (dragOffset < -60) {
      nextSlide();
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  return (
    <div
      className="relative h-[500px] sm:h-[600px] overflow-hidden"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      style={{ cursor: dragStartX !== null ? 'grabbing' : 'grab' }}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={idx === currentSlide && dragOffset !== 0 ? { transform: `translateX(${dragOffset}px)` } : {}}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">{slide.title}</h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">{slide.subtitle}</p>
              <button 
                onClick={() => navigate('/categorii')}
                className="bg-accent hover:bg-accent/80 text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition transform hover:scale-105 shadow-2xl"
              >
                Explorează Colecția
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Removed left/right arrow navigation buttons for a cleaner look */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
