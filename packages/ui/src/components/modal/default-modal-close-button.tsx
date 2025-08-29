import { twcn } from '../../utils/twcn'
import { Button, ButtonProps } from '../button'
import { Icon } from '../icon'

export function DefaultModalCloseButton({
  className,
  variant = 'light',
  ...props
}: ButtonProps) {
  return (
    <Button
      {...props}
      variant={variant}
      className={twcn(
        'h-10 min-h-10 max-w-10 min-w-10 rounded-full px-0 py-0',
        className,
      )}
    >
      <Icon icon="close" />
    </Button>
  )
}
