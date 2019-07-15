import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import RecentPost from "./RecentPost"

function RecentPostList(props) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          frontmatter {
            slug
            title
            type
          }
          id
          excerpt
        }
      }
    }
  `)
  return (
    <ul className={props.className}>
      {data.allMarkdownRemark.nodes.map(post => {
        return (
          <RecentPost
            key={post.id}
            title={post.frontmatter.title}
            excerpt={post.excerpt}
            link={post.frontmatter.slug}
          />
        )
      })}
    </ul>
  )
}

export default styled(RecentPostList)`
  padding: 0;
  margin: 0;
  display: grid;
  width: 100%;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 762px) {
    grid-template-columns: 1fr;
  }
`
