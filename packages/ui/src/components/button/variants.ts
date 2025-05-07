import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariatns = tv({
  base: 'btn',
  variants: {
    color: {
      neutral: 'btn-neutral',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      info: 'btn-info',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
    },
    variant: {
      outline: 'btn-outline',
      dash: 'btn-dash',
      soft: 'btn-soft',
      ghost: 'btn-ghost',
      link: 'btn-link',
    },
    size: {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      xl: 'btn-xl',
    },
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariatns>
