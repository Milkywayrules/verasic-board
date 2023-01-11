import CONSTS from '~config/consts'

export const getRoomIdByEnv = <T extends string>(roomName: T): `${'p' | 'stg' | 'dev'}-${T}` => {
  const { isProd, isStg } = CONSTS.env
  if (isProd) {
    // prod should make a different project
    return `p-${roomName}`
  }

  if (isStg) {
    return `stg-${roomName}`
  }

  return `dev-${roomName}`
}
