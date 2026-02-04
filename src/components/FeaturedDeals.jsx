import React, { useState, useRef, useEffect } from 'react';

const lots = [
  { tag: 'Ofertă Limitată', item: 'Loturi Haine Damă', price: 'de la 5,50 RON/kg' },
  { tag: 'Promoție', item: 'Loturi Încălțăminte', price: 'de la 6,00 RON/kg' },
  { tag: 'Super Preț', item: 'Loturi Geci & Jachete', price: 'de la 8,50 RON/kg' },
  { tag: 'Noutate', item: 'Loturi Haine Copii', price: 'de la 4,50 RON/kg' },
  { tag: 'Stoc Nou', item: 'Loturi Accesorii', price: 'de la 3,00 RON/kg' },
];

const FeaturedDeals = () => {
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef();
  const autoSwipeRef = useRef();

  // Auto-swipe effect
  // Helper to start auto-swipe with delay
  const startAutoSwipe = () => {
    if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
    autoSwipeRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % lots.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSwipe();
    return () => clearInterval(autoSwipeRef.current);
    // eslint-disable-next-line
  }, []);

  // Handle drag start
  const handleDragStart = (e) => {
    setDragStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
    if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
  };

  // Handle drag move
  const handleDragMove = (e) => {
    if (dragStartX === null) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStartX);
  };

  // Handle drag end
  const handleDragEnd = () => {
    let swiped = false;
    if (dragOffset > 60) {
      setCurrent((prev) => (prev - 1 + lots.length) % lots.length);
      swiped = true;
    } else if (dragOffset < -60) {
      setCurrent((prev) => (prev + 1) % lots.length);
      swiped = true;
    }
    setDragStartX(null);
    setDragOffset(0);
    // Restart auto-swipe with delay after swipe
    setTimeout(() => {
      startAutoSwipe();
    }, swiped ? 4000 : 0);
  };

  // Get visible lots (3 at a time, center is current)
  // Pause auto-swipe and restart with delay when current changes (from auto or manual)
  useEffect(() => {
    if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
    const timeout = setTimeout(() => {
      startAutoSwipe();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [current]);

  const getVisibleLots = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      visible.push(lots[(current + i + lots.length) % lots.length]);
    }
    return visible;
  };

  return (
    <div className="bg-primary py-12 select-none">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-background text-center">
            Fidelizează-te acum! <span className="text-yellow-300">10% reducere</span> la toate produsele din stoc – doar luna aceasta!
          </h2>
        </div>
        <div
          className="flex justify-center items-center relative w-full"
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{ cursor: dragStartX !== null ? 'grabbing' : 'grab', minHeight: 260 }}
        >
          <div className="flex w-full max-w-2xl justify-center items-center transition-transform duration-300" style={{ transform: `translateX(${dragOffset}px)` }}>
            {getVisibleLots().map((lot, idx) => (
              <div
                key={lot.item}
                className={`bg-background rounded-xl p-6 text-center mx-2 transition-all duration-300 ${idx === 1 ? 'scale-105 z-10' : 'scale-95 z-0'} ${idx !== 1 ? 'blur-sm opacity-60' : ''}`}
                style={{ minWidth: 240, maxWidth: 320 }}
              >
                <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {lot.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{lot.item}</h3>
                <p className="text-2xl sm:text-3xl font-black text-accent mb-2">{lot.price}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Removed navigation buttons for a cleaner look */}
      </div>
    </div>
  );
};

export default FeaturedDeals;
