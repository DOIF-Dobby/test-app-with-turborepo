'use client'

import { Button } from '@repo/ui/components/button'
import { useRef } from 'react'

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <div>Home</div>
      <Button
        color="accent"
        variant="dash"
        ref={buttonRef}
        onClick={() => console.log('111')}
      >
        버튼
      </Button>
      <Button color="neutral" onClick={() => buttonRef.current?.click()}>
        버튼2
      </Button>
      <Button size="xl" color="error">
        사이즈
      </Button>
    </>
  )
}
