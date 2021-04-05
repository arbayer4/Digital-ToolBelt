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
        <div className="right">
          <div className="sub-right">
            <div>Budget</div>
            <div
              className={project.bid - materialTotal > 0 ? "bold " : "bold red"}
            >
              {project.bid - materialTotal}
            </div>
          </div>
          <div className="sub-right">
            <div>Total Hours</div>
            <div className="bold">{hourTotal}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectCard;
