import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { aboutCards } from '../data/portfolio.js';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="A practical developer with an engineering mindset."
      description="I am a B.Tech Computer Science Engineering student at NIT Delhi, started in 2023, focused on full-stack development, problem solving, and building polished applications that balance clean user experience with maintainable engineering."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {aboutCards.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            key={title}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-brand-50 text-brand-700 dark:bg-cyan-300/10 dark:text-cyan-300">
              <Icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-ink dark:text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
