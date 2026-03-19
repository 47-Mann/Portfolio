import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        ok: false,
        message:
          "Contact form is not configured yet. Please email me directly.",
      });
      setSending(false);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setStatus({ ok: true, message: "Message sent successfully. Thank you!" });
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        ok: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-label">Get In Touch</p>
          <h1>Let’s Connect</h1>
          <p className="contact-description">
            I’m open to full-stack development opportunities, internships, and
            conversations around web development, real-time systems, and
            practical software projects.
          </p>

          <div className="contact-links">
            <a href="mailto:mannsahil857@gmail.com">
              <FaEnvelope /> mannsahil857@gmail.com
            </a>
            <a
              href="https://github.com/47-Mann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-mann-799922252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <label className="field">
            <span>Full Name</span>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your full name"
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="reply_to"
              required
              placeholder="you@example.com"
            />
          </label>

          <label className="field message">
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Write your message..."
            />
          </label>

          <button type="submit" className="send-btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className={status.ok ? "status success" : "status error"}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
