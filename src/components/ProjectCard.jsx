import { motion } from 'framer-motion'
import { Code2, ExternalLink, Folder } from 'lucide-react'
import SkillBadge from './ui/SkillBadge'

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-card transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        className={`relative flex items-center justify-center bg-gradient-to-br from-indigo-500/10 via-surface-elevated to-violet-500/10 ${
          featured ? 'h-48 sm:h-56' : 'h-36'
        }`}
      >
        <Folder
          className="text-indigo-400/40 transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-400/60"
          size={featured ? 56 : 40}
          strokeWidth={1.25}
        />
        {project.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/30">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-200">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <SkillBadge key={tag}>{tag}</SkillBadge>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-indigo-400"
            >
              <Code2 size={16} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-indigo-400"
            >
              <ExternalLink size={16} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
