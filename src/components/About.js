import React from "react";


// Define component
export const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about">
                    <div className="about-img">
                        <img src={"./assets/img/about.svg"} alt="about-img" />
                    </div>
                    <div className="about-text">
                        <p className="header">Learn more</p>
                        <h2 className="heading">About Me</h2>
                        <p className="para">
                            I'm a software engineering graduate with a passion for programming and web development.
                            I have a strong background in frontend development technologies such as HTML, CSS, JavaScript, jQuery, React, Redux, TailwindCSS and Bootstrap.
                            I'm currently living in Quetta, Pakistan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
