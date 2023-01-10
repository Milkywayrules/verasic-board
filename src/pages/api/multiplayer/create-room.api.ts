import { NextApiRequest, NextApiResponse } from 'next'

import CONSTS from '~config/consts'
import envServer from '~config/env/server.mjs'

const secret = envServer.LIVEBLOCKS_SECRET_KEY

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    // 405 Method Not Allowed
    return res.status(405).json({ data: { msg: 'Method not allowed.' } })
  }

  const { body } = req

  // console.log('body:', JSON.stringify(body))

  const resp = await fetch(CONSTS.url.external.liveblocks.rooms, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Authorization': `Bearer ${secret}`,
      'Content-Type': 'application/json',
    },
  })

  const json = await resp.json()

  // console.log('server:', json)

  return res.status(200).json(json)
}
