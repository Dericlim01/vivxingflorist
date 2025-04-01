'use client';

import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Product, Category, Filter, Filters } from '@/app/types';
import ProductFilter from './components/ProductFilter';
import ProductCard from '@/components/ProductCard';
import WhatsAppFloat from '../whatsappFloat';

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    // Sync with URL parameters
    useEffect(() => {
        const category = searchParams.get('category') || 'all';
        const price = searchParams.get('price') || 'all';
        setSelectedCategory(category);
        setPriceRange(price);
    }, [searchParams, setSelectedCategory, setPriceRange]);

    // Update URL when filters change
    const handleCategoryChange = async (category: string) => {
        setIsLoading(true);
        setSelectedCategory(category);
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

    const [error, setError] = useState<string | null>(null);

    // Add this to your JSX where you handle errors
    {error && (
        <div className="text-red-500 text-center p-4">
            {error}
            <button 
                onClick={() => setError(null)}
                className="ml-2 text-amber-600 hover:text-amber-700"
            >
                Try again
            </button>
        </div>
    )}

    const categories: Category[] = [
        {
            id: 'soap',
            name: 'Soap Flowers',
            description: 'Long-lasting handcrafted soap flowers',
            image: '/images/products/soap/category.jpg',
            price: 149.00
        },
        {
            id: 'preserved',
            name: 'Preserved Flowers',
            description: 'Everlasting natural preserved flowers',
            image: '/images/products/preserved/category.jpg',
            price: 199.00
        },
        {
            id: 'custom',
            name: 'Custom Designs',
            description: 'Personalized arrangements for special occasions',
            image: '/images/products/custom/category.jpg',
            price: 299.00
        },
        {
            id: 'dried',
            name: 'Dried Flowers',
            description: 'Natural dried flower arrangements',
            image: '/images/products/dried/category.jpg',
            price: 129.00
        }
    ];

    const filters = {
        categories: [
            { id: 'all', name: 'All Products' },
            { id: 'soap', name: 'Soap Flowers' },
            { id: 'preserved', name: 'Preserved Flowers' },
            { id: 'custom', name: 'Custom Designs' },
            { id: 'dried', name: 'Dried Flowers' }
        ],
        priceRanges: [
            { id: 'all', name: 'All Prices' },
            { id: 'under100', name: 'Under RM 100' },
            { id: '100-200', name: 'RM 100 - RM 200' },
            { id: 'above200', name: 'Above RM 200' }
        ]
    };

    const filterByPrice = (price: number) => {
        switch (priceRange) {
            case 'under100':
                return price < 100;
            case '100-200':
                return price >= 100 && price <= 200;
            case 'above200':
                return price > 200;
            default:
                return true;
        }
    };

    const filteredCategories = useMemo(() => 
        categories.filter(category => {
            if (selectedCategory === 'all') return true;
            return category.id === selectedCategory;
        }), [categories, selectedCategory]
    );

    return (
        <div className="flex flex-col min-h-screen pt-32 bg-amber-50">
            <Header />
            <main className="flex-grow">
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
                                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-500"></div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredCategories.map((category) => (
                                    <ProductCard
                                        key={category.id}
                                        title={category.name}
                                        description={category.description}
                                        price={category.price}
                                        imageUrl={category.image}
                                        onClick={() => handleCategoryChange(category.id)}
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