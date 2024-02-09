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
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul className="navlist socials">
                <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
            </ul>
            <button className={navToggle ? "burger burger-close" : "burger"} onClick={() => setNavToggle(prev => !prev)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
        </nav>
    )
}