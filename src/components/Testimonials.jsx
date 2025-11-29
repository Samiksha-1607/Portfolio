import React from "react";

const testimonials = [
  {
    text:
      "Samiksha demonstrated strong technical curiosity during her AI/ML internships. She quickly grasped data preprocessing and model evaluation concepts and delivered tasks ahead of schedule.",
    by: "Mentor, SmartBridge AI & ML Internship",
  },
  {
    text:
      "Samiksha represented our team effectively at NEXUS 2025 and M-EXHIBIT 2K25. Her presentation skills and technical communication stand out.",
    by: "Event Coordinator, MIT AOE",
  },
  {
    text:
      "During the Edunet Foundation AI & Cloud internship, she quickly adapted to IBM Cloud tools and consistently produced clean, well-documented work.",
    by: "Program Instructor, Edunet Foundation",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section container">
      <div className="section-head">
        <h2>Testimonials</h2>
        <div className="section-divider"></div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="card testimonial-card" key={i}>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">— {t.by}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
