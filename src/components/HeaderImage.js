import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

export default function HomeMasthead(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "main-geo-lines.png" }) {
        publicURL
      }
    }
  `)
  return (
    <HeaderRow style={{ backgroundImage: `url('${data.file.publicURL}')` }}>
      {props.children}
    </HeaderRow>
  )
}
const HeaderRow = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 0;
  background: #323639;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  z-index: 2;
  .wrapper {
    padding: 0 20px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
  }
`
