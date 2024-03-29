const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fetch = require("node-fetch");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/BlogPost/blog-post.js`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest },
) => {
  const response = await fetch(
    `https://api.twitch.tv/helix/videos?user_id=${process.env.TWICH_GIRGETTO_USER_ID}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TWITCH_TOKEN}`,
        "Client-Id": process.env.TWITCH_CLIENT_ID,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const { data } = await response.json();

  if (!data || data.length === 0) {
    const node = {
      id: -1,
      title: "",
      url: "/",
      thumbnail_url: "/",
    };

    createNode({
      data: node,
      id: createNodeId(node.id),
      parent: null,
      children: [],
      internal: {
        type: `Twitch`,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
    return;
  }

  data.forEach((node) => {
    createNode({
      data: node,
      id: createNodeId(node.id),
      parent: null,
      children: [],
      internal: {
        type: `Twitch`,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });
};
