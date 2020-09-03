module.exports = {
  siteMetadata: {
    title: `Wenhuang Zeng`,
    description: `Wenhuang Zeng's personal website built with GatsbyJS and Semantic UI React.`,
    keywords: `Wenhuang Zeng, Brown University, personal website, Facebook intern, Johnson & John intern, Hack@Brown, student`,
    author: `@gatsbyjs`,
    url:`https://www.whzeng.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/projects`],
        query: `
          {
            site {
              siteMetadata {
                url
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({site}) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.url
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.whzeng.com',
        sitemap: 'https://www.whzeng.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: '/projects' }]
      }
    },
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
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
