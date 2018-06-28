module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '1hhg83ifpcz9',
        accessToken: 'fe937a2241f41cac4f5162729936b9fb9d00a8fa61c288dd7f4bef585a114650'
      }
    },
    'gatsby-plugin-react-helmet'
  ],
}
