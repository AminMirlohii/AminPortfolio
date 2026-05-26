import { motion } from 'framer-motion'
import { Code2, ExternalLink, Folder } from 'lucide-react'
import SkillBadge from './ui/SkillBadge'

export default function ProjectCard({ project, featured = false }) {
  const stack = project.techStack ?? project.tags ?? []
  const categoryLabel =
    typeof project.category === 'string'
      ? project.category.charAt(0).toUpperCase() + project.category.slice(1)
      : ''

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
        <div className="absolute right-4 top-4 flex flex-wrap items-center gap-2">
          {project.category && (
            <span className="rounded-full bg-zinc-500/15 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-500/25">
              {categoryLabel}
            </span>
          )}
          {project.featured && (
            <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/30">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-200">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {Array.isArray(project.highlights) && project.highlights.length > 0 && (
          <ul className="mt-4 list-disc space-y-1 pl-4 text-xs leading-relaxed text-zinc-400">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tag) => (
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
