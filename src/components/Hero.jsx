import { motion } from 'framer-motion'
import { ArrowDown, Code2, FileText } from 'lucide-react'
import { profile } from '../data/profile'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-indigo-400">
            Hi, I&apos;m
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-indigo-300 sm:text-2xl">
            {profile.role}
            {profile.school && (
              <span className="mt-1 block text-lg text-muted sm:text-xl">
                {profile.school}
              </span>
            )}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" size="lg">
              View projects
            </Button>
            <Button
              href={profile.resumeUrl}
              variant="secondary"
              size="lg"
              external={profile.resumeUrl.startsWith('http')}
            >
              <FileText size={18} />
              Resume
            </Button>
            <Button
              href={profile.github}
              variant="secondary"
              size="lg"
              external
            >
              <Code2 size={18} />
              GitHub
            </Button>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-zinc-300"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
