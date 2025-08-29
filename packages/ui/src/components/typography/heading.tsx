import { HTMLAttributes } from 'react'
import { twcn } from '../../utils/twcn'

type Props = {}

export type HeadingProps = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  keyof Props
> &
  Props

export function Heading0(props: HeadingProps) {
  const { children, className, ...otherProps } = props
  return (
    <h1
      {...otherProps}
      role="heading"
      aria-level={0}
      className={twcn(
        [
          'text-heading-0',
          'font-heading-0',
          'leading-heading-0',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function Heading1(props: HeadingProps) {
  const { children, className, ...otherProps } = props
  return (
    <h1
      {...otherProps}
      role="heading"
      aria-level={1}
      className={twcn(
        [
          'text-heading-1',
          'font-heading-1',
          'leading-heading-1',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function Heading2(props: HeadingProps) {
  const { children, className, ...otherProps } = props
  return (
    <h2
      {...otherProps}
      role="heading"
      aria-level={2}
      className={twcn(
        [
          'text-heading-2',
          'font-heading-2',
          'leading-heading-2',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function Heading3(props: HeadingProps) {
  const { children, className, ...otherProps } = props
  return (
    <h3
      {...otherProps}
      role="heading"
      aria-level={3}
      className={twcn(
        [
          'text-heading-3',
          'font-heading-3',
          'leading-heading-3',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </h3>
  )
}

export function Heading4(props: HeadingProps) {
  const { children, className, ...otherProps } = props
  return (
    <h4
      {...otherProps}
      role="heading"
      aria-level={4}
      className={twcn(
        [
          'text-heading-4',
          'font-heading-4',
          'leading-heading-4',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </h4>
  )
}

export function Heading5(props: HeadingProps) {
  const { children, className, ...otherProps } = props
  return (
    <h5
      {...otherProps}
      role="heading"
      aria-level={5}
      className={twcn(
        [
          'text-heading-5',
          'font-heading-5',
          'leading-heading-5',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </h5>
  )
}

export function Heading6(props: HeadingProps) {
  const { children, className, ...otherProps } = props
  return (
    <h6
      {...otherProps}
      role="heading"
      aria-level={6}
      className={twcn(
        [
          'text-heading-6',
          'font-heading-6',
          'leading-heading-6',
          'text-base-700',
        ],
        className,
      )}
    >
      {children}
    </h6>
  )
}
