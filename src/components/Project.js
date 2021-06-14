import React from "react";

//CSS
import "./Project.css";

function Project({ project }) {
  const handleRedirect = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div className="project-box pointer" onClick={handleRedirect}>
      <h2 className="pointer">{project.name}</h2>
      <p className="pointer">{project.description}</p>
    </div>
  );
}

export default Project;
