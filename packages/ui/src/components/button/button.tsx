import { button, ButtonVariants } from './variants'

type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

interface ButtonProps
  extends MakeRequired<ButtonVariants, 'color' | 'variant'> {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  const className = button(props)
  return <button className={className}>{props.children}</button>
}
