import cloudinary from '@/utils/cloudinary';

interface CloudinaryImageResource {
  public_id: string;
  url: string;
  width: number;
  height: number;
  [key: string]: unknown;
}

export async function get_image_data(category: string) {
  try {
    // Fetch images from Cloudinary
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: `vivxingflorist/flower/${category}`,
      max_results: 30,
    });
    // Map the result to get the image URLs and other data
    const images = result.resources.map((image: CloudinaryImageResource) => {
      return {
        public_id: image.public_id,
        url: image.secure_url,
        width: image.width,
        height: image.height,
      };
    });
    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

export async function get_logo_data() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'vivxingflorist/logo',
      max_results: 1,
    });
    const images = result.resources.map((image: CloudinaryImageResource) => {
      return {
        public_id: image.public_id,
        url: image.secure_url,
        width: image.width,
        height: image.height,
      };
    });
    return images;
  } catch (error) {
    console.error('Error fetching logo:', error);
    return [];
  }
}

export async function getImageByCategory(category: string): Promise<string | undefined> {
  try {
    const images = category === 'logo' ? await get_logo_data() : await get_image_data(category);
    if (images && images.length > 0) {
      return images[0].url;
    }
    return undefined;
  } catch (error) {
    console.error('Error in getImage:', error);
    return undefined;
  }
}
