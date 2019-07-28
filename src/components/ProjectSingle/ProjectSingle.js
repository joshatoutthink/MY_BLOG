import React from "react"
import styled from "styled-components"

import LinkButton from "../elements/LinkButton"
import { grey2, blue3, blue1, blue2 } from "../designSystem"

//import Image from "./image"

function ProjectSingle({ image, name, description, link, className }) {
  return (
    <li className={className}>
      <div className="project__image">
        <img src={image} alt="project" />
        {/* <Image fluid={image} /> */}
      </div>
      <div className="project__name">
        <h3>{name}</h3>
      </div>
      <div className="project__desecription">
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <LinkButton link={link}>View Project</LinkButton>
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
    background: ${blue2};
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
    background: ${grey2};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.2), 0 15px 35px rgba(0, 0, 0, 0.3),
      0 5px 15px rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .project__link {
    font-size: 14px;
    display: inline-block;
    text-transform: uppercase;
    height: 45px;
    min-width: 200px;
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
  }
`
