import React from "react"
import { animated, useSpring, config } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const props = useSpring({
    to: {
      opacity: 1,
      translateX: 0,
    },
    from: { opacity: 0, translateX: 100 },
    config: config.default,
  })
  const { opacity2, translateX2 } = useSpring({
    to: {
      opacity2: 1,
      translateX2: 0,
    },
    from: { opacity2: 0, translateX2: 100 },
    config: config.default,
    delay: 150,
  })
  return (
    <Layout>
      <SEO title="404: Not found" />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "50vh",
          flexDirection: "column",
        }}
      >
        <animated.h1
          style={{
            background: "#efefef",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: `0 0 ${props.opacity * 20}px rgba(0,0,0,.2)`,
            opacity: props.opacity,
            transform: props.translateX.interpolate(
              translateX => `translateY(${translateX}px)`
            ),
          }}
        >
          404
        </animated.h1>
        <animated.p
          style={{
            opacity: opacity2,
            transform: translateX2.interpolate(
              translateX2 => `translateY(${translateX2}px)`
            ),
          }}
        >
          You just hit a route that doesn&#39;t exist... the sadness.
        </animated.p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
