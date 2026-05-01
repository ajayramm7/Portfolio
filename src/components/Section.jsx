import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <motion.div
            className="mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-cyan-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
