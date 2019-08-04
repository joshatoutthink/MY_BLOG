import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { animated, useTrail, config } from "react-spring"

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
  const { nodes } = data.allMarkdownRemark
  const trail = useTrail(nodes.length, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: {
      opacity: 1,
      transform: "translate3d(0,0px,0)",
    },
    config: config.default,
  })
  const AnimatedProjectSingle = animated(ProjectSingle)
  return (
    <ul className={className}>
      {trail.map((props, index) => {
        const { frontmatter, id, excerpt } = nodes[index]
        const imageSharp = data.images.nodes.filter(sharpImage => {
          const absPath = sharpImage.absolutePath
          const staticImageSlug = frontmatter.image.replace("../..", "")
          const strMatches = absPath.match(`${staticImageSlug}`)
          const res = strMatches === null ? false : true
          return res
        })
        const fluidImage = imageSharp[0].childImageSharp.fluid
        return (
          <animated.li style={{ ...props, listStyle: "none" }}>
            <ProjectSingle
              key={nodes[index]}
              name={nodes[index].frontmatter.title}
              image={fluidImage}
              link={nodes[index].frontmatter.slug}
            />
          </animated.li>
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
