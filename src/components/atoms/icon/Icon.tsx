import IconHeroIcon from './IconHeroIcon'
import { Model, Type, Variant } from './type.d'

interface Props {
  model: Model
  type?: Type
  variant?: Variant
  className?: string
}

/**
 * @version v1.0.0-beta1
 */
export default function Icon({ model, type = 'outline', variant = 'md', className }: Props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconHeroIcon className={className} model={model} type={type} variant={variant} />
}
