'use client'

import { useDisclosure } from '@repo/hooks/use-disclosure'
import { ContentBox } from '@repo/ui/components/box'
import { Button } from '@repo/ui/components/button'
import { Modal, ModalProps } from '@repo/ui/components/modal'
import { Paragraph1 } from '@repo/ui/components/typography'
import { useState } from 'react'

const sizeOptions: Array<ModalProps['size']> = ['sm', 'md', 'lg']

export default function Sizes() {
  const [size, setSize] = useState<ModalProps['size']>('md')
  const modalState = useDisclosure()

  const handleOpen = (size: ModalProps['size']) => {
    setSize(size)
    modalState.open()
  }

  return (
    <>
      <div className="flex gap-2">
        {sizeOptions.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>
            Open {size}
          </Button>
        ))}
      </div>
      <Modal
        state={modalState}
        title="Modal"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        size={size}
      >
        <ContentBox>
          <Paragraph1>Hello</Paragraph1>
          <Paragraph1>Modal</Paragraph1>
        </ContentBox>
        <ContentBox direction="row" gap="sm">
          <Button variant="light" fullWidth>
            Cancel
          </Button>
          <Button fullWidth>Save</Button>
        </ContentBox>
      </Modal>
    </>
  )
}
