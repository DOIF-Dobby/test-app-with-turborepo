import { VariantProps } from 'tailwind-variants'
import { tv } from '../../utils/tv'

export const contentBoxVariants = tv({
  base: ['px-sone-ml', 'py-sone-sm', 'flex', 'gap-sone-2xs'],
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
  },
  defaultVariants: {
    direction: 'col',
  },
})

export type ContentBoxVariants = VariantProps<typeof contentBoxVariants>
