import React, { useState } from "react";

import "./App.css";

//components
import Project from "./components/Project";

//data
import data from "./projects";

function App() {
  const [light, setLight] = useState(true);

  const toggleDarkMode = () => {
    if (light) {
      document.getElementById("dark-mode-toggle").src = "/assets/dark.png";
      document.body.classList.add("light-mode");
    } else {
      document.getElementById("dark-mode-toggle").src = "/assets/light.png";
      document.body.classList.remove("light-mode");
    }
    setLight(!light);
  };

  return (
    <div className="main-box" id="main-box">
      <h2 id="title">All My ReactJS Projects.</h2>
      <img
        id="dark-mode-toggle"
        src="/assets/light.png"
        alt="Hola"
        onClick={toggleDarkMode}
      />
      <div className="projects">
        {data.map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
