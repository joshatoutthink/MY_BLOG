import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Row from "../components/layoutHelpers/Row"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeMasthead from "../components/HomeMasthead"
import ProjectSingleList from "../components/ProjectSingle/ProjectSingleList"
import FeaturedCodePen from "../components/FeaturedCodePen/FeaturedCodePen"
import RecentPostList from "../components/RecentPost/RecentPostList"
import LinkButton from "../components/elements/LinkButton"
import { grey1, grey2, blue3 } from "../components/designSystem"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout transparent={true}>
        <HomeMasthead>
          <div className="wrapper">
            <Intro>
              <div className="content">
                <h1>I am Josh Kennedy. </h1>
                <h2>I help create the web through design and developement.</h2>
              </div>
            </Intro>
          </div>
        </HomeMasthead>
        <Row bgC={grey1} color="white">
          <div className="container">
            <h2>Featured Projects</h2>
            <ProjectSingleList />
          </div>
        </Row>
        <RecentPostWrapper bgC={grey2} color="white">
          <div className="container">
            <h2>Recent Blog Posts</h2>
            <RecentPostList style={{}} />
            <LinkButton link="/blog">View All Posts</LinkButton>
          </div>
        </RecentPostWrapper>
        <Row bgC="rgb(40, 44, 47)" color="white">
          <div className="container">
            <h2>Recent Pen featured on Codepen</h2>
            <FeaturedCodePen />
          </div>
        </Row>
      </Layout>
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
      color: ${blue3};
    }
    text-align: right;
  }
`

const RecentPostWrapper = styled(Row)`
  ul {
    margin: 0 0 30px;
  }
`

export default IndexPage
