export const SLIDES = [
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

export const CATEGORIES = [
  { name: 'Haine de Brand' },
  { name: 'Haine Mix' },
  { name: 'Încălțăminte Premium' },
  { name: 'Încălțăminte Mix' }
];

export const FEATURED_DEALS = [
  { item: 'Loturi Haine Damă', discount: '40%', price: 'de la 5,50 RON/kg', tag: 'Ofertă Limitată' },
  { item: 'Loturi Încălțăminte', discount: '35%', price: 'de la 6,00 RON/kg', tag: 'Promoție' },
  { item: 'Loturi Geci & Jachete', discount: '50%', price: 'de la 8,50 RON/kg', tag: 'Super Preț' }
];

export const CATEGORIES_DATA = [
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
  },
  {
    name: 'Încălțăminte Mix',
    description: 'Loturile de încălțăminte mix includ o varietate de modele pentru damă, bărbați și copii, ideale pentru orice sezon și pentru revânzare. Găsești pantofi sport, casual, sandale și cizme la prețuri excelente.',
    features: ['Varietate Sezonală', 'Prețuri Accesibile', 'Stocuri Mari', 'Ideal pentru Revânzare'],
    priceRange: '8,00 - 13,00 RON/kg',
    images: [
      'https://d1nymbkeomeoqg.cloudfront.net/photos/28/73/408849_7358_XL.jpg'
    ]
  }
];

export const CONTACT_INFO = {
  address: 'Soseaua Clinceni nr.3, Bragadiru, Ilfov',
  phone: '+40 769 787 780',
  email: 'Purcaruflorin97@yahoo.com',
  coordinates: { lat: 44.374098, lng: 25.968964 }
};

export const WHATSAPP_NUMBER = '+40769787780';

export const getWhatsappLink = (message = 'Bună ziua! Sunt interesat de loturile de haine second hand. Aș dori mai multe detalii.') => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const REVIEWS = [
  {
    name: 'Alexandru M.',
    rating: 5,
    text: 'Experiență excelentă! Produsele sunt exact așa cum au fost prezentate, calitate superioară. Procesul de achiziție a fost rapid și personalul foarte profesionist. Recomand cu încredere!',
    date: 'Ianuarie 2026'
  },
  {
    name: 'Maria P.',
    rating: 5,
    text: 'Sunt impresionată de sortimentul variat și de calitatea hainelor. Am comandat mai multe loturi și toate au depășit așteptările. Livrare promptă și prețuri foarte competitive!',
    date: 'Ianuarie 2026'
  },
  {
    name: 'Ion D.',
    rating: 5,
    text: 'Colaborez cu FullFashionHouse de 6 luni și sunt extrem de mulțumit. Marfa este întotdeauna de calitate, comunicarea este excelentă și livrările la timp. Parteneri de încredere!',
    date: 'Decembrie 2025'
  },
  {
    name: 'Elena R.',
    rating: 5,
    text: 'Cea mai bună alegere pentru business-ul meu! Calitate premium, prețuri avantajoase și servicii impecabile. Echipa este mereu disponibilă să răspundă la întrebări. 5 stele meritate!',
    date: 'Decembrie 2025'
  },
  {
    name: 'Gheorghe T.',
    rating: 5,
    text: 'Am deschis un magazin second hand și toate produsele le-am achiziționat de la FullFashionHouse. Clienții mei sunt încântați de calitate. Procesul de comandă este simplu și transparent!',
    date: 'Noiembrie 2025'
  },
  {
    name: 'Andreea S.',
    rating: 5,
    text: 'Încălțămintea premium este fenomenală! Branduri cunoscute, stare impecabilă, prețuri grozave. Am comandat și haine de brand - toate de calitate 1+. Mulțumesc pentru profesionalism!',
    date: 'Noiembrie 2025'
  },
  {
    name: 'Mihai V.',
    rating: 5,
    text: 'Comandă mare procesată fără probleme! Apreciez seriozitatea și onestitatea echipei. Produsele corespund descrierilor, fără surprize neplăcute. Recomand tuturor!',
    date: 'Octombrie 2025'
  },
  {
    name: 'Cristina B.',
    rating: 5,
    text: 'Calitate excepțională la prețuri imbatabile! Am testat mai mulți furnizori, dar FullFashionHouse este lider detașat. Sortiment variat, servicii rapide, personal amabil. Perfect!',
    date: 'Octombrie 2025'
  },
  {
    name: 'Radu N.',
    rating: 5,
    text: 'Sunt client fidel de peste un an. Fiecare comandă a fost o experiență pozitivă. Loturile sunt bine sortate, calitatea constantă, iar prețurile foarte competitive. Excelent!',
    date: 'Septembrie 2025'
  }
];
