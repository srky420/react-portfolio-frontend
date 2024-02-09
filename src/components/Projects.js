import React from "react";
import { work } from "../data/work-list";
import { Project } from "./Project";


// Define component
export const Projects = () => {
    return (
        <section className="container projects-section">
            <h2 className="heading" style={{ 'textAlign': 'center', 'fontSize': '4rem' }}>Projects</h2>
            <div className="projects">
                <Project data={work[0]} />
            </div>
        </section>
    )
}