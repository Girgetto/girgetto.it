require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "girgetto.it",
    author: `Giorgio Grassini`,
    description: `girgetto.it personal blog`,
    siteUrl: `https://girgetto.it`,
    social: {
      twitter: `GirgettoIT`,
    },
  },
  pathPrefix: `/`,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: "gatsby-plugin-bundle-stats",
      options: {
        compare: true,
        outDir: "../artifacts",
        stats: {
          context: "./src",
        },
      },
    },
  ],
};
