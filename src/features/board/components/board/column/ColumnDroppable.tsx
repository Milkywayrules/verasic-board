import classNames from 'classnames'
import { forwardRef, ReactNode } from 'react'
import { DroppableProvided } from 'react-beautiful-dnd'

import { Union } from '~commons/type'
import Column from './Column'

type Props = Union.StrictUnion<
  | { isSpecial: true }
  | {
      title: string
      children: ReactNode[]
      className?: string
      droppableProps: DroppableProvided['droppableProps']
    }
>

const ColumnDroppable = forwardRef<HTMLDivElement, Props>(
  ({ children, title, isSpecial, droppableProps, className }, ref) => (
    <div
      ref={ref}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...droppableProps}
      className="flex"
    >
      {!isSpecial ? (
        <Column title={title} className={classNames('rounded', className)}>
          {children}
        </Column>
      ) : (
        <Column isSpecial={isSpecial} />
      )}
    </div>
  ),
)

ColumnDroppable.displayName = 'ColumnDroppable'

export default ColumnDroppable
