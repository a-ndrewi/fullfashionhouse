import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import DealPopup from './components/DealPopup';
import AppRoutes from './AppRoutes';

import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ContactPage from './pages/ContactPage';
import PriceListPage from './pages/PriceListPage';
import LegalPage from './pages/LegalPage';

import { 
  SLIDES, 
  CATEGORIES, 
  FEATURED_DEALS, 
  CATEGORIES_DATA, 
  CONTACT_INFO, 
  getWhatsappLink 
} from './constants/data';
import { useScrollPosition, useSlideAutoScroll, useDealPopup } from './hooks';

import AppRouter from './AppRouter';

const SecondHandDepot = () => <AppRouter />;

export default SecondHandDepot;
