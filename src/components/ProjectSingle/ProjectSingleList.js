import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ProjectSingle from "./ProjectSingle"

function ProjectSingleList({ className }) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
        limit: 1
      ) {
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
  `)
  return (
    <ul className={className}>
      {data.allMarkdownRemark.nodes.map(project => {
        return (
          <ProjectSingle
            key={project.id}
            name={project.frontmatter.title}
            description={project.excerpt}
            image={project.frontmatter.image}
            link={project.frontmatter.slug}
          />
        )
      })}
    </ul>
  )
}
export default styled(ProjectSingleList)`
  margin: 0;
  padding: 0;
`
