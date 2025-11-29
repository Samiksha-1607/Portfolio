import React from 'react';

export default function Header(){
  return (
    <header className="header">
      <div className="container row">
        <div className="brand">Samiksha Hubale</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
