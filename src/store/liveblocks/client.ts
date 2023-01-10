import { createClient } from '@liveblocks/client'

import envClient from '~config/env/client.mjs'

export const clientLiveblocks = createClient({
  authEndpoint: '/api/multiplayer/auth',
})

export const clientLiveblocksPublic = createClient({
  publicApiKey: envClient.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY,
})
