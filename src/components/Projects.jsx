import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import ProjectCard from './projects/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-justify">
        <SectionHeading
          label="02. Projects"
          title="Things I've built"
          description="Full-stack, ML, and mobile work—from finance apps to fraud detection and movie discovery."
        />

        <div className="flex flex-col gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
