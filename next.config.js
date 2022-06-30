/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'links.papareact.com',
      'image.tmdb.org',
    ],
  },
}

module.exports = nextConfig
