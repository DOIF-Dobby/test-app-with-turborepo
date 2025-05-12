import { createContext, use } from 'react'
import { SlotsToClasses } from '../../types/util'
import { TabsSlots, TabsVariants } from './variants'

type TabsContextType = {
  classNames?: SlotsToClasses<TabsSlots>
  size?: TabsVariants['size']
}

export const TabsContext = createContext<TabsContextType>({})

export const useTabsContext = () => use(TabsContext)
