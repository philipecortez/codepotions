import React, { Component } from 'react'

import './application.css'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  render() {
    const { children, location, mainContentClass } = this.props

    return (
      <>
        <Nav />
        {
          location.pathname === "/" ?
          <Header /> : 
          ""
        }
        <main className={mainContentClass}>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout