import React from "react";

export default function Education() {
  return (
    <section id="education" className="section container">
      <div className="section-head">
        <h2>Education</h2>
        <div className="section-divider"></div>
      </div>

      <div className="education-grid">

        {/* Main Degree Card */}
        <div className="card degree-card">

          <div className="degree-header">
            <div>
              <div className="degree-title">
                B.Tech — Artificial Intelligence & Machine Learning
              </div>
              <div className="muted college-name">MIT ACADEMY OF ENGINEERING</div>
            </div>

            <div className="degree-info">
              <div className="muted">2022 — 2026 (TY)</div>
              <div className="cgpa">CGPA: <span>8.3</span></div>
            </div>
          </div>

          <div className="degree-badges">
            <div className="edu-badge">Expected Graduation: 2027</div>
            <div className="edu-badge">Major: AIML</div>
            <div className="edu-badge">Minor: Data Science</div>
          </div>

          <p className="degree-desc">
            Relevant coursework: Machine Learning, Deep Learning, Computer Vision, NLP,
            Data Structures, Algorithms, Database Systems.
          </p>

          <div className="edu-highlights">
            <div className="highlights-title">Academic Highlights</div>

            <ul className="highlights-list">

              <li>
                Completed internships in <strong>AI, Cloud Computing, and ML</strong>:
                <ul className="sub-list">
                  <li><strong>Edunet Foundation</strong> — AI & Cloud (IBM SkillsBuild + IBM Cloud).</li>
                  <li><strong>SmartBridge</strong> — AI & ML Intern (Experiential Program).</li>
                  <li><strong>Eisystems</strong> — Built “Survival Analysis of Titanic Passengers”.</li>
                </ul>
              </li>

              <li>
                Developed academic ML pipelines including data cleaning, preprocessing,
                model building, tuning, and evaluation.
              </li>

              <li>
                Completed major projects:
                <strong> Cobb Angle Detection</strong> (Medical CV),
                <strong> Smart Irrigation System</strong> (IoT + ML),
                <strong> Legal Research Engine</strong> (NLP).
              </li>

              <li>
                Strong foundation in ML, DL, CV, NLP, and Data Structures.
              </li>

            </ul>

          </div>
        </div>

        {/* Secondary Education */}
        <div className="small-cards">
          <div className="card small-card">
            <div className="school-title">Higher Secondary (Class XII)</div>
            <div className="muted school-name">Vidya Valley North Point — PCM</div>
            <div className="muted school-score">Year: 2021 — Score: 88%</div>
          </div>
        </div>

      </div>
    </section>
  );
}
