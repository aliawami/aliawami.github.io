import { meta, stats } from '../data';

const disciplines = [
  { label: 'Flutter', color: 'border-sky-500/40 text-sky-400 bg-sky-500/5' },
  { label: 'iOS Native', color: 'border-slate-400/30 text-slate-300 bg-slate-400/5' },
  { label: 'Django', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/5' },
  { label: 'UI/UX Design', color: 'border-violet-500/40 text-violet-400 bg-violet-500/5' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
      {/* Atmospheric glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-sky-500/[0.06] blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-500/[0.05] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-sky-400/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-medium tracking-wide">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="font-display font-bold leading-[0.9] tracking-tight mb-6">
          <span className="gradient-text text-[clamp(3.5rem,10vw,7rem)] block">Ali Alawami</span>
        </h1>

        {/* Discipline tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {disciplines.map(d => (
            <span
              key={d.label}
              className={`text-xs font-medium px-3 py-1 rounded-full border ${d.color}`}
            >
              {d.label}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10 font-light">
          {meta.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold rounded-xl transition-colors duration-200 text-sm font-display"
          >
            View Projects
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl transition-all duration-200 text-sm flex items-center gap-2"
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl transition-all duration-200 text-sm flex items-center gap-2"
          >
            <GitHubIcon /> GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg pt-10 border-t border-white/[0.07]">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="font-display font-bold text-3xl gradient-text-sky leading-none mb-1">{s.value}</p>
              <p className="text-slate-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
