import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ContactPage from './pages/ContactPage';
import PriceListPage from './pages/PriceListPage';
import LegalPage from './pages/LegalPage';
import GalleryPage from './pages/GalleryPage';

const AppRoutes = ({
  slides,
  currentSlide,
  setCurrentSlide,
  setCurrentPage,
  categories,
  featuredDeals,
  whatsappLink,
  categoriesData,
  contactInfo,
  showDealPopup,
  setShowDealPopup,
  showCookies,
  setShowCookies,
  mobileMenuOpen,
  setMobileMenuOpen,
  isScrolled
}) => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/acasa" replace />} />
      <Route path="/acasa" element={
        <HomePage 
          slides={slides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          setCurrentPage={setCurrentPage}
          categories={categories}
          featuredDeals={featuredDeals}
          whatsappLink={whatsappLink}
        />
      } />
      <Route path="/lista-preturi" element={<PriceListPage whatsappLink={whatsappLink} />} />
      <Route path="/categorii" element={
        <CategoriesPage 
          categoriesData={categoriesData}
          whatsappLink={whatsappLink}
          contactInfo={contactInfo}
          setCurrentPage={setCurrentPage}
        />
      } />
      <Route path="/contact" element={<ContactPage contactInfo={contactInfo} whatsappLink={whatsappLink} />} />
      <Route path="/galerie-foto" element={<GalleryPage />} />
      <Route path="/termeni-conditii-cookie-uri" element={<LegalPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
