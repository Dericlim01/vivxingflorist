'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
// import { Category } from '@/app/types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductFilter from '../../components/ProductFilter';
import ProductCard from '@/components/ProductCard';
import WhatsAppFloat from '../../components/whatsappFloat';

interface ProductImage {
  url: string;
  [key: string]: unknown;
}

function ProductContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<{ [key: string]: ProductImage[] }>({});
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchImages() {
      setIsLoading(true);
      try {
        const categories = ['soap', 'preserved', 'customize', 'dried'];
        const results = await Promise.all(
          categories.map(async (cat) => {
            const res = await fetch(`/api/cloudinary?category=${cat}`);
            if (!res.ok) return null;
            const data = await res.json();
            return Array.isArray(data) ? data.filter((img: ProductImage) => img.url) : [];
          })
        );
        setImages({
          soap: results[0] || [],
          preserved: results[1] || [],
          customize: results[2] || [],
          dried: results[3] || [],
        });
      } catch (e) {
        console.error(e);
        setError('Failed to load images.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, []);

  // // Memoized categories
  // const categories = useMemo<Category[]>(() => [
  //   {
  //     id: 'soap',
  //     name: 'Soap Flowers',
  //     description: 'Long-lasting handcrafted soap flowers',
  //     image: images.soap && images.soap.length > 0 ? images.soap[0].url : '',
  //     price: 149.00
  //   },
  //   {
  //     id: 'preserved',
  //     name: 'Preserved Flowers',
  //     description: 'Everlasting natural preserved flowers',
  //     image: images.preserved && images.preserved.length > 0 ? images.preserved[0].url : '',
  //     price: 199.00
  //   },
  //   {
  //     id: 'customize',
  //     name: 'Custom Designs',
  //     description: 'Personalized arrangements for special occasions',
  //     image: images.customize && images.customize.length > 0 ? images.customize[0].url : '',
  //     price: 299.00
  //   },
  //   {
  //     id: 'dried',
  //     name: 'Dried Flowers',
  //     description: 'Natural dried flower arrangements',
  //     image: images.dried && images.dried.length > 0 ? images.dried[0].url : '',
  //     price: 129.00
  //   }
  // ], [images]);

  // Memoized filters configuration
  const filters = useMemo(() => ({
    categories: [
      { id: 'all', name: 'All Products' },
      { id: 'soap', name: 'Soap Flowers' },
      { id: 'preserved', name: 'Preserved Flowers' },
      { id: 'customize', name: 'Custom Designs' },
      { id: 'dried', name: 'Dried Flowers' }
    ],
    priceRanges: [
      { id: 'all', name: 'All Prices' },
      { id: 'under100', name: 'Under RM 100' },
      { id: '100-200', name: 'RM 100 - RM 200' },
      { id: 'above200', name: 'Above RM 200' }
    ]
  }), []);

  // // Memoized price filter function
  // const filterByPrice = useMemo(() => (price: number) => {
  //   switch (priceRange) {
  //     case 'under100':
  //       return price < 100;
  //     case '100-200':
  //       return price >= 100 && price <= 200;
  //     case 'above200':
  //       return price > 200;
  //     default:
  //       return true;
  //   }
  // }, [priceRange]);

  // // Memoized filtered categories
  // const filteredCategories = useMemo(() => 
  //   categories.filter(category => {
  //     if (selectedCategory === 'all') return true;
  //     return category.id === selectedCategory;
  //   }).filter(category => filterByPrice(category.price)),
  //   [categories, selectedCategory, filterByPrice]
  // );

  // URL parameter sync
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const price = searchParams.get('price') || 'all';
    setSelectedCategory(category);
    setPriceRange(price);
  }, [searchParams]);

  // Filter handlers
  const handleCategoryChange = async (category: string) => {
    setIsLoading(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', category);
    await router.push(`/products?${params.toString()}`);
    setIsLoading(false);
  };

  const handlePriceChange = (price: string) => {
    setPriceRange(price);
    const params = new URLSearchParams(searchParams.toString());
    params.set('price', price);
    router.push(`/products?${params.toString()}`);
  };

  // Error component
  const errorComponent = error && (
    <div className="text-red-500 text-center p-4">
      {error}
      <button 
          onClick={() => setError(null)}
          className="ml-2 text-amber-600 hover:text-amber-700"
      >
        Try again
      </button>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen pt-32 bg-amber-50">
    <Header />
      <main className="flex-grow">
        {errorComponent}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Products</h1>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="w-full md:w-64 flex-shrink-0">
                <ProductFilter 
                  onCategoryChange={handleCategoryChange}
                  onPriceRangeChange={handlePriceChange}
                  selectedCategory={selectedCategory}
                  selectedPrice={priceRange}
                  filters={filters}
                />
              </aside>

              {/* Main Content */}
              <div className="flex-grow">
                {isLoading ? (
                  <div className="flex justify-center items-center h-96">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-500" />
                  </div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {selectedCategory === 'all'
                  ? ['soap', 'preserved', 'customize', 'dried'].flatMap(cat =>
                      (images[cat] || []).map((img, idx) => (
                        <ProductCard
                          key={`${cat}-${idx}`}
                          title={cat.charAt(0).toUpperCase() + cat.slice(1)}
                          description=""
                          // price={0}
                          imageUrl={img.url}
                          onClick={() => {}}
                        />
                      ))
                    )
                  : (images[selectedCategory] || []).map((img, idx) => (
                      <ProductCard
                        key={idx}
                        title={selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                        description=""
                        // price={0}
                        imageUrl={img.url}
                        onClick={() => {}}
                      />
                    ))}
                </div>
                )}
              </div>
            </div>

            {/* Product Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Handcrafted Quality</h3>
                <p className="text-gray-600">Each arrangement is carefully crafted with attention to detail</p>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Long-lasting Beauty</h3>
                <p className="text-gray-600">Our preserved and soap flowers maintain their beauty for months</p>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Designs</h3>
                <p className="text-gray-600">Personalized arrangements for your special occasions</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      <WhatsAppFloat />
    </div>
  );
}

// Main page component with Suspense boundary
export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-500" />
      </div>
    }>
      <ProductContent />
    </Suspense>
  );
}