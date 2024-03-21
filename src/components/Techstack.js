import React from "react";
import useIntersectElements from "../hooks/useIntersectElement";


// Define component
export const Techstack = () => {

  const [el, isIntersecting] = useIntersectElements({
    root: null,
    rootMargin: '50px',
    threshold: 1.0
  });

  return (
    <section className="container" ref={el}>
        <ul className={isIntersecting ? "techstack from-bottom animate" : "techstack from-bottom"}>
            <li><button><i className="devicon-html5-plain colored"></i><div className="tooltip">HTML</div></button></li>
            <li><button><i className="devicon-css3-plain colored"></i><div className="tooltip">CSS</div></button></li>
            <li><button><i className="devicon-javascript-plain colored"></i><div className="tooltip">JavaScript</div></button></li>
            <li><button><i className="devicon-jquery-plain colored"></i><div className="tooltip">jQuery</div></button></li>
            <li><button><i className="devicon-react-original colored"></i><div className="tooltip">ReactJS</div></button></li>
            <li><button><i className="devicon-tailwindcss-original colored"></i><div className="tooltip">TailwindCSS</div></button></li>
            <li><button><i className="devicon-bootstrap-plain colored"></i><div className="tooltip">Bootstrap</div></button></li>
            <li><button><i className="devicon-sass-original colored"></i><div className="tooltip">SASS</div></button></li>
        </ul>
    </section>
  )
}
