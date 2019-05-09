import React, { Component } from 'react'
import Layout from '../components/Layout'

class Contact extends Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return(
      <Layout location={location} mainContentClass={"form-container"} title={siteTitle}>
        <form>
          <h1>Contact Me </h1>

          <p>
            Have a sugestion or something to say? I'd love to hear from you.
            Fell free to send me a message.
          </p>

          <label for="name-input">
            Name:
            <input class="form-input" type="text" name="name-input" id="name-input"/>
          </label>

          <label for="email-input">
            email:
            <input class="form-input" type="text" name="email-input" id="email-input"/>
          </label>

           <label for="message-input">
            Message:
            <textarea wrap="soft" class="form-text-area" name="message-input" id="message-input" rows="4" maxlength="300">
            </textarea>
          </label>
          <input class="form-input" type="submit" value="Send" />
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