import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_url: process.env.CLOUDINARY_API_URL,
});

export async function get_image_data(category) {
  try {
    // Fetch images from Cloudinary
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: `vivxingflorist/flower/${category}`,
      max_results: 30,
    });
    // Map the result to get the image URLs and other data
    const images = result.resources.map((image) => {
      return {
        public_id: image.public_id,
        url: image.secure_url,
        width: image.width,
        height: image.height,
      };
    });
    console.log('Fetched images:', images);
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
    const images = result.resources.map((image) => {
      return {
        public_id: image.public_id,
        url: image.secure_url,
        width: image.width,
        height: image.height,
      };
    });
    console.log('Fetched logo:', images);
    return images;
  } catch (error) {
    console.error('Error fetching logo:', error);
    return [];
  }
}

// Get images from Cloudinary
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || '';

    const images = await get_image_src(category);
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}
