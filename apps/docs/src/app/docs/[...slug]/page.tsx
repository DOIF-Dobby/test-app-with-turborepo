import { DocumentLayout } from '@/components/layout/document-layout'
import DocsToc from '@/components/navigation/docs-toc'
import fs from 'fs/promises'
import { join } from 'path'

type Params = {
  params: Promise<{ slug: string[] }>
}

/**
 * content 디렉터리를 재귀 탐색하면서,
 * index.mdx가 있는 경로를 슬러그 배열로 수집합니다.
 */
async function gatherSlugs(dir: string, base: string[] = []) {
  const result: string[][] = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const newBase = [...base, entry.name]
    const subdir = join(dir, entry.name)

    // 이 폴더에 index.mdx가 있으면 페이지로 인정
    try {
      await fs.access(join(subdir, 'index.mdx'))
      result.push(newBase)
    } catch {
      // index.mdx 없으면 무시
    }

    // 하위 폴더도 계속 탐색
    const deeper = await gatherSlugs(subdir, newBase)
    result.push(...deeper)
  }

  return result
}

export async function generateStaticParams() {
  const contentDir = join(process.cwd(), 'src', 'content')
  const slugArrays = await gatherSlugs(contentDir)

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
