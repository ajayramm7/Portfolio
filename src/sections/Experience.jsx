import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { achievements } from '../data/portfolio.js';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Achievements"
      title="Growing through projects, practice, and consistent learning."
      description="A dedicated space for academic milestones, certifications, hackathons, internships, and technical achievements."
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map(({ title, period, description, icon: Icon }, index) => (
          <motion.article
            key={title}
            className="rounded-lg border border-slate-200 bg-paper p-6 dark:border-slate-800 dark:bg-slate-950"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="mb-5 flex items-start gap-4">
              <div className="grid h-12 w-12 flex-none place-items-center rounded-lg bg-ink text-white dark:bg-cyan-300 dark:text-slate-950">
                <Icon size={23} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink dark:text-white">{title}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-700 dark:text-cyan-300">
                  {period}
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
