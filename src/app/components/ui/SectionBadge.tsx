type SectionBadgeProps = {
  children: React.ReactNode
  pulse?: boolean
  className?: string
}

export function SectionBadge({ children, pulse = false, className = '' }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/5 border border-primary/20 ${className}`}
    >
      {pulse && <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />}
      <span className="text-primary text-xs tracking-[0.2em]">{children}</span>
    </div>
  )
}
