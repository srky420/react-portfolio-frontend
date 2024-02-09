import React from "react";


// Define component
export const Techstack = () => {
  return (
    <section className="container">
        <ul className="techstack">
            <li><button><i className="devicon-html5-plain colored"></i><div className="tooltip">HTML</div></button></li>
            <li><button><i className="devicon-css3-plain colored"></i><div className="tooltip">CSS</div></button></li>
            <li><button><i className="devicon-javascript-plain colored"></i><div className="tooltip">JavaScript</div></button></li>
            <li><button><i className="devicon-react-original colored"></i><div className="tooltip">ReactJS</div></button></li>
            <li><button><i className="devicon-tailwindcss-original colored"></i><div className="tooltip">TailwindCSS</div></button></li>
            <li><button><i className="devicon-bootstrap-plain colored"></i><div className="tooltip">Bootstrap</div></button></li>
            <li><button><i className="devicon-sass-original colored"></i><div className="tooltip">SASS</div></button></li>
        </ul>
    </section>
  )
}
