import React from 'react';

function ProductCard({ product }) {
  const handleAddToCart = () => {
    
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl flex flex-col justify-between">
     <div className='justify-center items-center'>
       <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-4 rounded" />
      <h2 className="text-sm text-left w-full font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-500 text-left w-full mb-4">${product.price}</p>
      </div>
    <a href='Cart'>  <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Add to Cart
      </button> </a>
    </div>
  );
}

export default ProductCard;