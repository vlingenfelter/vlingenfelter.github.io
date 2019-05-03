import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import styled from 'styled-components'
import asa from '../assets/sf-human-waste.pdf'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.theme.gridColumns}, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    position: static !important;
  }
`

export default ({ data }) => {
  return (
    <Layout>
    <SEO title="Projects" keywords={['gatsby', 'application', 'react', 'projects']}/>


      <div className="post-feed">

        {data.allMarkdownRemark.edges.map(({ node }) => (

          <div key={node.id}>
          <Link to={node.fields.slug}>
          <Img className="post-card" fluid={node.frontmatter.cover.childImageSharp.fluid} />

              <h2 >
                {node.frontmatter.title}
              </h2>


              <p> {node.frontmatter.blurb} </p>


              <p>{node.frontmatter.tags.map((tag) => (
                <span className ="tag" key={tag}> {tag} </span>
              ))}</p>
              </Link>
          </div>

        ))}


      </div>

    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
  filter: {fileAbsolutePath: {regex: "/(projects)/.*.md$/"}}) {
    totalCount
    edges {
      node {
        children {
          id
        }
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          blurb
          cover {
            childImageSharp {
              fluid(maxWidth: 760, quality: 90) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt(pruneLength: 500)
        html
      }
    }
  }

}
`
