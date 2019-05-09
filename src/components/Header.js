import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header className='blog-header'>
    <Link to="/">
      <span className='featured'>Featured Article</span>
      <h2>Elevate Your Team With an Inspiring Customer Service Philosophy</h2>
    </Link>
  </header>
)

export default Header