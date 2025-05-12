import DocsHeader from '@/components/navigation/docs-header'
import DocsMenus from '@/components/navigation/docs-menus'
import DocsToc from '@/components/navigation/docs-toc'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex">
        <DocsMenus />
        <div className="w-full">
          <DocsHeader />
          <div className="flex flex-col-reverse justify-between gap-6 xl:flex-row">
            <main className="relative max-w-dvw grow px-6 pb-16 xl:pe-2">
              {children}
            </main>
            <DocsToc />
          </div>
        </div>
      </div>
    </>
  )
}
