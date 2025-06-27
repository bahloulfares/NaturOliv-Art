import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Bannière */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NaturOliv Art</h1>
            <p className="text-xl md:text-2xl">Artisanat tunisien en bois d'olivier</p>
          </div>
        </div>
      </div>
      
      {/* Présentation */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto bg-wood-light p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-wood-dark text-center">Notre Passion pour le Bois</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="/images/artisan.jpg" 
                alt="Artisan au travail" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Bienvenue chez NaturOliv Art, où chaque pièce raconte une histoire. Notre atelier familial perpétue depuis trois générations l'art de transformer le bois d'olivier tunisien en objets uniques et fonctionnels.
              </p>
              <p className="text-lg mb-4">
                Chaque création est façonnée à la main, respectant les techniques ancestrales tout en apportant une touche contemporaine. Nous sélectionnons avec soin chaque morceau de bois pour révéler sa beauté naturelle et ses veinures exceptionnelles.
              </p>
              <div className="mt-6">
                <Link 
                  to="/products" 
                  className="bg-wood-dark text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 inline-block"
                >
                  Découvrir nos créations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;