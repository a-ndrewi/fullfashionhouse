import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, MessageCircle } from 'lucide-react';

const PriceListPage = ({ whatsappLink }) => {
  const [priceList, setPriceList] = useState([]);
  const [loadingPrices, setLoadingPrices] = useState(true);
  const [priceError, setPriceError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoadingPrices(true);
        const sheetId = '1-g-2Rq2zlHej3y03VIqWDw4Ajo4mu95xTYW2_KJFciw';
        
        const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
        
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        
        const rows = csvText.split('\n').slice(1);
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
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
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
};

export default PriceListPage;
