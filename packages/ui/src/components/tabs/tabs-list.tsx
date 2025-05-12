'use client'

import { Tabs as TabsPrimitive } from 'radix-ui'
import { cn } from '../../utils/cn'
import { useTabsContext } from './tabs-context'
import { tabsVariatns } from './variants'

type Props = TabsPrimitive.TabsListProps

export interface TabsListProps extends Props {}

export function TabsList(props: TabsListProps) {
  const { className, ...otherProps } = props
  const context = useTabsContext()

  const slots = tabsVariatns()

  const styles = slots.tabList({
    className: cn(context.classNames?.tabList, className),
    size: context.size,
  })

  return <TabsPrimitive.TabsList className={cn(styles)} {...otherProps} />
}
