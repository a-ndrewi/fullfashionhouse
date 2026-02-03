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
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Custom hooks
  const isScrolled = useScrollPosition();
  const [showDealPopup, setShowDealPopup] = useDealPopup();
  
  useSlideAutoScroll(SLIDES, setCurrentSlide);

  // Setup page title and favicon
  useEffect(() => {
    document.title = 'FullFashionHouse - Haine Second Hand Premium';
    
    // Create and update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  const whatsappLink = getWhatsappLink();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation 
        isScrolled={isScrolled}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Page Content */}
      {currentPage === 'home' && (
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
      
      {currentPage === 'prices' && (
        <PriceListPage whatsappLink={whatsappLink} />
      )}
      
      {currentPage === 'categories' && (
        <CategoriesPage 
          categoriesData={CATEGORIES_DATA}
          whatsappLink={whatsappLink}
          contactInfo={CONTACT_INFO}
          setCurrentPage={setCurrentPage}
        />
      )}
      
      {currentPage === 'contact' && (
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
