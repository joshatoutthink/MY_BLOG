import React from "react"
/* import { Spring, animated, interpolate } from "react-spring/renderprops "*/

import TestSvg from "./TestSvg"

const CircleMove = () => {
  const props = [
    "M714,357A357,357,0,1,1,599.28,94.79,355.82,355.82,0,0,1,714,357Z",
    "M737,357c0,97.11-40.09,205.64-103,270-64.82,66.31-176.94,39-277,39-93.8,0-201.29,12.16-265-47C21.79,553.81,0,460.36,0,357c0-94.83,73.68-144.07,134-208C199.09,80,254.67,0,357,0,480,0,553,53,584,127,621.12,215.62,737,253.35,737,357Z",
  ]
  console.log(props)
  /* const interpolator = interpolate(props[0], props[1], {
    maxSegmentLength: 0.1,
  }) */
  return (
    <>
      <TestSvg />
      {/* <svg viewBox="0 0 737 671.57" fill="red">
        <Spring native to={props[0]} from={props[1]}>
          {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
        </Spring>
      </svg> */}
      <h1>hello</h1>
    </>
  )
}

export default CircleMove
