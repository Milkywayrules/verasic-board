/**
 * Big shoutout to T3-stack app for this env check template :)
 */

// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// eslint-disable-next-line no-unused-expressions
!process.env.SKIP_ENV_VALIDATION && (await import('./src/config/env/server.mjs'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts'],
}

export default nextConfig
