import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Projects = () => (
  <Layout>
    <SEO title="Projects" keywords={['gatsby', 'application', 'react', 'projects']}/>
    <div className="flex-container">
    <div className="col-4 blurb">
    <h1>S.L.I.D.E.</h1>
    <p>
      S.L.I.D.E., or the Street Level Infrastructure Distribution Engine, is a
      project I completed while on my first co-op at the MBTA with the
       <a href="http://www.mbtabackontrack.com/performance/index.html#/home">
      Office of Performance Management and Innovation</a>. Slide is an eqiuity analysis
      tool designed to help policy makers decide which bus stops to prioritize for
      infrastructure upgrades.
    </p>
    <div className="tags">
      <span className="tag">Leaflet.js</span>
      <span className="tag">Turf.js</span>
      <span className="tag">jQuery</span>
      <span className="tag">R</span>
      <span className="tag">ArcGIS</span>
    </div>
  </div>
  <div className="col-4">
    <h1>Travel Time Viewer</h1>
    <p>
      This is a tool that allows planners and data analysts to look at the
      distribution of times it took trains to make a specific trip on a line of
      the MBTA system during a certain time period. The Travel Time Viewer is a
      project I completed while on my first co-op at the MBTA with the <a href="http://www.mbtabackontrack.com/performance/index.html#/home">
      Office of Performance Management and Innovation</a>.
    </p>
    <div className="tags">
      <span className="tag">D3</span>
      <span className="tag">jQuery</span>
    </div>
  </div>
  <div className="col-4">
    <h1>Independent GIS Project</h1>
    <p>
    As part of my GIS coursework, I analyzed whether public restrooms installed
    in the city of San Francisco actually had an effect on occurances of human
    feces on the streets. 
    </p>
    <div className="tags">
      <span className="tag">ArcGIS</span>
      <span className="tag">311 data</span>
      <span className="tag">R</span>
    </div>
  </div>
  </div>
  </Layout>
)

export default Projects
