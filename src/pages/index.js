import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"

import Layout from "../components/Layout"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout data={data} posts={posts} location={this.props.location} title={siteTitle}>
        {
          posts.map(({ node }) => {
            return (
              <Post 
                img={node.frontmatter.img}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
                key={node.fields.slug}
              />
            )
          })
        }
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            img
          }
        }
      }
    }
  }
`
