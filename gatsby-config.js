module.exports = {
  siteMetadata: {
    title: `kyo5884.com`,
    siteUrl: 'https://kyo5884.com',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Josefin Slab',
            variants: ['100', '300'],
          },
        ],
      },
    },
  ],
}