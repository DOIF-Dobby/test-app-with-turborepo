'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/ui/components/collapsible'
import { Icon } from '@repo/ui/components/icon'
import { cn } from '@repo/ui/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface DocsMenuSectionProps {
  title: React.ReactNode
  contentPaths: string[][]
}

export function DocsMenuSection({ title, contentPaths }: DocsMenuSectionProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="px-sone-sm flex w-full cursor-pointer items-center justify-between">
        <h2 className="text-base-700 font-semibold">{title}</h2>
        <Icon
          icon="expandLess"
          size="sm"
          className={cn(open && 'rotate-180')}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-sone-ml">
        <ul className="list-disc">
          {contentPaths.map((contentPath) => {
            const href = `/docs/${contentPath.join('/')}`

            return (
              <li
                key={href}
                className={cn(
                  'text-base-600 hover:text-base-700 font-medium',
                  pathname === href && 'text-cta2 font-semibold',
                )}
              >
                <Link href={href}>{contentPath[contentPath.length - 1]}</Link>
              </li>
            )
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
