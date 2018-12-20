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
            style={{
              color: 'black',
              textDecoration: 'none',
              marginRight: '1em',
              marginLeft:'1em',
              fontSize: '18px'
            }}
          >
            Projects
          </Link>
          <Link
            to="/blog/"
            style={{
              color: 'black',
              textDecoration: 'none',
              marginRight: '1em',
              marginLeft:'1em',
              fontSize: '18px'
            }}
          >
            Blog
          </Link>
          <Link
            to="/about/"
            style={{
              color: 'black',
              textDecoration: 'none',
              marginRight: '1em',
              marginLeft:'1em',
              fontSize: '18px'
            }}
          >
            Info
          </Link>
          <div className="horizontal"></div>
    </div>
  </div>
)



export default Nav
