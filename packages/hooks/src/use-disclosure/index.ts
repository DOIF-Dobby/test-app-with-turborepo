import { useCallback, useState } from 'react'

export interface UseDisclosureProps {
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
  onOpenChange?: (isOpen: boolean) => void
}

export function useDisclosure(props: UseDisclosureProps = {}) {
  const { isOpen: isOpenProp = false } = props

  const [isOpen, setIsOpen] = useState(isOpenProp)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    isOpen,
    open,
    close,
  }
}
