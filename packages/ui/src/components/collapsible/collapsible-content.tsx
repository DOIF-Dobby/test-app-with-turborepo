import { Collapsible as CollapsiblePrimitive } from 'radix-ui'

type Props = Omit<CollapsiblePrimitive.CollapsibleContentProps, keyof {}>

export interface CollapsibleContentProps extends Props {}

export function CollapsibleContent(props: CollapsibleContentProps) {
  const { children, ...ohterProps } = props

  return (
    <CollapsiblePrimitive.Content {...ohterProps}>
      {children}
    </CollapsiblePrimitive.Content>
  )
}
