import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "./button"

const Header = ({ siteTitle }) => (
  <header class="container expanded" style={{
      background: `var(--bgcolor)`,
    }}>
    <div class="row" style={{
      padding: `1rem 1rem`,
    }}>
      <div class="col-3 vert-align-center">
        <h4 style={{ margin: 0 }}>
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
        <Button
          title="RSVP"
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
