import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Calculate visible reviews for desktop (3 cards)
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Zeci de clienți mulțumiți ne recomandă pentru calitatea produselor și serviciilor noastre
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">5.0</span>
            <span className="text-primary/60">({reviews.length}+ recenzii)</span>
          </div>
        </div>

        {/* Desktop: 3 Cards View */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-3 gap-6">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-accent/20" />
                </div>
                
                <p className="text-primary/80 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{review.name}</p>
                    <p className="text-sm text-primary/60">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-accent hover:text-white text-accent rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-accent hover:text-white text-accent rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile: Single Card View */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-accent/20" />
            </div>
            
            <p className="text-primary/80 mb-6 leading-relaxed italic">
              "{reviews[currentIndex].text}"
            </p>
            
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                {reviews[currentIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-primary">{reviews[currentIndex].name}</p>
                <p className="text-sm text-primary/60">{reviews[currentIndex].date}</p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevReview}
              className="bg-white hover:bg-accent hover:text-white text-accent rounded-full p-2 shadow-lg transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToReview(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex 
                      ? 'w-8 h-2 bg-accent' 
                      : 'w-2 h-2 bg-gray-300 hover:bg-accent/50'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextReview}
              className="bg-white hover:bg-accent hover:text-white text-accent rounded-full p-2 shadow-lg transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Dots Navigation */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToReview(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex 
                  ? 'w-8 h-2 bg-accent' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-accent/50'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsCarousel;
