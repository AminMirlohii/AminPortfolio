import { motion } from 'framer-motion'
import { Award, GraduationCap, Briefcase, Users } from 'lucide-react'
import { timeline } from '../data/experience'
import { certificates } from '../data/certificates'
import SectionHeading from './ui/SectionHeading'

const iconMap = {
  education: GraduationCap,
  experience: Briefcase,
  club: Users,
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="03. Experience"
          title="Education & experience"
          description="University of Waterloo, prior studies at Champlain, work experience, and club involvement."
        />

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-px before:bg-border md:before:ml-[1.35rem]">
          {timeline.map((item, index) => {
            const Icon = iconMap[item.type] || Briefcase
            const orgLine = [item.organization, item.location]
              .filter(Boolean)
              .join(' · ')

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative flex gap-6 pl-12 md:pl-14"
              >
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-card text-blue-400">
                  <Icon size={18} />
                </div>
                <div className="flex-1 rounded-xl border border-border bg-surface-card/40 p-6 transition-colors hover:border-blue-600/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="font-mono text-xs text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-blue-300">{orgLine}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16"
        >
          <h3 className="mb-6 flex items-center gap-2 font-mono text-sm text-blue-400">
            <Award size={16} />
            Certificates
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {certificates.map((cert) => (
              <li
                key={cert.id}
                className="rounded-xl border border-border bg-surface-card/40 p-5 transition-colors hover:border-blue-600/30"
              >
                <p className="font-medium text-white">{cert.title}</p>
                <p className="mt-1 text-sm text-blue-300">{cert.issuer}</p>
                <p className="mt-2 font-mono text-xs text-muted">{cert.date}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
