import React from 'react'

const Post = ({
  img,
  title,
  excerpt
}) => (
  <div className="post">
    <img src={img} alt="" style={{width: "440px", height: "246px"}}/>
    <div className="post-resume">
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
  </div>
)

export default Post