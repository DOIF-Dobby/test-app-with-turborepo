'use client'

import { Button } from '@repo/ui/components/button'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsProps,
  TabsTrigger,
} from '@repo/ui/components/tabs'
import { useState } from 'react'

export default function Page() {
  const [size, setSize] = useState<TabsProps['size']>('md')

  return (
    <>
      <Button onClick={() => setSize('xl')}>버튼</Button>
      <Tabs
        defaultValue="2"
        classNames={
          {
            // tabsRoot: 'bg-blue-200',
            // tabContent: 'bg-red-200',
            // tabTrigger:
            // 'text-red-500 data-[state=inactive]:text-blue-500 data-[state=inactive]:bg-black',
            // tabList: 'bg-gray-800',
          }
        }
        size={size}
      >
        <TabsList>
          <TabsTrigger value="1">Tab 1</TabsTrigger>
          <TabsTrigger value="2">Tab 2</TabsTrigger>
          <TabsTrigger value="3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="1">탭1</TabsContent>
        <TabsContent value="2">탭2</TabsContent>
        <TabsContent value="3">탭3</TabsContent>
      </Tabs>
    </>
  )
}
