/**
 * The Arch — logo mark for Ali Alawami.
 * Initial A rendered as a fluid calligraphic arch.
 * All curves, no hard edges. Apex dot rounds the top.
 */

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-label="Ali Alawami">
      <defs>
        <linearGradient id="arch-nav" x1="18" y1="14" x2="62" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      {/* Arch legs */}
      <path
        d="M 18 70 C 18 54, 25 28, 40 14 C 55 28, 62 54, 62 70"
        stroke="url(#arch-nav)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Flowing crossbar */}
      <path
        d="M 27 52 C 33 47, 47 47, 53 52"
        stroke="url(#arch-nav)"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Apex dot — rounds the top, the distinctive detail */}
      <circle cx="40" cy="14" r="5" fill="#38bdf8" />
    </svg>
  );
}

export function LogoMarkWithBg({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-label="Ali Alawami">
      <defs>
        <linearGradient id="arch-bg" x1="18" y1="14" x2="62" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      {/* Background tile — scaled to size */}
      <rect width="80" height="80" rx="18" fill="#060c1a" />
      <rect width="80" height="80" rx="18" stroke="rgba(148,163,184,0.1)" strokeWidth="1.5" fill="none" />

      {/* Arch legs */}
      <path
        d="M 18 70 C 18 54, 25 28, 40 14 C 55 28, 62 54, 62 70"
        stroke="url(#arch-bg)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Crossbar */}
      <path
        d="M 27 52 C 33 47, 47 47, 53 52"
        stroke="url(#arch-bg)"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Apex dot */}
      <circle cx="40" cy="14" r="5" fill="#38bdf8" />
    </svg>
  );
}
