import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I use to design, build, and ship."
      description="A focused technical toolkit for full-stack web development, from algorithms and programming fundamentals to backend services and deployment."
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ category, items, icon: Icon }, index) => (
          <motion.div
            key={category}
            className="rounded-lg border border-slate-200 bg-paper p-6 dark:border-slate-800 dark:bg-slate-950"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-white dark:bg-cyan-300 dark:text-slate-950">
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-ink dark:text-white">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
