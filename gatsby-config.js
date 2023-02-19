// Gatsby has dotenv by default
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  flags: { DEV_SSR: process.env.GATSBY_DEV_SSR || false },
  siteMetadata: {
    siteTitle: 'Gatsby Starter',
    siteDescription: 'Site Description',
    siteImage: '/images/social-preview.jpg',
    siteLanguage: 'en',
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL || 'http://localhost:8000',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 85,
          placeholder: 'none',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'prefixIds',
                'removeDimensions',
              ],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: '@import "./src/styles/variables.scss" , "./src/styles/mixins.scss";',
        cssLoaderOptions: {
          modules: {
            namedExport: false,
            exportLocalsConvention: 'camelCase',
          },
        },
      },
    },
    'gatsby-alias-imports',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: process.env.GATSBY_DEFAULT_SITE_URL,
      },
    },
  ],
};
