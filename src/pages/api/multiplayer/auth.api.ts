import { authorize } from '@liveblocks/node'
import { NextApiRequest, NextApiResponse } from 'next'
import CONSTS from '~config/consts'

import envServer from '~config/env/server.mjs'
import { getRoomIdByEnv } from '~libs/multiplayer'

// Replace this key with your secret key provided at
// https://liveblocks.io/dashboard/projects/{projectId}/apikeys
const secret = envServer.LIVEBLOCKS_SECRET_KEY

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  /**
   * Implement your own security here.
   *
   * It's your responsibility to ensure that the caller of this endpoint
   * is a valid user by validating the cookies or authentication headers
   * and that it has access to the requested room.
   */

  if (req.method !== 'POST') {
    // 405 Method Not Allowed
    return res.status(405).json({ data: { msg: 'Method not allowed.' } })
  }

  const { room } = req.body

  if (!room) {
    // 403 Unauthorized
    return res.status(403).json({ data: { msg: 'Invalid room. Provide room name.' } })
  }

  const roomName = getRoomIdByEnv(CONSTS.multiplayer.roomIdMap.cursor.name)

  if (room !== roomName) {
    // 418 I'm a teapot
    return res.status(418).json({ data: { msg: "Invalid room. Room doesn't exist." } })
  }

  const result = await authorize({
    room,
    secret,
    userId: '12345', // Optional
    groupIds: ['6710', '-2'], // Optional
    userInfo: {
      // Optional, corresponds to the UserMeta[info] type defined in liveblocks.config.ts
      name: 'Dio ilham',
      color: 'reddo',
      age: 3,
    },
  })

  console.log('status:', result.status, 'room:', room)

  return res.status(result.status).json(JSON.parse(result.body))
}
