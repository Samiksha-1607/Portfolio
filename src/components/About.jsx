import React from 'react';

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="section-head">
        <h2>About</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-grid">
        
        {/* Left Card */}
        <div className="card about-card">
          <h3 className="card-title">Quick facts</h3>
          <p className="bio">
            Third-year B.Tech student focused on Artificial Intelligence & Machine Learning. 
            Experience with computer vision, NLP, and building end-to-end ML systems.
          </p>

          <div className="about-contact">
            <div className="contact-heading">Contact</div>
            <div className="muted">202301070178@mitaoe.ac.in</div>
          </div>
        </div>

        {/* Right Card */}
        <div className="card about-card">
          <h3 className="card-title">About Samiksha</h3>
          <p className="bio">
            I enjoy turning data into meaningful products: from prototyping models 
            to shipping full-stack ML features. I care about clarity, reproducibility 
            and ethical AI.
          </p>

          <div className="skills-section">
            <h4 className="skills-title">Skills</h4>
            <div className="skills-list">
              <div className="skill-pill">Python</div>
              <div className="skill-pill">PyTorch</div>
              <div className="skill-pill">TensorFlow</div>
              <div className="skill-pill">Computer Vision</div>
              <div className="skill-pill">NLP</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
