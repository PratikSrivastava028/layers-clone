import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>If you have any questions, feedback, or just want to say hello — we’re all ears!</p>
        <ul>
          <li><strong>Email:</strong> support@layerswatch.com</li>
          <li><strong>Phone:</strong> +91 9876543210</li>
          <li><strong>Address:</strong> 123, Chai Street, Mumbai, India</li>
          <li><strong>Instagram:</strong> @layerswatch</li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Send a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
