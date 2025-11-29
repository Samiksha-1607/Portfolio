import React from "react";

const faqs = [
  {
    q: "Are you available for internships?",
    a: "Yes! I'm actively looking for Summer 2025 internships in AI/ML. I enjoy short internships (4–12 weeks) where I can contribute to real ML pipelines and learn deployment practices.",
  },
  {
    q: "Do you work on freelance ML projects?",
    a: "Yes — I take small research or ML prototype tasks (data cleaning, model prototyping, evaluation). Reach out with project scope and timeline, and I can share an estimate.",
  },
  {
    q: "How can I contact you?",
    a: "Email me at 202301070178@mitaoe.ac.in — I usually reply within 48 hours. You can also reach me via LinkedIn (link in the header).",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section container">
      <div className="section-head">
        <h2>FAQ</h2>
        <div className="section-divider" />
      </div>

      <div className="faq-grid">
        {faqs.map((f, i) => (
          <details className="card faq-item" key={i}>
            <summary className="faq-question">
              <span className="faq-title">{f.q}</span>
              <svg className="faq-icon" width="18" height="18" aria-hidden>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </summary>

            <div className="faq-answer">
              <p>{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
