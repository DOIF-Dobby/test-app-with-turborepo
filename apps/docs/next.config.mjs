import createMDX from '@next/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkExtractHeadings from './remark-extract-headings.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.tsx?$/,
      // import 시 `?raw` 쿼리가 들어간 경우에만 raw-loader 적용
      resourceQuery: /raw/,
      use: 'raw-loader',
    })

    return config
  },
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkExtractHeadings,
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
          test: ['h2', 'h3', 'h4', 'h5'],
        },
      ],
    ],
  },
})

const config = withMDX(nextConfig)

export default config
