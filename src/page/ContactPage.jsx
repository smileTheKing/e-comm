import React from 'react'

const ContactPage = () => {
  return (
  <div className="contact-section">
  <h1 className="contact-title">Contact Us</h1>
  <form className="contact-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Your Name" />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Your Email" />
    <label for="message">Message:</label>
    <textarea id="message" name="message" placeholder="Your Message"></textarea>
    <button type="submit" className="submit-button">Send Message</button>
  </form>
</div>
  )
}

export default ContactPage;