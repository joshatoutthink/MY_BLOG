const path = require("path")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  slug
                  type
                }
              }
            }
          }
        }
      `
    ).then(results => {
      if (results.errors) {
        console.log(results.errors)
        reject(result.errors)
      }

      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `${node.frontmatter.slug}`,
          component: path.resolve(
            `./src/templates/${node.frontmatter.type}.js`
          ),
          context: {
            slug: `${node.frontmatter.slug}`,
          },
        })
      })

      resolve()
    })
  })
}
