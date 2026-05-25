'use client';

import { useEffect, useState } from 'react';
import Photo from './Photo';

type LightboxPhoto = { src: string; alt: string };

type Props = {
  photos: LightboxPhoto[];
  initialIndex: number;
  onClose: () => void;
};

export default function Lightbox({ photos, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, photos.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [photos.length, onClose]);

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[200] bg-ink/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8 reveal-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors text-3xl font-light z-10"
      >
        ×
      </button>

      <div className="absolute top-6 left-6 text-cream/60 text-xs tracking-widest uppercase">
        {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
      </div>

      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); setIndex(index - 1); }}
          aria-label="Previous"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors text-4xl font-light"
        >
          ‹
        </button>
      )}

      <div
        className="relative max-w-5xl w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[80vh]">
          <Photo src={photo.src} alt={photo.alt} fill sizes="100vw" />
        </div>
      </div>

      {index < photos.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); setIndex(index + 1); }}
          aria-label="Next"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors text-4xl font-light"
        >
          ›
        </button>
      )}
    </div>
  );
}
