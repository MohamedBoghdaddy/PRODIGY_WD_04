import React from "react";
import "../Styles/Contact.css"; // Directly import the CSS file

const ContactSection = () => {
  return (
    <div className="contactContainer" id="contact">
      <h1>Contact me</h1>
      <form className="contactForm">
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactSection;
