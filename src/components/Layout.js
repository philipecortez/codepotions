
import React, { Component } from 'react'

import './application.css'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  render() {
    const { children, data } = this.props

    return (
      <>
        <Nav />
        <Header />
        <main className="blog-content">{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout