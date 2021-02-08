const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostComponent = path.resolve(`./src/templates/blog-post.js`);
  const playlistsPostTemplate = path.resolve(`./src/templates/playlists-post.js`); 

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            frontmatter: {
              enabled: { eq: true }
              contentType: { in: ["playlists", "blog-post"] }
            }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
                contentType
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const edges = result.data.allMarkdownRemark.edges;

    edges.forEach((edge, index) => {
      let path = edge.node.fields.slug;
      let component = playlistsPostTemplate;

      if (edge.node.frontmatter.contentType === 'blog-post') {
        component = blogPostComponent;
      }

      if (edge.node.frontmatter.contentType === 'playlists') {
        component = playlistsPostTemplate;
      }

      createPage({
        path,
        component,
        context: {
          slug: edge.node.fields.slug || path,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let pathValue = createFilePath({ node, getNode });

    if (node.frontmatter.path) {
      pathValue = node.frontmatter.path;
      pathValue = pathValue.startsWith('/') ? pathValue : `/${pathValue}`;
      pathValue = pathValue.toLowerCase();

      if (node.frontmatter.contentType === 'blog-post') {
        pathValue = `/blog${pathValue}`;
      }

      if (node.frontmatter.contentType === 'playlists') {
        pathValue = `/playlists${pathValue}`;
      }
    }

    createNodeField({
      name: `slug`,
      node,
      value: pathValue,
    });

    createNodeField({
      name: `contentType`,
      node,
      value: node.frontmatter.contentType || 'not-defined',
    });
  }
};