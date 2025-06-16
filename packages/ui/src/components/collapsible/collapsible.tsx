import { Collapsible as CollapsiblePrimitive } from 'radix-ui'

type Props = Omit<CollapsiblePrimitive.CollapsibleProps, keyof {}>

export interface CollapsibleProps extends Props {}

export function Collapsible(props: CollapsibleProps) {
  const { children, ...ohterProps } = props

  return (
    <CollapsiblePrimitive.Root {...ohterProps}>
      {children}
    </CollapsiblePrimitive.Root>
  )
}
