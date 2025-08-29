import { DefaultThemeGroupIds, extendTailwindMerge } from 'tailwind-merge'

const textGroups = [
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
  'base-content',
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

const radiusGroups = [
  'input-xs',
  'input-sm',
  'input-md',
  'card-sm',
  'card-md',
  'card-lg',
]

const spacingGroups = [
  'sone-4xs',
  'sone-3xs',
  'sone-2xs',
  'sone-xs',
  'sone-sm',
  'sone-ms',
  'sone-md',
  'sone-ml',
  'sone-lg',
  'sone-xl',
  'sone-2xl',
  'sone-3xl',
  'sone-4xl',
  'page-without-nav',
  'page-with-nav',
]

export const theme: Partial<ThemeObject<DefaultThemeGroupIds>> = {
  color: colorGroups,
  spacing: spacingGroups,
  radius: radiusGroups,
  leading: leadingGroups,
  'font-weight': fontWeightGroups,
  text: textGroups,
}

export const twMerge = extendTailwindMerge({
  extend: {
    theme,
  },
})

type ThemeObject<ThemeGroupIds extends string> = Record<
  ThemeGroupIds,
  ClassGroup<ThemeGroupIds>
>
type ClassGroup<ThemeGroupIds extends string> =
  readonly ClassDefinition<ThemeGroupIds>[]
type ClassDefinition<ThemeGroupIds extends string> =
  | string
  | ClassValidator
  | ThemeGetter
  | ClassObject<ThemeGroupIds>
type ClassValidator = (classPart: string) => boolean
interface ThemeGetter {
  (theme: ThemeObject<AnyThemeGroupIds>): ClassGroup<AnyClassGroupIds>
  isThemeGetter: true
}
type ClassObject<ThemeGroupIds extends string> = Record<
  string,
  readonly ClassDefinition<ThemeGroupIds>[]
>
type AnyClassGroupIds = string
type AnyThemeGroupIds = string
