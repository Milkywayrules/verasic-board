import { useRouter } from 'next/router'

import { Dashboard } from '~commons/components'
import { boardData } from '~commons/data'
import { Board } from '~features/board'

export default function IndexBoardDashboardPage() {
  const { id, name, columns } = boardData

  const router = useRouter()
  const boardId = router.query.boardId as string | undefined

  return (
    <Dashboard pageTitle={`${name} (${id}) --- ${boardId}` ?? 'Default title'} siteTitle={name}>
      <Board.Root>
        <Board.Canvas>
          {columns.map(col => (
            <Board.Column key={col.id} title={col.name}>
              {col.cards.map(card => (
                <Board.Card key={card.id} text={card.title} type={card.type} />
              ))}
            </Board.Column>
          ))}

          <Board.Column isSpecial />
        </Board.Canvas>
      </Board.Root>
    </Dashboard>
  )
}
