import { extendTailwindMerge } from 'tailwind-merge'

const fontSizeGroups = ['button-2xs', 'button-xs', 'button-sm', 'button-md']
const colorGroups = [
  'cta1',
  'cta2',
  'destructive',
  'cta1-content',
  'cta2-content',
  'destructive-content',
]

export const classGroups = {
  'font-size': [{ text: fontSizeGroups }],
  'color-scheme': [{ text: colorGroups }],
}

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      ...classGroups,
    },
  },
})
