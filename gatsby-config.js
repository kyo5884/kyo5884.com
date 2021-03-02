module.exports = {
  siteMetadata: {
    title: `kyo5884.com`,
    siteUrl: 'https://kyo5884.com',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Josefin Slab',
              variants: ['100', '300'],
            },
          ]
        },
      },
    },
  ],
}
