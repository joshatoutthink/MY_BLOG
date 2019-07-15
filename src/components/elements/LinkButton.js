import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { blue2, blue3, blue1 } from "../designSystem"

const LinkButton = props => {
  return (
    <div className={props.className}>
      <Link to={props.link}>{props.children}</Link>
    </div>
  )
}

export default styled(LinkButton)`
  font-size: 12px;
  display: inline-block;
  text-transform: uppercase;
  height: 35px;
  min-width: 150px;
  background: ${blue3};
  transition: all 0.28s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: visible;
  text-align: center;
  position: relative;
  a {
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    top: 0;
    left: 0;
    text-decoration: none;
    color: ${blue1};
    width: 100%;
    height: 100%;
  }
  &:hover,
  &:active {
    background: ${blue2};
  }
  &:hover a {
    color: ${blue1};
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.03);
  }
  &:hover {
    transform: scale(0.98);
  }
`
