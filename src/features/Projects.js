import React from "react";
import "../statics/css/profile/projects.scss";

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <span className="card">
        <a href="https://github.com/agbekofrank/zenva">
          <div className="job-card">
            <i className="zmdi zmdi-apps zmdi-hc-2x"></i>
          </div>
          <b>Zenva Love</b>
        </a>
        <div>
          <p>A dating app</p>
        </div>
      </span>
      <span className="card">
        <div class="job-card">
          <i class="zmdi zmdi-github-box zmdi-hc-2x"></i>
        </div>
        <b>
          <a href="https://github.com/agbekofrank/responsive">
            Responsive Website
          </a>
        </b>
        <div>
          <p>A web page responsive to all screen types</p>
        </div>
      </span>
      <span className="card">
        <div class="job-card">
          <i class="zmdi zmdi-github-box zmdi-hc-2x"></i>
        </div>
        <b>
          <a href="https://github.com/agbekofrank/responsive">
            Responsive Website
          </a>
        </b>
        <div>
          <p>A web page responsive to all screen types</p>
        </div>
      </span>
      <span className="card">
        <div class="job-card">
          <i class="zmdi zmdi-github-box zmdi-hc-2x"></i>
        </div>
        <b>
          <a href="https://github.com/agbekofrank/responsive">
            Responsive Website
          </a>
        </b>
        <div>
          <p>A web page responsive to all screen types</p>
        </div>
      </span>
      {/* <span className="card">jobs</span>
      <span className="card">jobs</span> */}
    </section>
  );
};
export default Projects;
