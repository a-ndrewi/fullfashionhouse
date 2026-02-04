import React from 'react';

const LegalPage = () => (
  <div className="min-h-screen bg-background pt-20 pb-12">
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Termeni, Condiții & Cookie-uri</h1>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">1. Termeni și Condiții Generale</h2>
        <p className="text-gray-700 mb-2">Accesarea și utilizarea site-ului FullFashionHouse implică acceptarea termenilor și condițiilor prezentate mai jos. Ne rezervăm dreptul de a modifica aceste condiții fără notificare prealabilă. Recomandăm consultarea periodică a acestei pagini.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Site-ul este destinat exclusiv persoanelor cu vârsta peste 18 ani.</li>
          <li>Toate informațiile prezentate pe site au scop informativ și pot fi modificate fără preaviz.</li>
          <li>Prețurile, stocurile și ofertele pot varia și nu constituie angajament contractual.</li>
          <li>Comenzile sunt procesate în ordinea primirii și pot fi refuzate în caz de lipsă stoc sau motive justificate.</li>
          <li>Orice tentativă de fraudă va fi raportată autorităților competente.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">2. Politica de Confidențialitate</h2>
        <p className="text-gray-700 mb-2">Respectăm confidențialitatea datelor personale. Datele colectate prin formulare, comenzi sau comunicare directă sunt folosite exclusiv pentru procesarea comenzilor și comunicarea cu clienții. Nu transmitem datele către terți fără consimțământul explicit, cu excepția cazurilor prevăzute de lege.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Utilizatorii au dreptul de acces, rectificare și ștergere a datelor personale.</li>
          <li>Solicitările privind datele personale pot fi trimise la adresa de contact de pe site.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">3. Politica de Cookie-uri</h2>
        <p className="text-gray-700 mb-2">Site-ul utilizează cookie-uri pentru a îmbunătăți experiența de navigare, pentru analiză statistică și pentru personalizarea conținutului. Prin continuarea navigării, utilizatorul își exprimă acordul pentru utilizarea cookie-urilor.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Cookie-urile nu colectează date personale identificabile.</li>
          <li>Utilizatorii pot gestiona sau dezactiva cookie-urile din setările browserului.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">4. Drepturi de Autor</h2>
        <p className="text-gray-700 mb-2">Toate materialele (texte, imagini, logo-uri) de pe acest site sunt protejate de drepturi de autor. Utilizarea neautorizată a acestora este interzisă.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">5. Litigii și Jurisdicție</h2>
        <p className="text-gray-700 mb-2">Orice litigiu apărut între FullFashionHouse și utilizatori va fi soluționat pe cale amiabilă, iar în caz de nereușită, va fi de competența instanțelor din România.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">6. Contact</h2>
        <p className="text-gray-700 mb-2">Pentru orice întrebări sau solicitări legale, vă rugăm să ne contactați folosind datele din secțiunea Contact.</p>
      </section>
    </div>
  </div>
);

export default LegalPage;
