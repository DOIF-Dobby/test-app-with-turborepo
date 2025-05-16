'use client'

import { useRipple } from '@repo/hooks/use-ripple'
import { mergeRefs } from '@repo/utils/merge-refs'
import { Slot } from 'radix-ui'
import { useRef } from 'react'
import { AsChild } from '../../types/util'
import { cn } from '../../utils/cn'
import { Ripple } from '../ripple'
import { ButtonVariants, buttonVariatns } from './variants'

type Props = Omit<React.ComponentProps<'button'>, keyof ButtonVariants> &
  ButtonVariants &
  AsChild

export interface ButtonProps extends Props {
  fullWidth?: boolean
}

export function Button(props: ButtonProps) {
  const {
    ref,
    asChild = false,
    children,
    color,
    variant,
    size,
    className,
    isDisabled,
    fullWidth,
    ...otherProps
  } = props

  const innerRef = useRef<HTMLButtonElement>(null)

  const { ripples, onClear } = useRipple(innerRef)

  const styles = buttonVariatns({
    color,
    variant,
    size,
    isDisabled,
    fullWidth,
    className,
  })

  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      ref={mergeRefs([innerRef, ref])}
      disabled={isDisabled}
      className={cn(styles)}
      {...otherProps}
    >
      {children}
      <Ripple ripples={ripples} onClear={onClear} />
    </Comp>
  )
}
