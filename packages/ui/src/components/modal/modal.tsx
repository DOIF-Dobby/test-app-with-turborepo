import { Dialog as DialogPrimitive, VisuallyHidden } from 'radix-ui'
import { SlotsToClasses } from '../../types/util'
import { cn } from '../../utils/cn'
import { ModalSlots, modalVariants, ModalVariants } from './variants'

type OmittedType = ModalVariants & {
  defaultValue: DialogPrimitive.DialogProps['defaultOpen']
  open: DialogPrimitive.DialogProps['open']
  modal: DialogPrimitive.DialogProps['modal']
}
type Props = Omit<DialogPrimitive.DialogProps, keyof OmittedType> &
  ModalVariants

export interface ModalProps extends Props {
  isOpen: boolean
  classNames?: SlotsToClasses<ModalSlots>
}

export function Modal(props: ModalProps) {
  const { children, classNames, isOpen, ...otherProps } = props

  const slots = modalVariants()

  const contentStyles = slots.modalContent({
    className: cn(classNames?.modalContent),
  })
  const overlayStyles = slots.modalOverlay({
    className: cn(classNames?.modalOverlay),
  })

  return (
    <DialogPrimitive.Root {...otherProps} modal open={isOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={overlayStyles} />
        <DialogPrimitive.Content className={contentStyles}>
          <DialogPrimitive.Title asChild>
            <VisuallyHidden.Root />
          </DialogPrimitive.Title>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
