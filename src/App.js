import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

//components
import Project from "./components/Project";

//data
import data from "./projects";

function App() {
  const [dark, setDark] = useState(true);

  const toggleDarkMode = () => {
    let mainBox = document.getElementById("main-box");
    let button = document.getElementById("dark-mode-toggle");

    //For Dark Mode
    if (dark) {
      mainBox.style.background = "rgb(6, 30, 39)";
      button.src = "./assets/light.png";
      setDark(false);
    }

    //For Light Mode
    if (!dark) {
      mainBox.style.background = "rgb(236, 230, 230)";
      button.src = "./assets/dark.png";
      setDark(true);
    }
  };

  return (
    <div className="main-box" id="main-box">
      <h2 id="title">All My ReactJS Projects.</h2>
      <img
        id="dark-mode-toggle"
        src="/assets/dark.png"
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
