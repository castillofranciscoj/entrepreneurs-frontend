require('dotenv').config();

module.exports = {
  /* config options here */
  reactStrictMode: false,
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL
  }
};
