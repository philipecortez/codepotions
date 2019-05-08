import React from "react"
import Link from 'gatsby-link'

const Nav = () => (
  <nav className="blog-nav">
    <h1>Code Potions *</h1>
    <div className="hb-init">
     <a href="#" id="hb-menu">
        <i className="fas fa-bars"></i>
     </a>
    </div>
    <div className="hb-buttons toggle-content">
      <ul>
        <li>
          <Link to="#">
            Contact
          </Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/philipe-cortez/">
            Resume
          </a>
        </li>
        <li>
          <Link to="#">
            Videos
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav