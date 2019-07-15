import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import ContentRow from "../components/layoutHelpers/ContentRow"
import Row from "../components/layoutHelpers/Row"
import Layout from "../components/layout"
import { grey5 } from "../components/designSystem"

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
  console.log(data)
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout showTitle={true}>
      <TitleRow
        bg={`url(${data.file.publicURL})`}
        bgC={grey5}
        bgSize={"cover"}
        bgPos={"60% 25%"}
      >
        <h1>{frontmatter.title}</h1>–<p className="date">{frontmatter.date}</p>
      </TitleRow>
      <ContentRow bg={"white"}>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </ContentRow>
    </Layout>
  )
}
const TitleRow = styled(Row)`
  text-align: center;
  .wrapper {
    max-width: 550px;
  }
  .date {
    font-size: 70%;
  }
  h1 {
    margin-bottom: 0;
  }
`
