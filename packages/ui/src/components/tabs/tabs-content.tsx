'use client'

import { Tabs as TabsPrimitive } from 'radix-ui'
import { twcn } from '../../utils/twcn'
import { useTabsContext } from './tabs-context'
import { tabsVariatns } from './variants'

type Props = TabsPrimitive.TabsContentProps

export interface TabsContentProps extends Props {}

export function TabsContent(props: TabsContentProps) {
  const { className, ...otherProps } = props
  const context = useTabsContext()

  const slots = tabsVariatns()

  const styles = slots.tabContent({
    className: twcn(context.classNames?.tabContent, className),
  })

  return <TabsPrimitive.TabsContent className={twcn(styles)} {...otherProps} />
}
