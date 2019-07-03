import React from "react"
import styled from "styled-components"

function MenuBar(props) {
  return (
    <div className={props.className}>
      <div className="wrappr">
        <ul className="icons">
          <li className="github"></li>
          <li className="twitter"></li>
          <li className="codepen"></li>
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
  .wrappr {
    padding: 0 40px;
    min-width: 100%;
    justify-content: flex-end;
    display: flex;
    margin: 0 auto;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      list-style: none;
    }
  }
  .menu-icon {
    width: 35px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    span {
      height: 1px;
      background: #fff;
      width: 100%;
      &.top {
        width: 75%;
      }
    }
  }
`
