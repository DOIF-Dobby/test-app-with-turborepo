'use client'

import { Tabs as TabsPrimitive } from 'radix-ui'
import { cn } from '../../utils/cn'
import { useTabsContext } from './tabs-context'
import { TabsVariants, tabsVariatns } from './variants'

type Props = Omit<TabsPrimitive.TabsTriggerProps, keyof TabsVariants> &
  TabsVariants

export interface TabsTriggerProps extends Props {}

export function TabsTrigger(props: TabsTriggerProps) {
  const { className, ...otherProps } = props
  const context = useTabsContext()

  const slots = tabsVariatns()

  const styles = slots.tabTrigger({
    className: cn(context.classNames?.tabTrigger, className),
  })

  return <TabsPrimitive.TabsTrigger className={cn(styles)} {...otherProps} />
}
