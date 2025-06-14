import { type VariantProps } from 'tailwind-variants'
import { tv } from '../../utils/tv'

export const buttonVariatns = tv({
  base: [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'py-sone-2xs',
    'px-sone-md',
    'font-semibold',
    'cursor-pointer',
    'overflow-hidden',
  ],
  variants: {
    color: {
      cta1: 'text-cta1-content',
      cta2: 'text-cta2-content',
      destructive: 'text-destructive-content',
    },
    variant: {},
    size: {
      md: 'rounded-input-md text-button-md h-13 min-h-13',
      sm: 'rounded-input-sm text-button-sm h-11 min-h-11',
      xs: 'rounded-input-xs text-button-xs h-9 min-h-9',
      '2xs': 'rounded-input-xs text-button-2xs h-7 min-h-7',
      '3xs': 'rounded-input-xs text-button-2xs h-5 min-h-5',
    },
    isDisabled: {
      true: 'pointer-events-none',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    color: 'cta1',
    size: 'md',
    isDisabled: false,
  },
  compoundVariants: [
    {
      color: 'cta1',
      isDisabled: false,
      class: 'bg-cta1 hover:bg-cta1-hover',
    },
    {
      color: 'cta1',
      isDisabled: true,
      class: 'bg-cta1-disabled',
    },
    {
      color: 'cta2',
      isDisabled: false,
      class: 'bg-cta2 hover:bg-cta2-hover',
    },
    {
      color: 'cta2',
      isDisabled: true,
      class: 'bg-cta2-disabled',
    },
    {
      color: 'destructive',
      isDisabled: false,
      class: 'bg-destructive hover:bg-destructive-hover',
    },
    {
      color: 'destructive',
      isDisabled: true,
      class: 'bg-destructive-disabled',
    },
  ],
})

export type ButtonVariants = VariantProps<typeof buttonVariatns>
