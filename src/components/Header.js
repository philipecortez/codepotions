import React from 'react'
import Link from 'gatsby-link'

const bgStyle = (post) => ({
  backgroundColor: post.frontmatter.backgroundColor,
  backgroundImage: `url(${post.frontmatter.img})`,
  backgroudRepeat: 'no-repeat',
})

const featuredHeader = (post) => (
  <Link className="header-title" to="/">
    <span className='featured'>Featured Article</span>
    <h2>{post.frontmatter.title}</h2>
  </Link>
)

const postHeader = (post) => (
  <div className="header-title">
    <h2>{post.frontmatter.title}</h2>
    <span className='featured'>{post.frontmatter.date}</span>
  </div>
)

const Header = ({post, isFeatured}) => (
  <header className='blog-header' style={bgStyle(post)}>
    {
      isFeatured ?
      featuredHeader(post) :
      postHeader(post)
    }
  </header>
)
// <p>{post.frontmatter.date}</p>
//color and bg image

export default Header