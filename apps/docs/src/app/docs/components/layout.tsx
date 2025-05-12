import { cn } from '@repo/ui/utils/cn'

export default function DocsComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article
      className={cn([
        'prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:flex prose-headings:items-center prose-headings:gap-1.5',
        'prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg',
        'max-w-4xl',
      ])}
    >
      {children}
    </article>
  )
}
