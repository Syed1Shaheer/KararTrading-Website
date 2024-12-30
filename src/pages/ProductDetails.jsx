import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};  
  
  if (!product) {
    return <div className="text-center mt-20 text-2xl text-gray-600">No product found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8] px-4 py-8 sm:px-10 sm:py-20">
      <div className="bg-white shadow-lg rounded-xl flex flex-col lg:flex-row max-w-5xl overflow-hidden border-2 border-gray-200 w-full">
        
        {/* Left Section - Product Details */}
        <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1a3d7a] mb-4 sm:mb-6">{product.name}</h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
            {product.text || 'No additional description available.'}
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 p-6 sm:p-8">
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-auto sm:h-full object-cover p-4 shadow-lg border-4"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
