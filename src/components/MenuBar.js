import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Icon from "../components/elements/Icon"
import { grey1, grey2 } from "./designSystem"

function MenuBar({ className, showTitle }) {
  return (
    <div className={className}>
      <div className="wrapper">
        {showTitle ? (
          <Link className="logo" to="/">
            <h1>{showTitle}</h1>
          </Link>
        ) : null}
        <ul className="icons">
          <li>
            <a href="https://github.com/joshatoutthink">
              <IconWrapper>
                <Icon name="github" color="white" />
              </IconWrapper>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/JoshKen08672181">
              <IconWrapper>
                <Icon name="twitter" color="white" />
              </IconWrapper>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/joshonweb/">
              <IconWrapper>
                <Icon color="white" name="codepen" />
              </IconWrapper>
            </a>
          </li>
        </ul>
        <div className="menu-icon">
          <span className="top"></span>
          <span className="bottom"></span>
        </div>
      </div>
    </div>
  )
}
export default styled(MenuBar)`
  position: ${props => (props.transparent ? "absolute" : "relative")};
  background: ${props => (props.transparent ? "transparent" : grey2)};
  border-top: 5px solid ${grey1};
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  z-index: 10;
  .wrapper {
    padding: 0 40px;
    min-width: 100%;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    margin: 0 auto;
    .logo {
      justify-self: start;
      margin-right: auto;
      text-decoration: none;
      h1 {
        color: white;
        font-size: 24px;
        margin-bottom: 0;
        @media (max-width: 762px) {
          font-size: 18px;
        }
      }
    }
  }
  ul {
    margin: 0;
    margin-left: 20px;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .menu-icon {
    margin-left: 20px;
    width: 50px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    padding: 10px;
    span {
      height: 1px;
      background: #fff;
      width: 100%;
      &.top {
        width: 75%;
      }
    }
  }
  li {
    margin-bottom: 0;
    list-style: none;
  }
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 18px;
  height: auto;
  margin-left: 10px;
  svg {
    width: 100%;
  }
`
