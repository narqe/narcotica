module.exports = {
  siteMetadata: {
    title: `Narcotica`,
    description: `El vicio es cultura`,
    author: `@narqe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/playlist`,
        name: `playlists`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/settings`,
        name: `siteConfig`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {},
    }
  ],
}
