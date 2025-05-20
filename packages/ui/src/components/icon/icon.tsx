import { icons, IconType } from './icons'

export interface BaseIconProps {
  icon: IconType
}

export type IconProps = Omit<
  React.SVGProps<SVGSVGElement>,
  keyof BaseIconProps
> &
  BaseIconProps

export function Icon(props: IconProps) {
  const { icon, ...otherProps } = props
  const SVGIcon = icons[icon]

  return <SVGIcon className="size-6 fill-current" {...otherProps} />
}
