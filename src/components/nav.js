import { Link } from 'gatsby'
import React from 'react'

const Nav = () => (
  <div
    style={{
      background: 'honeydew',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
    <div className="horizontal"></div>
          <Link
            to="/projects/"
            className = "nav-link"
          >
            Projects
          </Link>
          <Link
            to="/blog/"
            className = "nav-link"
          >
            Blog
          </Link>
          <Link
            to="/about/"
            className = "nav-link"
          >
            Info
          </Link>

          <div className="horizontal"></div>
    </div>
  </div>
)



export default Nav
