import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { grey2 } from "./designSystem"

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
  padding: 20px 0 40px 0;

  background: ${grey2};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  z-index: 2;
  .wrapper {
    padding: 0 20px;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
  }
`
