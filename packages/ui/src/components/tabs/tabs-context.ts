import { createContext, use } from 'react'
import { SlotsToClasses } from '../../types/util'
import { TabsSlots } from './variants'

type TabsContextType = {
  classNames?: SlotsToClasses<TabsSlots>
}

export const TabsContext = createContext<TabsContextType>({})

export const useTabsContext = () => use(TabsContext)
