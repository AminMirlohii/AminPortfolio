export default function SkillBadge({ children }) {
  return (
    <span className="rounded-md border border-border bg-surface-card/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-blue-600/40 hover:text-blue-200">
      {children}
    </span>
  )
}
