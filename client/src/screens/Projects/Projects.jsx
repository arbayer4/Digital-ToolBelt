import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

function Projects(props) {
  const { projects, materials, hours } = props;

  const projectsJSX = projects.map((project, index) => (
    <ProjectCard
      project={project}
      materials={materials.filter(
        (material) => material.project_id === project.id
      )}
      hours={hours.filter((hour) => hour.project_id === project.id)}
      key={index}
    />
  ));

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      {projectsJSX}
      <Link to="/add-project">
        <div className="add-project-button">+</div>
      </Link>
    </div>
  );
}

export default Projects;
