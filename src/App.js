import React, { useState, useEffect } from 'react';

// Components
import Navigation from './components/Navigation';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import DealPopup from './components/DealPopup';

// Pages
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ContactPage from './pages/ContactPage';
import PriceListPage from './pages/PriceListPage';

// Constants and Hooks
import { 
  SLIDES, 
  CATEGORIES, 
  FEATURED_DEALS, 
  CATEGORIES_DATA, 
  CONTACT_INFO, 
  getWhatsappLink 
} from './constants/data';
import { useScrollPosition, useSlideAutoScroll, useDealPopup } from './hooks';

const SecondHandDepot = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCookies, setShowCookies] = useState(true);
  // currentPage can be string or { page, category }
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Custom hooks
  const isScrolled = useScrollPosition();
  const [showDealPopup, setShowDealPopup] = useDealPopup();
  
  useSlideAutoScroll(SLIDES, setCurrentSlide);

  // Setup page title and favicon
  useEffect(() => {
    document.title = 'FullFashionHouse - Haine Second Hand Premium';
  }, []);


  // Scroll to top on page change or refresh
  const pageKey = typeof currentPage === 'string' ? currentPage : currentPage.page;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageKey]);

  const whatsappLink = getWhatsappLink();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        isScrolled={isScrolled}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Page Content */}
      {(currentPage === 'home' || (typeof currentPage === 'object' && currentPage.page === 'home')) && (
        <HomePage 
          slides={SLIDES}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          setCurrentPage={setCurrentPage}
          categories={CATEGORIES}
          featuredDeals={FEATURED_DEALS}
          whatsappLink={whatsappLink}
        />
      )}

      {(currentPage === 'prices' || (typeof currentPage === 'object' && currentPage.page === 'prices')) && (
        <PriceListPage whatsappLink={whatsappLink} />
      )}

      {(currentPage === 'categories' || (typeof currentPage === 'object' && currentPage.page === 'categories')) && (
        <CategoriesPage 
          categoriesData={CATEGORIES_DATA}
          whatsappLink={whatsappLink}
          contactInfo={CONTACT_INFO}
          setCurrentPage={setCurrentPage}
          selectedCategory={typeof currentPage === 'object' ? currentPage.category : null}
        />
      )}

      {(currentPage === 'contact' || (typeof currentPage === 'object' && currentPage.page === 'contact')) && (
        <ContactPage 
          contactInfo={CONTACT_INFO}
          whatsappLink={whatsappLink}
        />
      )}

      {/* Deal Popup */}
      <DealPopup 
        showDealPopup={showDealPopup}
        setShowDealPopup={setShowDealPopup}
        whatsappLink={whatsappLink}
        currentPage={currentPage}
      />

      {/* WhatsApp Floating Button */}
      <FloatingWhatsApp whatsappLink={whatsappLink} />

      {/* Cookie Consent */}
      <CookieConsent 
        showCookies={showCookies}
        setShowCookies={setShowCookies}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SecondHandDepot;
