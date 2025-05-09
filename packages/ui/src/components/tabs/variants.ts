import { tv, type VariantProps } from 'tailwind-variants'

export const tabsVariatns = tv({
  slots: {
    tabsRoot: '',
    tabList: 'tabs',
    tabTrigger: 'tab',
    tabContent: 'tab-content',
  },
})

export type TabsVariants = VariantProps<typeof tabsVariatns>
export type TabsSlots = keyof ReturnType<typeof tabsVariatns>
