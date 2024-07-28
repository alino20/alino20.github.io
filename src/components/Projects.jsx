import React from "react";

const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <div className="project">
      <h3>Project One</h3>
      <p>
        Description of project one. This project was built using React and
        Node.js.
      </p>
      <a
        href="https://github.com/your-username/project-one"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
    </div>
    <div className="project">
      <h3>Project Two</h3>
      <p>
        Description of project two. This project was built using Angular and
        Django.
      </p>
      <a
        href="https://github.com/your-username/project-two"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
    </div>
    <div className="project">
      <h3>Project Three</h3>
      <p>
        Description of project three. This project was built using HTML, CSS,
        and JavaScript.
      </p>
      <a
        href="https://github.com/your-username/project-three"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
    </div>
  </section>
);

export default Projects;
