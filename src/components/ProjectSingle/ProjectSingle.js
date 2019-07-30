import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import LinkButton from "../elements/LinkButton"
import { grey2, blue3, blue1, blue2 } from "../designSystem"
import { Link } from "gatsby"

//import Image from "./image"

function ProjectSingle({ image, name, link, className, singleColumn = false }) {
  return (
    <li className={className} singleColumn={singleColumn}>
      <div className="project__image">
        {/* <img src={image} alt="project" /> */}
        <Link to={link}>
          <Img fluid={image} objectFit="cover" />
        </Link>
      </div>
      <div className="project__name">
        <h3>{name}</h3>
      </div>
      <div className="project__description">
        <LinkButton link={link}>View Project</LinkButton>
      </div>
    </li>
  )
}

export default styled(ProjectSingle)`
  list-style: none;

  padding: 0;
  .project__name {
    margin-bottom: 10px;
  }
  .project__link:hover {
    transform: scale(1.03);
  }
  .project__link:active {
    transform: scale(0.98);
  }

  .project__link :active,
  .project__link:hover {
    background: ${blue2};
  }

  .project__image {
    margin-bottom: ${props => (props.singleColumn ? "40px" : "20px")};
    width: 100%;
    height: ${props => (props.singleColumn ? `500px` : `200px`)};
    grid-row: 1/3;
    padding: 0px;
    background: ${grey2};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.2), 0 15px 35px rgba(0, 0, 0, 0.3),
      0 5px 15px rgba(0, 0, 0, 0.2);
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 800px) {
      height: 350px;
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
