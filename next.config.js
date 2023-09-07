/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.cipherem.xyz/:path*',
      },
    ]
  },

  images:{
    unoptimized: true,
    domains:['ipfs.io','static-nft.pancakeswap.com','assets.jedstar.space','gateway.pinata.cloud','pancakeswap.finance','avatars.dicebear.com','cdn.sanity.io']
  }
}

module.exports = nextConfig
