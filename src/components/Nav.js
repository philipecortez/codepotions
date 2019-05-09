import React from "react"
import Link from 'gatsby-link'

const toggleMobalBar = () => {
    let buttons = document.getElementsByClassName("hb-buttons")[0]

    console.log(buttons)
    if (buttons.classList.contains("toggle-content")) {
      buttons.toggleAttribute('hidden')
      setTimeout(() => {
       buttons.classList.toggle("toggle-content")
       buttons.classList.toggle("is-visible")
      }, 100)
    } else {
      buttons.classList.toggle("is-visible")
      buttons.classList.toggle("toggle-content")
      buttons.toggleAttribute('hidden')
    }
}

const Nav = () => (
  <nav className="blog-nav">
    <h1>Code Potions *</h1>
    <div className="hb-init">
      <a href="#" onClick={() => toggleMobalBar()} id="hb-menu">
         <i className="fas fa-bars"></i>
      </a>
    </div>
    <div className="hb-buttons toggle-content" hidden={true}>
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