import createMDX from '@next/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      [
        remarkMdxFrontmatter,
        {
          name: 'frontMatter',
        },
      ],
    ],
    rehypePlugins: [
      [rehypePrettyCode, options],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend', // prepend | append
          properties: { className: ['markdown-anchor'] },
          content: { type: 'text', value: '#' },
          test: ['h3', 'h4', 'h5'], // h3, h4, h5에만 적용
        },
      ],
    ],
  },
})

const config = withMDX(nextConfig)

// config.turbopack = {
//   ...config.experimental?.turbo,
// }

// delete config.experimental
// delete config.webpack

export default config
