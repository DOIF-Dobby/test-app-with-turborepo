'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/ui/components/collapsible'
import { Icon } from '@repo/ui/components/icon'
import { Heading4 } from '@repo/ui/components/typography'
import { cn } from '@repo/ui/utils/cn'
import { capitalizeFirstLetter } from '@repo/utils/string'
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
        <Heading4>{title}</Heading4>
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
            const content = contentPath[contentPath.length - 1]

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
                  {capitalizeFirstLetter(content)}
                </li>
              </Link>
            )
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
