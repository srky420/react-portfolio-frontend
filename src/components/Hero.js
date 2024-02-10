import React from "react";


// Define component
export const Hero = () => {
  return (
    <section className="container hero-section">
        <div className="hero">
            <div className="hero-text">
                <p className="header">Hi I'm Shahrukh</p>
                <h1>A Frontend Developer</h1>
                <button className="btn hero-btn">Résumé</button>
                <button className="btn hero-btn-outline">Projects</button>
            </div>
            <div className="hero-img">
              <img src={"./img/profile.png"} alt="profile-img" />
              <div className="profile-overlay"></div>
            </div>
        </div>
    </section>
  )
}
