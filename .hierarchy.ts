type ColumnName = 'To-do' | 'Ongoing' | 'Done'
type MetaType = 'tes-board' | 'tes-whiteboard'

interface Card {
  id: '3ebc26e2bf21-card'
  code: 'ASL-001'
  title: 'Refactor page beli'
  description: 'Refactor biar lebih cakep aja pokoknya mah'
  story_point: 5
  type: 'task'
  reporter: 'Joko Widodo'
  assignee: 'Dio Ilham'
}

interface Column {
  id: '3ebc26e2bf11-column'
  name: ColumnName
  cards: Card[]
}

interface Board {
  id: '3ebc26e2bf11-board'
  name: 'ASL Marketplace'
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
