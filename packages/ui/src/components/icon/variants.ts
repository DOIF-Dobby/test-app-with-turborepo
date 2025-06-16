import { VariantProps } from 'tailwind-variants'
import { tv } from '../../utils/tv'

export const iconVariants = tv({
  base: '',
  variants: {
    size: {
      xs: 'size-4',
      sm: 'size-5',
      md: 'size-6',
    },
    color: {
      current: 'fill-current',
      cta1: 'fill-cta1',
      cta2: 'fill-cta2',
      destructive: 'fill-destructive',
    },
  },
  defaultVariants: {
    color: 'current',
    size: 'md',
  },
})

export type IconVariants = VariantProps<typeof iconVariants>
