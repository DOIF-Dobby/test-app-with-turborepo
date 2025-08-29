import { usePress } from '@react-aria/interactions'
import { UseDisclosureReturn } from '@repo/hooks/use-disclosure'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { useMemo } from 'react'
import { SlotsToClasses } from '../../types/util'
import { twcn } from '../../utils/twcn'
import { ContentBox } from '../box'
import { Heading2, Paragraph2 } from '../typography'
import { DefaultModalCloseButton } from './default-modal-close-button'
import { ModalSlots, modalVariants, ModalVariants } from './variants'

type OmittedType = ModalVariants & {
  defaultValue: DialogPrimitive.DialogProps['defaultOpen']
  open: DialogPrimitive.DialogProps['open']
  modal: DialogPrimitive.DialogProps['modal']
  defaultOpen: DialogPrimitive.DialogProps['defaultOpen']
}

type Props = Omit<DialogPrimitive.DialogProps, keyof OmittedType> &
  ModalVariants

export interface ModalProps extends Props {
  state: UseDisclosureReturn
  title: React.ReactNode
  description?: React.ReactNode
  classNames?: SlotsToClasses<ModalSlots>
  closeButton?: React.ReactNode
  // true면 닫기 버튼 숨김
  hideCloseButton?: boolean
  // true면 마우스 클릭, 터치 이벤트 등으로 모달 밖을 클릭했을 때 모달 닫힘
  isPointerDismissible?: boolean
  // true면 ESC키를 눌렀을 때 모달 닫힘
  isKeyboardDismissible?: boolean
}

export function Modal(props: ModalProps) {
  const {
    children,
    classNames,
    state,
    title,
    description = '',
    closeButton = <DefaultModalCloseButton />,
    hideCloseButton = false,
    isPointerDismissible = true,
    isKeyboardDismissible = true,
    size,
    ...otherProps
  } = props

  const { isOpen, close } = state

  const slots = modalVariants()

  const contentStyles = slots.modalContent({
    className: twcn(classNames?.modalContent),
    size,
  })
  const overlayStyles = slots.modalOverlay({
    className: twcn(classNames?.modalOverlay),
  })
  const closeButtonStyles = slots.modalCloseButton({
    className: twcn(classNames?.modalCloseButton),
  })

  // 모달 제목 컴포넌트
  const modalTitle = useMemo(
    () =>
      typeof title === 'string' ? (
        <Heading2 className="text-base-900">{title}</Heading2>
      ) : (
        title
      ),
    [title],
  )

  // 모달 설명 컴포넌트
  const modalDescription = useMemo(
    () =>
      typeof description === 'string' ? (
        <Paragraph2>{description}</Paragraph2>
      ) : (
        description
      ),
    [description],
  )

  const { pressProps: closeButtonPressProps } = usePress({
    onPress: close,
  })

  return (
    <DialogPrimitive.Root {...otherProps} modal open={isOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={twcn(overlayStyles)} />
        <DialogPrimitive.Content
          className={twcn(contentStyles)}
          onPointerDownOutside={() => {
            if (isPointerDismissible) {
              state.close()
            }
          }}
          onEscapeKeyDown={() => {
            if (isKeyboardDismissible) {
              state.close()
            }
          }}
        >
          <ContentBox>
            <DialogPrimitive.Title asChild>{modalTitle}</DialogPrimitive.Title>
            <DialogPrimitive.Description asChild>
              {modalDescription}
            </DialogPrimitive.Description>
          </ContentBox>
          {children}
          {!hideCloseButton && (
            <DialogPrimitive.Close
              asChild
              className={twcn(closeButtonStyles)}
              {...closeButtonPressProps}
            >
              {closeButton}
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
