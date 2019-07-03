import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Row from "../components/layoutHelpers/Row"
import "../components/layout.css"
import SEO from "../components/seo"
import MenuBar from "../components/MenuBar"
import HomeMasthead from "../components/HeaderImage"
import ProjectSingle from "../components/ProjectSingle/ProjectSingle"
import FeaturedCodePen from "../components/FeaturedCodePen/FeaturedCodePen"
import RecentPost from "../components/RecentPost/RecentPost"

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          image
          type
        }
        excerpt
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Darkbar />
      <HomeMasthead>
        <MenuBar />
        <div className="wrapper">
          <Intro>
            <div className="content">
              <h1>I am Josh Kennedy. </h1>
              <h2>I help create the web through design and developement.</h2>
            </div>
          </Intro>
        </div>
      </HomeMasthead>
      <Row bg={"#282C2F"} color="white">
        <div className="container">
          <h2>Featured Projects</h2>
          <ul>
            {data.allMarkdownRemark.nodes.map(project => {
              if (project.frontmatter.type === "project") {
                return (
                  <ProjectSingle
                    name={project.frontmatter.title}
                    description={project.excerpt}
                    image={project.frontmatter.image}
                    link={project.frontmatter.slug}
                  />
                )
              }
            })}
          </ul>
        </div>
      </Row>
      <Row bg="#323639" color="white">
        <div className="container">
          <h2>Recent Blog Posts</h2>
          <Posts>
            {data.allMarkdownRemark.nodes.map(project => {
              if (project.frontmatter.type === "post") {
                return (
                  <RecentPost
                    title={project.frontmatter.title}
                    excerpt={project.excerpt}
                    link={project.frontmatter.slug}
                  />
                )
              }
            })}
          </Posts>
        </div>
      </Row>
      <Row bg="rgb(40, 44, 47)" color="white">
        <div className="container">
          <h2>Recent Pen featured on Codepen</h2>
          <FeaturedCodePen />
        </div>
      </Row>
    </>
  )
}

const Intro = styled.div`
  max-width: 400px;
  min-height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    h2 {
      font-family: "open sans";
      line-height: 1.4;
      font-weight: 100;
    }
    color: white;
    h1 {
      font-weight: 100;
      font-family: "open sans";

      color: #3a9fee;
    }
    text-align: right;
  }
`
const Darkbar = styled.div`
  width: 100%;
  height: 10px;
  background: #282c2f;
`
const Posts = styled.ul`
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

export default IndexPage
