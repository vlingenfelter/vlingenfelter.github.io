import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="blog-item">
            <Link to={node.fields.slug}>
              <h3>
                <span className="blog-title">{node.frontmatter.title}</span>
              </h3>
              <p>Time to read: {node.timeToRead} minutes</p>
              <p className="excerpt">{node.excerpt}</p>
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
    filter: {fileAbsolutePath: {regex: "/(blog)/.*.md$/"}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
