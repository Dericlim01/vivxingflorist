import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  // price: number;
  imageUrl: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title,
  description,
  // price,
  imageUrl,
  onClick
}) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-80 w-full">
        <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        {/* <p className="text-amber-600 font-bold">RM {price.toFixed(2)}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;