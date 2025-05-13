import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/tabs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow as style } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props {
  preview: React.ReactElement
  code: string
}

export function CodeBlock({ preview, code }: Props) {
  return (
    <Tabs defaultValue="preview" variant="border">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="p-2">
        <div className="border-base-200 overflow-x-auto rounded-lg border px-2 py-4">
          {preview}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <SyntaxHighlighter language="tsx" style={style}>
          {code}
        </SyntaxHighlighter>
      </TabsContent>
    </Tabs>
  )
}
