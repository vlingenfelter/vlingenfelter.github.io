import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1
      style={{
        fontFamily:"Poly",
        fontWeight: "400",
        lineHeight: "1.5"}}>
    I'm a <span style={{fontWeight:"600", borderBottom:"2px solid lightSalmon"}}>
    GIS developer</span>.
    <br />
    <br />
    That means I make maps and tools that process spatial data, but really...
    <br />
    <br />
    I create new ways for people to use big data to
    improve how we approach solving problems.
    <br />
    <br />
    </h1>
    <p>
    <Link to="/projects/" rel="next" style={{fontSize:"1.75em"}}>
      Check out what I've been up to
    </Link>
    </p>


  </Layout>
)

export default IndexPage
