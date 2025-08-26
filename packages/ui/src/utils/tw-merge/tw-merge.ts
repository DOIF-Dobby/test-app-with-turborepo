import { extendTailwindMerge } from 'tailwind-merge'

const fontSizeGroups = [
  'button-2xs',
  'button-xs',
  'button-sm',
  'button-md',
  'heading-0',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'paragraph-1',
  'paragraph-2',
  'paragraph-3',
  'paragraph-4',
  'paragraph-5',
  'paragraph-6',
]

const fontWeightGroups = [
  'heading-0',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'paragraph-1',
  'paragraph-2',
  'paragraph-3',
  'paragraph-4',
  'paragraph-5',
  'paragraph-6',
]

const leadingGroups = [
  'heading-0',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'paragraph-1',
  'paragraph-2',
  'paragraph-3',
  'paragraph-4',
  'paragraph-5',
  'paragraph-6',
]

const colorGroups = [
  'cta1',
  'cta2',
  'destructive',
  'cta1-content',
  'cta2-content',
  'destructive-content',
  'status-good',
  'status-fair',
  'status-poor',
]

export const classGroups = {
  'font-size': [{ text: fontSizeGroups }],
  'color-scheme': [{ text: colorGroups }],
  'font-weight': [{ font: fontWeightGroups }],
  leading: [{ leading: leadingGroups }],
}

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      ...classGroups,
    },
  },
})
