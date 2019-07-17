import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MenuBar from "./MenuBar"
import SEO from "./seo"
import { grey1 } from "./designSystem"
import "./layout.css"

const Layout = ({ children, transparent, showTitle, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title={pageTitle || ""} />
      <MenuBar
        transparent={transparent}
        showTitle={showTitle && data.site.siteMetadata.title}
      />
      <main>{children}</main>
      <Footer>© {new Date().getFullYear()} Josh Kennedy</Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
const Footer = styled.footer`
  background: ${grey1};
  color: #fff;
  text-align: center;
  padding: 20px;
`
export default Layout
