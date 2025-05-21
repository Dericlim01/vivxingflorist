'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

interface FilterProps {
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
  selectedCategory?: string;
  selectedPrice?: string;
  filters: {
    categories: Array<{ id: string; name: string; }>;
    priceRanges: Array<{ id: string; name: string; }>;
  };
}

export default function ProductFilter({ 
  onCategoryChange, 
  onPriceRangeChange, 
  selectedCategory: initialCategory = 'all',
  selectedPrice: initialPrice = 'all',
  filters 
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(initialPrice);
  const searchParams = useSearchParams();

  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategory(value);
    onCategoryChange(value);
  }, [onCategoryChange]);

  const handlePriceChange = useCallback((value: string) => {
    setPriceRange(value);
    onPriceRangeChange(value);
  }, [onPriceRangeChange]);

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const price = searchParams.get('price') || 'all';
    
    if (category !== selectedCategory) {
      handleCategoryChange(category);
    }
    
    if (price !== priceRange) {
      handlePriceChange(price);
    }
  }, [searchParams, selectedCategory, priceRange, handleCategoryChange, handlePriceChange]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-32">
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4 text-gray-800">Categories</h3>
        <div className="space-y-2">
          {filters.categories.map(category => (
            <label 
              key={category.id} 
              className="flex items-center cursor-pointer hover:text-amber-600 transition-colors"
            >
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="mr-2 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-bold text-lg mb-4 text-gray-800">Price Range</h3>
        <div className="space-y-2">
          {filters.priceRanges.map(range => (
            <label 
              key={range.id} 
              className="flex items-center cursor-pointer hover:text-amber-600 transition-colors"
            >
              <input
                type="radio"
                name="price"
                value={range.id}
                checked={priceRange === range.id}
                onChange={(e) => handlePriceChange(e.target.value)}
                className="mr-2 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-gray-700">{range.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}