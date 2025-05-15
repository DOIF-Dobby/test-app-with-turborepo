/* eslint-disable react-hooks/exhaustive-deps */
import { mergeRefs } from '@repo/utils/merge-refs'
import { Ref, useMemo } from 'react'

export function useMergeRefs<T>(refs: (Ref<T> | undefined)[]): Ref<T> {
  return useMemo(() => mergeRefs(refs), refs)
}
