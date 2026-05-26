import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import ProjectCard from './projects/ProjectCard'
import ProjectFilters from './projects/ProjectFilters'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(
      (project) => project.category?.toLowerCase() === activeFilter,
    )
  }, [activeFilter])

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="02. Projects"
          title="Things I've built"
          description="Full-stack, ML, and mobile work—from finance apps to fraud detection and movie discovery."
        />

        <div className="mb-10">
          <ProjectFilters active={activeFilter} onChange={setActiveFilter} />
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-12 text-center text-muted"
              >
                No projects in this category yet.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
