import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoriesHome from '../components/CategoriesHome';
import FeaturedDeals from '../components/FeaturedDeals';
import QuickOfferBadge from '../components/QuickOfferBadge';
import ReviewsCarousel from '../components/ReviewsCarousel';
import { CONTACT_INFO, REVIEWS } from '../constants/data';

const HomePage = ({ slides, currentSlide, setCurrentSlide, setCurrentPage, categories, featuredDeals, whatsappLink, featuredDealIndex, setFeaturedDealIndex }) => {
  return (
    <>
      <QuickOfferBadge phoneNumber={CONTACT_INFO.phone} />
      <div className="pt-12 sm:pt-14">
        <HeroSlider 
          slides={slides} 
          currentSlide={currentSlide} 
          setCurrentSlide={setCurrentSlide}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <CategoriesHome 
        categories={categories}
      />
      <FeaturedDeals 
        featuredDeals={featuredDeals}
        featuredDealIndex={featuredDealIndex}
        setFeaturedDealIndex={setFeaturedDealIndex}
        whatsappLink={whatsappLink}
      />
      <ReviewsCarousel reviews={REVIEWS} />
    </>
  );
};

export default HomePage;
