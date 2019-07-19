import React from "react"
import { graphql } from "gatsby"

import ContentRow from "../components/layoutHelpers/ContentRow"
import Layout from "../components/layout"
import TitleRow from "../components/layoutHelpers/TitleRow"

export const data = graphql`
  query PROJECTQUERY($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image
      }
      html
    }
    file(relativePath: { eq: "main-geo-lines.png" }) {
      publicURL
    }
  }
`

export default function projects({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout showTitle={true} pageTitle={frontmatter.title}>
      <TitleRow>
        <h1>{frontmatter.title}</h1>
      </TitleRow>
      <ContentRow>
        {frontmatter.image && (
          <img src={frontmatter.image} alt={frontmatter.title} />
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ContentRow>
    </Layout>
  )
}
