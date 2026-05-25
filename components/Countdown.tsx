'use client';

import { useEffect, useState } from 'react';

type Time = { days: number; hours: number; minutes: number; seconds: number };

function calc(target: Date): Time {
  const now = new Date();
  let diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000); diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000); diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetISO }: { targetISO: string }) {
  const target = new Date(targetISO);
  const [time, setTime] = useState<Time | null>(null);

  useEffect(() => {
    setTime(calc(target));
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  const units = [
    { value: time?.days ?? 0, label: 'Days' },
    { value: time?.hours ?? 0, label: 'Hours' },
    { value: time?.minutes ?? 0, label: 'Minutes' },
    { value: time?.seconds ?? 0, label: 'Seconds' },
  ];

  return (
    <div className="grid grid-cols-4 gap-px bg-sand/60 border border-sand/60 max-w-2xl mx-auto">
      {units.map((u, i) => (
        <div
          key={u.label}
          className="bg-cream py-8 px-2 sm:py-10 sm:px-4 text-center reveal-up"
          style={{ animationDelay: `${800 + i * 120}ms` }}
        >
          <div className="font-display text-4xl sm:text-5xl md:text-6xl text-ink tick-num font-normal leading-none">
            {time === null ? '—' : String(u.value).padStart(2, '0')}
          </div>
          <div className="mt-4 text-[10px] sm:text-xs tracking-widest uppercase text-muted">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
