import { useInView } from '../hooks/useInView';

const disciplines = [
  {
    id: 'flutter',
    title: 'Flutter',
    subtitle: 'Cross-Platform Mobile',
    description:
      'Production-grade iOS and Android applications from a single Dart codebase. Clean Architecture, Riverpod state management, go_router, and feature-first project structure — engineered for teams and long-term maintenance.',
    tags: ['Dart', 'Riverpod', 'go_router', 'Clean Architecture', 'Play Store', 'App Store'],
    accent: 'from-sky-400 to-cyan-400',
    border: 'hover:border-sky-500/25',
    glow: 'group-hover:opacity-100',
    glowColor: 'bg-sky-500/5',
    tagColor: 'bg-sky-500/8 text-sky-300 border-sky-500/15',
    iconColor: 'text-sky-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    id: 'ios',
    title: 'iOS Native',
    subtitle: 'Swift & SwiftUI',
    description:
      'Native iOS applications built end-to-end in Swift and SwiftUI. Protocol-oriented design, MVVM architecture, Core Data, and full Xcode toolchain experience — from first commit to App Store submission.',
    tags: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Swift Package Manager', 'Vapor'],
    accent: 'from-slate-300 to-slate-400',
    border: 'hover:border-slate-400/25',
    glow: 'group-hover:opacity-100',
    glowColor: 'bg-slate-400/5',
    tagColor: 'bg-slate-400/8 text-slate-300 border-slate-400/15',
    iconColor: 'text-slate-300',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
  },
  {
    id: 'django',
    title: 'Django',
    subtitle: 'REST APIs & Backend',
    description:
      'Backend services and REST APIs purpose-built to serve mobile clients. Django REST Framework, Supabase with row-level security, PostgreSQL, and authentication flows — structured for security and scale.',
    tags: ['Python', 'Django REST Framework', 'Supabase', 'PostgreSQL', 'Firebase', 'RLS'],
    accent: 'from-emerald-400 to-green-400',
    border: 'hover:border-emerald-500/25',
    glow: 'group-hover:opacity-100',
    glowColor: 'bg-emerald-500/5',
    tagColor: 'bg-emerald-500/8 text-emerald-300 border-emerald-500/15',
    iconColor: 'text-emerald-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    subtitle: 'Figma to Production',
    description:
      'Interface design that closes the gap between product and code. Conducts UX research, builds component systems in Figma, then implements them directly — including Arabic RTL interfaces and children\'s app UX.',
    tags: ['Figma', 'UX Research', 'Component Systems', 'RTL Design', 'Prototyping', 'Accessibility'],
    accent: 'from-violet-400 to-purple-400',
    border: 'hover:border-violet-500/25',
    glow: 'group-hover:opacity-100',
    glowColor: 'bg-violet-500/5',
    tagColor: 'bg-violet-500/8 text-violet-300 border-violet-500/15',
    iconColor: 'text-violet-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

export default function Disciplines() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 px-6 fade-up ${inView ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">— What I Build</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Four disciplines.<br />
            <span className="text-slate-500">One developer.</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            From native mobile to backend to UI research — the full delivery chain, no handoff gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {disciplines.map((d, i) => (
            <div
              key={d.id}
              className={`group relative card-base rounded-2xl p-7 overflow-hidden ${d.border}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top accent line */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${d.accent} opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />

              {/* Background glow */}
              <div className={`absolute inset-0 ${d.glowColor} opacity-0 ${d.glow} transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] ${d.iconColor} shrink-0`}>
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-xl leading-tight">{d.title}</h3>
                    <p className={`text-sm mt-0.5 bg-gradient-to-r ${d.accent} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }}>
                      {d.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{d.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {d.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-md border ${d.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
