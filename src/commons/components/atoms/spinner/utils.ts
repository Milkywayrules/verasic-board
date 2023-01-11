import { SpinnerSize, spinnerSizeCustomOption, SpinnerVariant } from './type.d'

export const getSizeClassName = (size: SpinnerSize): string => {
  let className = ''

  if (size === 'default') className = 'h-5 w-5'
  else if (size === 'xs') className = 'h-3 w-3'
  else if (size === 'sm') className = 'h-4 w-4'
  else if (size === 'lg') className = 'h-6 w-6'
  else if (size === 'xl') className = 'h-10 w-10'
  else if (size === '2xl') className = 'h-20 w-20'
  else className = spinnerSizeCustomOption[size]

  return className
}

export const getVariantClassName = (variant: SpinnerVariant): string => {
  let className = ''

  if (variant === 'default') className = 'text-gray-700'
  else if (variant === 'light') className = 'text-white'
  else if (variant === 'semidark') className = 'text-gray-500'
  else if (variant === 'primary') className = 'text-blue-700'
  else throw new Error('Invalid variant.')

  return className
}
