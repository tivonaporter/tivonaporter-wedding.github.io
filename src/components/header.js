import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "./button"

const Header = ({ siteTitle }) => (
  <header class="container expanded" style={{
    background: `transparent`,
    zIndex: `1`,
    position: `absolute`,
    width: `100%`,
    maxWidth: `var(--wrapperwidth)`,
  }}>
    <div class="row" style={{
      padding: `1rem 2rem`,
    }}>
      <div class="col-3 vert-align-center">
        <h4 class="hide-sm" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `var(--textcolor)`,
              textDecoration: `none`,
            }}>{siteTitle}</Link>
        </h4>
      </div>
      <div class="col-3" style={{
        textAlign: `right`,
      }}>
        <a href="https://www.zola.com/registry/devonandkatie2020" target="_blank" class="hide-sm" style={{
          marginRight: `2rem`,
          fontSize: `.9rem`,
        }}>Registry</a>
        <Button
          title="RSVP Now"
          target="_blank"
          url="https://airtable.com/shrKk5SMdXzWb04VK"
        />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
