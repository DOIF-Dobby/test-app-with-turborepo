export default function DocsComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white prose-headings:flex prose-headings:items-center prose-headings:gap-1.5">
      {children}
    </div>
  )
}
