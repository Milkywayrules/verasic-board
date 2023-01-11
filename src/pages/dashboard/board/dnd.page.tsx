import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { DraggableLocation, DropResult } from 'react-beautiful-dnd'

import { Board as BoardType } from '.hierarchy'
import { boardData } from '~commons/data'
import { Dashboard } from '~commons/components'
import { Board } from '~features/board'

/**
 * thanks to stackoverflow solution, \
 * I've been debugging this rbd things on nextjs for like a day
 * @see https://stackoverflow.com/questions/64242578/how-to-fix-data-rbd-draggable-context-id-did-not-match-server-1-client-0
 */
const DragDropContext = dynamic(
  () => import('react-beautiful-dnd').then(mod => mod.DragDropContext),
  { ssr: false },
)

const Droppable = dynamic(() => import('react-beautiful-dnd').then(mod => mod.Droppable), {
  ssr: false,
})

const Draggable = dynamic(() => import('react-beautiful-dnd').then(mod => mod.Draggable), {
  ssr: false,
})

// a little function to help us with reordering the result
const reorder = (
  // eslint-disable-next-line spaced-comment
  arr: BoardType['columns'][number]['cards'],
  startIndex: number,
  endIndex: number,
) => {
  const result = Array.from(arr)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: BoardType['columns'][number]['cards'],
  destination: BoardType['columns'][number]['cards'],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {} as {
    [s: string]: BoardType['columns'][number]['cards']
  }
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

export default function DndBoardDashboardPage() {
  const { id, name } = boardData

  const [columns, columnsSet] = useState(boardData.columns)

  function onDragEnd(dropRes: DropResult) {
    const { source, destination } = dropRes

    // dropped outside the list
    if (!destination) return

    const sourceColIdx = +source.droppableId
    const destColIdx = +destination.droppableId

    if (sourceColIdx === destColIdx) {
      const items = reorder(columns[sourceColIdx].cards, source.index, destination.index)

      const newState = [...columns]
      newState[sourceColIdx].cards = items
      columnsSet(newState)
    } else {
      const result = move(
        columns[sourceColIdx].cards,
        columns[destColIdx].cards,
        source,
        destination,
      )

      const newState = [...columns]
      newState[sourceColIdx].cards = result[sourceColIdx]
      newState[destColIdx].cards = result[destColIdx]

      console.log(result[sourceColIdx], result[destColIdx])

      columnsSet(newState)
    }
  }

  console.log('columns:', columns)

  return (
    <Dashboard
      pageTitle={`${name} (${id}) --- draggable board` ?? 'Default title'}
      siteTitle={name}
    >
      <DragDropContext onDragEnd={dr => onDragEnd(dr)}>
        <Board.Root>
          <Board.Canvas>
            {columns.map((col, idx) => {
              console.log('col', col)

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Droppable key={col.id} droppableId={`${idx}`}>
                  {(providedDroppable, snapshotDroppable) => (
                    <Board.ColumnDroppable
                      ref={providedDroppable.innerRef}
                      droppableProps={providedDroppable.droppableProps}
                      title={col.name}
                      className={classNames({
                        'ring-2 ring-pink-700/50': snapshotDroppable.draggingFromThisWith,
                        'ring-2 ring-teal-700/50': snapshotDroppable.draggingOverWith,
                        // '!bg-red-600': snapshotDroppable.isDraggingOver,
                      })}
                      // overrideClassName
                      // style={getListStyle(snapshotDroppable.isDraggingOver)}
                    >
                      {col.cards.map((card, index) => (
                        <Draggable key={card.id} draggableId={card.id} index={index}>
                          {(provided, snapshot) => (
                            <Board.CardDraggable
                              ref={provided.innerRef}
                              draggableProps={provided.draggableProps}
                              dragHandleProps={provided.dragHandleProps}
                              text={card.title}
                              type={card.type}
                              className={classNames({
                                '!bg-zinc-800 ring-2 ring-indigo-700': snapshot.isDragging,
                              })}
                              // style={getItemStyle(snapshot.isDragging, draggableProps.style)}
                            />
                          )}
                        </Draggable>
                      ))}
                      {providedDroppable.placeholder}
                    </Board.ColumnDroppable>
                  )}
                </Droppable>
              )
            })}

            <Board.Column isSpecial />
          </Board.Canvas>
        </Board.Root>
      </DragDropContext>
    </Dashboard>
  )
}
