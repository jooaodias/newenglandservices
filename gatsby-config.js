module.exports = {
  siteMetadata: {
    title: 'New England Services',
    author: '@diias_jooao',
    siteUrl: 'https://www.newenglandpropainting.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
        theme_color: '#CD2727',
      },
    },
  ],
};
