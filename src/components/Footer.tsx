import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg mb-3">Vivxing Florist</h3>
                        <p className="text-gray-300">Batu Pahat, Johor</p>
                        <p className="text-gray-300">Malaysia</p>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center">
                        <h3 className="font-bold text-lg mb-3">Contact Us</h3>
                        <p className="text-gray-300">Tel: +60 11-5982-9711</p>
                        <p className="text-gray-300">Email: email@email.com</p>
                        <p className="text-gray-300">WhatsApp: +60 11-5982-9711</p>
                    </div>

                    {/* Business Hours */}
                    <div className="text-center md:text-right">
                        <h3 className="font-bold text-lg mb-3">Business Hours</h3>
                        <p className="text-gray-300">Mon - Sat: 10:00 AM - 6:00 PM</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/products" className="hover:underline">Products</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mt-6">
                    <a href="https://facebook.com/vivxingflorist" 
                        className="text-gray-300 hover:text-blue-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://instagram.com/vivxingflorist" 
                        className="text-gray-300 hover:text-pink-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://wa.me/601159829711" 
                        className="text-gray-300 hover:text-green-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaWhatsapp size={24} />
                    </a>
                    <a href="https://www.xiaohongshu.com/user/profile/[your-profile-id]" 
                        className="text-gray-300 hover:text-red-500 transition-colors font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        小红书
                    </a>
                    <a href="https://www.threads.com/@jjjyue0902?igshid=NTc4MTIwNjQ2YQ==" 
                        className="text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer">
                        Threads
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center mt-6 text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Vivxing Florist. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}