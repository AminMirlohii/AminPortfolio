import { motion } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'
import SkillBadge from '../ui/SkillBadge'

export default function ProjectCard({ project }) {
  const stack = project.techStack ?? project.tags ?? []
  const sourceUrl = project.github ?? project.source ?? '#'
  const isMobile = project.deviceType === 'mobile'
  const bodyText = project.detail ?? project.description

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="group overflow-hidden rounded-2xl border border-border/80 bg-surface-card/60 shadow-lg shadow-black/20 backdrop-blur-sm transition-shadow duration-300 hover:border-blue-600/35 hover:shadow-xl hover:shadow-blue-700/10"
    >
      <div className="flex flex-col lg:min-h-[28rem] lg:flex-row">
        {/* Left — full screenshot showcase */}
        <div className="relative flex min-h-[16rem] w-full items-center justify-center overflow-hidden border-b border-border/60 bg-gradient-to-br from-surface-elevated via-[#0c0c14] to-black lg:min-h-0 lg:w-1/2 lg:border-b-0 lg:border-r lg:border-border/60">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 20%, rgba(37, 99, 235, 0.22), transparent 50%), radial-gradient(circle at 80% 80%, rgba(30, 64, 175, 0.16), transparent 45%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            aria-hidden
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {project.thumbnail ? (
            <div
              className={`relative z-10 flex h-full w-full items-center justify-center p-6 sm:p-8 lg:p-10 ${
                isMobile ? 'max-w-sm' : 'max-w-none'
              }`}
            >
              <div
                className={`relative w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
                  isMobile
                    ? 'rounded-[2rem] border border-white/10 bg-black/40 p-2 shadow-[0_0_60px_rgba(29,78,216,0.2)] ring-1 ring-white/5'
                    : 'rounded-lg border border-white/5 bg-black/30 p-1 shadow-[0_20px_80px_rgba(0,0,0,0.5)]'
                }`}
              >
                <img
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  className={`mx-auto max-h-[min(70vh,32rem)] w-full object-contain ${
                    isMobile ? 'rounded-[1.6rem]' : 'rounded-md'
                  }`}
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div className="relative z-10 flex aspect-video w-full max-w-md items-center justify-center rounded-xl border border-dashed border-border/60 bg-black/30 m-8">
              <p className="font-mono text-sm text-muted">Add thumbnail.png</p>
            </div>
          )}
        </div>

        {/* Right — unrestricted copy */}
        <div className="flex w-full flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:w-1/2 lg:px-10 lg:py-12">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-blue-600/30 bg-blue-700/10 px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-blue-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full border border-border px-3 py-0.5 font-mono text-xs text-muted">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-100 sm:text-3xl">
            {project.title}
          </h3>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-300">
            <p>{bodyText}</p>
            {project.detail && project.description !== project.detail && (
              <p className="text-muted">{project.description}</p>
            )}
          </div>

          {project.highlights?.length > 0 && (
            <ul className="mt-6 space-y-2.5 border-l-2 border-blue-600/40 pl-4">
              {project.highlights.map((point) => (
                <li
                  key={point}
                  className="text-sm leading-relaxed text-muted sm:text-[0.95rem]"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <SkillBadge key={tech}>{tech}</SkillBadge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:border-blue-600/50 hover:bg-blue-700/10 hover:text-blue-200"
            >
              <Code2 size={16} />
              View Source
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600/40 bg-blue-700/10 px-5 py-2.5 text-sm font-medium text-blue-200 transition-all hover:bg-blue-700/20"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
