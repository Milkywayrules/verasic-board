import { StoreCreatorWithLiveblocks } from './type'

type Cursor = { x: number; y: number }

export interface SliceCursor {
  cursor: Cursor
  cursorSet: (cursor: Cursor) => void
}

// const useStoreCursor = create<WithLiveblocks<SliceCursor>>()(
//   liveblocks(
//     set => ({
//       cursor: { x: 0, y: 0 },
//       setCursor: cursor => set({ cursor }),
//     }),
//     {
//       client: clientLiveblocks,
//       presenceMapping: {
//         cursor: true,
//       },
//     },
//   ),
// )

// export default useStoreCursor

// /**
//  * @version v1.0.0-alpha.1
//  */
// export const createSliceCursor: StateCreator<SliceCursor> = set => ({
//   cursor: { x: 0, y: 0 },
//   setCursor: cursor => set({ cursor }),
// })

// export const optsCursor: Options<SliceCursor> = {
//   presenceMapping: {
//     cursor: true,
//   },
// }

/**
 * @version v0.1.0
 */
export const storeCursor: StoreCreatorWithLiveblocks<SliceCursor> = {
  slice: set => ({
    cursor: { x: 0, y: 0 },
    cursorSet: cursor => set({ cursor }),
  }),
  presenceMapping: {
    cursor: true,
  },
}
