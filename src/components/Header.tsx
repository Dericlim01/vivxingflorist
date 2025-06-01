import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-amber-100 text-gray-800 p-4 shadow-md z-50">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Vivxing Florist</h1>
                <nav>
                    <ul className="flex justify-center space-x-4">
                        <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-amber-600 transition-colors">About</Link></li>
                        <li><Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;