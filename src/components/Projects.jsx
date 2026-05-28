import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import ProjectCard from './projects/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="02. Projects"
          title="Things I've built"
          description="Full-stack, ML, and mobile work—from finance apps to fraud detection and movie discovery."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
