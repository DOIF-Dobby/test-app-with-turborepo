import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const textGroups = ['button-2xs', 'button-xs', 'button-sm', 'button-md']

const classGroups = {
  'font-size': textGroups.map((unit) => `text-${unit}`),
}

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups,
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
