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
      <TabsContent value="preview">{preview}</TabsContent>
      <TabsContent value="code">
        <SyntaxHighlighter language="tsx" style={style}>
          {code}
        </SyntaxHighlighter>
      </TabsContent>
    </Tabs>
  )
}
