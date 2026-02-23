import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import DealPopup from './components/DealPopup';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ContactPage from './pages/ContactPage';
import PriceListPage from './pages/PriceListPage';
import LegalPage from './pages/LegalPage';
import GalleryPage from './pages/GalleryPage';
import { SLIDES, CATEGORIES, FEATURED_DEALS, CATEGORIES_DATA, CONTACT_INFO, getWhatsappLink } from './constants/data';
import { useScrollPosition, useSlideAutoScroll, useDealPopup } from './hooks';

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
  
    if (!(pathname === '/categorii' && state && state.selectedCategory)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, state]);
  return null;
}


const RoutedPages = React.memo(({ 
  currentSlide, 
  setCurrentSlide, 
  featuredDealIndex, 
  setFeaturedDealIndex, 
  whatsappLink 
}) => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/acasa" replace />} />
      <Route path="/acasa" element={
        <HomePage 
          slides={SLIDES}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          setCurrentPage={() => {}}
          categories={CATEGORIES}
          featuredDeals={FEATURED_DEALS}
          featuredDealIndex={featuredDealIndex}
          setFeaturedDealIndex={setFeaturedDealIndex}
          whatsappLink={whatsappLink}
        />
      } />
      <Route path="/lista-preturi" element={<PriceListPage whatsappLink={whatsappLink} />} />
      <Route path="/categorii" element={
        <CategoriesPage 
          categoriesData={CATEGORIES_DATA}
          whatsappLink={whatsappLink}
          contactInfo={CONTACT_INFO}
          setCurrentPage={() => {}}
          selectedCategory={location.state && location.state.selectedCategory}
        />
      } />
      <Route path="/contact" element={<ContactPage contactInfo={CONTACT_INFO} whatsappLink={whatsappLink} />} />
      <Route path="/galerie-foto" element={<GalleryPage />} />
      <Route path="/termeni-conditii-cookie-uri" element={<LegalPage />} />
    </Routes>
  );
});

const AppRouter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCookies, setShowCookies] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const [showDealPopup, setShowDealPopup] = useDealPopup();

  useSlideAutoScroll(SLIDES, setCurrentSlide);
  
  const [featuredDealIndex, setFeaturedDealIndex] = useState(0);
  useSlideAutoScroll([1,2,3,4,5], setFeaturedDealIndex);
  useEffect(() => {
    document.title = 'FullFashionHouse - Depozit Haine Second Hand';
  }, []);
  const whatsappLink = useMemo(() => getWhatsappLink(), []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navigation 
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <RoutedPages 
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          featuredDealIndex={featuredDealIndex}
          setFeaturedDealIndex={setFeaturedDealIndex}
          whatsappLink={whatsappLink}
        />
        <DealPopup 
          showDealPopup={showDealPopup}
          setShowDealPopup={setShowDealPopup}
          whatsappLink={whatsappLink}
          currentPage={"home"}
        />
        <FloatingWhatsApp whatsappLink={whatsappLink} />
        <CookieConsent 
          showCookies={showCookies}
          setShowCookies={setShowCookies}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
