import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { skillCategories } from '../data/skills'
import SectionHeading from './ui/SectionHeading'
import SkillBadge from './ui/SkillBadge'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="01. About" title="A bit about me" />

        <div className="mb-12 max-w-3xl space-y-4 text-justify text-lg leading-relaxed text-muted">
          {profile.bio.split(/\n\n+/).map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-surface-card/50 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 font-mono text-sm font-medium text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
