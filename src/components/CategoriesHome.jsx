import React from 'react';

const CategoriesHome = ({ categories, setCurrentPage }) => {
  return (
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
  );
};

export default CategoriesHome;
