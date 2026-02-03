import React, { useState } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, MessageCircle, Sparkles, FileText } from 'lucide-react';

const CategoriesPage = ({ categoriesData, whatsappLink, contactInfo, setCurrentPage }) => {
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

  return (
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
};

export default CategoriesPage;
