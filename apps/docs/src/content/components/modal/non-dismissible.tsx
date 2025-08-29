'use client'

import { useDisclosure } from '@repo/hooks/use-disclosure'
import { ContentBox } from '@repo/ui/components/box'
import { Button } from '@repo/ui/components/button'
import { Modal } from '@repo/ui/components/modal'
import { Paragraph1 } from '@repo/ui/components/typography'

export default function Default() {
  const modalState = useDisclosure()

  return (
    <>
      <Button onPress={modalState.open}>Open</Button>
      <Modal
        state={modalState}
        title="Modal"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        isPointerDismissible={false}
        isKeyboardDismissible={false}
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
