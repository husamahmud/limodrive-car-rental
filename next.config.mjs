import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['jypetjaadblrxnxsuxoz.supabase.co'],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lib': path.resolve(__dirname, 'lib'),
    }
    return config
  },
}

export default nextConfig
