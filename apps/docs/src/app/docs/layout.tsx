import DocsHeader from '@/components/navigation/docs-header'
import DocsMenus from '@/components/navigation/docs-menus'

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
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
