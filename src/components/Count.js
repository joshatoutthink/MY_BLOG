import React, { useState } from "react"
import { animated, useSpring, config } from "react-spring"
const Count = () => {
  const [onState, setOnState] = useState(true)
  const props = useSpring({
    to: { number: onState ? 0 : 1 },
    from: { number: onState ? 0 : 1 },
    config: config.molasses,
  })
  const toggle = () => setOnState(onState ? false : true)
  console.log("setOnState", setOnState)
  return (
    <animated.h1 onClick={() => toggle()} style={{ opacity: props.number }}>
      {props.number}
    </animated.h1>
  )
}

export default Count
