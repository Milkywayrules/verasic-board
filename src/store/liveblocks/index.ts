import { liveblocks, WithLiveblocks } from '@liveblocks/zustand'
import create from 'zustand'

import { clientLiveblocks } from './client'
import { SliceCursor, storeCursor } from './useStoreCursor'

type Slices = SliceCursor

const useStoreLiveblocks = create<WithLiveblocks<Slices>>()(
  liveblocks(
    (...params) => ({
      ...storeCursor.slice(...params),
    }),
    {
      presenceMapping: {
        ...storeCursor.presenceMapping,
      },
      storageMapping: {
        ...storeCursor.storageMapping,
      },
      client: clientLiveblocks,
    },
  ),
)

export default useStoreLiveblocks

export * from './client'
export * from './type.d'
export * from './useStoreCursor'
