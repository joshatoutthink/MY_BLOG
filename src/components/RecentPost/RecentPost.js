import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

function RecentPost({ className, title, excerpt, link }) {
  return (
    <li className={className}>
      <h3>
        <Link to={`${link}`}>{title}</Link>
      </h3>
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Link to={`${link}`}>read more</Link>
    </li>
  )
}
export default styled(RecentPost)`
  list-style: none;
  margin-bottom: 20px;
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
