import React from 'react'
import Link from 'gatsby-link'

const bgStyle = (post, isFeatured) => {
  const imgPath =
    isFeatured ?
    post.frontmatter.img :
    `../${post.frontmatter.img}`

  return {
    backgroundColor: post.frontmatter.backgroundColor,
    backgroundImage: `url(${imgPath})`,
    backgroudRepeat: 'no-repeat',
  }
}

const featuredHeader = (post) => (
  <Link className="header-title" to={post.fields.slug}>
    <span className='featured'>Featured Article</span>
    <h2>{post.frontmatter.title}</h2>
  </Link>
)

const postHeader = (post) => (
  <div className="header-title">
    <h2 className="post-title">{post.frontmatter.title}</h2>
    <span className='featured'>{post.frontmatter.date}</span>
  </div>
)

const Header = ({post, isFeatured}) => (
  <header className='blog-header' style={bgStyle(post, isFeatured)}>
    {
      isFeatured ?
      featuredHeader(post) :
      postHeader(post)
    }
  </header>
)

export default Header