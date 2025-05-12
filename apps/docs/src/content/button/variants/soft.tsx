import { Button } from '@repo/ui/components/button'

export default function VariantsSoft() {
  return (
    <div className="flex items-center gap-2">
      <Button color="neutral" variant="soft">
        Neutral
      </Button>
      <Button color="primary" variant="soft">
        Primary
      </Button>
      <Button color="secondary" variant="soft">
        Secondary
      </Button>
      <Button color="accent" variant="soft">
        Accent
      </Button>
      <Button color="info" variant="soft">
        Info
      </Button>
      <Button color="success" variant="soft">
        Success
      </Button>
      <Button color="warning" variant="soft">
        Warning
      </Button>
      <Button color="error" variant="soft">
        Error
      </Button>
    </div>
  )
}
