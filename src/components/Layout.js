import React, { Component } from 'react'

import './application.css'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  render() {
    const { children, location, post, isFeatured, mainContentClass } = this.props
    const noHeaderLocations = ["/contact", "/contact/", "/404", "/404/", "/404.html"]
    return (
      <>
        <Nav />
        {
          noHeaderLocations.includes(location.pathname) ?
          "" :
          <Header post={post} isFeatured={isFeatured}/>
        }
        <main className={mainContentClass}>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout