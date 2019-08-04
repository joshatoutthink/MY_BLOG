import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { animated } from "react-spring"

function RecentPost({ className, title, excerpt, link }) {
  return (
    <div>
      <li className={className}>
        <h3>
          <Link to={`${link}`}>{title}</Link>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link to={`${link}`}>read more</Link>
      </li>
    </div>
  )
}
export default styled(RecentPost)`
  list-style: none;
  margin-bottom: 40px;
  h3 {
    text-transform: capitalize;
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: hsl(206, 84%, 60%);
    }
  }
  a {
    color: hsl(206, 84%, 60%);
  }
`
