require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `AM Cleaning Service`,
    description: `Profesjonalna firma sprzątająca. Sprzątanie mieszkań, hoteli, apartamentów, po remontach... Oferty pracy sprzątanie Holandia. | Schoonmaakdiensten. Schoonmaak van flats, hotels, appartementen, na renovatie ... Vacatures schoonmaak Nederland.`,
    author: `Piotr Humin`,
    siteUrl: `https://www.am-cleaningservices.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },


    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
      {
        resolve: `gatsby-plugin-intl`,
        options: {
          // Directory with the strings JSON
          path: `${__dirname}/src/intl`,
          // Supported languages
          languages: [`pl`, `nl`],
          // Default site language
          defaultLanguage: `pl`,
          // Redirects to `/pl` in the route `/`
          redirect: false,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
