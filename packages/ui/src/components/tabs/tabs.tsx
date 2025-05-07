import { Tabs as TabsPrimitive } from 'radix-ui'
import { SlotsToClasses } from '../../types/util'
import { cn } from '../../utils/cn'
import { TabsSlots, TabsVariants, tabsVariatns } from './variants'

type Props = Omit<TabsPrimitive.TabsProps, keyof TabsVariants> & TabsVariants

export interface TabsProps extends Props {
  classNames?: SlotsToClasses<TabsSlots>
}

export function Tabs(props: TabsProps) {
  const { className, classNames, ...otherProps } = props

  console.log(classNames)

  const slots = tabsVariatns()

  const styles = slots.tabsRoot({
    className: cn(classNames?.tabsRoot, className),
  })

  return <TabsPrimitive.Root className={cn(styles)} {...otherProps} />
}
