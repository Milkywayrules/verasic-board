export type CardType = 'bug' | 'task' | 'story'
type ColumnName =
  | 'Product Backlog'
  | 'Sprint Backlog'
  | 'To-do'
  | 'Ongoing'
  | 'QA'
  | 'Ready to deploy'
  | 'Done'

type MetaType = 'tes-board' | 'tes-whiteboard'

interface Card {
  id: '3ebc26e2bf21-card' | string
  code: 'ASL-001' | string
  title: 'Refactor page beli' | string
  description: 'Refactor biar lebih cakep aja pokoknya mah' | string
  story_point: '5' | string
  type: CardType
  reporter: 'Joko Widodo' | string
  assignee: 'Dio Ilham' | string
}

interface Column {
  id: '3ebc26e2bf11-column' | string
  name: ColumnName
  cards: Card[]
}

export interface Board {
  id: '3ebc26e2bf11-board' | string
  name: 'ASL Marketplace' | string
  columns: Column[]
}

interface Meta {
  name: 'Demo Cursor Board 1'
  type: MetaType
  board?: Board
  whiteboard?: any
}

interface Req {
  id: 'my-room-3ebc26e2bf96'
  defaultAccesses: ['room:write']
  metadata: Meta
  usersAccesses: {
    alice: ['room:write']
  }
  groupsAccesses: {
    product: ['room:write']
  }
}

export const a = ''

// let q: Req

// q.metadata.board?.columns.map(col => {
//   col.id
//   col.name
//   col.cards.map(card => {
//     card.id
//     card.code
//     card.type
//     card.title
//   })
// })
