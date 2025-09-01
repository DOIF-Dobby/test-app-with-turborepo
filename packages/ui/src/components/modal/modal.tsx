import { usePress } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { UseDisclosureReturn } from '@repo/hooks/use-disclosure'
import { HTMLMotionProps, motion } from 'motion/react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { useMemo } from 'react'
import { useUIContext } from '../../providers'
import { SlotsToClasses } from '../../types/util'
import { twcn } from '../../utils/twcn'
import { ContentBox } from '../box'
import { Heading2, Paragraph2 } from '../typography'
import { DefaultModalCloseButton } from './default-modal-close-button'
import { ModalSlots, modalVariants, ModalVariants } from './variants'

const defaultMotionProps = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
}

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
  disableAnimation?: boolean
  motionProps?: HTMLMotionProps<'section'>
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
    disableAnimation = false,
    motionProps,
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

  const { disableAnimation: globalDisableAnimation } = useUIContext()
  const disableModalAnimation = disableAnimation || globalDisableAnimation

  return (
    <DialogPrimitive.Root {...otherProps} modal open={isOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={twcn(overlayStyles)} />
        <DialogPrimitive.Content
          asChild
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
          <motion.section
            {...mergeProps(
              defaultMotionProps,
              disableModalAnimation
                ? {
                    transition: {
                      duration: 0,
                    },
                  }
                : null,
              motionProps,
            )}
          >
            {!hideCloseButton && (
              <DialogPrimitive.Close
                asChild
                className={twcn(closeButtonStyles)}
                {...closeButtonPressProps}
              >
                {closeButton}
              </DialogPrimitive.Close>
            )}
            <ContentBox>
              <DialogPrimitive.Title asChild>
                {modalTitle}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description asChild>
                {modalDescription}
              </DialogPrimitive.Description>
            </ContentBox>
            {children}
          </motion.section>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
