import React, { Component } from 'react'
import Layout from '../components/Layout'

class Contact extends Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return(
      <Layout location={location} mainContentClass={"form-container"} title={siteTitle}>
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <h1>Contact Me </h1>

          <p>
            Have a sugestion or something to say? I'd love to hear from you.
            Fell free to send me a message.
          </p>

          <label for="name-input">
            Name:
            <input className="form-input" type="text" name="name-input" id="name-input"/>
          </label>

          <label className="hidden-field">
            Email:
            <input className="form-input" type="email" name="bot-field" id="bot-field"/>
          </label>

          <label for="email-input">
            Email:
            <input className="form-input" type="email" name="email-input" id="email-input"/>
          </label>

           <label for="message-input">
            Message:
            <textarea wrap="soft" className="form-text-area" name="message-input" id="message-input" rows="4" maxlength="300" />
          </label>
          <input className="form-input" type="submit" value="Send" />
        </form>
      </Layout>
    )
  }
}
export default Contact

export const formQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`