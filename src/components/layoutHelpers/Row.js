import React from "react"
import styled from "styled-components"
function Row(props) {
  return (
    <section
      className={props.className}
      style={{
        background: `${props.bg || "none"}`,
        backgroundSized: `${props.bgSize}`,
        backgroundPosition: `${props.bgPos}`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div className="wrapper" style={{ color: `${props.color}` }}>
        {props.children}
      </div>
    </section>
  )
}
export default styled(Row)`
  position: relative;
  background-size: cover;
  width: 100%;
  padding: 40px 0;
  .wrapper {
    padding: 0 20px;
    max-width: 900px;
    margin: 0 auto;
  }
`
