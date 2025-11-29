import React from "react";

const projects = [
  {
    title: "IoT-Based Medicine Reminder System",
    meta: "IoT • Embedded • ESP32",
    img: "medicine.png",
    points: [
      "Built a reminder system for elderly and Alzheimer’s patients.",
      "Integrated buzzer + LED alerts using ESP32.",
      "Real-time caregiver notifications via Blynk Cloud.",
    ],
    skills: ["ESP32", "IoT", "Blynk", "Arduino IDE"],
  },
  {
    title: "Weather-Based Disease Prediction",
    meta: "Machine Learning",
    img: "disease.png",
    points: [
      "ML model predicting symptoms using weather & demographic data.",
      "Pipeline with preprocessing, EDA and feature encoding.",
      "Compared XGBoost, Random Forest & Logistic Regression.",
    ],
    skills: ["Python", "Pandas", "scikit-learn", "XGBoost"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <div className="section-head">
        <h2>Projects</h2>
        <div className="section-divider" />
      </div>

      <div className="projects-grid">
        {projects.map(({ title, meta, img, points, skills }, i) => (
          <article className="card project-card" key={i}>
            
            {/* Project Image */}
            <div className="project-image thumb">
              <img src={img} alt={title} />
            </div>

            {/* Title & Meta */}
            <div className="project-header">
              <div className="project-title">{title}</div>
              <div className="project-meta">{meta}</div>
            </div>

            {/* Points */}
            <ul className="project-points">
              {points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>

            {/* Skills */}
            <div className="project-skills">
              {skills.map((s, idx) => (
                <span key={idx} className="skill-pill">
                  {s}
                </span>
              ))}
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}
