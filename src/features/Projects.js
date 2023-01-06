import React from "react";
import projects from "../data/projects";
import "../statics/css/profile/projects.scss";

const Projects = () => {
  const renderedData = () =>
    projects.map((project) => {
      return (
        <span className="card" key={project.id}>
          <a href={project.link}>
            <div className="job-card">
              <i className={`zmdi ${project.icon} zmdi-hc-2x`}></i>
            </div>
            <b>{project.title}</b>
          </a>
          <div>
            <p>{project.description.substring(0, 20) + "…"}</p>
          </div>
        </span>
      );
    });

  return <section className="projects-wrapper">{renderedData()}</section>;
};
export default Projects;
