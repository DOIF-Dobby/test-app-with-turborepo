import { Button } from '@repo/ui/components/button'

export default function Sizes() {
  return (
    <div className="flex items-center gap-2">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>
      <Button size="xl">xl</Button>
    </div>
  )
}
