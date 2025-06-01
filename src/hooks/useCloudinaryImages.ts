import { useState, useEffect } from 'react';

type CloudinaryImage = {
  public_id: string;
  secure_url: string;
  format: string;
  width: number;
  height: number;
};

export function useCloudinaryImages(category: string) {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/cloudinary?category=${category}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [category]);

  return { images, isLoading, error };
}
