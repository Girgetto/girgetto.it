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
      express, css, HTML.`,
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.girgetto.it",
        sitemap: "https://girgetto.it/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
      {
    resolve: "gatsby-plugin-parse-rss",
    options: {
      rss: [
        {
          urlToFetch:
            "https://www.youtube.com/feeds/videos.xml?channel_id=UChqlNb3LpXclrYsIXzD2q_w",
          selectors: ["media:title", "media:thumbnail", "entry > link"],
          name: "youTubeRSS",
        },
      ],
    },
  },
  ],
  trailingSlash: `always`,
};
