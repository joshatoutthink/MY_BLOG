import React from "react"
import styled from "styled-components"

import Row from "./Row"

const ContentRowWrap = styled(Row)`
  box-sizing: border-box;
  .wrapper {
    max-width: 600px;
  }
  h2 {
    margin: 18px 0;
  }
  h3 {
    margin: 16px 0;
  }
  p {
    margin: 30px 0;
    font-size: 18px;
    line-height: 34px;
  }
  @media (max-width: 762px) {
    p {
      font-size: 15px;
      margin: 21px 0;
      line-height: 28px;
    }
  }
`
const ContentRow = props => <ContentRowWrap>{props.children}</ContentRowWrap>

export default ContentRow
