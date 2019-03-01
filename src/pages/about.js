import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import SEO from '../components/seo'
import pdf from '../assets/VioletLingenfelterResume.pdf'

const About = () => (
  <Layout>
    <SEO title="Info" />
    <div className="flex-container">
    <div className="col-7">
    <h1> About </h1>

    <p> I'm Violet Lingenfelter. I'm originally from Santa Cruz, California,
    but right now I'm going to Northeastern University in Boston, Massachusetts.
     I study Environmental Science, with a concentration in Urban Studies and a
     minor in Computer Science.
     </p>
     <p> Previously, I've worked at several data visualization and spatial
     analysis postions. Right now, I'm working on my capstone with the MBTA.
     I'm developing a new way to visualize crowding on buses and explore how
     crowding impacts the system.
     </p>
     <p> In my free time, I like to knit, travel, and blog about public
     transportation. You can check out my <OutboundLink href="https://www.etsy.com/shop/LingenfelterStudio">Etsy</OutboundLink> or
     my <Link to="/blog/">blog</Link>.
     </p>

     </div>
     <div className="col-5">
     <h1> Contact </h1>
     <p>
     Send me an email at <a href="mailto:vlingenfelter5@gmail.com">vlingenfelter5@gmail.com</a>
     <br />
     Check me out on <OutboundLink href="https://www.linkedin.com/in/violet-lingenfelter/">LinkedIn</OutboundLink>
     <br />
     See some of my code on <OutboundLink href="https://github.com/vlingenfelter">GitHub</OutboundLink>
     <br />
     Or see some of my photos on <OutboundLink href="https://www.instagram.com/vlingenfelter/">Instagram</OutboundLink>
     </p>
     <hr />
     <p>
     If you want, you can also take a look at my <a href={pdf}> resume </a>
     </p>
     </div>
     </div>
  </Layout>
)

export default About
