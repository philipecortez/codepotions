import React from 'react'

const Post = (teste) => (
  <div className="post">
    <img src={teste.img} alt=""/>
    <div className="post-resume">
      <h3>{teste.title}</h3>
      <p>{teste.excerpt}</p>
    </div>
  </div>
)

export default Post