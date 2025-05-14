import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariatns = tv(
  {
    base: [
      'inline-flex',
      'items-center',
      'justify-center',
      'py-sone-2xs',
      'px-sone-md',
      'font-semibold',
      'cursor-pointer',
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
        class: 'bg-cta1',
      },
      {
        color: 'cta1',
        isDisabled: true,
        class: 'bg-cta1-disabled',
      },
      {
        color: 'cta2',
        isDisabled: false,
        class: 'bg-cta2',
      },
      {
        color: 'cta2',
        isDisabled: true,
        class: 'bg-cta2-disabled',
      },
      {
        color: 'destructive',
        isDisabled: false,
        class: 'bg-destructive',
      },
      {
        color: 'destructive',
        isDisabled: true,
        class: 'bg-destructive-disabled',
      },
    ],
  },
  {
    twMerge: false,
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariatns>
