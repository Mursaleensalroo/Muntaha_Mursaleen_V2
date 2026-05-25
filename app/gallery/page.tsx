import { siteConfig } from '@/lib/config';
import { getShapedPhotos } from '@/lib/photos';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: `Gallery — ${siteConfig.partnerOne} & ${siteConfig.partnerTwo}`,
};

export default function GalleryPage() {
  const photos = getShapedPhotos();

  return (
    <div className="pt-32 pb-24">
      {/* Page header */}
      <header className="text-center px-6 mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-8 reveal-in">
          ✦  A Visual Library  ✦
        </p>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-light italic text-ink reveal-up" style={{ animationDelay: '200ms' }}>
          The Gallery
        </h1>
        <div className="mt-10 flex items-center justify-center gap-6 reveal-up" style={{ animationDelay: '400ms' }}>
          <span className="h-px w-16 bg-gold/40" />
          <p className="font-serif italic text-muted text-lg">moments, kept</p>
          <span className="h-px w-16 bg-gold/40" />
        </div>
        {photos.length > 0 && (
          <p className="mt-8 font-serif italic text-muted/70 text-sm">
            {photos.length} {photos.length === 1 ? 'photograph' : 'photographs'}
          </p>
        )}
      </header>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {photos.length > 0 ? (
          <GalleryGrid photos={photos} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <div className="ornament mb-8">
        <span className="font-serif italic text-gold">the gallery awaits</span>
      </div>
      <p className="font-serif italic text-xl text-muted leading-relaxed">
        No photographs have been added yet.
      </p>
      <p className="mt-6 font-sans text-sm text-muted/70 leading-relaxed max-w-md mx-auto">
        Upload your photos to{' '}
        <code className="font-mono text-xs bg-sand/40 px-1.5 py-0.5 rounded">public/photos</code>{' '}
        and they'll appear here automatically.
      </p>
    </div>
  );
}
