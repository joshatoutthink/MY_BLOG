import React, { Component } from "react"
import { Spring, animated } from "react-spring/renderprops"
import { interpolate } from "flubber"

export default class TestSvg extends Component {
  state = {
    paths: [
      "M737,357c0,97.11-40.09,205.64-103,270-64.82,66.31-176.94,39-277,39-93.8,0-201.29,12.16-265-47C21.79,553.81,0,460.36,0,357c0-94.83,73.68-144.07,134-208C199.09,80,254.67,0,357,0,480,0,553,53,584,127,621.12,215.62,737,253.35,737,357Z",
      "M650.42,311c32.23,91.61,39,227-52,276-81.65,44-164.94,4-265,4-93.8,0-236.29,51.17-300-8-70.21-65.19-8-166.63-8-270,0-94.83-50.32-211.07,10-275,65.09-69,198.67-23,301-23,123,0,254-41,285,33C658.54,136.63,612.42,203,650.42,311Z",
      "M714,357A357,357,0,1,1,599.28,94.79,355.82,355.82,0,0,1,714,357Z",
    ],
    index: 0,
  }
  goNext = () =>
    this.setState(state => ({
      index: state.index + 1 >= state.paths.length ? 0 : state.index + 1,
    }))
  render() {
    const { paths, index } = this.state
    const interpolator = interpolate(
      paths[index],
      paths[index + 1] || paths[0],
      { maxSegmentLength: 0.1 }
    )
    return (
      <svg width="500" viewBox="0 0 737 671.57" onClick={() => this.goNext()}>
        <g fill="red">
          <Spring
            reset
            native
            from={{ t: 0 }}
            to={{ t: 1 }}
            onRest={this.goNext}
          >
            {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
          </Spring>
        </g>
      </svg>
    )
  }
}
