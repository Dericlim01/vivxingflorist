'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCloudinaryImages } from '@/hooks/useCloudinaryImages';

export default function ImageUpload() {
  const [category, setCategory] = useState('preserved');
  const { images, isLoading, error } = useCloudinaryImages(category);

  const categories = [
    'preserved',
    'soap',
    'customize'
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full p-2 border rounded-md"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {isLoading && <p className="text-amber-600">Loading images...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.public_id} className="relative aspect-square">
            <Image
              src={image.secure_url}
              alt={image.public_id}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
