import { projects } from '../data/projects'
import SectionHeading from './ui/SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="02. Projects"
          title="Things I've built"
          description="A selection of coursework, personal, and team projects. Add more anytime in src/data/projects.js."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
