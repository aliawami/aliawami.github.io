/**
 * Eye-form logo mark — inspired by the Arabic letter ع (Ayn),
 * which means "eye" and is the first letter of Ali (علي).
 * All curves, no hard edges.
 */

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="Ali Alawami">
      <defs>
        <linearGradient id="eye-nav" x1="3" y1="14" x2="25" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      {/* Outer eye — asymmetric almond, right tip sits 2px higher than left for natural tilt */}
      <path
        d="M 3 15 C 3 7, 25 6, 25 13 C 25 20, 3 22, 3 15 Z"
        stroke="url(#eye-nav)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="rgba(56,189,248,0.06)"
      />

      {/* Iris */}
      <circle cx="14" cy="14.5" r="3" fill="#a78bfa" />

      {/* Specular highlight — makes it feel alive */}
      <circle cx="12.5" cy="13" r="0.9" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

export function LogoMarkWithBg({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Ali Alawami">
      <defs>
        <linearGradient id="eye-bg" x1="4" y1="20" x2="36" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      {/* Background tile */}
      <rect width="40" height="40" rx="10" fill="#060c1a" />
      <rect width="40" height="40" rx="10" stroke="rgba(148,163,184,0.1)" strokeWidth="1" fill="none" />

      {/* Outer eye */}
      <path
        d="M 4 21 C 4 10, 36 9, 36 19 C 36 29, 4 31, 4 21 Z"
        stroke="url(#eye-bg)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="rgba(56,189,248,0.07)"
      />

      {/* Iris */}
      <circle cx="20" cy="20" r="5.5" fill="#a78bfa" />

      {/* Specular highlight */}
      <circle cx="17.5" cy="17.5" r="1.6" fill="rgba(255,255,255,0.55)" />
    </svg>
  );
}
