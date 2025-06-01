import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/601159829711"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp size={32} />
        </a>
    );
}