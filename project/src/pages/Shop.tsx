import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Filter, Grid, List } from 'lucide-react';

export function Shop() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || 'all');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'all') return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-8 text-white">REPX Store</h1>

      {/* View and Filter Controls */}
      <div className="flex justify-between items-center mb-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-full ${
              viewMode === 'grid' ? 'bg-white text-black' : 'text-gray-400 hover:bg-gray-700'
            }`}
          >
            <Grid />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-full ${
              viewMode === 'list' ? 'bg-white text-black' : 'text-gray-400 hover:bg-gray-700'
            }`}
          >
            <List />
          </button>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'grid-cols-1 gap-4'}`}>
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            viewMode={viewMode} 
          />
        ))}
      </div>

      {/* No Products Placeholder */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          No products found in this category.
        </div>
      )}
    </div>
  );
}

export default Shop;