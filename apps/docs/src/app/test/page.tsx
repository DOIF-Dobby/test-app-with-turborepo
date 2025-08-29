'use client'

import { useDisclosure } from '@repo/hooks/use-disclosure'
import { Button } from '@repo/ui/components/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/ui/components/collapsible'
import { Icon } from '@repo/ui/components/icon'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/tabs'
import { Heading0 } from '@repo/ui/components/typography'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'

export default function Page() {
  const ref = useRef<HTMLButtonElement>(null)
  const [tab, setTab] = useState('1')
  const modalState = useDisclosure()

  return (
    <div className="p-20">
      <Tabs value={tab} onValueChange={setTab} variant="underlined">
        <TabsList>
          <TabsTrigger value="1">Tab 1</TabsTrigger>
          <TabsTrigger value="2">Tab 2</TabsTrigger>
          <TabsTrigger value="3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="1">탭1</TabsContent>
        <TabsContent value="2">탭2</TabsContent>
        <TabsContent value="3">탭3</TabsContent>
      </Tabs>

      <Heading0>안녕하세요</Heading0>

      <AnimatePresence>
        {modalState.isOpen ? (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            뭐지
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        뭐지2
      </motion.div>

      {/* <Modal
        state={modalState}
        title="Heading"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        hideCloseButton
      >
        <ContentBox>
          <div>안녕ㅏ세요</div>
          <div>반갑습니다.</div>

          <input className="bg-red-200" />
        </ContentBox>
      </Modal> */}

      <Button
        ref={ref}
        onPress={() => {
          // modalState.open()
          modalState.toggle()
        }}
      >
        테스트
      </Button>
      <button
        onClick={() => {
          if (ref) {
            ref.current?.click()
          }
        }}
      >
        쿄쿄
      </button>
      <Icon icon="add" color="destructive" />
      <Button>
        <Icon icon="accessTime" />
      </Button>

      <Collapsible defaultOpen className="bg-red-200">
        <CollapsibleTrigger className="bg-blue-200">하하</CollapsibleTrigger>
        <CollapsibleContent className="bg-green-200">호호</CollapsibleContent>
      </Collapsible>

      <div className="h-[1000px]">엄첨 김</div>
    </div>
  )
}
