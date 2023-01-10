import { serverEnv } from './env/schema.mjs'

const urlExternal = {
  liveblocks: {
    rooms: 'https://api.liveblocks.io/v2/rooms',
  },
} as const

const urlBe = {
  multiplayer: {
    /** POST only */
    createRoom: '/api/multiplayer/create-room',
  },
} as const

const CONSTS = {
  url: {
    external: urlExternal,
    be: urlBe,
    auth: {
      login: '/auth/login',
    },
    board: '/board',
    __cursor: '/cursor',
    home: '/',
  },
  env: {
    isProd: serverEnv.NODE_ENV === 'production',
    isDev: serverEnv.NODE_ENV === 'development',
    isStg: serverEnv.NODE_ENV === 'test',
  },
  multiplayer: {
    roomIdMap: {
      cursor: {
        name: 'cursor',
      },
    },
  },
} as const

export default CONSTS
