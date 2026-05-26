const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'ml', label: 'ML' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
]

export default function ProjectFilters({ active, onChange }) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {FILTERS.map((filter) => {
        const isActive = active === filter.id
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                : 'border border-border bg-surface-card/60 text-muted hover:border-indigo-500/40 hover:text-zinc-200'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
