import React from 'react';
import { ShoppingBag, X } from 'lucide-react';

const Navigation = ({ isScrolled, currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>
            <ShoppingBag className={`w-8 h-8 ${isScrolled || currentPage !== 'home' ? 'text-indigo-600' : 'text-white'}`} />
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold ${isScrolled || currentPage !== 'home' ? 'text-gray-900' : 'text-white'}`}>FullFashionHouse</h1>
              <p className={`text-xs ${isScrolled || currentPage !== 'home' ? 'text-gray-500' : 'text-white/90'}`}>Calitate Premium</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-indigo-600' : isScrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 transition font-medium`}>Acasă</button>
            <button onClick={() => setCurrentPage('prices')} className={`${currentPage === 'prices' ? 'text-indigo-600' : isScrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 transition font-medium`}>Listă Prețuri</button>
            <button onClick={() => setCurrentPage('categories')} className={`${currentPage === 'categories' ? 'text-indigo-600' : isScrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 transition font-medium`}>Categorii</button>
            <button onClick={() => setCurrentPage('contact')} className={`${currentPage === 'contact' ? 'text-indigo-600' : isScrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 transition font-medium`}>Contact</button>
          </div>
          
          {/* Mobile Burger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'}`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                currentPage === 'home' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Acasă
            </button>
            <button
              onClick={() => { setCurrentPage('prices'); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                currentPage === 'prices' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Listă Prețuri
            </button>
            <button
              onClick={() => { setCurrentPage('categories'); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                currentPage === 'categories' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Categorii
            </button>
            <button
              onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                currentPage === 'contact' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
