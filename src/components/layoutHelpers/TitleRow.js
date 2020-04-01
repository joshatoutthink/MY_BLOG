import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Row from "./Row"
import { grey5, grey1 } from "../designSystem"

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
    max-width: 600px;
  }
  .date {
    font-size: 70%;
  }
  h1 {
    color: ${grey1};
    margin-bottom: 0;
    text-shadow: 0px 1px 34px rgb(25, 25, 25, 0.5);
  }
`
