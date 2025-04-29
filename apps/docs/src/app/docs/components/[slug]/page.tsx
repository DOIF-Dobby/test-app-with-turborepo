type Params = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <Post />
}

export const dynamicParams = false
