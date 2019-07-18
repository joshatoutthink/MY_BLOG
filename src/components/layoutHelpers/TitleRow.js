import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Row from "./Row"
import { grey5 } from "../designSystem"

const TitleRow = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "main-geo-lines.png" }) {
        publicURL
      }
    }
  `)
  return (
    <Row
      className={className}
      bg={`url(${data.file.publicURL})`}
      bgC={grey5}
      bgSize={"cover"}
      bgPos={"60% 25%"}
    >
      {children}
    </Row>
  )
}

export default styled(TitleRow)`
  text-align: center;
  .wrapper {
    max-width: 550px;
  }
  .date {
    font-size: 70%;
  }
  h1 {
    margin-bottom: 0;
  }
`
