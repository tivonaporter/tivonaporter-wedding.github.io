import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "./button"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--bgcolor)`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `var(--textcolor)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Button
          title="RSVP"
          target="_blank"
          url="https://airtable.com/shrKk5SMdXzWb04VK"
        />
      </h4>
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
