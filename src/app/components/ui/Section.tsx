import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  /** max-width: default 5xl, narrow 4xl, wide 7xl, full 6xl */
  width?: 'narrow' | 'default' | 'wide' | 'full'
  /** padding: default py-32, tight py-20 */
  spacing?: 'default' | 'tight'
  center?: boolean
  className?: string
}

export function Section({
  id,
  children,
  width = 'default',
  spacing = 'default',
  center = false,
  className = '',
}: SectionProps) {
  const maxWidth = {
    narrow: 'max-w-4xl',
    default: 'max-w-5xl',
    wide: 'max-w-7xl',
    full: 'max-w-6xl',
  }[width]
  const padding = spacing === 'tight' ? 'py-20' : 'py-32'

  return (
    <section
      id={id}
      className={`relative px-4 sm:px-6 ${padding} ${className}`}
    >
      <div className={`${maxWidth} mx-auto relative z-10 ${center ? 'text-center' : ''}`}>
        {children}
      </div>
    </section>
  )
}
