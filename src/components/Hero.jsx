import React from 'react';

export default function Hero() {
  return (
    <section className="hero container">
      
      <div className="avatar">
        <img 
          src="photo.png" 
          alt="Samiksha Hubale" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="hero-text">
        <h1>Samiksha Hubale</h1>
        <h2>Aspiring AIML Engineer</h2>
        <p className="tagline">
          I design elegant machine learning models and build AI systems that are practical, ethical, and production-ready. 
          Currently pursuing B.Tech — Third Year.
        </p>
      </div>

    </section>
  );
}

