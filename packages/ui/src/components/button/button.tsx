import { Slot } from 'radix-ui'
import { AsChild } from '../../types/inedex'
import { cn } from '../../utils/cn'
import { button, ButtonVariants } from './variants'

type Props = Omit<React.ComponentProps<'button'>, keyof ButtonVariants> &
  ButtonVariants &
  AsChild

export interface ButtonProps extends Props {}

export function Button(props: ButtonProps) {
  const {
    asChild = false,
    color,
    variant,
    size,
    className,
    ...buttonProps
  } = props

  const styles = button({
    color,
    variant,
    className,
    size,
  })

  const Comp = asChild ? Slot.Root : 'button'

  return <Comp data-slot="button" className={cn(styles)} {...buttonProps} />
}
