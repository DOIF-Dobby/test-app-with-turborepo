import { DocumentLayout } from '@/components/layout/document-layout'
import DocsToc from '@/components/navigation/docs-toc'
import { gatherContentSlugs } from '@/utils/gather-slugs'

type Params = {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  const slugArrays = await gatherContentSlugs()

  return slugArrays.map((slug) => ({ slug }))
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const slugPath = slug.join('/')

  const mod = await import(`@/content/${slugPath}/index.mdx`)
  const MDXPage = mod.default

  return (
    <>
      <main className="relative max-w-dvw grow px-6 pb-16 xl:pe-2">
        <DocumentLayout>
          <MDXPage />
        </DocumentLayout>
      </main>
      <DocsToc headings={mod.headings} />
    </>
  )
}

export const dynamicParams = false
