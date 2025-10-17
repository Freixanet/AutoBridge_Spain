/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/AutoBridge_Spain' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AutoBridge_Spain' : '',
}

export default nextConfig
