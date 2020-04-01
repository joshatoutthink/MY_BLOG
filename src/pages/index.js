import React from "react"
import styled from "styled-components"

import Row from "../components/layoutHelpers/Row"
import Layout from "../components/layout"
import HomeMasthead from "../components/HomeMasthead"
import ProjectSingleList from "../components/ProjectSingle/ProjectSingleList"
import RecentPostList from "../components/RecentPost/RecentPostList"
import LinkButton from "../components/elements/LinkButton"
import { grey1, grey2, blue3 } from "../components/designSystem"

const IndexPage = () => {
  return (
    <>
      <Layout transparent={true} pageTitle="Home">
        <HomeMasthead>
          <Intro>
            <div className="content">
              <h1>I am Josh Kennedy. </h1>
              <h2>I help create the web through design and development.</h2>
            </div>
          </Intro>
        </HomeMasthead>
        <Row bgC={"white"} color={grey1}>
          <div className="container">
            <h2 style={{ marginBottom: "40px" }}>Featured Projects</h2>
            <ProjectSingleList />
          </div>
        </Row>
        <RecentPostWrapper bgC={grey2} color="white">
          <div className="container">
            <h2>Recent Blog Posts</h2>
            <RecentPostList />
            <LinkButton link="/blog">View All Posts</LinkButton>
          </div>
        </RecentPostWrapper>
      </Layout>
    </>
  )
}

const Intro = styled.div`
  max-width: 600px;
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
      font-weight: 400;
      font-family: "open sans";
      color: ${blue3};
      font-size: 4rem;
    }
    text-align: right;
  }
`

const RecentPostWrapper = styled(Row)`
  h2 {
    margin-bottom: 40px;
  }
  ul {
    margin: 0 0 30px;
  }
`

export default IndexPage
