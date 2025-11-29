import React from "react";

const certs = [
  { 
    title: "UTKARSH 2K25", 
    desc: "Assessment-based certification recognizing academic and technical performance." 
  },
  { 
    title: "NEXUS 2025", 
    desc: "Certification awarded for participation and excellence in technical evaluations." 
  },
  { 
    title: "M-EXHIBIT 2K25", 
    desc: "Recognition for project showcase and technical presentation." 
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section container">
      <div className="section-head">
        <h2>Assessments / Certifications</h2>
        <div className="section-divider"></div>
      </div>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <div className="card cert-card" key={i}>
            <div className="cert-title">{c.title}</div>
            <p className="cert-desc muted">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
