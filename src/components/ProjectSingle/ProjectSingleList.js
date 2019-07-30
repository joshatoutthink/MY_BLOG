import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ProjectSingle from "./ProjectSingle"

function ProjectSingleList({ className }) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
        limit: 3
      ) {
        nodes {
          frontmatter {
            slug
            title
            image
            type
          }
          id
        }
      }
      images: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        nodes {
          absolutePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <ul className={className}>
      {data.allMarkdownRemark.nodes.map(project => {
        const { frontmatter, id, excerpt } = project
        const imageSharp = data.images.nodes.filter(sharpImage => {
          const absPath = sharpImage.absolutePath
          const staticImageSlug = frontmatter.image.replace("../..", "")
          const strMatches = absPath.match(`${staticImageSlug}`)
          const res = strMatches === null ? false : true
          return res
        })
        const fluidImage = imageSharp[0].childImageSharp.fluid
        return (
          <ProjectSingle
            key={id}
            name={project.frontmatter.title}
            image={fluidImage}
            link={project.frontmatter.slug}
          />
        )
      })}
    </ul>
  )
}
export default styled(ProjectSingleList)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    grid-gap: 40px;
    grid-template-columns: 100%;
  }
`
