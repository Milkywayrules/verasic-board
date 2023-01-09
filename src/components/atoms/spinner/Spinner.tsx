import { ForwardedRef, forwardRef } from 'react'

import { SpinnerSize, SpinnerVariant } from './type'
import { getSizeClassName, getVariantClassName } from './utils'

interface Props {
  className?: string
  size?: SpinnerSize
  variant?: SpinnerVariant
  testId?: string
}

/**
 * @version v1.0.0-beta1
 */
const Spinner = forwardRef(
  (
    { className = '', size = 'default', variant = 'default', testId }: Props,
    ref: ForwardedRef<SVGSVGElement>,
  ) => {
    const sizeClassName = getSizeClassName(size)
    const variantClassName = getVariantClassName(variant)

    return (
      <svg
        className={`flex animate-spin items-center justify-between py-0 ${className} ${sizeClassName} ${variantClassName}`}
        data-testid={testId}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-10"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-90"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )
  },
)

Spinner.displayName = 'Spinner'

export default Spinner
