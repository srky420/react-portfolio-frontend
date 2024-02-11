import React, { useState } from "react";


// Define component
export default function Navbar() {

    const [navToggle, setNavToggle] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <i className="fa-solid fa-laptop-code"></i> srky.dev
            </div>
            <ul className={navToggle ? "navlist navlist-open" : "navlist"}>
                <li><a href="#about" onClick={() => setNavToggle(false)}>About</a></li>
                <li><a href="#work" onClick={() => setNavToggle(false)}>Work</a></li>
                <li><a href="#contact" onClick={() => setNavToggle(false)}>Contact</a></li>
            </ul>
            <ul className="navlist socials">
                <li><a href="https://www.linkedin.com/in/shahrukh-khan-2b8968242/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://github.com/srky420" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100082964377668&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
            </ul>
            <button className={navToggle ? "burger burger-close" : "burger"} onClick={() => setNavToggle(prev => !prev)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
        </nav>
    )
}