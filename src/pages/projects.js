import React from "react"
import { graphql } from "gatsby"

import TitleRow from "../components/layoutHelpers/TitleRow"
import Row from "../components/layoutHelpers/Row"
import Layout from "../components/layout"
import ProjectSingle from "../components/ProjectSingle/ProjectSingle"

export const data = graphql`
  query PROJECTSQUERY {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      nodes {
        frontmatter {
          slug
          title
          image
          type
        }
        id
        excerpt
      }
    }
  }
`

const projects = ({ className, data }) => {
  const projectsArray = data.allMarkdownRemark.nodes
  return (
    <Layout className={className} showTitle={true} pageTitle="My Work">
      <TitleRow>
        <h1>My Work</h1>
      </TitleRow>
      <Row>
        <ul>
          {projectsArray.map(project => {
            const { frontmatter, id, excerpt } = project
            return (
              <ProjectSingle
                key={id}
                image={frontmatter.image}
                name={frontmatter.title}
                description={excerpt}
                link={frontmatter.slug}
              />
            )
          })}
        </ul>
      </Row>
    </Layout>
  )
}

export default projects
