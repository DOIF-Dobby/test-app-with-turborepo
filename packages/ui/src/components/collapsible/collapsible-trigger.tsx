import { Collapsible as CollapsiblePrimitive } from 'radix-ui'

type Props = Omit<CollapsiblePrimitive.CollapsibleTriggerProps, keyof {}>

export interface CollapsibleTriggerProps extends Props {}

export function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  const { children, ...ohterProps } = props

  return (
    <CollapsiblePrimitive.Trigger {...ohterProps}>
      {children}
    </CollapsiblePrimitive.Trigger>
  )
}
