import { createTV } from 'tailwind-variants'
import { classGroups } from '../tw-merge'

export const tv = createTV({
  twMergeConfig: {
    classGroups: classGroups,
  },
})
