import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaHeart, FaLeaf, FaStar, FaHandHoldingHeart } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-32 bg-amber-50">
            <Header />
            <main className="flex-grow">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>
                        
                        <div className="space-y-8">
                            {/* Introduction */}
                            <div className="text-center">
                                <p className="text-gray-600 text-lg">
                                    Welcome to Vivxing Florist, your destination for everlasting floral beauty. 
                                    We specialize in preserved, soap, and dried flower arrangements that bring 
                                    lasting joy to your special moments.
                                </p>
                            </div>

                            {/* Values Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
                                <div className="flex items-start space-x-4 p-4">
                                    <FaHeart className="text-amber-500 text-2xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Crafted with Love</h3>
                                        <p className="text-gray-600">Every arrangement is created with attention to detail and care.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4">
                                    <FaLeaf className="text-amber-500 text-2xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Sustainable Beauty</h3>
                                        <p className="text-gray-600">Our preserved flowers offer lasting beauty without waste.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4">
                                    <FaStar className="text-amber-500 text-2xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Quality First</h3>
                                        <p className="text-gray-600">We use only the finest materials in our arrangements.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4">
                                    <FaHandHoldingHeart className="text-amber-500 text-2xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Customer Care</h3>
                                        <p className="text-gray-600">Your satisfaction is our top priority.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="text-center bg-amber-50 p-6 rounded-lg mt-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                                <div className="space-y-2">
                                    <p className="text-gray-600">Batu Pahat, Johor</p>
                                    <p className="text-gray-600">Phone: (60) 12-345-6789</p>
                                    <p className="text-gray-600">Email: email@email.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}