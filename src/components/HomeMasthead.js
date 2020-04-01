import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { grey2 } from "./designSystem"

export default function HomeMasthead(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "main-geo-lines.png" }) {
        publicURL
      }
    }
  `)
  return (
    <HeaderRow>
      {" "}
      <svg width="0" height="0" viewBox="0 0 100 100">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            result="goo"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -13"
          />
          <feComposite in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      <div className="hero-art">
        <div className="goo-center">
          <div className="goo-wrapper">
            <div className="goo-container">
              <div className="big-blob" />
              <div className="small-blob blob-2" />
              <div className="small-blob blob-3" />
              <div className="small-blob blob-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper"> {props.children}</div>
    </HeaderRow>
  )
}
const HeaderRow = styled.div`
  display:grid;
  grid-template:1fr/1fr;
  > div {
    grid-row:1/-1;
    grid-column:1/-1;
  }
  height:70vh;
  width:100vw;
  .wrapper{
    z-index:1;
  }
  .hero-art{
    z-index:0;  
    width:100%;
    max-height:70vh;
    display:grid;
    grid-template:1fr 1fr 1fr 1fr 1fr 1fr/ 1fr 1fr 1fr 1fr 1fr 1fr;
    .goo-center{
      grid-row:2/4;
      grid-column:3/5;
      .goo-wrapper{
        filter:url(#goo);
        width:100%;
        padding-top:100%;
        height:0;
        position:relative;
        .goo-container{
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          display:flex;
          justify-content: center;
          align-items: center;
          .big-blob{
            width:50%;
            height:50%;
            background: #000;
            border-radius:50%;
          }
        }
      }
      
    }
  }

  /* position: relative;
  width: 100%;
  padding: 20px 0 40px 0;

  background: ${grey2};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  z-index: 2;
  .wrapper {
    padding: 0 20px;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end; 
  }*/
`
