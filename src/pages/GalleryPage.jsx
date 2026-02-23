import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  'https://i.imgur.com/VSs4aJD.jpeg',
  'https://i.imgur.com/RVez1cY.jpeg',
];

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-10 sm:mb-14">
          <Camera className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 text-accent" />
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-5">
            Galerie Foto
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-primary/60 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Vă invităm să vizionați galeria foto ce reprezintă stocul produselor noastre
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {GALLERY_IMAGES.map((src, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`Galerie foto ${idx + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  {idx + 1} / {GALLERY_IMAGES.length}
                </span>
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-50"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all z-50"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all z-50"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <img
            src={GALLERY_IMAGES[lightboxIndex]}
            alt={`Galerie foto ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {GALLERY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                className={`rounded-full transition-all duration-300 ${
                  idx === lightboxIndex ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
