import { products } from '../data/products';

function Products() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-wood-dark">Nos Pièces Artisanales</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 bg-wood-light">
              <h2 className="text-xl font-bold mb-2 text-wood-dark">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Taille: {product.size}</p>
                  <p className="text-lg font-bold text-wood-dark mt-1">{product.price} DT</p>
                </div>
                <button className="bg-wood-dark text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300">
                  Détails
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;