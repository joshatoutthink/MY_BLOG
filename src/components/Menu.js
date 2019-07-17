import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { blue2, blue3 } from "./designSystem"

const Menu = ({ className, isMobile }) => {
  return (
    <ul className={className}>
      <li>
        <Link to="/projects">My Work</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Me</Link>
      </li>
    </ul>
  )
}

export default styled(Menu)`
  padding: 10vh 0;
  display: flex;
  flex-direction: ${props => (props.isMobile ? "column" : "row")};
  li {
    list-style: none;
    margin-bottom: 5vh;
    a {
      color: ${blue3};
      text-decoration: none;
      &:hover {
        color: ${blue2};
        text-decoration: underline;
      }
    }
    margin-left: 20px;
  }
`
