import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import ContentRow from "../components/layoutHelpers/ContentRow"
import TitleRow from "../components/layoutHelpers/TitleRow"
import Layout from "../components/layout"

export const data = graphql`
  query {
    file(relativePath: { eq: "outthink_josh-1.png" }) {
      childImageSharp {
        fixed(width: 250) {
          src
        }
      }
    }
  }
`

const About = ({ data, className }) => {
  return (
    <Layout className={className} showTitle={true} pageTitle="About">
      <TitleRow>
        <ProfileImg>
          <img src={data.file.childImageSharp.fixed.src} alt="Josh Kennedy" />
        </ProfileImg>
        <h1>Hi I am Josh Kennedy</h1>
      </TitleRow>
      <ContentRow>
        <h3>I am father, husband, and love working on the web. </h3>
        <p>
          I live with my wife Caroline, and our two kids Charlie, and Harvey, in
          Lynchburg, VA. I love hiking, building forts with my kids, and playing
          with the web.
        </p>
        <h4>Education and Background</h4>
        <p>
          My education background is in graphic design. I got my bachelors in
          graphic design, while I was finishing my degree I took an internship
          at a web agency, <a href="https://outthinkgroup.com">Out:think</a>,
          doing their design work. I eventually went on to work full time there,
          which is where I currently work.
        </p>
        <h4>How I came to love the web</h4>
        <p>
          I started out Mainly working on the desing of websites, but I quickily
          fell in love with working in html, and css. I eventually took on more
          a developer role. I do everything from creating the designs to
          implimenting them in wordpress.
        </p>
        <h4>My Tools</h4>
        <p>
          Professionaly I mainly work in wordpress, but pretty much everthing
          else I do is built with reactjs, gatsby, and nodejs. While I have a
          passion working on the web, I still have a love designing through svg
          illustrations, building svg animaitons.
        </p>
      </ContentRow>
    </Layout>
  )
}

const ProfileImg = styled.div`
  width: 250px;
  margin: 0 auto 20px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`

export default About
