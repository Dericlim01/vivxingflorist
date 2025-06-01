import { NextResponse } from 'next/server';
import { get_image_data, get_logo_data } from '@/api/cloudinary_API';

// Get images from Cloudinary
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || '';

    // Use get_logo_data if category is 'logo', otherwise use get_image_data
    const images =
      category === 'logo'
        ? await get_logo_data()
        : await get_image_data(category);

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}