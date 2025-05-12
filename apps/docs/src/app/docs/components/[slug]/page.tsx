import fs from 'fs/promises'
import { join } from 'path'

export async function generateStaticParams() {
  const contentDir = join(process.cwd(), 'src', 'content')
  const entries = await fs.readdir(contentDir, { withFileTypes: true })

  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name)

  return slugs.map((slug) => ({ slug }))
}

type Params = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const mod = await import(`@/content/${slug}/index.mdx`)
  const MDXPage = mod.default
  // const meta = mod.frontMatter

  return <MDXPage />
}

export const dynamicParams = false
