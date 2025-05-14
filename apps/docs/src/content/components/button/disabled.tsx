import { Button } from '@repo/ui/components/button'

export default function Disabled() {
  return (
    <div className="flex items-center gap-2">
      <Button color="cta1" isDisabled>
        CTA 1
      </Button>
      <Button color="cta2" isDisabled>
        CTA 2
      </Button>
      <Button color="destructive" isDisabled>
        Destructive
      </Button>
    </div>
  )
}
