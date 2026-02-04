import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-lg' : 'bg-background/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { navigate('/acasa'); setMobileMenuOpen(false); }}>
            <ShoppingBag className={`w-8 h-8 ${isScrolled ? 'text-accent' : 'text-primary'}`} />
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-primary/80'}`}>FullFashionHouse</h1>
              <p className={`text-xs ${isScrolled ? 'text-primary/60' : 'text-primary/40'}`}>Calitate Premium</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => navigate('/acasa')} className={`${currentPath === '/acasa' ? 'text-accent' : isScrolled ? 'text-primary' : 'text-primary/80'} hover:text-accent transition font-medium`}>Acasă</button>
            <button onClick={() => navigate('/lista-preturi')} className={`${currentPath === '/lista-preturi' ? 'text-accent' : isScrolled ? 'text-primary' : 'text-primary/80'} hover:text-accent transition font-medium`}>Listă Prețuri</button>
            <button onClick={() => navigate('/categorii')} className={`${currentPath === '/categorii' ? 'text-accent' : isScrolled ? 'text-primary' : 'text-primary/80'} hover:text-accent transition font-medium`}>Categorii</button>
            <button onClick={() => navigate('/contact')} className={`${currentPath === '/contact' ? 'text-accent' : isScrolled ? 'text-primary' : 'text-primary/80'} hover:text-accent transition font-medium`}>Contact</button>
          </div>
          
          {/* Mobile Burger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-primary' : 'text-primary/80'}`}
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
        <div className="md:hidden bg-background border-t border-primary/10 shadow-lg">
          <div className="px-2 py-2 space-y-2">
            <button
              onClick={() => { navigate('/acasa'); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition text-base ${
                currentPath === '/acasa' ? 'bg-accent/10 text-accent' : 'text-primary hover:bg-background/80'
              }`}
            >
              Acasă
            </button>
            <button
              onClick={() => { navigate('/lista-preturi'); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition text-base ${
                currentPath === '/lista-preturi' ? 'bg-accent/10 text-accent' : 'text-primary hover:bg-background/80'
              }`}
            >
              Listă Prețuri
            </button>
            <button
              onClick={() => { navigate('/categorii'); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition text-base ${
                currentPath === '/categorii' ? 'bg-accent/10 text-accent' : 'text-primary hover:bg-background/80'
              }`}
            >
              Categorii
            </button>
            <button
              onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition text-base ${
                currentPath === '/contact' ? 'bg-accent/10 text-accent' : 'text-primary hover:bg-background/80'
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
