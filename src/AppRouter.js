import React, { useState, useEffect } from 'react';
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
import { SLIDES, CATEGORIES, FEATURED_DEALS, CATEGORIES_DATA, CONTACT_INFO, getWhatsappLink } from './constants/data';
import { useScrollPosition, useSlideAutoScroll, useDealPopup } from './hooks';

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    // Only scroll to top if not navigating to a specific category
    if (!(pathname === '/categorii' && state && state.selectedCategory)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, state]);
  return null;
}

const AppRouter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCookies, setShowCookies] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const [showDealPopup, setShowDealPopup] = useDealPopup();
  // Auto-slide for HeroSlider
  useSlideAutoScroll(SLIDES, setCurrentSlide);
  // Auto-slide for FeaturedDeals
  const [featuredDealIndex, setFeaturedDealIndex] = useState(0);
  useSlideAutoScroll([1,2,3,4,5], setFeaturedDealIndex); // 5 featured deals
  useEffect(() => {
    document.title = 'FullFashionHouse - Haine Second Hand Premium';
  }, []);
  const whatsappLink = getWhatsappLink();

  // useLocation must be called inside Router context, so wrap Routes in a child component
  function RoutedPages() {
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
        <Route path="/termeni-conditii-cookie-uri" element={<LegalPage />} />
      </Routes>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navigation 
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <RoutedPages />
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
