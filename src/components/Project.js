import React from "react";


// Define component
export const Project = ({ data }) => {

    const handleScroll = (e) => {
        const div = e.currentTarget;
        if (div.scrollHeight - div.scrollTop - div.clientHeight <= 0) {
            div.scrollTo(0, 0);
        }
        else {
            div.scrollBy(0, 250);
        }
    }

    return (
        <div className="project">
            <div className="project-img" onClick={handleScroll} onMouseOut={(e) => e.currentTarget.scrollTo(0, 0)}>
                <img src={data.img} alt="project-img" />
            </div>
            <div className="project-text">
                <p className="header">{ data.name }</p>
                <h2 className="heading">{ data.title }</h2>
                <p className="para">{ data.desc }</p>
                <ul className="navlist socials">
                    <li><a href={data.link} target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a></li>
                    <li><a href={data.gitLink}><i className="fa-brands fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    )
}