import { meta } from '../data';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} <span className="text-slate-500">{meta.name}</span> · {meta.location}
        </p>
        <p className="text-slate-700 text-xs">
          Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
