import React from "react"
import { graphql } from "gatsby"

import ContentRow from "../components/layoutHelpers/ContentRow"
import TitleRow from "../components/layoutHelpers/TitleRow"
import Layout from "../components/layout"

export const data = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      html
    }
    file(relativePath: { eq: "main-geo-lines.png" }) {
      publicURL
    }
  }
`
export default function post({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout showTitle={true} pageTitle={frontmatter.title}>
      <TitleRow>
        <h1>{frontmatter.title}</h1>–<p className="date">{frontmatter.date}</p>
      </TitleRow>
      <ContentRow bg={"white"}>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </ContentRow>
    </Layout>
  )
}
