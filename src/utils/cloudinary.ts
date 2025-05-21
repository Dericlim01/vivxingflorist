import { get_image_data, get_logo_data } from '../app/api/cloudinary_API';

export async function getImageByCategoryAndType(
  category: string,
  type: string
): Promise<string | undefined> {
  try {
    const images = await get_image_data(category);
    if (images && images.length > 0) {
      console.log('url', images[0].url);
      return images[0].url;
    }
    return undefined;
  } catch (error) {
    console.error('Error in getImage:', error);
    return undefined;
  }
}

export async function getImageByCategory(category: string): Promise<string | undefined> {
  try {
    const images = category === 'logo' ? await get_logo_data() : await get_image_data(category);
    if (images && images.length > 0) {
      console.log('url', images[0].url);
      return images[0].url;
    }
    return undefined;
  } catch (error) {
    console.error('Error in getImage:', error);
    return undefined;
  }
}
