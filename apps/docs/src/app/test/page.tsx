'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/tabs'

export default function Page() {
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
    </>
  )
}
