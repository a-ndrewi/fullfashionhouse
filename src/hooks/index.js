import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return isScrolled;
};

export const useSlideAutoScroll = (slides, setCurrentSlide) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, setCurrentSlide]);
};

export const useDealPopup = () => {
  const [showDealPopup, setShowDealPopup] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => setShowDealPopup(true), 3000);
    return () => clearTimeout(popupTimer);
  }, []);

  return [showDealPopup, setShowDealPopup];
};
