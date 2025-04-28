import { Button } from '@repo/ui/components/button'

export default function Home() {
  return (
    <>
      <div className="border border-green-500 bg-red-200 text-2xl font-bold">
        Home
      </div>
      <Button color="accent" variant="dash">
        버튼
      </Button>
      <Button color="neutral" variant="soft">
        버튼2
      </Button>
    </>
  )
}
