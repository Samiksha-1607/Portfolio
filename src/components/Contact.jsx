
import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message sent',
      description: 'Thanks — I will reply soon.',
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section container">
      <div className="section-head">
        <h2>Contact</h2>
        <div className="section-divider"></div>
      </div>

      <div className="contact-grid">

        {/* Left Card -------------------------------------------------- */}
        <div className="card contact-card">
          <h3 className="contact-title">Get in touch</h3>
          <p className="muted">202301070178@mitaoe.ac.in</p>
          <p className="muted contact-note">Open to internships and collaborations.</p>
        </div>

        {/* Right Card (Form) ------------------------------------------ */}
        <div className="card contact-form-card">
          <form className="contact-form" onSubmit={submit}>
            <input
              className="input"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className="input"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              className="input"
              placeholder="Message"
              rows="6"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button className="send-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}
