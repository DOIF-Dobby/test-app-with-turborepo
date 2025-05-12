'use client'

import { Tabs as TabsPrimitive } from 'radix-ui'
import { cn } from '../../utils/cn'
import { useTabsContext } from './tabs-context'
import { tabsVariatns } from './variants'

type Props = TabsPrimitive.TabsTriggerProps

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
