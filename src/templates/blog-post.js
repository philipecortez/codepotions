import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="post-content">
          <h1>{post.frontmatter.title}</h1>

          <p>
            {post.frontmatter.date}
          </p>

          <hr/>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

        </div>


      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
