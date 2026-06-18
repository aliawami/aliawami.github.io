import { useState, useEffect } from 'react';
import { meta } from '../data';
import { LogoMark } from './Logo';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/[0.06]'
          : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <LogoMark size={28} />
          <span className="font-display font-semibold text-sm text-slate-300 group-hover:text-white transition-colors duration-200">
            {meta.name.split(' ')[0]}
            <span className="text-slate-600 font-normal"> {meta.name.split(' ')[1]}</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${meta.email}`}
              className="text-sm px-4 py-1.5 rounded-full border border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400/50 transition-all duration-200 font-medium"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-slate-500 hover:text-slate-200 transition-colors p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-b border-white/[0.06] px-6 py-4 space-y-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-slate-400 hover:text-sky-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`mailto:${meta.email}`}
              className="inline-block text-sm px-4 py-2 rounded-full border border-sky-500/30 text-sky-400"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
