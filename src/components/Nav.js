import React from "react"

const Nav = () => (
  <nav className="blog-nav">
    <h1>Code Potions *</h1>
    <div className="hb-init">
     <a id="hb-menu">
      <i className="fas fa-bars"></i>
     </a>
    </div>
    <div className="hb-buttons toggle-content">
      <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="https://www.linkedin.com/in/philipe-cortez/">Resume</a></li>
        <li><a href="#" >Videos</a></li>
      </ul>
    </div>
  </nav>
)

export default Nav