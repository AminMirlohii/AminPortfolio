import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import { profile } from '../data/profile'
import Button from './ui/Button'
import StarryBackground from './hero/StarryBackground'
import TypewriterText from './hero/TypewriterText'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const role =
    profile.heroRole ??
    `${profile.role} @ ${profile.school ?? 'University of Waterloo'}`
  const subtitle = profile.heroSubtitle ?? profile.tagline
  const resumeOpensNewTab =
    profile.resumeUrl.startsWith('http') || profile.resumeUrl.endsWith('.pdf')

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-gradient-orb hero-gradient-orb--1" />
        <div className="hero-gradient-orb hero-gradient-orb--2" />
        <div className="hero-gradient-orb hero-gradient-orb--3" />
      </div>

      <StarryBackground />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm tracking-widest text-indigo-400 uppercase"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-lg font-medium text-indigo-300 sm:text-xl md:text-2xl"
        >
          {role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mx-auto mt-8 max-w-2xl"
        >
          <TypewriterText
            text={subtitle}
            speed={38}
            className="min-h-[1.75rem] text-base leading-relaxed text-muted sm:text-lg md:min-h-[2rem] md:text-xl"
          />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects" size="lg">
            View Projects
          </Button>
          <Button
            href={profile.resumeUrl}
            variant="secondary"
            size="lg"
            external={resumeOpensNewTab}
          >
            <FileText size={18} />
            Resume
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-zinc-300"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-xs">scroll</span>
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
