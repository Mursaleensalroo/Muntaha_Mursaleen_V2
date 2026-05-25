import fs from 'fs';
import path from 'path';

export type DiscoveredPhoto = {
  src: string;
  alt: string;
  name: string;
};

/**
 * Reads /public/photos at build time and returns every image file found.
 * Supports: .jpg, .jpeg, .png, .webp, .avif, .gif (case insensitive)
 *
 * You can drop photos with ANY filename. They'll be sorted alphabetically.
 * Tip: prefix files with numbers (01-, 02-, etc.) to control order.
 */
export function getAllPhotos(): DiscoveredPhoto[] {
  const photosDir = path.join(process.cwd(), 'public', 'photos');

  if (!fs.existsSync(photosDir)) {
    return [];
  }

  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];

  const files = fs.readdirSync(photosDir)
    .filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return exts.includes(ext) && !f.startsWith('.') && !f.startsWith('_');
    })
    .sort();

  return files.map((f) => ({
    src: `/photos/${f}`,
    alt: path.basename(f, path.extname(f)).replace(/[-_]/g, ' '),
    name: f,
  }));
}

/**
 * Deterministic shuffle based on the wedding date — so the gallery
 * has a consistent order across visits, but isn't strictly alphabetical.
 * Comment this out and use plain getAllPhotos() if you prefer A-Z order.
 */
export function getShuffledPhotos(seed: string = '2026-08-16'): DiscoveredPhoto[] {
  const photos = getAllPhotos();
  const arr = [...photos];

  // Seeded random
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  const rand = () => {
    hash = (hash * 9301 + 49297) % 233280;
    return hash / 233280;
  };

  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Assigns a shape to each photo (tall/wide/square) by index pattern,
 * so the masonry/editorial grid has varied composition.
 */
export type ShapedPhoto = DiscoveredPhoto & { shape: 'tall' | 'wide' | 'square' };

export function getShapedPhotos(): ShapedPhoto[] {
  const photos = getShuffledPhotos();
  // Repeating pattern that creates pleasing magazine-style variation
  const shapePattern: Array<'tall' | 'wide' | 'square'> = [
    'wide', 'tall', 'square', 'square', 'wide', 'tall', 'square', 'wide', 'tall', 'square',
  ];
  return photos.map((p, i) => ({
    ...p,
    shape: shapePattern[i % shapePattern.length],
  }));
}

/**
 * Picks N photos to use for the home page previews.
 */
export function getPreviewPhotos(n: number = 3): DiscoveredPhoto[] {
  const all = getAllPhotos();
  if (all.length === 0) return [];
  // Take evenly spaced photos across the collection for variety
  const step = Math.max(1, Math.floor(all.length / n));
  const picks: DiscoveredPhoto[] = [];
  for (let i = 0; i < n && i * step < all.length; i++) {
    picks.push(all[i * step]);
  }
  return picks;
}

/**
 * Picks one photo to use for each story chapter, in order.
 * If you have fewer photos than chapters, some chapters render without an image.
 */
export function getChapterPhotos(): DiscoveredPhoto[] {
  return getAllPhotos();
}
