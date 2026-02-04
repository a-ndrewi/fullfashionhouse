import React, { useState, useRef, useEffect } from 'react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
    title: 'Depozit Haine Second Hand',
    subtitle: 'Produse de Calitate 1 + Extra'
  },
  {
    url: 'https://images.pexels.com/photos/7543641/pexels-photo-7543641.jpeg?_gl=1*q361jw*_ga*MTM1Mzc1NzIyMS4xNzY1NTMxOTYx*_ga_8JE65Q40S6*czE3NjU1MzE5NjAkbzEkZzEkdDE3NjU1MzIzMDIkajU5JGwwJGgw',
    title: 'Încălțăminte Premium',
    subtitle: 'Provenință Austria - Calitate Superioară'
  },
  {
    url: 'https://images.pexels.com/photos/7679659/pexels-photo-7679659.jpeg?_gl=1*1nuvpyj*_ga*MTM1Mzc1NzIyMS4xNzY1NTMxOTYx*_ga_8JE65Q40S6*czE3NjU1MzE5NjAkbzEkZzEkdDE3NjU1MzI2MDQkajYwJGwwJGgw',
    title: 'Haine Damă & Bărbați',
    subtitle: 'Sortimente Diverse - Prețuri Avantajoase'
  }
];

const HeroSlider = ({ slides, currentSlide, setCurrentSlide, setCurrentPage }) => {
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
    let swiped = false;
    if (dragOffset > 60) {
      prevSlide();
      swiped = true;
    } else if (dragOffset < -60) {
      nextSlide();
      swiped = true;
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
                onClick={() => setCurrentPage('categories')}
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
