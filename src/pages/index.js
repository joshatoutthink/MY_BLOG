import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "../components/layout.css"
import { useStaticQuery, graphql } from "gatsby"

import Row from "../components/layoutHelpers/Row"
import SEO from "../components/seo"
import MenuBar from "../components/MenuBar"
import HomeMasthead from "../components/HeaderImage"
import ProjectSingle from "../components/ProjectSingle/ProjectSingle"

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      nodes {
        frontmatter {
          slug
          title
          imageURL
        }
        excerpt
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
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

          {data.allMarkdownRemark.nodes.map(project => (
            <ProjectSingle
              name={project.frontmatter.title}
              description={project.excerpt}
              image={project.frontmatter.imageURL}
              link={project.frontmatter.slug}
            />
          ))}
        </div>
      </Row>
      <Row bg="#323639" color="white">
        <div className="container">
          <h2>Recent Blog Posts</h2>
          <Posts>
            <li className="post">
              <h3>Post Title</h3>
              <p>
                This will briefly explain the topic that I dive into in the blog
                post.
              </p>
              <Link to={"/hello-world"}>read more</Link>
            </li>
          </Posts>
        </div>
      </Row>
      <Row bg="rgb(40, 44, 47)" color="white">
        <div className="container">
          <h2>Recent Pen featured on Codepen</h2>
          <div className="featured__pen">
            <h3>pen Title</h3>
            <iframe>codepen</iframe>
            <p>talk about some new thing you were trying out or learning.</p>
          </div>
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
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
  a {
    color: hsl(206, 84%, 60%);
  }
`

export default IndexPage
