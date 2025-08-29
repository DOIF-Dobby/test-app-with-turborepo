import { twcn } from '../../utils/twcn'
import { icons, IconType } from './icons'
import { iconVariants, IconVariants } from './variants'

type Props = Omit<React.SVGProps<SVGSVGElement>, keyof IconVariants> &
  IconVariants

export interface IconProps extends Props {
  icon: IconType
}

export function Icon(props: IconProps) {
  const { icon, color, size, className, ...otherProps } = props
  const SVGIcon = icons[icon]

  const styles = iconVariants({
    color,
    size,
    className,
  })

  return <SVGIcon className={twcn(styles)} {...otherProps} />
}
