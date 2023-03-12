require('dotenv').config();

module.exports = {
  /* config options here */
  reactStrictMode: false,
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/**',
      },
    ],
  },
};
