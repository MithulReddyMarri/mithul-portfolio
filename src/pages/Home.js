import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-text">
          <h1>Marri Mithul Reddy</h1>
          <h3>B.Tech Artificial Intelligence</h3>

          <p>
            Artificial Intelligence student at Mahindra University with strong
            programming skills and passion for emerging technologies.
          </p>

          <div className="buttons">
            <a href="/resume.pdf" className="btn" download>
              Download Resume
            </a>

            <div className="socials">
              <a href="#" className="btn secondary">GitHub</a>
              <a href="#" className="btn secondary">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + "/myphoto.jpg"} alt="profile" />
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>

        <div className="edu-card">
          <h3>Mahindra University</h3>
          <p>B.Tech Artificial Intelligence</p>
        </div>

        <div className="edu-card">
          <h3>New Vision Junior College</h3>
          <p>Intermediate (2023)</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>C</span><span>C++</span><span>Python</span>
          <span>Java</span><span>JavaScript</span>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="edu-card">
          <h3>Zelda Reloaded</h3>
          <p>2D RPG Game Engine</p>
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: ajjumarri@gmail.com</p>
        <p>Phone: +91 7386705578</p>
      </section>

    </div>
  );
}

export default Home;