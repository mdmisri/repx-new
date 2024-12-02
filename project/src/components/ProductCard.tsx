import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { Product } from '../types';
import { Heart, ShoppingCart, Zap } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart({ ...product, quantity: 1, selectedSize });
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto group">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative">
        {/* Product Image Section */}
        <div className="relative h-72 sm:h-80 overflow-hidden">
          {/* Wishlist Button */}
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full shadow-md hover:scale-110 transition-all"
          >
            <Heart 
              className={`w-6 h-6 ${
                isWishlisted 
                  ? 'fill-red-500 stroke-red-500' 
                  : 'stroke-gray-700 fill-transparent'
              }`} 
            />
          </button>

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Zap className="text-yellow-400 w-12 h-12 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 space-y-4">
          {/* Product Name and Price */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 truncate pr-2">{product.name}</h3>
            <span className="text-xl font-semibold text-gray-800 pl-2">${product.price}</span>
          </div>

          {/* Size Selection */}
          <div>
            <p className="text-sm text-gray-600 mb-3">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      selectedSize === size
                        ? 'bg-black text-white scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="
                flex items-center justify-center gap-2
                bg-black text-white py-3 rounded-lg
                transition-all duration-300
                hover:bg-gray-800 
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button
              onClick={() => {
                if (selectedSize) {
                  console.log('Buy Now', product);
                } else {
                  alert('Please select a size');
                }
              }}
              disabled={!selectedSize}
              className="
                flex items-center justify-center gap-2
                bg-gray-100 text-gray-900 py-3 rounded-lg
                transition-all duration-300
                hover:bg-gray-200
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;