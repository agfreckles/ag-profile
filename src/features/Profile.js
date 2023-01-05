import React from "react";
import ag from "../statics/images/ag.jpg";
import "../statics/css/profile/profile-grid.scss";
import "../statics/css/profile/profile-aethetics.scss";
import Projects from "./Projects";

const Profile = () => {
  return (
    <main className="wrapper">
      <nav className="main-nav">
        <ul>
          <li>
            <span>
              <i className="zmdi zmdi-home"></i>
            </span>
          </li>
          <li>
            <span>Resume</span>
          </li>
          <li>
            <span>
              <i className="zmdi zmdi-phone"></i>
            </span>
          </li>
          <li>
            <span>Works</span>
          </li>
        </ul>
      </nav>
      <section className="image-frame">
        <img src={ag} alt="picture of frank" />
        <span className="media">
          <ul>
            <li>
              <i className="zmdi zmdi-facebook-box"></i>
            </li>
            <li>
              <i className="zmdi zmdi-linkedin-box"></i>
            </li>
            <li>
              <i className="zmdi zmdi-github-box"></i>
            </li>
            <li>
              <i className="zmdi zmdi-whatsapp"></i>
            </li>
          </ul>
        </span>
      </section>
      <header className="main-head">
        <h1 className="h2-bold">FRANK KWEKU AGBEKO</h1>
      </header>
      <article className="content">
        <h3>Python, React, Mathematics, AWS </h3>
        <p>
          I'm a mathematician with love for software engineering and currently a
          certified solutions architect associate at AWS®.
        </p>
        <div className="buttons-parent">
          <a
            href="https://youtu.be/5Zr0JDk1nJ4"
            target="iframe_a"
            className="buttons"
          >
            <i className="zmdi zmdi-play-circle zmdi-hc-lg"></i>
            My Video
          </a>

          <a href="#works" className="buttons">
            Works
          </a>
        </div>
      </article>
      <section className="projects-cover">
        <Projects />
      </section>
    </main>
  );
};
export default Profile;
