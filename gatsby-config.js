module.exports = {
  pathPrefix: `/img`,
  siteMetadata: {
    title: 'Violet Lingenfelter',
    description: 'violetlingenfelter.com',
    author: 'Violet Lingenfelter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-131008281-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'violetlingenfelter',
        short_name: 'violetlingenfelter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/heart.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
