import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

function FeaturedCodePen({ className }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "codepen" } } }) {
        nodes {
          frontmatter {
            slug
            title
            blurb
          }
          html
        }
      }
    }
  `)
  return (
    <div className={className}>
      <h3>{data.allMarkdownRemark.nodes[0].frontmatter.title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.nodes[0].html,
        }}
      />
      <p>{data.allMarkdownRemark.nodes[0].frontmatter.blurb}</p>
    </div>
  )
}
export default styled(FeaturedCodePen)`
  h3 {
    color: white;
  }
`
