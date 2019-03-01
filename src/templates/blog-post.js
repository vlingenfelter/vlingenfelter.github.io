import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from '../components/seo'
import { withPrefix } from 'gatsby'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
    <SEO title={post.frontmatter.title} keywords= {post.frontmatter.tags} />
    <div style = {{
      textAlign: 'center'
    }}>
      <div style = {{
        maxWidth: '750px',
        display: 'inline-block',
        textAlign: 'left'
      }}>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <p>
        <b>Note</b>: I do not speak for the MBTA. All opinions shared are my own.
        </p>
        <hr />
        
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <hr />
      <Bio />

      <p>{post.frontmatter.tags.map((tag) => (
        <span className ="tag" key={tag}> {tag} </span>
      ))}</p>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        tags
      }
    }
  }
`
