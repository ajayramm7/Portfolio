import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Section from '../components/Section.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected full-stack and learning-focused builds."
      description="Each project is structured with sample links that can be replaced with your real repositories and deployed demos."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map(({ title, description, tech, github, live, icon: Icon }, index) => (
          <motion.article
            key={title}
            className="flex min-h-[430px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-50 text-brand-700 dark:bg-cyan-300/10 dark:text-cyan-300">
                <Icon size={24} />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} GitHub repository`}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-brand-500 hover:text-brand-700 dark:border-slate-800 dark:text-slate-300 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} live demo`}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-brand-500 hover:text-brand-700 dark:border-slate-800 dark:text-slate-300 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold text-ink dark:text-white">{title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
