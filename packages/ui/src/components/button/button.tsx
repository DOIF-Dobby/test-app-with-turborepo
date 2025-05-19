'use client'

import { PressEvent, usePress } from '@react-aria/interactions'
import { chain, mergeProps } from '@react-aria/utils'
import { mergeRefs } from '@repo/utils/merge-refs'
import { Slot } from 'radix-ui'
import { useCallback, useRef } from 'react'
import { useScaleAnimation } from '../../animation/use-scale-animation'
import { AsChild } from '../../types/util'
import { cn } from '../../utils/cn'
import { Ripple } from '../ripple'
import { useRipple } from '../ripple/use-ripple'
import { ButtonVariants, buttonVariatns } from './variants'

type Props = Omit<
  Omit<React.ComponentProps<'button'>, keyof ButtonVariants>,
  'onClick'
> &
  ButtonVariants &
  AsChild

export interface ButtonProps extends Props {
  fullWidth?: boolean
  onPress?: (event: PressEvent) => void
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
    onPress,
    ...otherProps
  } = props

  const innerRef = useRef<HTMLButtonElement>(null)

  const { ripples, onClear, onPress: onRipplePressHandler } = useRipple()

  const handlePress = useCallback(
    (e: PressEvent) => {
      if (isDisabled) {
        return
      }

      if (innerRef.current) {
        onRipplePressHandler(e)
      }
    },
    [isDisabled, onRipplePressHandler],
  )

  const { pressProps, isPressed } = usePress({
    isDisabled,
    onPress: chain(onPress, handlePress),
    ref: innerRef,
  })

  const { scope } = useScaleAnimation({
    isPressed,
  })

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
      ref={mergeRefs([innerRef, scope, ref])}
      disabled={isDisabled}
      className={cn(styles)}
      data-pressed={isPressed}
      {...mergeProps(pressProps, otherProps)}
    >
      {children}
      <Ripple ripples={ripples} onClear={onClear} />
    </Comp>
  )
}
