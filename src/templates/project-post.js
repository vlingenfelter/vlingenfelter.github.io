import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from '../components/seo'
import {withPrefix} from 'gatsby'
import {Location} from '@reach/router'
import Img from 'gatsby-image'


export default ({
  data,
  location
}) => {
  const post = data.markdownRemark;
  return (
     <Layout>
     <SEO title = {post.frontmatter.title}
          keywords = {post.frontmatter.tags}
    />
    <div style = {
      {
        textAlign: 'center'
      }
    } >

    <div style = {
      {
        maxWidth: '750px',
        display: 'inline-block',
        textAlign: 'left'
      }
    } >
    <div>
    <Img className="post-card" fluid={post.frontmatter.cover.childImageSharp.fluid} />
    <h1> {post.frontmatter.title } </h1>
    <p> {post.frontmatter.date}
      </p>
      <p>
    <b>Note </b>: I do not speak for the MBTA. All opinions shared are my own. </p>
    <p>
    { "Like this post?  "}
    <a href = {
      "https://twitter.com/intent/tweet?text=Check out this post by @vilingenfelter: " +
      post.frontmatter.title + "&url=" + location.href + "&hashtags=" + post.frontmatter.tags.map((tag) => (tag.replace(
        /\s+/g,
        '')))
    }> Tweet about it! </a></p>
    <hr/>

    <div dangerouslySetInnerHTML = {
      {
        __html: post.html
      }
    } /> </div >
    <hr />
    <Bio />

    <p> {
      post.frontmatter.tags.map((tag) => ( <
        span className = "tag"
        key = {
          tag
        } > {
          tag
        } < /span>
      ))
    } < /p> < /
    div > <
    /div> < /
    Layout >
  )
}

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        tags
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
    }
  }
`
