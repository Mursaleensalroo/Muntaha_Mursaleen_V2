'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

// Refined placeholder shown when photo isn't uploaded yet
function Placeholder({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-sand/40 via-cream to-sand/20 text-muted">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gold/50">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="mt-3 text-[10px] tracking-widest uppercase opacity-60">{alt}</span>
    </div>
  );
}

export default function Photo({ src, alt, className = '', fill, width, height, priority, sizes }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return <Placeholder alt={alt} />;
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
        priority={priority}
        className={`object-cover ${className}`}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 1000}
      priority={priority}
      className={className}
      onError={() => setError(true)}
    />
  );
}
