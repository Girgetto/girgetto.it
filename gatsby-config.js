require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "girgetto.it",
    author: { name: `Giorgio Grassini` },
    description: `
      Plataforma para encontrar materiales 
      sobre el desarrollo web, lenguajes de programación, 
      frameworks y librerías como: JavaScript, react, nodejs,
      express, css, HTML. Creado por Giorgio Grassini, web 
      developer en DCSL Guidesmiths y Lead teacher 
      en ThirdBridge bootcamp.`,
    siteUrl: `https://girgetto.it`,
    social: {
      twitter: `GirgettoIT`,
    },
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./content/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
  ],
};
