import { HTMLAttributes } from 'react'
import { contentBoxVariants, ContentBoxVariants } from './variants'

type Props = Omit<HTMLAttributes<HTMLDivElement>, keyof ContentBoxVariants> &
  ContentBoxVariants

export interface ContentBoxProps extends Props {}

export function ContentBox(props: ContentBoxProps) {
  const { children, className, direction, gap, ...otherProps } = props

  const styles = contentBoxVariants({
    className,
    direction,
    gap,
  })

  return (
    <div {...otherProps} className={styles}>
      {children}
    </div>
  )
}
