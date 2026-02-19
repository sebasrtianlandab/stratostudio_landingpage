export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/assets/Vectores.svg"
      alt="Strato Studio"
      className={`h-8 sm:h-10 w-auto object-contain ${className}`}
    />
  )
}
