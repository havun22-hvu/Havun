'use client';

import Image from 'next/image';
import { useRef } from 'react';

const CONTACT = {
  name: 'Havun',
  fullName: 'H.V.U. Vuijk h/o Havun',
  email: 'havun22@gmail.com',
  website: 'https://havun.nl',
  websiteDisplay: 'havun.nl',
  kvk: '95538013',
  city: 'Nederland',
  services: ['SaaS Platforms', 'Android Apps', 'Hosting & SEO'],
};

const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(CONTACT.website)}&bgcolor=1a1a2e&color=10b981&qzone=1`;

function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${CONTACT.name}`,
    `ORG:${CONTACT.fullName}`,
    `EMAIL:${CONTACT.email}`,
    `URL:${CONTACT.website}`,
    `ADR:;;${CONTACT.city};;;;NL`,
    `NOTE:SaaS Platforms\\, Android Apps\\, Hosting & SEO`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'havun.vcf';
  a.click();
  URL.revokeObjectURL(url);
}

export default function CardPage() {
  const cardRef = useRef<HTMLDivElement>(null);

  async function downloadPng() {
    if (!cardRef.current) return;
    // Serialize the card DOM to an SVG foreignObject and render to canvas
    const el = cardRef.current;
    const { width, height } = el.getBoundingClientRect();
    const xml = new XMLSerializer().serializeToString(el);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width * 2}" height="${height * 2}">
      <foreignObject width="${width}" height="${height}" transform="scale(2)">
        ${xml}
      </foreignObject>
    </svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.getContext('2d')!.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = 'havun-visitekaartje.png';
      a.click();
    };
    img.src = url;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">

      {/* Visitekaartje */}
      <div
        ref={cardRef}
        className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)' }}
      >
        {/* Top accent balk */}
        <div className="h-1.5 w-full" style={{ background: '#10b981' }} />

        <div className="p-7">
          {/* Logo + naam */}
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="Havun" width={48} height={48} className="rounded-xl" />
            <div>
              <p className="text-2xl font-bold text-white">Havun</p>
              <p className="text-xs text-emerald-400">Uw digitale partner</p>
            </div>
          </div>

          {/* Diensten */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {CONTACT.services.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-0.5 rounded-full text-white font-medium"
                style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)' }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Contactgegevens + QR */}
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <svg className="w-4 h-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <svg className="w-4 h-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
                {CONTACT.websiteDisplay}
              </a>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <span>KVK {CONTACT.kvk}</span>
              </div>
            </div>

            {/* QR code */}
            <div className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={QR_URL}
                alt="QR havun.nl"
                width={72}
                height={72}
                className="rounded-lg"
              />
              <p className="text-gray-600 text-xs text-center mt-1">Scan mij</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actieknoppen */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <button
          onClick={downloadVCard}
          className="flex-1 flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold py-3 px-5 rounded-xl transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Voeg toe aan contacten
        </button>
        <button
          onClick={downloadPng}
          className="flex-1 flex items-center justify-center gap-2 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-semibold py-3 px-5 rounded-xl transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download kaartje
        </button>
      </div>

      {/* Deel-link */}
      <div className="mt-4 text-center">
        <p className="text-sm text-[var(--text-secondary)]">
          Deel via:{' '}
          <a href="/card" className="text-[var(--primary)] hover:underline font-medium">
            havun.nl/card
          </a>
        </p>
      </div>
    </div>
  );
}
