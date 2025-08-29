'use client'

import { domMax, LazyMotion, m } from 'motion/react'
import { Tabs as TabsPrimitive } from 'radix-ui'
import { twcn } from '../../utils/twcn'
import { useTabsContext } from './tabs-context'
import { tabsVariatns } from './variants'

type Props = TabsPrimitive.TabsTriggerProps

export interface TabsTriggerProps extends Props {}

export function TabsTrigger(props: TabsTriggerProps) {
  const { children, className, value, ...otherProps } = props
  const context = useTabsContext()

  const slots = tabsVariatns()

  const triggerStyles = slots.tabTrigger({
    className: twcn(context.classNames?.tabTrigger, className),
  })

  const cursorStyles = slots.cursor({
    className: twcn(context.classNames?.cursor, className),
    variant: context.variant,
    radius: context.radius,
  })

  return (
    <TabsPrimitive.TabsTrigger
      className={twcn(triggerStyles)}
      value={value}
      {...otherProps}
    >
      <div className="relative z-10">{children}</div>
      {context.value === value ? (
        <LazyMotion features={domMax}>
          <m.span
            className={cursorStyles}
            layoutDependency={false}
            layoutId={`cursor-${context.tabsId}`}
            transition={{
              type: 'spring',
              bounce: 0.15,
              duration: 0.5,
            }}
          />
        </LazyMotion>
      ) : null}
    </TabsPrimitive.TabsTrigger>
  )
}
