import { createTV } from 'tailwind-variants'
import { theme } from '../tw-merge/tw-merge'

export const tv = createTV({
  twMergeConfig: {
    extend: {
      theme,
    },
  },
})
