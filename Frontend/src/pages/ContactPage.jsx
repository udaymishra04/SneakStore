import React, { useState } from 'react';
import '../styles/ContactPage.css';

function ContactPage (){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    //  setIsValid(validateEmail(e.target.value));
    //  console.log(isValid);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-form-header">
          <h1>Get in Touch</h1>
          <p>Have questions about our sneakers? We'd love to hear from you!</p>
        </div>

        <div className="contact-form-content">
          <div className="contact-input-group">
            <label>Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="contact-input-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => setIsValid(validateEmail(formData.email))}
              placeholder="your@email.com"
            />
            {!isValid && <p style={{color: 'red'}}>Invalid email address</p>}
          </div>

          <div className="contact-input-group">
            <label>Subject</label>
            <select name="subject" value={formData.subject} onChange={handleChange}>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Question">Product Question</option>
              <option value="Order Support">Order Support</option>
              <option value="Returns">Returns & Exchanges</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="contact-input-group">
            <label>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              rows="5"
            />
          </div>

          <button 
            className={`contact-submit-button ${isSubmitting ? 'contact-loading' : ''}`}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {showSuccess && (
            <div className="contact-success-message">
              <div className="contact-success-icon">✓</div>
              <p>Thank you! We'll get back to you within 24 hours.</p>
            </div>
          )}
        </div>

        <div className="contact-contact-info">
          <div className="contact-info-item">
            <span className="contact-icon">📧</span>
            <span>udaymishraa4@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">📱</span>
            <span>+91 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;