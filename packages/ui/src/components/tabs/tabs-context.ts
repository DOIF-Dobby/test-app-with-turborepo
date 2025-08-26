import { createContext, use } from 'react'
import { SlotsToClasses } from '../../types/util'
import { TabsSlots, TabsVariants } from './variants'

type TabsContextType = {
  classNames?: SlotsToClasses<TabsSlots>
  size?: TabsVariants['size']
  variant?: TabsVariants['variant']
  radius?: TabsVariants['radius']
  value?: string
}

export const TabsContext = createContext<TabsContextType>({})

export const useTabsContext = () => use(TabsContext)
