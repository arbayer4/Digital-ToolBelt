import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { project, materials, hours } = props;
  console.log(materials);
  console.log(hours);
  const materialTotal = materials.reduce((acc, material) => {
    acc += Number(material.price) * material.quantity;
    return acc;
  }, 0);
  const hourTotal = hours.reduce((acc, hour) => {
    return (acc += Number(hour.hours));
  }, 0);
  console.log(materialTotal);

  return (
    <>
      <Link to={`/projects/${project.id}`} className="project-container">
        <h3>{project.project_name}</h3>
        <h3>Budget: {project.bid - materialTotal}</h3>
        <h3>Hours: {hourTotal}</h3>
      </Link>
    </>
  );
}

export default ProjectCard;
