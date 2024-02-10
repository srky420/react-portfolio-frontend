import React from "react";
import { work } from "../data/work-list";
import { Project } from "./Project";


// Define component
export const Projects = () => {
    return (
        <section className="container projects-section">
            <h2 className="projects-heading">Projects</h2>
            <div className="projects">
            {work.slice(0, 4).map((item, index) => (
                <Project data={item} key={"project" + index} />
            ))}
            </div>
        </section>
    )
}