import { useEventListener } from '@repo/hooks/use-event-listener'
import { getUniqueID } from '@repo/utils/common'
import { RefObject, useCallback, useState } from 'react'

export type RippleType = {
  key: React.Key
  x: number
  y: number
  size: number
}

export function useRipple<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T | null>,
) {
  const [ripples, setRipples] = useState<RippleType[]>([])

  const onPress = useCallback(
    (event: MouseEvent) => {
      const trigger = event.currentTarget as T
      const rect = elementRef.current?.getBoundingClientRect()

      if (!rect) {
        return
      }

      const left = event.clientX - rect.left
      const top = event.clientY - rect.top

      const size = Math.max(trigger.clientWidth, trigger.clientHeight)

      setRipples((prevRipples) => [
        ...prevRipples,
        {
          key: getUniqueID(prevRipples.length.toString()),
          size,
          x: left - size / 2,
          y: top - size / 2,
        },
      ])
    },
    [elementRef],
  )

  const onClear = useCallback((key: React.Key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key))
  }, [])

  useEventListener('click', onPress, elementRef)

  return { ripples, onClear }
}
