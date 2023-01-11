import { useEffect } from 'react'

import CONSTS from '~config/consts'
import { getRoomIdByEnv } from '~libs/multiplayer'
import useStoreLiveblocks, { SliceCursor } from '~store/liveblocks'

const roomId = getRoomIdByEnv(CONSTS.multiplayer.roomIdMap.cursor.name)

export default function IndexCursorPage() {
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useStoreLiveblocks()

  useEffect(() => {
    enterRoom(roomId)
    return () => {
      leaveRoom(roomId)
    }
  }, [enterRoom, leaveRoom])

  const cursorSet = useStoreLiveblocks(state => state.cursorSet)
  const cursor = useStoreLiveblocks(state => state.cursor)

  const others = useStoreLiveblocks(state => state.liveblocks.others)
  const othersCursors = others.map(user => user.presence.cursor) as SliceCursor['cursor'][]

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(othersCursors, null, 2))
  // eslint-disable-next-line no-console
  console.log('cursor:', cursor)

  return (
    <div
      style={{ width: '100vw', height: '100vh' }}
      onPointerMove={e => cursorSet({ x: e.clientX, y: e.clientY })}
    >
      <div className="m-2 w-fit rounded bg-gray-200 px-2 py-4 shadow-md">
        My current cursor position:
        <table>
          <tr>
            <td>x: {cursor.x}</td>
          </tr>
          <tr>
            <td>y: {cursor.y}</td>
          </tr>
        </table>
      </div>

      {othersCursors.map(other => (
        <div
          key={`${other.x}+${other.y}`}
          className="m-2 w-fit rounded bg-gray-200 px-2 py-4 shadow-md"
        >
          Others current cursor position:
          <table>
            <tr>
              <td>x: {other.x}</td>
            </tr>
            <tr>
              <td>y: {other.y}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  )
}
