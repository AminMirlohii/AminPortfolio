import { motion } from 'framer-motion'
import { Code2, Link, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'

const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: profile.github,
    icon: Code2,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: Link,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="04. Contact"
          title="Let's connect"
          description="Open to internships, collaborations, and interesting projects. Reach out anytime."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-gradient-to-br from-surface-card via-surface-elevated to-indigo-500/5 p-8 sm:p-12"
        >
          <p className="max-w-lg text-lg text-muted">
            The fastest way to reach me is by email. You can also find me on
            GitHub and LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`mailto:${profile.email}`} size="lg">
              <Mail size={18} />
              {profile.email}
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-6">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-2 text-muted transition-colors hover:text-indigo-400"
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
