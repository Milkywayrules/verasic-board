import classNames from 'classnames'
import { SVGProps, useEffect, useState } from 'react'

import { Spinner } from '../spinner'
import { Model, Type, Variant } from './type.d'
import { getIconType } from './utils'

interface Props extends SVGProps<SVGSVGElement> {
  model: Model
  type: Type
  variant: Variant
  className?: string
}

/**
 * @version v1.0.0-beta1
 */
export default function IconHeroIcon({ className, model, type, variant, ...rest }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [icon, iconSet] = useState<any>(null)

  useEffect(() => {
    const lazyLoadIcon = async () => {
      const i = await getIconType(type, variant)
      iconSet(i[model])
    }

    lazyLoadIcon()
  }, [type, variant, model])

  const IconComponent = icon

  return icon ? (
    <IconComponent
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      className={classNames({
        'h-6 w-6': !className,
        // if not exist, then set empty string, which means nothing to the JSX className
        [className ?? '']: className,
      })}
    />
  ) : (
    <Spinner />
  )
}
