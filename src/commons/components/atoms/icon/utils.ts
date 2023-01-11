import { Type, Variant } from './type.d'

// eslint-disable-next-line import/prefer-default-export
export async function getIconType(type: Type, variant: Variant) {
  let errMsg = 'Invalid icon type.'

  if (variant === 'md') {
    if (type === 'outline') return import('@heroicons/react/24/outline')
    if (type === 'solid') return import('@heroicons/react/24/solid')

    errMsg = `Invalid icon type: "${type}" doesn't have "${variant}" variant.`
  } else if (variant === 'sm') {
    if (type === 'solid') return import('@heroicons/react/20/solid')

    errMsg = `Invalid icon type: "${type}" doesn't have "${variant}" variant.`
  }

  throw new Error(errMsg)
}
