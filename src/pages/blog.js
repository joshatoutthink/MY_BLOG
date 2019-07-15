import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import RecentPost from "../components/RecentPost/RecentPost"
import Row from "../components/layoutHelpers/Row"
import Layout from "../components/layout"
import { grey5, grey1 } from "../components/designSystem"

export const data = graphql`
  query ALLPOSTS {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    file(relativePath: { eq: "main-geo-lines.png" }) {
      publicURL
    }
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout showTitle={true}>
      <HeroRow
        bg={`url(${data.file.publicURL})`}
        bgC={grey5}
        bgSize={"cover"}
        bgPos={"60% 25%"}
      >
        <h1>Blog Archive</h1>
      </HeroRow>
      <BlogListWrapper>
        <BlogPostList>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { slug, title } = node.frontmatter
            return (
              <RecentPost title={title} excerpt={node.excerpt} link={slug} />
            )
          })}
        </BlogPostList>
      </BlogListWrapper>
    </Layout>
  )
}

const BlogPostList = styled.ul`
  h3 a {
    color: ${grey1};
  }
  li {
  }
`
const BlogListWrapper = styled(Row)`
  .wrapper {
    max-width: 550px;
  }
`
const HeroRow = styled(Row)`
  .wrapper {
    max-width: 550px;
    text-align: center;
    h1 {
      margin-bottom: 0;
    }
  }
`
export default BlogPage
