import React from "react";


// Define component
export const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact">
                    <div className="contact-img">
                        <img src={"./img/contact.svg"} alt="about-img" />
                    </div>
                    <div className="contact-text">
                        <p className="header">Lets work together</p>
                        <h2 className="heading">Contact Me</h2>
                        <p className="para">I'm open to both on-site and remote jobs wether project based or contract based.</p>
                        <div className="location">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Quetta, Baluchistan, Pakistan</p>
                        </div>
                        <ul className="navlist socials">
                            <li><a href="mailto:srky420@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/shahrukh-khan-2b8968242/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/srky420" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100082964377668&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}