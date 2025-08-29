import { HTMLAttributes } from 'react'
import { twcn } from '../../utils/twcn'

type Props = {}

export type ParagraphProps = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  keyof Props
> &
  Props

export function Paragraph1(props: ParagraphProps) {
  const { children, className, ...otherProps } = props
  return (
    <p
      {...otherProps}
      role="paragraph"
      className={twcn(
        [
          'text-paragraph-1',
          'font-paragraph-1',
          'leading-paragraph-1',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </p>
  )
}

export function Paragraph2(props: ParagraphProps) {
  const { children, className, ...otherProps } = props
  return (
    <p
      {...otherProps}
      role="paragraph"
      className={twcn(
        [
          'text-paragraph-2',
          'font-paragraph-2',
          'leading-paragraph-2',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </p>
  )
}

export function Paragraph3(props: ParagraphProps) {
  const { children, className, ...otherProps } = props
  return (
    <p
      {...otherProps}
      role="paragraph"
      className={twcn(
        [
          'text-paragraph-3',
          'font-paragraph-3',
          'leading-paragraph-3',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </p>
  )
}

export function Paragraph4(props: ParagraphProps) {
  const { children, className, ...otherProps } = props
  return (
    <p
      {...otherProps}
      role="paragraph"
      className={twcn(
        [
          'text-paragraph-4',
          'font-paragraph-4',
          'leading-paragraph-4',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </p>
  )
}

export function Paragraph5(props: ParagraphProps) {
  const { children, className, ...otherProps } = props
  return (
    <p
      {...otherProps}
      role="paragraph"
      className={twcn(
        [
          'text-paragraph-5',
          'font-paragraph-5',
          'leading-paragraph-5',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </p>
  )
}

export function Paragraph6(props: ParagraphProps) {
  const { children, className, ...otherProps } = props
  return (
    <p
      {...otherProps}
      role="paragraph"
      className={twcn(
        [
          'text-paragraph-6',
          'font-paragraph-6',
          'leading-paragraph-6',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </p>
  )
}
