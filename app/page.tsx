import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { getPreviewPhotos, getAllPhotos } from '@/lib/photos';
import Countdown from '@/components/Countdown';
import Photo from '@/components/Photo';

export default function Home() {
  const dateObj = new Date(siteConfig.weddingDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const year = dateObj.getFullYear();

  const allPhotos = getAllPhotos();
  const previews = getPreviewPhotos(3);
  const heroPhoto = allPhotos[0]; // First photo, used in story preview

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative date in background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="font-display text-[28vw] sm:text-[22vw] leading-none text-sand/40 italic font-light">
            {String(day).padStart(2, '0')}
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-12">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-gold mb-8 reveal-in" style={{ animationDelay: '200ms' }}>
            ✦  A Private Keepsake  ✦
          </p>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light leading-[0.95] text-ink reveal-up" style={{ animationDelay: '400ms' }}>
            <span className="italic">{siteConfig.partnerOne}</span>
            <span className="block my-3 font-serif text-3xl sm:text-5xl text-gold italic font-light">and</span>
            <span className="italic">{siteConfig.partnerTwo}</span>
          </h1>

          <div className="mt-12 flex items-center justify-center gap-6 reveal-up" style={{ animationDelay: '700ms' }}>
            <span className="h-px w-12 sm:w-20 bg-gold/40" />
            <p className="font-serif italic text-muted text-base sm:text-lg">{siteConfig.tagline}</p>
            <span className="h-px w-12 sm:w-20 bg-gold/40" />
          </div>

          <div className="mt-16 space-y-2 reveal-up" style={{ animationDelay: '900ms' }}>
            <p className="font-serif italic text-2xl sm:text-3xl text-ink/80">
              the {ordinal(day)} of {month}
            </p>
            <p className="text-xs tracking-[0.3em] uppercase text-muted">
              {numberToWords(year)}
            </p>
            {siteConfig.location && (
              <p className="text-xs tracking-[0.3em] uppercase text-muted/70 pt-2">
                {siteConfig.location}
              </p>
            )}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 reveal-in" style={{ animationDelay: '1500ms' }}>
          <div className="float-slow flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-widest uppercase text-muted">Scroll</span>
            <span className="h-12 w-px bg-gradient-to-b from-muted/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ════════ COUNTDOWN ════════ */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="ornament mb-6">
            <span className="font-serif italic text-sm">until then</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light italic text-ink mb-16">
            Counting the days
          </h2>
          <Countdown targetISO={siteConfig.weddingDate} />
        </div>
      </section>

      {/* ════════ OPENING QUOTE ════════ */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-display text-7xl text-gold/30 leading-none" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed text-ink/85 -mt-8">
            {siteConfig.openingQuote.text}
          </blockquote>
          <p className="mt-8 text-xs tracking-widest uppercase text-muted">
            — {siteConfig.openingQuote.attribution}
          </p>
        </div>
      </section>

      {/* ════════ STORY PREVIEW ════════ */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[3/4] photo-frame">
              <div className="relative w-full h-full overflow-hidden">
                {heroPhoto ? (
                  <Photo src={heroPhoto.src} alt="A moment in our story" fill priority={false} />
                ) : (
                  <Photo src="/photos/__placeholder.jpg" alt="A moment in our story" fill />
                )}
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Chapter the first</p>
              <h2 className="font-display text-4xl sm:text-5xl font-light italic text-ink mb-8 leading-tight">
                How we found each other
              </h2>
              <p className="font-serif text-lg leading-relaxed text-ink/75 mb-10">
                Every great love story is, at its heart, a series of small coincidences that refused to stay small. Ours began with a conversation that should have ended after five minutes and somehow has not ended yet.
              </p>
              <Link
                href="/story"
                className="inline-flex items-center gap-3 group"
              >
                <span className="text-sm tracking-widest uppercase text-ink border-b border-gold pb-1 group-hover:text-gold transition-colors">
                  Read the chapters
                </span>
                <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ GALLERY PREVIEW ════════ */}
      <section className="py-24 sm:py-32 px-6 bg-gradient-to-b from-cream to-paper">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">A visual library</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light italic text-ink">
              Moments we kept
            </h2>
            {allPhotos.length > 0 && (
              <p className="mt-4 font-serif italic text-muted">
                {allPhotos.length} {allPhotos.length === 1 ? 'photograph' : 'photographs'}, and counting
              </p>
            )}
          </div>

          {previews.length > 0 ? (
            <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-12">
              {previews.map((p, i) => (
                <div
                  key={p.src}
                  className={`aspect-[3/4] relative overflow-hidden photo-frame ${i === 1 ? 'mt-8 sm:mt-12' : ''}`}
                >
                  <div className="relative w-full h-full">
                    <Photo src={p.src} alt="A kept moment" fill />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-12">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`aspect-[3/4] relative overflow-hidden photo-frame ${i === 1 ? 'mt-8 sm:mt-12' : ''}`}
                >
                  <Photo src="/photos/__placeholder.jpg" alt="A kept moment" fill />
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 group"
            >
              <span className="text-sm tracking-widest uppercase text-ink border-b border-gold pb-1 group-hover:text-gold transition-colors">
                Enter the gallery
              </span>
              <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ───────── helpers ─────────
function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function numberToWords(n: number): string {
  const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (n < 2000 || n >= 2100) return String(n);
  const remainder = n - 2000;
  let words = 'two thousand';
  if (remainder === 0) return words;
  if (remainder < 10) return `${words} ${a[remainder]}`;
  if (remainder < 20) return `${words} ${teens[remainder - 10]}`;
  const t = Math.floor(remainder / 10);
  const o = remainder % 10;
  return o === 0 ? `${words} ${tens[t]}` : `${words} ${tens[t]}-${a[o]}`;
}
