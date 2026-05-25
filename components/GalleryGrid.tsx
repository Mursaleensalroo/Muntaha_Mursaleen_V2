'use client';

import { useState } from 'react';
import Photo from './Photo';
import Lightbox from './Lightbox';
import type { ShapedPhoto } from '@/lib/photos';

export default function GalleryGrid({ photos }: { photos: ShapedPhoto[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-3 sm:gap-5 [&>*]:mb-3 sm:[&>*]:mb-5 [&>*]:break-inside-avoid">
        {photos.map((p, i) => {
          const aspect =
            p.shape === 'tall' ? 'aspect-[3/4]' :
            p.shape === 'wide' ? 'aspect-[4/3]' :
            'aspect-square';
          return (
            <button
              key={p.src}
              onClick={() => setLightbox(i)}
              className={`block w-full ${aspect} relative overflow-hidden photo-frame lift group`}
              aria-label={`View photograph ${i + 1}`}
            >
              <div className="relative w-full h-full">
                <Photo src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </button>
          );
        })}
      </div>
      {lightbox !== null && (
        <Lightbox
          photos={photos.map((p) => ({ src: p.src, alt: p.alt }))}
          initialIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
