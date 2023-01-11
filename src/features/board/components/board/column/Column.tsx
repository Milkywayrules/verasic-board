import classNames from 'classnames'
import { ReactNode } from 'react'

import { Icon } from '~commons/components/atoms'
import { Union } from '~libs/type'

type Props2 = Union.StrictUnion<
  | { isSpecial: true; content?: ReactNode }
  | {
      title: string
      children: ReactNode[]
      className?: string
    }
>

export default function Column({ children, title, isSpecial, content, className }: Props2) {
  return (
    <div className={classNames('m-2 w-52 flex-shrink-0 rounded bg-zinc-800/75', className)}>
      {!isSpecial ? (
        <>
          <div className="py-3 px-4">
            <div className="bg-teals-900/80 text-lg font-semibold">{title}</div>
          </div>

          <div className="h-px bg-zinc-900" />

          <div className="flex flex-col gap-1.5 px-2 py-2">{children}</div>
        </>
      ) : (
        <div className="h-full w-full text-zinc-400">
          <div className="h-full w-full p-3">
            <button
              disabled
              type="button"
              className="flex h-full w-full flex-col items-center justify-center gap-2 rounded border-2 border-dashed border-zinc-500 transition-colors hover:bg-zinc-800/75 disabled:cursor-not-allowed"
            >
              {content ?? (
                <>
                  Add more column
                  <Icon model="SquaresPlusIcon" className="h-8 w-8 text-zinc-500" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
