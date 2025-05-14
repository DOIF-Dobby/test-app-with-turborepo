import { tv, type VariantProps } from 'tailwind-variants'

export const tabsVariatns = tv(
  {
    slots: {
      tabsRoot: '',
      tabList: 'tabs',
      tabTrigger: 'tab',
      tabContent: '',
    },
    variants: {
      size: {
        xs: {
          tabList: 'tabs-xs',
        },
        sm: {
          tabList: 'tabs-sm',
        },
        md: {
          tabList: 'tabs-md',
        },
        lg: {
          tabList: 'tabs-lg',
        },
        xl: {
          tabList: 'tabs-xl',
        },
      },
      variant: {
        box: {
          tabList: 'tabs-box',
        },
        border: {
          tabList: 'tabs-border',
        },
        lift: {
          tabList: 'tabs-lift',
        },
      },
    },
  },
  { twMerge: false },
)

export type TabsVariants = VariantProps<typeof tabsVariatns>
export type TabsSlots = keyof ReturnType<typeof tabsVariatns>
