import { clsx, type ClassValue } from 'clsx'
import { twMerge } from '../tw-merge'

export function twcn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
