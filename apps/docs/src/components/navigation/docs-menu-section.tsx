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
    <Collapsible open={open} onOpenChange={setOpen} className="px-sone-sm">
      <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between">
        <h2 className="text-base-700 font-semibold">{title}</h2>
        <Icon
          icon="chevronRight"
          size="sm"
          className={cn(open && 'rotate-90')}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="pt-sone-2xs pb-sone-sm gap-sone-3xs flex flex-col">
          {contentPaths.map((contentPath) => {
            const href = `/docs/${contentPath.join('/')}`

            return (
              <Link href={href} key={href}>
                <li
                  className={cn(
                    'text-base-600 px-sone-xs py-sone-2xs rounded-input-sm font-medium',
                    pathname === href
                      ? 'bg-cta1 text-base-100 font-semibold'
                      : 'hover:text-base-700 hover:bg-base-200',
                  )}
                >
                  {contentPath[contentPath.length - 1]}
                </li>
              </Link>
            )
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
