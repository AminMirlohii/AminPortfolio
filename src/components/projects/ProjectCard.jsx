import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import SkillBadge from '../ui/SkillBadge'

export default function ProjectCard({ project }) {
  const stack = project.techStack ?? project.tags ?? []
  const sourceUrl = project.github ?? project.source ?? '#'

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface-card transition-shadow duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-200">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <SkillBadge key={tech}>{tech}</SkillBadge>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface-elevated px-4 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-200"
          >
            <Code2 size={16} />
            View Source
          </a>
        </div>
      </div>
    </motion.article>
  )
}
