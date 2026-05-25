import { chapters, siteConfig, type Chapter } from '@/lib/config';
import { getChapterPhotos } from '@/lib/photos';
import Photo from '@/components/Photo';

export const metadata = {
  title: `Our Story — ${siteConfig.partnerOne} & ${siteConfig.partnerTwo}`,
};

export default function StoryPage() {
  const photos = getChapterPhotos();

  return (
    <div className="pt-32 pb-24">
      {/* Page header */}
      <header className="text-center px-6 mb-24 sm:mb-32">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-8 reveal-in">
          ✦  In {romanize(chapters.length)} Chapters  ✦
        </p>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-light italic text-ink reveal-up" style={{ animationDelay: '200ms' }}>
          Our Story
        </h1>
        <div className="mt-10 flex items-center justify-center gap-6 reveal-up" style={{ animationDelay: '400ms' }}>
          <span className="h-px w-16 bg-gold/40" />
          <p className="font-serif italic text-muted text-lg">told slowly, on purpose</p>
          <span className="h-px w-16 bg-gold/40" />
        </div>
      </header>

      {/* Chapters */}
      <div className="max-w-6xl mx-auto px-6 space-y-32 sm:space-y-40">
        {chapters.map((ch, i) => {
          // Pick an evenly-spaced photo from the collection for this chapter
          const photoIndex = photos.length > 0
            ? Math.floor((i * photos.length) / Math.max(chapters.length, 1))
            : -1;
          const photo = photoIndex >= 0 && photoIndex < photos.length ? photos[photoIndex] : null;
          return <ChapterBlock key={ch.number} chapter={ch} photo={photo} />;
        })}
      </div>

      {/* Closing */}
      <div className="mt-32 text-center px-6">
        <div className="ornament mb-8">
          <span className="font-serif italic text-base text-gold">to be continued</span>
        </div>
        <p className="font-display text-3xl sm:text-4xl italic font-light text-ink/70 max-w-xl mx-auto leading-tight">
          The next chapter is the longest one.
        </p>
      </div>
    </div>
  );
}

function ChapterBlock({
  chapter,
  photo,
}: {
  chapter: Chapter;
  photo: { src: string; alt: string } | null;
}) {
  const paragraphs = chapter.body.split('\n\n');
  const imgRight = chapter.imagePosition !== 'left';

  // No photo available — render a centered editorial layout
  if (!photo) {
    return (
      <article className="text-center max-w-3xl mx-auto">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="font-display text-2xl italic text-gold/80">{chapter.number}</span>
          <span className="h-px w-12 bg-gold/40" />
          <span className="text-xs tracking-widest uppercase text-muted">{chapter.date}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-light italic text-ink mb-10 leading-tight">
          {chapter.title}
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="font-serif text-lg sm:text-xl leading-relaxed text-ink/80 mb-6">
            {p}
          </p>
        ))}
      </article>
    );
  }

  return (
    <article className={`grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center ${imgRight ? '' : 'md:[direction:rtl]'}`}>
      {/* Image */}
      <div className={`relative aspect-[4/5] photo-frame ${imgRight ? '' : 'md:[direction:ltr]'}`}>
        <div className="relative w-full h-full overflow-hidden">
          <Photo src={photo.src} alt={chapter.title} fill />
        </div>
        <span className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 font-display text-5xl sm:text-7xl italic text-gold/40 leading-none select-none">
          {chapter.number}
        </span>
      </div>

      {/* Text */}
      <div className={imgRight ? '' : 'md:[direction:ltr]'}>
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{chapter.date}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light italic text-ink mb-8 leading-tight">
          {chapter.title}
        </h2>
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="font-serif text-lg leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

function romanize(n: number): string {
  const map: [number, string][] = [
    [10, 'Ten'], [9, 'Nine'], [8, 'Eight'], [7, 'Seven'], [6, 'Six'],
    [5, 'Five'], [4, 'Four'], [3, 'Three'], [2, 'Two'], [1, 'One'],
  ];
  for (const [num, word] of map) {
    if (n === num) return word;
  }
  return String(n);
}
