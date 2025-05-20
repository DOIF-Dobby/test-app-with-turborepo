'use client'

import { Button } from '@repo/ui/components/button'
import { Icon } from '@repo/ui/components/icon'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/tabs'
import { useRef } from 'react'

export default function Page() {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Tabs defaultValue="2" variant="lift">
        <TabsList>
          <TabsTrigger value="1">Tab 1</TabsTrigger>
          <TabsTrigger value="2">Tab 2</TabsTrigger>
          <TabsTrigger value="3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="1">탭1</TabsContent>
        <TabsContent value="2">탭2</TabsContent>
        <TabsContent value="3">탭3</TabsContent>
      </Tabs>
      <Button
        ref={ref}
        onPress={() => {
          console.log('테스트')
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
      <Icon icon="add" />
    </>
  )
}
