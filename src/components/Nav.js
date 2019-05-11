import React from "react"
import Link from 'gatsby-link'

const Nav = () => (
  <nav className="blog-nav">
    <Link to="/">
      <h1>Code Potions</h1>
    </Link>
    <input type="checkbox" class="toggler"/>
    <div className="hb-menu">
      <div></div>
    </div>
    <div className="hb-buttons">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/philipe-cortez/">
            Resume
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav