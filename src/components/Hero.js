import React from "react";


// Define component
export const Hero = () => {
  return (
    <section className="container hero-section">
        <div className="hero">
            <div className="hero-text">
                <p className="header">Hi I'm Shahrukh</p>
                <h1>A Frontend Developer</h1>
                <a className="btn hero-btn" href={"./assets/resume.pdf"} target="_blank" download="Shahrukh-Resume" rel="noreferrer">Résumé</a>
                <a className="btn hero-btn-outline" href="#work">Projects</a>
            </div>
            <div className="hero-img">
              <img src={"./assets/img/profile.png"} alt="profile-img" />
              <div className="profile-overlay"></div>
            </div>
            <img src={"./assets/img/spiral-arrow.svg"} alt="arrow" className="arrow-decor" />
            <img src={"./assets/img/three-lines.svg"} alt="line" className="line-decor" />
        </div>
    </section>
  )
}
