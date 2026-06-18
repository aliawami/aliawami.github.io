import { useInView } from '../hooks/useInView';
import { certifications, education } from '../data';

export default function Certifications() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 px-6 relative fade-up ${inView ? 'visible' : ''}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">— Education</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight">
              Academic Background
            </h2>
            <div className="space-y-7">
              {education.map((e, i) => (
                <div key={i} className="group relative pl-6">
                  <div className="absolute left-0 top-1 bottom-0 w-px bg-gradient-to-b from-sky-500/50 to-transparent" />
                  <div className="absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <p className="font-display font-semibold text-white mb-1">{e.degree}</p>
                  <p className="text-slate-400 text-sm">{e.school}</p>
                  <p className="text-slate-600 text-xs mt-1">{e.location} · {e.year}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-12">
              <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-6">— Languages</p>
              <div className="flex gap-4">
                {[{ lang: 'Arabic', level: 'Native' }, { lang: 'English', level: 'Professional' }].map(l => (
                  <div key={l.lang} className="card-base rounded-xl px-4 py-3">
                    <p className="font-display font-semibold text-white text-sm">{l.lang}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{l.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">— Certifications</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight">
              Continuous Learning
            </h2>
            <div className="space-y-1">
              {certifications.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-3.5 border-b border-white/[0.04] last:border-0 group hover:bg-white/[0.02] rounded-lg px-2 -mx-2 transition-colors duration-150 cursor-default"
                >
                  <span className="text-sky-600 mt-0.5 text-[10px] shrink-0">◆</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 text-sm group-hover:text-white transition-colors">{c.name}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{c.issuer} · {c.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
