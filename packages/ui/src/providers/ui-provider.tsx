import { MotionConfig } from 'motion/react'
import { UIContext, UIContextType } from './ui-context'

export interface UIProviderProps extends UIContextType {
  children: React.ReactNode
}

export function UIProvider({
  children,
  disableAnimation = false,
}: UIProviderProps) {
  // if (disableAnimation) {
  //   MotionGlobalConfig.skipAnimations = true
  // }

  return (
    <UIContext
      value={{
        disableAnimation,
      }}
    >
      <MotionConfig transition={disableAnimation ? { duration: 0 } : undefined}>
        {children}
      </MotionConfig>
    </UIContext>
  )
}
