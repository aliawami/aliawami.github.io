import { useInView } from '../hooks/useInView';
import { meta } from '../data';

export default function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 px-6 relative overflow-hidden fade-up ${inView ? 'visible' : ''}`}
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-sky-500/[0.06] blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-6">— Contact</p>

        <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
          Let's build<br />
          <span className="gradient-text">something great.</span>
        </h2>

        <p className="text-slate-400 leading-relaxed mb-12 max-w-xl mx-auto">
          Open to senior Flutter and iOS roles, technical leadership positions, and consulting engagements.
          Based in Eastern Province, Saudi Arabia — open to remote.
        </p>

        <a
          href={`mailto:${meta.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold rounded-2xl transition-all duration-200 text-base font-display mb-14 hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          {meta.email}
        </a>

        <div className="flex justify-center gap-6">
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-slate-500 hover:text-sky-400 transition-colors text-sm group"
          >
            <span className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.07] group-hover:border-sky-500/20 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
            LinkedIn
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-slate-500 hover:text-sky-400 transition-colors text-sm group"
          >
            <span className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.07] group-hover:border-sky-500/20 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </span>
            GitHub
          </a>
          <a
            href="https://pub.dev/publishers/aliawami"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-slate-500 hover:text-sky-400 transition-colors text-sm group"
          >
            <span className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.07] group-hover:border-sky-500/20 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </span>
            pub.dev
          </a>
        </div>
      </div>
    </section>
  );
}
