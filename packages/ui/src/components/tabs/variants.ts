import { type VariantProps } from 'tailwind-variants'
import { tv } from '../../utils/tv'

export const tabsVariatns = tv({
  slots: {
    tabsRoot: [
      'flex',
      'gap-2',
      'data-[orientation=horizontal]:flex-col',
      'data-[orientation=vertical]:flex-row',
    ],
    tabList: [
      'border-b',
      'border-b-base-200',
      'flex',
      'gap-2',
      'w-fit',
      'px-2',
    ],
    tabTrigger: [
      'relative',
      'flex',
      'justify-center',
      'cursor-pointer',
      'px-1',
      'py-2',
      'data-[state=active]:text-base-700',
      'data-[state=active]:font-medium',
      'data-[state=active]:border-b-2',
      'data-[state=active]:border-b-cta1',
      'data-[state=inactive]:text-base-600',
    ],
    tabContent: '',
  },
  variants: {
    size: {},
    variant: {},
  },
})

export type TabsVariants = VariantProps<typeof tabsVariatns>
export type TabsSlots = keyof ReturnType<typeof tabsVariatns>
