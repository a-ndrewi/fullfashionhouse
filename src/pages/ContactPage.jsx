import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactPage = ({ contactInfo, whatsappLink }) => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 text-accent" />
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 sm:mb-4">Contactează-ne</h1>
          <p className="text-base xs:text-lg sm:text-xl text-primary/60 max-w-2xl mx-auto px-2 sm:px-4">
            Suntem aici să te ajutăm! Contactează-ne prin WhatsApp sau vizitează-ne la sediu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-4 xs:p-6 sm:p-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Informații Contact</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <a href={`tel:${contactInfo.phone}`} className="text-accent hover:underline font-medium">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-accent hover:underline font-medium">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-4">Program de Lucru</h3>
              <div className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <p><span className="font-medium">Luni - Vineri:</span> 09:00 - 18:00</p>
                <p><span className="font-medium">Sâmbătă:</span> 10:00 - 16:00</p>
                <p><span className="font-medium">Duminică:</span> Închis</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 w-full inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Scrie-ne pe WhatsApp
            </a>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-64 xs:h-80 sm:h-96 md:h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.6396794528403!2d25.968333769779967!3d44.36564498700733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adffb50b76f17f%3A0x2d8724d5a3caf47f!2s%C8%98oseaua%20Clinceni%203!5e0!3m2!1sen!2sro!4v1770129018561!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', minHeight: '16rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-4 xs:p-6 sm:p-8 text-background text-center mt-8">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Ai nevoie de ajutor?</h2>
          <p className="text-sm xs:text-base sm:text-xl mb-4 sm:mb-6">
            Contactează-ne acum și vom răspunde în cel mai scurt timp posibil!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center bg-background text-accent hover:bg-background/80 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Sună Acum
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center bg-background text-accent hover:bg-background/80 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition transform hover:scale-105 shadow-lg"
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
