import { VariantProps } from 'tailwind-variants'
import { tv } from '../../utils/tv'

export const contentBoxVariants = tv({
  base: ['px-sone-ml', 'py-sone-sm', 'flex'],
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
    gap: {
      none: 'gap-0',
      '4xs': 'gap-sone-4xs',
      '3xs': 'gap-sone-3xs',
      '2xs': 'gap-sone-2xs',
      xs: 'gap-sone-xs',
      sm: 'gap-sone-sm',
      ms: 'gap-sone-ms',
      md: 'gap-sone-md',
      ml: 'gap-sone-ml',
      lg: 'gap-sone-lg',
      '2xl': 'gap-sone-2xl',
      '3xl': 'gap-sone-3xl',
      '4xl': 'gap-sone-4xl',
    },
  },
  defaultVariants: {
    direction: 'col',
    gap: 'xs',
  },
})

export type ContentBoxVariants = VariantProps<typeof contentBoxVariants>
