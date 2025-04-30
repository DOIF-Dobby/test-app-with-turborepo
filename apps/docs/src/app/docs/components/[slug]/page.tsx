type Params = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const mod = await import(`@/content/${slug}.mdx`)
  const MDXPage = mod.default
  const meta = mod.frontMatter

  console.log(meta)

  return <MDXPage />
}

export const dynamicParams = false
