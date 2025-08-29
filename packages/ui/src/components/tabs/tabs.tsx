'use client'

import { Tabs as TabsPrimitive } from 'radix-ui'
import { useId } from 'react'
import { SlotsToClasses } from '../../types/util'
import { twcn } from '../../utils/twcn'
import { TabsContext } from './tabs-context'
import { TabsSlots, TabsVariants, tabsVariatns } from './variants'

type OmittedType = TabsVariants & {
  defaultValue: TabsPrimitive.TabsProps['defaultValue']
}
type Props = Omit<TabsPrimitive.TabsProps, keyof OmittedType> & TabsVariants

export interface TabsProps extends Props {
  value: TabsPrimitive.TabsProps['value']
  onValueChange: TabsPrimitive.TabsProps['onValueChange']
  classNames?: SlotsToClasses<TabsSlots>
}

export function Tabs(props: TabsProps) {
  const tabsId = useId()

  const {
    children,
    className,
    classNames,
    size,
    variant,
    radius,
    value,
    ...otherProps
  } = props

  const slots = tabsVariatns()

  const styles = slots.tabsRoot({
    className: twcn(classNames?.tabsRoot, className),
  })

  return (
    <TabsPrimitive.Root className={twcn(styles)} value={value} {...otherProps}>
      <TabsContext
        value={{
          tabsId,
          classNames,
          size,
          variant,
          radius,
          value,
        }}
      >
        {children}
      </TabsContext>
    </TabsPrimitive.Root>
  )
}
