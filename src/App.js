import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, X, MessageCircle, Sparkles, Tag, TrendingUp, FileText } from 'lucide-react';

const SecondHandDepot = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDealPopup, setShowDealPopup] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Google Sheets Integration
  const [priceList, setPriceList] = useState([]);
  const [loadingPrices, setLoadingPrices] = useState(true);
  const [priceError, setPriceError] = useState(null);

  // Hero slider images
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
      title: 'Depozit Haine Second Hand',
      subtitle: 'Produse de Calitate 1 + Extra'
    },
    {
      url: 'https://images.pexels.com/photos/7543641/pexels-photo-7543641.jpeg?_gl=1*q361jw*_ga*MTM1Mzc1NzIyMS4xNzY1NTMxOTYx*_ga_8JE65Q40S6*czE3NjU1MzE5NjAkbzEkZzEkdDE3NjU1MzIzMDIkajU5JGwwJGgw',
      title: 'Încălțăminte Premium',
      subtitle: 'Provenință Austria - Calitate Superioară'
    },
    {
      url: 'https://images.pexels.com/photos/7679659/pexels-photo-7679659.jpeg?_gl=1*1nuvpyj*_ga*MTM1Mzc1NzIyMS4xNzY1NTMxOTYx*_ga_8JE65Q40S6*czE3NjU1MzE5NjAkbzEkZzEkdDE3NjU1MzI2MDQkajYwJGwwJGgw',
      title: 'Haine Damă & Bărbați',
      subtitle: 'Sortimente Diverse - Prețuri Avantajoase'
    }
  ];

  const categories = [
    { name: 'Încălțăminte', icon: '👟', count: '200+ produse' },
    { name: 'Jachete & Geci', icon: '🧥', count: '150+ produse' },
    { name: 'Rochii & Fuste', icon: '👗', count: '180+ produse' },
    { name: 'Accesorii', icon: '👜', count: '120+ produse' }
  ];

  const featuredDeals = [
    { item: 'Loturi Haine Damă', discount: '40%', price: 'de la 5,50 RON/kg', tag: 'Ofertă Limitată' },
    { item: 'Loturi Încălțăminte', discount: '35%', price: 'de la 6,00 RON/kg', tag: 'Promoție' },
    { item: 'Loturi Geci & Jachete', discount: '50%', price: 'de la 8,50 RON/kg', tag: 'Super Preț' }
  ];

  // Fetch data from Google Sheets
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoadingPrices(true);
        const sheetId = '1-g-2Rq2zlHej3y03VIqWDw4Ajo4mu95xTYW2_KJFciw';
        
        // Use the published CSV format for public sheets
        const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
        
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        
        // Parse CSV
        const rows = csvText.split('\n').slice(1); // Skip header row
        const items = rows
          .filter(row => row.trim())
          .map(row => {
            const columns = row.split(',');
            return {
              code: columns[0]?.trim() || '',
              name: columns[1]?.trim() || '',
              price: columns[2]?.trim() || '0'
            };
          })
          .filter(item => item.name && item.price && item.code);

        setPriceList(items);
        setLoadingPrices(false);
        setPriceError(null);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setPriceError('Nu s-au putut încărca prețurile. Vă rugăm reîncărcați pagina.');
        setLoadingPrices(false);
      }
    };

    fetchPrices();
    // Refresh every 30 seconds
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  // State for category carousels
  const [categorySlides, setCategorySlides] = useState([0, 0, 0]);

  const updateCategorySlide = (categoryIndex, direction) => {
    setCategorySlides(prev => {
      const newSlides = [...prev];
      const totalImages = categoriesData[categoryIndex].images.length;
      if (direction === 'next') {
        newSlides[categoryIndex] = (newSlides[categoryIndex] + 1) % totalImages;
      } else {
        newSlides[categoryIndex] = (newSlides[categoryIndex] - 1 + totalImages) % totalImages;
      }
      return newSlides;
    });
  };

  useEffect(() => {
    // Set page title and favicon
    document.title = 'FullFashionHouse - Haine Second Hand Premium';
    
    // Create and update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const scrollHandler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', scrollHandler);

    const popupTimer = setTimeout(() => setShowDealPopup(true), 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(popupTimer);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const whatsappNumber = '+40769787780';
  const whatsappMessage = encodeURIComponent('Bună ziua! Sunt interesat de loturile de haine second hand. Aș dori mai multe detalii.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Contact info
  const contactInfo = {
    address: 'Strada Mărgeanului, Nr. 99, București, România',
    phone: '+40 769 787 780',
    email: 'contact@fullfashionhouse.ro',
    coordinates: { lat: 44.4122, lng: 26.0607 }
  };

  // Categories data for the categories page
  const categoriesData = [
    {
      name: 'Haine de Brand',
      description: 'Colecția noastră de haine de brand include articole de la cele mai renumite case de modă, toate în stare excelentă. Găsești branduri premium precum Zara, H&M, Mango, Reserved și multe altele.',
      features: ['Calitate 1 + Extra', 'Branduri Premium', 'Sortiment Variat', 'Prețuri Avantajoase'],
      priceRange: '6,00 - 12,00 RON/kg',
      images: [
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80'
      ]
    },
    {
      name: 'Haine Mix',
      description: 'Loturile mix conțin o selecție variată de articole vestimentare pentru damă și bărbați. Perfecte pentru revânzare sau pentru stocuri diverse. Include bluze, pantaloni, rochii, tricouri și multe altele.',
      features: ['Diversitate Maximă', 'Raport Calitate-Preț Excelent', 'Ideal pentru Revânzare', 'Sezon Rece & Cald'],
      priceRange: '5,50 - 9,50 RON/kg',
      images: [
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
        'https://images.pexels.com/photos/7679659/pexels-photo-7679659.jpeg?_gl=1*1nuvpyj*_ga*MTM1Mzc1NzIyMS4xNzY1NTMxOTYx*_ga_8JE65Q40S6*czE3NjU1MzE5NjAkbzEkZzEkdDE3NjU1MzI2MDQkajYwJGwwJGgw'
      ]
    },
    {
      name: 'Încălțăminte Premium',
      description: 'Colecția noastră de încălțăminte include pantofi, adidași, cizme și sandale pentru toate anotimpurile. Toate articolele sunt în stare foarte bună și provin din Austria, garantând calitatea superioară.',
      features: ['Toate Mărimile', 'Stare Excelentă', 'Branduri Cunoscute', 'Modele Diverse'],
      priceRange: '14,00 - 18,00 RON/kg',
      images: [
        'https://images.pexels.com/photos/5863630/pexels-photo-5863630.jpeg?_gl=1*1a1t51i*_ga*MTM1Mzc1NzIyMS4xNzY1NTMxOTYx*_ga_8JE65Q40S6*czE3NjU1MzE5NjAkbzEkZzEkdDE3NjU1MzI3NjgkajU5JGwwJGgw',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80'
      ]
    }
  ];

  // Categories Page Component
  const CategoriesPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Categorii Produse</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Descoperă sortimentele noastre premium de haine second hand, provenite din Austria
          </p>
        </div>

        {/* Category Sections */}
        {categoriesData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Carousel */}
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  {category.images.map((image, imgIdx) => (
                    <div
                      key={imgIdx}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        imgIdx === categorySlides[categoryIndex] ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${category.name} ${imgIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  
                  <button
                    onClick={() => updateCategorySlide(categoryIndex, 'prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-800" />
                  </button>
                  <button
                    onClick={() => updateCategorySlide(categoryIndex, 'next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-800" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                    {category.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const newSlides = [...categorySlides];
                          newSlides[categoryIndex] = idx;
                          setCategorySlides(newSlides);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === categorySlides[categoryIndex] ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Caracteristici:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="text-indigo-600 font-bold mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Interval de preț</p>
                    <p className="text-xl sm:text-2xl font-bold text-indigo-600">{category.priceRange}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex-1 inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base transition transform hover:scale-105 shadow-lg"
                    >
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Comandă Acum
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base transition transform hover:scale-105 shadow-lg"
                    >
                      <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Price List Summary */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 mb-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Vrei să vezi lista completă de prețuri?</h2>
          <p className="text-base sm:text-xl mb-6 px-4">
            Consultă pagina noastră de prețuri pentru informații detaliate despre toate sortimentele disponibile
          </p>
          <button
            onClick={() => setCurrentPage('prices')}
            className="inline-flex items-center bg-white text-indigo-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition transform hover:scale-105 shadow-lg"
          >
            <FileText className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
            Vezi Lista de Prețuri
          </button>
        </div>

        {/* Special Offers */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <Sparkles className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Oferte Speciale</h2>
            <p className="text-sm sm:text-base text-gray-600">Comenzi mari? Beneficiezi de prețuri preferențiale!</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                <p className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">10%</p>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Reducere la comenzi peste 5.000 RON</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                <p className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">15%</p>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Reducere la comenzi peste 10.000 RON</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                <p className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">GRATIS</p>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Transport gratuit peste 3.900 RON</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition transform hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7 mr-2 sm:mr-3" />
              Solicită Ofertă Personalizată
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Page Component
  const ContactPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contactează-ne</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Suntem aici să te ajutăm! Contactează-ne prin WhatsApp sau vizitează-ne la sediu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Informații Contact</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Adresă</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-indigo-600 hover:underline font-medium">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-indigo-600 hover:underline font-medium">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Program de Lucru</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Luni - Vineri:</span> 09:00 - 18:00</p>
                <p><span className="font-medium">Sâmbătă:</span> 10:00 - 16:00</p>
                <p><span className="font-medium">Duminică:</span> Închis</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Scrie-ne pe WhatsApp
            </a>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}&zoom=16`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FullFashionHouse Location"
              />
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ai nevoie de ajutor?</h2>
          <p className="text-base sm:text-xl mb-6">
            Contactează-ne acum și vom răspunde în cel mai scurt timp posibil!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center bg-white text-indigo-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Sună Acum
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Trimite Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Price List Page Component - WITH GOOGLE SHEETS INTEGRATION
  const PriceListPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Listă Prețuri</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Toate prețurile sunt actualizate în timp real. Contactați-ne pentru oferte personalizate!
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Actualizat automat</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 mb-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">🎉 Ofertă Specială</h2>
          <p className="text-lg sm:text-xl mb-2">Livrare GRATUITĂ la comenzi peste <span className="font-black text-2xl sm:text-3xl">3.900 RON</span></p>
          <p className="text-base sm:text-lg opacity-90">Cost transport standard: 25 RON / sac</p>
          <p className="text-xs sm:text-sm mt-4 opacity-75">* Greutatea sacilor: 15-20 kg în funcție de sortiment</p>
        </div>

        {loadingPrices ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Se încarcă prețurile...</p>
          </div>
        ) : priceError ? (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
            <p className="text-red-600 font-medium">{priceError}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Reîncarcă Pagina
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl p-4 sm:p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Lista Completă de Produse</h2>
              </div>
              <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider w-20">
                          Cod
                        </th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Denumire Produs
                        </th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Preț (RON/kg)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {priceList.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-indigo-50 transition">
                          <td className="px-4 sm:px-6 py-3 sm:py-4">
                            <span className="inline-flex items-center justify-center w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full text-xs font-bold">
                              {item.code}
                            </span>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 font-medium">
                            {item.name}
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                            <span className="text-lg sm:text-2xl font-bold text-indigo-600">
                              {item.price} RON
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Sparkles className="w-7 h-7 mr-3 text-yellow-500" />
            Informații Importante
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-3">✓</span>
              <span>Toate produsele sunt de calitate 1 + extra, provenite din Austria</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-3">✓</span>
              <span>Marfa se vinde cu certificate de dezinfecție, dezinsecție și curățare</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-3">✓</span>
              <span>Livrare rapidă prin curier, oriunde în țară, în 24-48 ore</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-3">✓</span>
              <span>Plata se poate face ramburs sau transfer bancar</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-3">✓</span>
              <span>Reduceri speciale pentru comenzi mari și clienți fideli</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition transform hover:scale-105 shadow-2xl"
          >
            <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7 mr-2 sm:mr-3" />
            Comandă pe WhatsApp
          </a>
          <p className="mt-4 text-sm sm:text-base text-gray-600">Sau sunați la: <a href="tel:+40769787780" className="font-bold text-indigo-600 hover:underline">+40 769 787 780</a></p>
        </div>
      </div>
    </div>
  );

  // Home Page Component
  const HomePage = () => (
    <>
      {/* Hero Slider */}
      <div className="relative h-[500px] sm:h-[600px] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">{slide.title}</h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">{slide.subtitle}</p>
                <button 
                  onClick={() => setCurrentPage('categories')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition transform hover:scale-105 shadow-2xl"
                >
                  Explorează Colecția
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full transition shadow-lg">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full transition shadow-lg">
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Cumpără pe Categorii</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} onClick={() => setCurrentPage('categories')} className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-gray-100">
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.name}</h3>
              <p className="text-indigo-600 font-medium">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Deals Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">Oferte Speciale Săptămâna Aceasta</h2>
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredDeals.map((deal, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur rounded-xl p-6 text-center hover:bg-white transition">
                <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {deal.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{deal.item}</h3>
                <p className="text-3xl sm:text-4xl font-black text-indigo-600 mb-2">{deal.discount} REDUCERE</p>
                <p className="text-sm text-gray-600 font-semibold">{deal.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>
              <ShoppingBag className={`w-8 h-8 ${isScrolled || currentPage !== 'home' ? 'text-indigo-600' : 'text-white'}`} />
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold ${isScrolled || currentPage !== 'home' ? 'text-gray-900' : 'text-white'}`}>FullFashionHouse</h1>
                <p className={`text-xs ${isScrolled || currentPage !== 'home' ? 'text-gray-500' : 'text-white/90'}`}>Calitate Premium din Austria</p>
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

      {/* Page Content */}
      {currentPage === 'home' ? <HomePage /> : 
       currentPage === 'prices' ? <PriceListPage /> : 
       currentPage === 'categories' ? <CategoriesPage /> : 
       <ContactPage />}

      {/* Deal Popup */}
      {showDealPopup && currentPage === 'home' && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
            <button onClick={() => setShowDealPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                <Tag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ofertă Limitată!</h3>
              <p className="text-gray-600 mb-6 text-lg">Reduceri de până la <span className="text-indigo-600 font-bold text-2xl">50%</span> la loturi selectate de haine second hand!</p>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700 font-medium">✨ Loturi Haine Damă - 40% REDUCERE</p>
                <p className="text-sm text-gray-700 font-medium">✨ Loturi Încălțăminte - 35% REDUCERE</p>
                <p className="text-sm text-gray-700 font-medium">✨ Loturi Geci & Jachete - 50% REDUCERE</p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 mb-6">
                <p className="text-gray-700 font-semibold text-sm">📦 Livrare GRATUITĂ la comenzi peste 3.900 RON</p>
              </div>

              <p className="text-red-500 font-semibold mb-6 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Oferta expiră în 48 de ore!
              </p>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-lg"
              >
                Comandă Acum
              </a>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-5 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center space-x-3 group"
      >
        <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7" />
        <span className="hidden lg:group-hover:inline-block font-semibold pr-2 whitespace-nowrap">Comandă pe WhatsApp</span>
      </a>

      {/* Cookie Consent */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 z-40 shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm md:text-base text-center md:text-left">
              Folosim cookie-uri pentru a îmbunătăți experiența ta și pentru îmbunătățiri de marketing. Continuând, accepți utilizarea cookie-urilor.
            </p>
            <button
              onClick={() => setShowCookies(false)}
              className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold transition whitespace-nowrap"
            >
              Accept Cookie-uri
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
          <h3 className="text-2xl font-bold mb-2">FullFashionHouse SRL - CUI: 49077961 - NR. REG. COMERTULUI: J2023021064408</h3>
          <p className="text-gray-400 mb-6">Calitate Premium, Prețuri Avantajoase</p>
          <p className="text-sm text-gray-500">© 2025 FullFashionHouse SRL. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </div>
  );
};

export default SecondHandDepot;