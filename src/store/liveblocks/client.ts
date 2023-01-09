import { createClient } from '@liveblocks/client'

import { envClient } from '~config/env'

const clientLiveblocks = createClient({
  publicApiKey: envClient.NEXT_PUBLIC_LIVEBLOCKS_PUB_KEY,
})

export default clientLiveblocks
