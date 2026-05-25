import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-bold text-sm tracking-wide rounded-md transition-all duration-150 cursor-pointer'

    const sizes = {
      md: 'px-7 py-3.5',
      lg: 'px-8 py-4',
    }

    const variants = {
      primary:   'bg-eisen-yellow text-eisen-navy hover:bg-eisen-yellow-dark',
      secondary: 'border border-eisen-yellow text-eisen-yellow hover:bg-eisen-yellow hover:text-eisen-navy',
      ghost:     'border border-white/20 text-white/80 font-medium hover:border-white/50 hover:text-white',
    }

    return (
      <button
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
