import React from "react"
import styled from "styled-components"
function Row(props) {
  return (
    <section
      className={props.className}
      style={{
        backgroundImage: `${props.bg || "none"}`,
        backgroundColor: `${props.bgC || "unset"}`,
        backgroundSize: `${props.bgSize || ""} `,
        backgroundPosition: `${props.bgPos || "unset"}`,
      }}
    >
      <div className="wrapper" style={{ color: `${props.color}` }}>
        {props.children}
      </div>
    </section>
  )
}
export default styled(Row)`
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  width: 100%;
  padding: 60px 0;
  .wrapper {
    padding: 0 20px;
    max-width: 800px;
    margin: 0 auto;
  }
`
