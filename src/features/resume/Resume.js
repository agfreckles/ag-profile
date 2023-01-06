import React from "react";
import "../../statics/css/resume/resume.scss";
import ag from "../../statics/images/AGBEKO PSPT.jpg";
import experience from "../../data/experiences-data";

const Resume = () => {
  const renderedExperiences = () => {
    return experience.map((experience) => {
      return (
        <section className="experience-box" key={experience.id}>
          <div>{experience.period}</div>
          <div>{experience.institution}</div>
          <div>{experience.portfolio}</div>
          {experience.experiences.map((x, i) => {
            return (
              <ul key={i}>
                <li>{x}</li>
              </ul>
            );
          })}
        </section>
      );
    });
  };
  return (
    <div className="cv-wrapper">
      <section className="profile-section">
        <img src={ag} alt="Ag" />
        <div className="category">
          <h4>Contact</h4>
          <span>
            <h5>Phone</h5>
            <p>+233 24 446 8253</p>
          </span>
          <span>
            <h5>Email</h5>
            <p>oluueli@gmail.com</p>
          </span>
          <span>
            <h5>Address</h5>
            <p>21 Bududa Street, Akropong</p>
          </span>
          <br></br>
          <h4>Professional Courses</h4>
          <span>
            <h5>Date</h5>
            <p>2022</p>
            <p>AWS Certified Solutions Architect-Associate</p>
            <p>
              Knowledge and skills in compute, networking, storage, and database
              AWS services as well as AWS deployment and management services
            </p>
            <p>
              Deploying, managing, and operating workloads on AWS as well as
              implementing security controls and compliance requirements
            </p>
            <p>
              Using the AWS Management Console and the AWS Command Line
              Interface (CLI).
            </p>
            <p>
              Understanding of the AWS Well-Architected Framework, AWS
              networking, security services, and the AWS global infrastructure
            </p>
            <p>
              Ability to identify which AWS services meet a given technical
              requirement and to define technical requirements for an AWS-based
              application
            </p>
          </span>
          <br></br>
          <h4>Education</h4>
          <span>
            <h5>Date</h5>
            <p>2022</p>
            <p>Certified Solutions Architect-Associate</p>
            <p>AWS</p>
          </span>
          <span>
            <h5>Date</h5>
            <p>2009</p>
            <p>BSc Mathematics</p>
            <p>KNUST</p>
          </span>
          <br></br>
          <h4>Expertise & Tools</h4>
          <ul>
            <li>AWS</li>
            <li>React</li>
            <li>Django</li>
            <li>Angular</li>
            <li>PSQL</li>
            <li>Python</li>
            <li>JS</li>
          </ul>
          <h4>Language</h4>
          <ul>
            <li>English</li>
            <li>Ewe</li>
            <li>Ga</li>
            <li>Twi</li>
          </ul>
        </div>
      </section>

      <section className="info-section">
        <h3>
          Frank Kweku <span>Agbeko</span>
        </h3>
        <h4>Fullstack Developer</h4>
        <p>
          A fully certified AWS Cloud Engineer. Highly analytical and
          process-oriented mathematician with in-depth knowledge of software
          development and programming; research methodologies; teaching of
          mathematics as a subject in Senior High Schools. A committed
          individual who does not rest until the job is done.
        </p>

        <h2>Experience</h2>
        <article className="experience">{renderedExperiences()}</article>
      </section>
    </div>
  );
};
export default Resume;
