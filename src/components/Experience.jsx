import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'
import { timeline } from '../data/experience'
import SectionHeading from './ui/SectionHeading'

const iconMap = {
  education: GraduationCap,
  experience: Briefcase,
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="03. Experience"
          title="Education & experience"
          description="Where I've studied and what I've been working on."
        />

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-px before:bg-border md:before:ml-[1.35rem]">
          {timeline.map((item, index) => {
            const Icon = iconMap[item.type] || Briefcase
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex gap-6 pl-12 md:pl-14"
              >
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-card text-indigo-400 md:left-0">
                  <Icon size={18} />
                </div>
                <div className="flex-1 rounded-xl border border-border bg-surface-card/40 p-6 transition-colors hover:border-indigo-500/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="font-mono text-xs text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-indigo-300">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
