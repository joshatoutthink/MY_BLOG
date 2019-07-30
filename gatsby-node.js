const path = require("path")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = async ({ node }) => {
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
                  image
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
        const imageSlug =
          node.frontmatter.image && node.frontmatter.image.replace("../..", "")
        createPage({
          path: `${node.frontmatter.slug}`,
          component: path.resolve(
            `./src/templates/${node.frontmatter.type}.js`
          ),
          context: {
            slug: `${node.frontmatter.slug}`,
            image: `${node.frontmatter.image ? `/${imageSlug}/` : "none"}`,
          },
        })
      })

      resolve()
    })
  })
}
