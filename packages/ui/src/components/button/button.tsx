import { Slot } from 'radix-ui'
import { AsChild } from '../../types/util'
import { cn } from '../../utils/cn'
import { ButtonVariants, buttonVariatns } from './variants'

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
    ...otherProps
  } = props

  const styles = buttonVariatns({
    color,
    variant,
    size,
    className,
  })

  const Comp = asChild ? Slot.Root : 'button'

  return <Comp data-slot="button" className={cn(styles)} {...otherProps} />
}
