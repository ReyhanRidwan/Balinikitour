/**
 * Cloudinary image optimization utility
 */

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'auto' | string;
  crop?: string;
  gravity?: string;
}

/**
 * Optimizes a Cloudinary URL with quality, format, and sizing parameters.
 * If the URL is not a Cloudinary URL, it returns the original URL.
 */
export function getOptimizedCloudinaryUrl(url: string, options: CloudinaryOptions = {}): string {
  if (!url || !url.includes('cloudinary.com')) return url;

  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'center'
  } = options;

  // Split URL into parts
  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;

  // Build transformations
  const transformations = [];
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (width || height) transformations.push(`c_${crop}`);
  if (crop === 'fill' && (width || height)) transformations.push(`g_${gravity}`);

  const transformString = transformations.join(',');

  return `${parts[0]}/upload/${transformString}/${parts[1]}`;
}

/**
 * Generates a Cloudinary srcset for responsive images.
 */
export function generateCloudinarySrcSet(url: string, widths: number[], options: Omit<CloudinaryOptions, 'width'> = {}): string {
  if (!url || !url.includes('cloudinary.com')) return '';

  return widths
    .map(width => {
      const optimizedUrl = getOptimizedCloudinaryUrl(url, { ...options, width });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
}
