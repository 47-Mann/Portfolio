import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const SERVICE_ID =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
    const TEMPLATE_ID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
    const PUBLIC_KEY =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setStatus({ ok: true, message: "Message sent — thank you!" });
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        ok: false,
        message: "Failed to send. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact">
      <section id="contact">
        <h1>Contact Me</h1>

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
            {sending ? "Sending..." : "Send"}
          </button>

          {status && (
            <p className={status.ok ? "status success" : "status error"}>
              {status.message}
            </p>
          )}

          <p className="hint"></p>
        </form>
      </section>
    </div>
  );
};

export default Contact;
