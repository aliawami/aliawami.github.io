import { useInView } from '../hooks/useInView';
import { skillGroups } from '../data';

const groupAccents: Record<string, string> = {
  Mobile: 'from-sky-400 to-cyan-400',
  Architecture: 'from-violet-400 to-purple-400',
  'State Management': 'from-sky-400 to-violet-400',
  'Backend & APIs': 'from-emerald-400 to-teal-400',
  'Tools & Platforms': 'from-amber-400 to-orange-400',
  Other: 'from-slate-400 to-slate-300',
};

export default function Skills() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 px-6 relative fade-up ${inView ? 'visible' : ''}`}
    >
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">— Skills</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16 leading-tight">
          Technical Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => {
            const accent = groupAccents[group.label] || 'from-sky-400 to-violet-400';
            return (
              <div
                key={group.label}
                className="group card-base rounded-2xl p-6 overflow-hidden relative"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Top accent */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent} opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />

                <p className={`font-mono text-xs tracking-widest uppercase mb-4 bg-gradient-to-r ${accent} bg-clip-text`}
                  style={{ WebkitTextFillColor: 'transparent' }}>
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300 hover:text-white hover:bg-white/[0.07] transition-colors duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
