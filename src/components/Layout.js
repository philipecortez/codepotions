
import React, { Component } from 'react'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Nav />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout