import { Tabs as TabsPrimitive } from 'radix-ui'
import { cn } from '../../utils/cn'
import { TabsVariants, tabsVariatns } from './variants'

type Props = Omit<TabsPrimitive.TabsListProps, keyof TabsVariants> &
  TabsVariants

export interface TabsListProps extends Props {}

export function TabsList(props: TabsListProps) {
  const { className, ...otherProps } = props

  const slots = tabsVariatns()

  const styles = slots.tabList({
    className,
  })

  return <TabsPrimitive.TabsList className={cn(styles)} {...otherProps} />
}
