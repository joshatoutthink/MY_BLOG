import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { animated, useTrail, config, interpolate } from "react-spring"

import RecentPost from "../components/RecentPost/RecentPost"
import Row from "../components/layoutHelpers/Row"
import Layout from "../components/layout"
import TitleRow from "../components/layoutHelpers/TitleRow"
import { grey5, grey1 } from "../components/designSystem"

export const data = graphql`
  query ALLPOSTS {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { order: ASC, fields: frontmatter___date }
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
  const { edges } = data.allMarkdownRemark
  const trail = useTrail(edges.length, {
    transform: `translateY(0px)`,
    from: { transform: `translateY(200px)` },
  })

  console.log(edges)
  return (
    <>
      <Layout showTitle={true} pageTitle="Blog">
        <TitleRow
          bg={`url(${data.file.publicURL})`}
          bgC={grey5}
          bgSize={"cover"}
          bgPos={"60% 25%"}
        >
          <h1>Blog Archive</h1>
        </TitleRow>
        <BlogListWrapper>
          <BlogPostList>
            {trail.map((props, index) => {
              const { slug, title } = edges[index].node.frontmatter
              console.log(trail)
              return (
                <animated.div key={edges[index]} style={props}>
                  <RecentPost
                    title={edges[index].node.frontmatter.title}
                    excerpt={edges[index].node.excerpt}
                    link={edges[index].node.frontmatter.slug}
                  />
                </animated.div>
              )
            })}
          </BlogPostList>
          <p>
            {trail.map((props, index) => (
              <animated.div style={props}>{index}</animated.div>
            ))}
          </p>
        </BlogListWrapper>
      </Layout>
    </>
  )
}

const BlogPostList = styled.ul`
  h3 a {
    color: ${grey1};
  }
  li {
    margin: 50px 0;
  }
`
const BlogListWrapper = styled(Row)`
  .wrapper {
    max-width: 550px;
    h3 a {
      font-size: 2rem;
      font-weight: 100;
    }
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
const AnimatedPost = animated(RecentPost)
export default BlogPage
