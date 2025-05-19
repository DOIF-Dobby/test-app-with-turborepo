import { useAnimate } from 'motion/react'
import { useEffect } from 'react'

export interface UseScaleAnimation {
  isPressed: boolean
  scale?: number
  duration?: number
}

export function useScaleAnimation({
  isPressed,
  scale = 0.97,
  duration = 0.2,
}: UseScaleAnimation) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (isPressed) {
      animate(scope.current, { scale }, { duration })
    } else {
      animate(scope.current, { scale: 1 }, { duration })
    }
  }, [scope, animate, isPressed, scale, duration])

  return {
    scope,
  }
}
