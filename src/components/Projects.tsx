import { useInView } from '../hooks/useInView';
import { projects } from '../data';

const projectAccents = [
  { gradient: 'from-sky-400 to-cyan-400', glow: 'bg-sky-500/5', border: 'hover:border-sky-500/25' },
  { gradient: 'from-emerald-400 to-teal-400', glow: 'bg-emerald-500/5', border: 'hover:border-emerald-500/25' },
  { gradient: 'from-violet-400 to-purple-400', glow: 'bg-violet-500/5', border: 'hover:border-violet-500/25' },
  { gradient: 'from-orange-400 to-amber-400', glow: 'bg-amber-500/5', border: 'hover:border-amber-500/25' },
];

export default function Projects() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 px-6 relative fade-up ${inView ? 'visible' : ''}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full bg-sky-500/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">— Projects</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Current Work
          </h2>
          <p className="text-slate-500 text-sm max-w-xs">
            Apps in active development and published open-source packages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const accent = projectAccents[i % projectAccents.length];
            return (
              <div
                key={i}
                className={`group relative card-base rounded-2xl overflow-hidden flex flex-col ${accent.border}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top gradient bar */}
                <div className={`h-px bg-gradient-to-r ${accent.gradient} opacity-40 group-hover:opacity-90 transition-opacity duration-300`} />

                {/* Hover glow */}
                <div className={`absolute inset-0 ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      {p.nameAr && (
                        <p
                          className="text-white font-bold text-2xl leading-tight mb-0.5"
                          dir="rtl"
                          lang="ar"
                          style={{ fontFamily: 'system-ui, sans-serif' }}
                        >
                          {p.nameAr}
                        </p>
                      )}
                      <p className={`font-display font-semibold ${p.nameAr ? 'text-slate-300 text-base' : 'text-white text-xl'}`}>
                        {p.nameEn}
                      </p>
                    </div>
                    <StatusBadge status={p.status} type={p.type} />
                  </div>

                  {/* Tagline */}
                  <p className={`text-sm mb-4 font-medium bg-gradient-to-r ${accent.gradient} bg-clip-text`}
                    style={{ WebkitTextFillColor: 'transparent' }}>
                    {p.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{p.description}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  {'link' in p && p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group/link w-fit"
                    >
                      View on pub.dev
                      <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-slate-600 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      In active development
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status, type }: { status: string; type: 'app' | 'package' }) {
  const isLive = type === 'package';
  return (
    <span
      className={`shrink-0 text-xs px-2.5 py-1 rounded-full font-medium border whitespace-nowrap ${
        isLive
          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
      }`}
    >
      <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle ${isLive ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
      {status}
    </span>
  );
}
