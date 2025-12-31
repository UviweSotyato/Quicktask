// src/components/Contact.tsx
import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // hide success after 3s
  };

  return (
    <section className="contact">
      <h2 className="contact-title reveal">Get in Touch</h2>
      <p className="contact-subtitle reveal">
        Have a question or want to collaborate? Send me a message!
      </p>

      <form className="contact-form reveal" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows={5} placeholder="Your Message" required />
        <button type="submit" className="hero-btn primary">
          Send Message
        </button>
      </form>

      {submitted && (
        <div className="contact-success reveal">
          ✨ Your message has been sent!
        </div>
      )}
    </section>
  );
}
