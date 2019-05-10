import React from 'react'
import Link from 'gatsby-link'

const Post = ({
  img,
  title,
  excerpt,
  path,
  imgBgColor,
}) => (
  <Link to={path} className="post">
    <div>
      <img src={img} alt="" style={{backgroundColor: imgBgColor}} />
      <div className="post-resume">
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </div>
  </Link>
)

export default Post