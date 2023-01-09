/**
 * Big shoutout to T3-stack app for this env check template :)
 */

// @ts-check
/* eslint-disable no-console */
/**
 * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.
 * It has to be a `.mjs`-file to be imported there.
 */
import { serverSchema, serverEnv } from './schema.mjs'
import envClient, { formatErrors } from './client.mjs'

const _serverEnv = serverSchema.safeParse(serverEnv)

if (!_serverEnv.success) {
  console.error('❌ Invalid environment variables:\n', ...formatErrors(_serverEnv.error.format()))
  throw new Error('Invalid environment variables')
}

// eslint-disable-next-line no-restricted-syntax
for (const key of Object.keys(_serverEnv.data)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    console.warn('❌ You are exposing a server-side env-variable:', key)

    throw new Error('You are exposing a server-side env-variable')
  }
}

const envServer = { ..._serverEnv.data, ...envClient }

export default envServer
