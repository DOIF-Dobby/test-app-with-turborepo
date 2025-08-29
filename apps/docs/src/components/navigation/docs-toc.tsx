import { twcn } from '@repo/ui/utils/twcn'

const paddingMap: Record<number, string> = {
  2: 'pl-0',
  3: 'pl-4',
  4: 'pl-8',
  5: 'pl-12',
}

type HeadingType = {
  depth: number
  text: string
  id: string
}

interface DocsTocProps {
  headings: HeadingType[]
}

export default function DocsToc({ headings }: DocsTocProps) {
  return (
    <nav>
      <div className="sticky top-24 my-6 xl:mx-2 xl:my-0 xl:mt-32 xl:w-[130px]">
        {headings.map((heading) => (
          <div key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={twcn([
                `${paddingMap[heading.depth] ?? ''}`,
                'text-base-600 hover:text-base-700',
              ])}
            >
              {heading.text}
            </a>
          </div>
        ))}
      </div>
    </nav>
  )
}
