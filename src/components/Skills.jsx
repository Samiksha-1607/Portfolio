import React from "react";

const skills = [
  { name: "Python", level: 90, desc: "Scripting, data pipelines & prototyping" },
  { name: "PyTorch", level: 80, desc: "Model building & training loops" },
  { name: "TensorFlow", level: 70, desc: "Model deployment & TF ecosystem" },
  { name: "Computer Vision", level: 80, desc: "Image preprocessing, augmentation, CNNs" },
  { name: "NLP", level: 75, desc: "Transformers, tokenization, fine-tuning" },
  { name: "React", level: 70, desc: "Frontend components & dashboards" },
];

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-head">
        <h2>Skills</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-grid">
        {skills.map((s) => (
          <div className="card skill-card" key={s.name}>
            
            {/* Title + Description */}
            <div className="skill-row">
              <div>
                <div className="skill-name">{s.name}</div>
                <div className="skill-desc muted">{s.desc}</div>
              </div>

              <div className="skill-right">
                <div className="skill-percent">{s.level}%</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${s.level}%` }}></div>
            </div>

            {/* Tags */}
            <div className="skill-chips">
              <span className="skill-pill">Projects</span>
              <span className="skill-pill">Coursework</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
