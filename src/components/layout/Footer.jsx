import { profile } from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name}. Built with React & Tailwind.
        </p>
        <a
          href="#"
          className="font-mono text-xs text-muted transition-colors hover:text-indigo-400"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
