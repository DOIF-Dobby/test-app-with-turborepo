import { Slot } from 'radix-ui'
import { AsChild } from '../../types/util'
import { cn } from '../../utils/cn'
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
    color,
    variant,
    size,
    className,
    isDisabled,
    fullWidth,
    ...otherProps
  } = props

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
      ref={ref}
      disabled={isDisabled}
      className={cn(styles)}
      {...otherProps}
    />
  )
}
