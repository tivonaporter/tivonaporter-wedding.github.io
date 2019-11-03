/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./components.css"

const Layout = ({ children }) => {
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
    <div class="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
        <div class="container expanded">
          <main>{children}</main>
          <footer style={{
            textAlign: `center`,
            backgroundColor: `white`,
            paddingTop: `var(--spacingnormal)`,
            paddingBottom: `var(--spacingnormal)`,
          }}>
            © Katie Porter and Devon Tivona, {new Date().getFullYear()}
            <br/>
            Photography by <a href="https://allisonhammondcreative.com/" target="_blank">Allison Hammond Creative</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
