import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleResumeRequest = () => {
    console.log('Resume requested');
    // Handle resume request here
  };

  return (
    <div className="window contact-container">
      <div className="window-title">Contact Me</div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        ></textarea>
        <button type="submit" className="button">Send Message</button>
      </form>
      {/* <div className="resume-request">
        <button onClick={handleResumeRequest} className="button">Request Resume</button>
      </div>
    */}
      </div>
  );
}

export default Contact;