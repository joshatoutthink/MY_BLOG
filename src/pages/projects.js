import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

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
`

const projects = ({ className, data }) => {
  console.log(data.images)
  const projectsArray = data.allMarkdownRemark.nodes
  return (
    <Layout className={className} showTitle={true} pageTitle="My Work">
      <TitleRow>
        <h1>My Work</h1>
      </TitleRow>
      <Row>
        <ProjList>
          {projectsArray.map(project => {
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
                singleColumn={true}
                key={id}
                image={fluidImage}
                name={frontmatter.title}
                description={excerpt}
                link={frontmatter.slug}
              />
            )
          })}
        </ProjList>
      </Row>
    </Layout>
  )
}

export default projects

const ProjList = styled.ul`
  li {
    margin-bottom: 60px;
    @media (max-width: 800px) {
      margin-bottom: 40px;
    }
  }
`
