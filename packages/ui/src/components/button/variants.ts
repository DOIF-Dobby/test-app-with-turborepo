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
      cta1: '',
      cta2: '',
      destructive: '',
    },
    variant: {
      solid: '',
      bordered: '',
      light: '',
    },
    size: {
      md: ['rounded-input-md', 'text-button-md h-13', 'min-h-13'],
      sm: ['rounded-input-sm', 'text-button-sm h-11', 'min-h-11'],
      xs: ['rounded-input-xs', 'text-button-xs h-9', 'min-h-9'],
      '2xs': ['rounded-input-xs', 'text-button-2xs h-7', 'min-h-7'],
      '3xs': ['rounded-input-xs', 'text-button-2xs h-5', 'min-h-5'],
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
    variant: 'solid',
    size: 'md',
    isDisabled: false,
    fullWidth: false,
  },
  compoundVariants: [
    // cta1
    // color: cta1, variants: solid, disabled: false
    {
      color: 'cta1',
      variant: 'solid',
      isDisabled: false,
      class: [
        'bg-cta1',
        'text-cta1-content',
        'hover:bg-cta1-hover',
        'data-[pressed=true]:bg-cta1-pressed',
      ],
    },
    // color: cta1, variants: bordered, disabled: false
    {
      color: 'cta1',
      variant: 'bordered',
      isDisabled: false,
      class: [
        'bg-background',
        'text-cta1',
        'border-cta1 border',
        'hover:bg-cta1-secondary-hover',
      ],
    },
    // color: cta1, variants: light, disabled: false
    {
      color: 'cta1',
      variant: 'light',
      isDisabled: false,
      class: ['bg-transparent', 'text-cta1', 'hover:bg-cta1-secondary-hover'],
    },
    // disabled
    // color: cta1, variants: solid, disabled: true
    {
      color: 'cta1',
      variant: 'solid',
      isDisabled: true,
      class: ['bg-cta1-disabled', 'text-cta1-content'],
    },
    // color: cta1, variants: bordered, disabled: true
    {
      color: 'cta1',
      variant: 'bordered',
      isDisabled: true,
      class: [
        'bg-background',
        'text-cta1-disabled',
        'border-cta1-disabled border',
      ],
    },
    // color: cta1, variants: light, disabled: true
    {
      color: 'cta1',
      variant: 'light',
      isDisabled: true,
      class: ['bg-transparent', 'text-cta1-disabled'],
    },

    // cta2
    // color: cta2, variants: solid, disabled: false
    {
      color: 'cta2',
      variant: 'solid',
      isDisabled: false,
      class: [
        'bg-cta2',
        'text-cta2-content',
        'hover:bg-cta2-hover',
        'data-[pressed=true]:bg-cta2-pressed',
      ],
    },
    // color: cta2, variants: bordered, disabled: false
    {
      color: 'cta2',
      variant: 'bordered',
      isDisabled: false,
      class: [
        'bg-background',
        'text-cta2',
        'border-cta2 border',
        'hover:bg-cta2-secondary-hover',
      ],
    },
    // color: cta2, variants: light, disabled: false
    {
      color: 'cta2',
      variant: 'light',
      isDisabled: false,
      class: ['bg-transparent', 'text-cta2', 'hover:bg-cta2-secondary-hover'],
    },
    // disabled
    // color: cta2, variants: solid, disabled: true
    {
      color: 'cta2',
      variant: 'solid',
      isDisabled: true,
      class: ['bg-cta2-disabled', 'text-cta2-content'],
    },
    // color: cta2, variants: bordered, disabled: true
    {
      color: 'cta2',
      variant: 'bordered',
      isDisabled: true,
      class: [
        'bg-background',
        'text-cta2-disabled',
        'border-cta2-disabled border',
      ],
    },
    // color: cta2, variants: light, disabled: true
    {
      color: 'cta2',
      variant: 'light',
      isDisabled: true,
      class: ['bg-transparent', 'text-cta2-disabled'],
    },

    // destructive
    // color: destructive, variants: solid, disabled: false
    {
      color: 'destructive',
      variant: 'solid',
      isDisabled: false,
      class: [
        'bg-destructive',
        'text-destructive-content',
        'hover:bg-destructive-hover',
        'data-[pressed=true]:bg-destructive-pressed',
      ],
    },
    // color: destructive, variants: bordered, disabled: false
    {
      color: 'destructive',
      variant: 'bordered',
      isDisabled: false,
      class: [
        'bg-background',
        'text-destructive',
        'border-destructive border',
        'hover:bg-destructive-secondary-hover',
      ],
    },
    // color: destructive, variants: light, disabled: false
    {
      color: 'destructive',
      variant: 'light',
      isDisabled: false,
      class: [
        'bg-transparent',
        'text-destructive',
        'hover:bg-destructive-secondary-hover',
      ],
    },
    // disabled
    // color: destructive, variants: solid, disabled: true
    {
      color: 'destructive',
      variant: 'solid',
      isDisabled: true,
      class: ['bg-destructive-disabled', 'text-destructive-content'],
    },
    // color: destructive, variants: bordered, disabled: true
    {
      color: 'destructive',
      variant: 'bordered',
      isDisabled: true,
      class: [
        'bg-background',
        'text-destructive-disabled',
        'border-destructive-disabled border',
      ],
    },
    // color: destructive, variants: light, disabled: true
    {
      color: 'destructive',
      variant: 'light',
      isDisabled: true,
      class: ['bg-transparent', 'text-destructive-disabled'],
    },
  ],
})

export type ButtonVariants = VariantProps<typeof buttonVariatns>
