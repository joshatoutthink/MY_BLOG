import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//import Image from "./image"

function ProjectSingle({ image, name, description, link, className }) {
  return (
    <li className={className}>
      <div className="project__image">{/* <Image slug={} /> */}</div>
      <div className="project__name">
        <h3>{name}</h3>
      </div>
      <div className="project__desecription">
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <div className="project__link">
          <Link to={`/${link}`}>View Project</Link>
        </div>
      </div>
    </li>
  )
}

export default styled(ProjectSingle)`
  margin: 0;
  padding: 0;
  .project__link:hover {
    transform: scale(1.03);
  }
  .project__link:active {
    transform: scale(0.98);
  }
  display: grid;
  grid-template: auto 1fr / 1fr 1fr;
  height: 300px;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  .project__link :active,
  .project__link:hover {
    background: hsl(206, 84%, 48%);
  }
  @media (max-width: 763px) {
    grid-template: auto auto auto / 1fr;
    height: auto;
  }
  .project__image {
    width: 100%;
    height: 100%;
    grid-row: 1/3;
    padding: 20px;
    background: #323639;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.2), 0 15px 35px rgba(0, 0, 0, 0.3),
      0 5px 15px rgba(0, 0, 0, 0.2);
    img {
      object-fit: cover;
    }
  }
  .project__link {
    font-size: 14px;
    display: inline-block;
    text-transform: uppercase;
    height: 45px;
    min-width: 200px;
    background: hsl(206, 84%, 60%);
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
      color: hsl(206, 84%, 19%);
      width: 100%;
      height: 100%;
    }
  }
`
