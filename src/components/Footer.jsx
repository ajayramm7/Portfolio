import { Code2 } from 'lucide-react';
import { profile, socials } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
          <Code2 size={18} className="text-brand-600 dark:text-cyan-300" />
          <span>© {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</span>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
