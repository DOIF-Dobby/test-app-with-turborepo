import { VariantProps } from 'tailwind-variants'
import { tv } from '../../utils/tv'

export const modalVariants = tv({
  slots: {
    modalRoot: [],
    modalContent: [
      'fixed',
      'left-1/2',
      'top-1/2',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'bg-background',
      'py-sone-sm',
      'rounded-card-lg',
      'shadow-card-ml',
      'outline-none',
      'focus:outline-8',
      'focus-visible:outline-8',
      'z-50',
    ],
    modalOverlay: ['fixed', 'inset-0', 'bg-black/60', 'z-50'],
    modalCloseButton: ['absolute', 'top-2', 'right-2'],
  },
  variants: {
    size: {
      sm: {
        modalContent: ['w-100'],
      },
      md: {
        modalContent: ['w-120'],
      },
      lg: {
        modalContent: ['w-140'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type ModalVariants = VariantProps<typeof modalVariants>
export type ModalSlots = keyof ReturnType<typeof modalVariants>
