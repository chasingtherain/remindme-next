/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  const env = {
    AUTH0_BASE_URL: isDev
      ? process.env.AUTH0_BASE_URL || 'http://localhost:3000'
      : process.env.AUTH0_BASE_URL || 'https://sendmeareminder.vercel.app',
  }

  return {
    env,
  }
}