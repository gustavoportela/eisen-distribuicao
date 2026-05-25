interface DiamondProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'yellow' | 'pink'
  opacity?: number
  className?: string
}

const sizes = {
  sm: 'w-2.5 h-2.5',
  md: 'w-4 h-4',
  lg: 'w-6 h-6',
}

export function Diamond({ size = 'sm', color = 'yellow', opacity = 1, className = '' }: DiamondProps) {
  const colorClass = color === 'yellow' ? 'bg-eisen-yellow' : 'bg-eisen-pink'
  return (
    <span
      className={`inline-block ${sizes[size]} ${colorClass} rotate-45 shrink-0 ${className}`}
      style={{ opacity }}
    />
  )
}
