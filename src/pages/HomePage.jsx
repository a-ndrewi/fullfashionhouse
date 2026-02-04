import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoriesHome from '../components/CategoriesHome';
import FeaturedDeals from '../components/FeaturedDeals';

const HomePage = ({ slides, currentSlide, setCurrentSlide, setCurrentPage, categories, featuredDeals, whatsappLink }) => {
  return (
    <>
      <HeroSlider 
        slides={slides} 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide}
        setCurrentPage={setCurrentPage}
      />
      <CategoriesHome 
        categories={categories}
      />
      <FeaturedDeals 
        featuredDeals={featuredDeals}
        whatsappLink={whatsappLink}
      />
    </>
  );
};

export default HomePage;
