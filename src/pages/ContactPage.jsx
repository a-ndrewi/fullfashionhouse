import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactPage = ({ contactInfo, whatsappLink }) => {
  return (
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
};

export default ContactPage;
