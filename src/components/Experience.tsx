import { useInView } from '../hooks/useInView';
import { experience } from '../data';

export default function Experience() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 px-6 relative fade-up ${inView ? 'visible' : ''}`}
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-violet-500/[0.03] blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">— Experience</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16 leading-tight">
          Professional History
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-slate-700/40 to-transparent hidden md:block" />

          <div className="space-y-16">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2.5 hidden md:flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-[#040912] ring-offset-0" />
                </div>

                {/* Header */}
                <div className="mb-6 pb-6 border-b border-white/[0.05]">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                    <h3 className="font-display font-semibold text-white text-xl">{job.role}</h3>
                    <span className="text-sky-400 font-medium text-sm">· {job.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                      </svg>
                      {job.period}
                    </span>
                    <span className="text-slate-700">·</span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-8">
                  {job.projects.map((proj, j) => (
                    <div key={j}>
                      {proj.name && (
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-1 h-4 rounded-full bg-gradient-to-b from-sky-400 to-violet-400" />
                          <p className="text-slate-300 text-sm font-medium">{proj.name}</p>
                        </div>
                      )}
                      <ul className="space-y-3 ml-4">
                        {proj.bullets.map((b, k) => (
                          <li key={k} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="text-sky-600 mt-[5px] shrink-0 text-[10px]">◆</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
