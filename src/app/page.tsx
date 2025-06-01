import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaSpa, FaLeaf, FaPencilRuler } from 'react-icons/fa';
import Link from 'next/link';
import WhatsAppFloat from '../components/whatsappFloat';
import { getImageByCategory } from '@/api/cloudinary_API';

const customizeImages = await getImageByCategory('customize');
const soapImages = await getImageByCategory('soap');
const preservedImages = await getImageByCategory('preserved');
const driedImages = await getImageByCategory('dried');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-32 bg-amber-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[600px]">
          <Image
            src={customizeImages || '/favicon.ico'}
            alt="Beautiful flower arrangement"
            fill
            className="object-cover brightness-90"
            priority
            loading='eager'
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 bg-black/30">
            <h1 className="text-5xl font-bold text-center mb-6">
              Welcome to Vivxing Florist
            </h1>
            <p className="text-xl text-center max-w-2xl">
              Discover our beautiful selection of floral arrangements and gifts,
              crafted with love and care for every occasion.
            </p>
            <Link
              href="/products"
              className="mt-8 bg-amber-100 text-gray-800 px-8 py-3 rounded-full hover:bg-amber-200 transition-colors font-semibold">
              Explore Our Collection
            </Link>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Soap Flowers Section */}
            <div className="text-center p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <FaSpa className="text-4xl text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Soap Flowers</h2>
              <p className="text-gray-600">
                Handcrafted soap flowers that last forever
              </p>
            </div>

            {/* Preserved Flowers Section */}
            <div className="text-center p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <FaLeaf className="text-4xl text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Preserved Flowers</h2>
              <p className="text-gray-600">
                Real flowers preserved to maintain their beauty
              </p>
            </div>

            {/* Custom Designs Section */}
            <div className="text-center p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <FaPencilRuler className="text-4xl text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Designs</h2>
              <p className="text-gray-600">
                Personalized arrangements for your special moments
              </p>
            </div>
          </div>
        </div>

        {/* Latest Flowers Section */}
        <section className="max-w-7xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - Customized */}
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src={customizeImages || '/favicon.ico'}
                  alt="Custom Bouquet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Custom Bouquet</h3>
                <p className="text-gray-600 mb-2">Personalized mask arrangement</p>
              </div>
            </div>

            {/* Card 2 - Soap */}
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src={soapImages || '/favicon.ico'}
                  alt="Soap Flower Bouquet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Soap Flower Bouquet</h3>
                <p className="text-gray-600 mb-2">Long-lasting soap flower arrangement</p>
              </div>
            </div>

            {/* Card 3 - Preserved */}
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src={preservedImages || '/favicon.ico'}
                  alt="Preserved Roses"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Preserved Roses</h3>
                <p className="text-gray-600 mb-2">Everlasting preserved roses</p>
              </div>
            </div>

            {/* Card 4 - Dried */}
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-80 w-full">
                <Image
                  src={driedImages || '/favicon.ico'}
                  alt="Dried Flowers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Dried Flowers</h3>
                <p className="text-gray-600 mb-2">Natural dried flower bouquet</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="max-w-7xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Soap Flowers */}
            <div className="relative group cursor-pointer">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src={soapImages || '/favicon.ico'}
                  alt="Soap Flowers Category"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Soap Flowers</h3>
                    <p className="text-white/90 mb-4">Long-lasting handcrafted soap flowers</p>
                    <Link 
                      href={`/products?category=soap`} 
                      className="bg-white/90 text-gray-800 px-6 py-2 rounded-full 
                        hover:bg-white transition-colors text-sm font-semibold">
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Preserved Flowers */}
            <div className="relative group cursor-pointer">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src={preservedImages || '/favicon.ico'}
                  alt="Preserved Flowers Category"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Preserved Flowers</h3>
                    <p className="text-white/90 mb-4">Everlasting natural preserved flowers</p>
                    <Link 
                      href={`/products?category=preserved`} 
                      className="bg-white/90 text-gray-800 px-6 py-2 rounded-full 
                        hover:bg-white transition-colors text-sm font-semibold">
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Designs */}
            <div className="relative group cursor-pointer">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src={customizeImages || '/favicon.ico'}
                  alt="Custom Designs Category"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Custom Designs</h3>
                    <p className="text-white/90 mb-4">Personalized arrangements for any occasion</p>
                    <Link 
                      href={`/products?category=customize`} 
                      className="bg-white/90 text-gray-800 px-6 py-2 rounded-full 
                        hover:bg-white transition-colors text-sm font-semibold">
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}