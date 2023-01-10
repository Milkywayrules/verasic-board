import { FormEvent } from 'react'
import CONSTS from '~config/consts'

const body = {
  id: 'dev-board-3ebc26e2bf11-board',
  defaultAccesses: ['room:write'],
  metadata: {
    name: 'Demo Cursor Board 1',
    type: 'tes-board',
    board: 'dev-board-3ebc26e2bf11-board',
  },
  usersAccesses: {
    alice: ['room:write'],
  },
  groupsAccesses: {
    galaxxDev: ['room:write'],
  },
}

export default function createRoom() {
  const handle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // read response on be
    fetch(CONSTS.url.be.multiplayer.createRoom, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(x => x.json())
    // .then(x => {
    //   console.log('client:', x)
    // })
  }

  return (
    <form onSubmit={handle}>
      <button type="submit">Create</button>
    </form>
  )
}
