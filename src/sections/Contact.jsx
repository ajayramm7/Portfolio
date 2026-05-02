import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Section from '../components/Section.jsx';
import { profile, socials } from '../data/portfolio.js';

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something useful."
      description="Open to internship opportunities, collaborations, freelance projects, and conversations around full-stack development."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-xl font-bold text-ink dark:text-white">Contact Details</h3>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            I am open to internships, freelance builds, academic collaborations, and full-stack
            project opportunities.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex text-sm font-semibold text-brand-700 hover:underline dark:text-cyan-300"
          >
            {profile.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700 dark:border-slate-800 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input
                required
                name="name"
                type="text"
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-300 dark:focus:ring-cyan-300/10"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
                required
                name="email"
                type="email"
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-300 dark:focus:ring-cyan-300/10"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
            <textarea
              required
              name="message"
              rows="6"
              className="resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-300 dark:focus:ring-cyan-300/10"
              placeholder="Tell me about the project or opportunity..."
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200 sm:w-auto"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
