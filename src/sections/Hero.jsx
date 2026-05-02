import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { highlights, profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(8,145,178,0.10),transparent_35%,rgba(20,184,166,0.10)_75%,transparent)] dark:bg-[linear-gradient(135deg,rgba(103,232,249,0.12),transparent_35%,rgba(45,212,191,0.10)_75%,transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-4 inline-flex rounded-lg border border-brand-100 bg-white px-3 py-2 text-sm font-semibold text-brand-700 shadow-sm dark:border-cyan-300/20 dark:bg-slate-900 dark:text-cyan-200">
            Open to internships, freelance work, and full-stack projects
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-brand-700 dark:text-cyan-300 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-700 dark:border-slate-700 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { label: 'GitHub', href: profile.github, icon: Github },
              { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
              { label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-hidden rounded-lg bg-slate-950 p-5 text-sm leading-7 text-slate-100">
              <code>{`const developer = {
  name: 'Ajayram',
  stack: ['React', 'Node', 'Express', 'MongoDB'],
  strength: 'turning ideas into usable products',
  currentlyLearning: ['DSA', 'System Design'],
  goal: 'build reliable software that people enjoy'
};`}</code>
            </pre>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-200 p-4 text-center dark:border-slate-800"
                >
                  <div className="text-xl font-bold text-ink dark:text-white">{item.value}</div>
                  <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
